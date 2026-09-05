const fs = require('fs');
const path = require('path');
const HTMLtoJSX = require('html-to-jsx');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const legacyDir = path.join(__dirname, '_legacy_html');
const appDir = path.join(__dirname, 'src', 'app');


fs.readdirSync(legacyDir).forEach(file => {
  if (file.endsWith('.html')) {
    const htmlContent = fs.readFileSync(path.join(legacyDir, file), 'utf-8');
    
    // Parse the HTML using jsdom
    const dom = new JSDOM(htmlContent);
    const body = dom.window.document.body;
    
    // Remove scripts
    const scripts = body.querySelectorAll('script');
    scripts.forEach(s => s.remove());
    
    let innerHtml = body.innerHTML;
    
    let jsx = body.innerHTML
      .replace(/class=/g, 'className=')
      .replace(/for=/g, 'htmlFor=')
      .replace(/<!--/g, '{/*')
      .replace(/-->/g, '*/}')
      .replace(/<img([^>]*[^\/])>/g, '<img$1 />')
      .replace(/<br([^>]*[^\/])?>/g, '<br$1 />')
      .replace(/<input([^>]*[^\/])>/g, '<input$1 />')
      .replace(/<hr([^>]*[^\/])?>/g, '<hr$1 />')
      .replace(/<meta([^>]*[^\/])>/g, '<meta$1 />')
      .replace(/\son[a-z]+="[^"]*"/gi, '')
      .replace(/\srequired="[^"]*"/gi, ' required')
      .replace(/\schecked="[^"]*"/gi, ' defaultChecked')
      .replace(/\sselected="[^"]*"/gi, ' defaultValue')
      .replace(/\sdisabled="[^"]*"/gi, ' disabled')
      .replace(/\srows="([0-9]+)"/gi, ' rows={$1}')
      .replace(/\scols="([0-9]+)"/gi, ' cols={$1}')
      .replace(/\stabindex="([^"]*)"/gi, ' tabIndex={$1}')
      .replace(/style="([^"]*)"/g, (match, styleString) => {
        const jsxStyle = {};
        styleString.split(';').forEach(s => {
          const [key, val] = s.split(':');
          if (key && val) {
            const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            jsxStyle[camelKey] = val.trim();
          }
        });
        return `style={${JSON.stringify(jsxStyle)}}`;
      })
      .replace(/<svg[^>]*>.*?<\/svg>/gs, (match) => {
          return match.replace(/stroke-width/g, 'strokeWidth')
                      .replace(/stroke-linecap/g, 'strokeLinecap')
                      .replace(/stroke-linejoin/g, 'strokeLinejoin')
                      .replace(/fill-rule/g, 'fillRule')
                      .replace(/clip-rule/g, 'clipRule');
      });
    
    const pageName = file === 'index.html' ? 'page' : file.replace('.html', '');
    const componentName = pageName === 'page' ? 'Home' : pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-./g, x => x[1].toUpperCase());
    
    const pageContent = `
import React from 'react';
import Link from 'next/link';

export default function ${componentName}() {
  return (
    <>
      ${jsx}
    </>
  );
}
`;
    // Replace href="foo.html" with href="/foo"
    const finalContent = pageContent.replace(/href="([^"]+)\.html"/g, 'href="/$1"').replace(/href="\/index"/g, 'href="/"');

    let outDir = appDir;
    if (pageName !== 'page') {
      outDir = path.join(appDir, pageName);
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
      }
    }
    
    fs.writeFileSync(path.join(outDir, 'page.tsx'), finalContent);
    console.log(`Converted ${file} to ${outDir}/page.tsx`);
  }
});
