"use client";

import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine,
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

export function CwcBasinChart() {
  const data = [
    { name: 'Dibrugarh', level: 104.5, danger: 105.7 },
    { name: 'Neamatighat', level: 86.2, danger: 85.0 },
    { name: 'Tezpur', level: 65.8, danger: 65.2 },
    { name: 'Guwahati', level: 49.3, danger: 49.6 },
    { name: 'Goalpara', level: 35.8, danger: 36.2 },
    { name: 'Dhubri', level: 29.1, danger: 28.6 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
        <XAxis dataKey="name" tick={{fill: '#64748b', fontSize: 10}} />
        <YAxis tick={{fill: '#64748b', fontSize: 10}} />
        <Tooltip contentStyle={{backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', fontSize: '12px'}} />
        <Legend wrapperStyle={{fontSize: '11px'}} />
        <Line type="monotone" dataKey="level" name="Current Level (m)" stroke="#3b82f6" strokeWidth={3} dot={{r: 4, fill: '#3b82f6'}} activeDot={{r: 6}} />
        <Line type="monotone" dataKey="danger" name="Danger Mark (m)" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function GovTrendChart() {
  const data = [
    { month: 'Jan', incidents: 45, resolved: 40 },
    { month: 'Feb', incidents: 52, resolved: 48 },
    { month: 'Mar', incidents: 61, resolved: 55 },
    { month: 'Apr', incidents: 85, resolved: 70 },
    { month: 'May', incidents: 110, resolved: 90 },
    { month: 'Jun', incidents: 150, resolved: 120 },
    { month: 'Jul', incidents: 210, resolved: 180 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="colorIncidents" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
        <XAxis dataKey="month" tick={{fill: '#64748b', fontSize: 10}} />
        <YAxis tick={{fill: '#64748b', fontSize: 10}} />
        <Tooltip contentStyle={{backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', fontSize: '12px'}} />
        <Legend wrapperStyle={{fontSize: '11px'}} />
        <Area type="monotone" dataKey="incidents" name="Total Incidents" stroke="#ef4444" fillOpacity={1} fill="url(#colorIncidents)" />
        <Area type="monotone" dataKey="resolved" name="Resolved" stroke="#10b981" fillOpacity={1} fill="url(#colorResolved)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function GovResourceChart() {
  const data = [
    { name: 'SDRF Boats', allocated: 120, active: 105 },
    { name: 'NDRF Teams', allocated: 45, active: 45 },
    { name: 'Food Camps', allocated: 80, active: 72 },
    { name: 'Med Kits (k)', allocated: 150, active: 85 },
    { name: 'Helicopters', allocated: 8, active: 5 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
        <XAxis dataKey="name" tick={{fill: '#64748b', fontSize: 10}} />
        <YAxis tick={{fill: '#64748b', fontSize: 10}} />
        <Tooltip contentStyle={{backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', fontSize: '12px'}} cursor={{fill: '#1e293b', opacity: 0.4}} />
        <Legend wrapperStyle={{fontSize: '11px'}} />
        <Bar dataKey="allocated" name="Allocated" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="active" name="Active/Deployed" fill="#f59e0b" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function IncidentsChart() {
  const data = [
    { time: '00:00', new: 12, critical: 2 },
    { time: '04:00', new: 8, critical: 1 },
    { time: '08:00', new: 45, critical: 8 },
    { time: '12:00', new: 80, critical: 15 },
    { time: '16:00', new: 110, critical: 22 },
    { time: '20:00', new: 65, critical: 12 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
        <XAxis dataKey="time" tick={{fill: '#64748b', fontSize: 10}} />
        <YAxis tick={{fill: '#64748b', fontSize: 10}} />
        <Tooltip contentStyle={{backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', fontSize: '12px'}} />
        <Legend wrapperStyle={{fontSize: '11px'}} />
        <Line type="stepAfter" dataKey="new" name="New Reports" stroke="#8b5cf6" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="critical" name="Critical" stroke="#ef4444" strokeWidth={2} dot={{r: 4}} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function DistrictChart() {
  const data = [
    { name: 'Kamrup', population: 45000 },
    { name: 'Barpeta', population: 82000 },
    { name: 'Dhubri', population: 115000 },
    { name: 'Nalbari', population: 28000 },
    { name: 'Darrang', population: 34000 },
    { name: 'Morigaon', population: 52000 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ top: 10, right: 10, left: 20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} horizontal={true} vertical={false} />
        <XAxis type="number" tick={{fill: '#64748b', fontSize: 10}} />
        <YAxis dataKey="name" type="category" tick={{fill: '#64748b', fontSize: 10}} width={60} />
        <Tooltip contentStyle={{backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', fontSize: '12px'}} cursor={{fill: '#1e293b', opacity: 0.4}} />
        <Bar dataKey="population" name="Affected Population" fill="#ef4444" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function AdminPlatformChart() {
  const data = [
    { time: '08:00', requests: 4000, latency: 120 },
    { time: '10:00', requests: 8500, latency: 180 },
    { time: '12:00', requests: 12000, latency: 350 },
    { time: '14:00', requests: 15500, latency: 480 },
    { time: '16:00', requests: 13000, latency: 310 },
    { time: '18:00', requests: 9000, latency: 160 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="colorReq" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
        <XAxis dataKey="time" tick={{fill: '#64748b', fontSize: 10}} />
        <YAxis yAxisId="left" tick={{fill: '#64748b', fontSize: 10}} />
        <YAxis yAxisId="right" orientation="right" tick={{fill: '#64748b', fontSize: 10}} />
        <Tooltip contentStyle={{backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', fontSize: '12px'}} />
        <Legend wrapperStyle={{fontSize: '11px'}} />
        <Area yAxisId="left" type="monotone" dataKey="requests" name="API Requests/hr" stroke="#3b82f6" fillOpacity={1} fill="url(#colorReq)" />
        <Line yAxisId="right" type="monotone" dataKey="latency" name="Latency (ms)" stroke="#f59e0b" strokeWidth={2} dot={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function AdminUserChart() {
  const data = [
    { name: 'Citizens', value: 850000 },
    { name: 'Responders', value: 12500 },
    { name: 'Gov Officials', value: 3400 },
    { name: 'Platform Admins', value: 45 },
  ];
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={{backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', fontSize: '12px'}} />
        <Legend wrapperStyle={{fontSize: '11px'}} />
      </PieChart>
    </ResponsiveContainer>
  );
}
