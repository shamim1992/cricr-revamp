// pages/dashboard/admin/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '@/components/layouts/AdminLayout';
import { 
  MdPerson, 
  MdCalendarToday, 
  MdAttachMoney, 
  MdTrendingUp,
  MdLocalHospital,
  MdAccessTime
} from 'react-icons/md';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 4000, appointments: 240 },
  { month: 'Feb', revenue: 3000, appointments: 198 },
  { month: 'Mar', revenue: 2000, appointments: 210 },
  { month: 'Apr', revenue: 2780, appointments: 190 },
  { month: 'May', revenue: 1890, appointments: 220 },
  { month: 'Jun', revenue: 2390, appointments: 250 },
];

const appointmentsByDepartment = [
  { department: 'Cardiology', count: 145 },
  { department: 'Neurology', count: 98 },
  { department: 'Pediatrics', count: 125 },
  { department: 'Orthopedics', count: 87 },
  { department: 'Dermatology', count: 76 },
];

const recentAppointments = [
  { id: 1, patient: 'John Doe', doctor: 'Dr. Smith', date: '2024-01-25', time: '10:00 AM', status: 'confirmed' },
  { id: 2, patient: 'Jane Smith', doctor: 'Dr. Johnson', date: '2024-01-25', time: '11:30 AM', status: 'pending' },
  { id: 3, patient: 'Mike Wilson', doctor: 'Dr. Brown', date: '2024-01-25', time: '2:00 PM', status: 'completed' },
  { id: 4, patient: 'Sarah Davis', doctor: 'Dr. Wilson', date: '2024-01-25', time: '3:30 PM', status: 'cancelled' },
];

export default function AdminDashboard() {
  const router = useRouter();

  const stats = [
    {
      id: 1,
      name: 'Total Patients',
      value: '1,284',
      change: '+12.5%',
      changeType: 'positive',
      icon: MdPerson,
      color: 'bg-blue-500',
    },
    {
      id: 2,
      name: 'Appointments',
      value: '148',
      change: '+8.2%',
      changeType: 'positive',
      icon: MdCalendarToday,
      color: 'bg-green-500',
    },
    {
      id: 3,
      name: 'Revenue',
      value: '$48,574',
      change: '+5.7%',
      changeType: 'positive',
      icon: MdAttachMoney,
      color: 'bg-purple-500',
    },
    {
      id: 4,
      name: 'Growth Rate',
      value: '24.57%',
      change: '-2.3%',
      changeType: 'negative',
      icon: MdTrendingUp,
      color: 'bg-orange-500',
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <div className="flex space-x-2">
            <select className="select select-bordered w-full max-w-xs">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last year</option>
            </select>
            <button className="btn btn-primary">
              Download Report
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-base-content/70">{stat.name}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className={`text-sm ${
                    stat.changeType === 'positive' ? 'text-success' : 'text-error'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-base-content/70"> vs last month</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Revenue & Appointments Overview</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="revenue"
                      stroke="#8884d8"
                      name="Revenue ($)"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="appointments"
                      stroke="#82ca9d"
                      name="Appointments"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Department Stats */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Appointments by Department</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={appointmentsByDepartment}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="department" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" name="Appointments" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Appointments */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center mb-4">
              <h2 className="card-title">Recent Appointments</h2>
              <button className="btn btn-ghost btn-sm">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Patient</th>
                    <th>Doctor</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentAppointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td>{appointment.patient}</td>
                      <td>{appointment.doctor}</td>
                      <td>{appointment.date}</td>
                      <td>{appointment.time}</td>
                      <td>
                        <div className={`badge ${
                          appointment.status === 'confirmed' ? 'badge-success' :
                          appointment.status === 'pending' ? 'badge-warning' :
                          appointment.status === 'completed' ? 'badge-info' :
                          'badge-error'
                        }`}>
                          {appointment.status}
                        </div>
                      </td>
                      <td>
                        <div className="flex space-x-2">
                          <button className="btn btn-ghost btn-xs">View</button>
                          <button className="btn btn-ghost btn-xs">Edit</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}