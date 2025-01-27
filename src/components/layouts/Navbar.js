// components/layouts/Navbar.js
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { logoutUser } from '@/redux/actions/authActions';
import { 
  MdMenu,
  MdNotifications, 
  MdPerson,
  MdSettings,
  MdExitToApp,
  MdSearch,
  MdHelp,
  MdDarkMode,
  MdLightMode,
  MdMail,
  MdApps,
  MdEventNote,
  MdPersonAdd,
  MdDescription,
  MdDashboard,
 
} from 'react-icons/md';

export default function Navbar({ sidebarOpen, setSidebarOpen, user, isDark, toggleTheme }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
      router.push('/auth/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const notifications = [
    { 
      id: 1, 
      title: 'New appointment request', 
      description: 'Dr. Smith has a new appointment request',
      time: '5 minutes ago', 
      type: 'appointment',
      icon: MdEventNote,
    },
    { 
      id: 2, 
      title: 'System update completed', 
      description: 'The system has been updated successfully',
      time: '1 hour ago', 
      type: 'system',
      icon: MdDashboard,
    },
    { 
      id: 3, 
      title: 'New message from Dr. Smith', 
      description: 'Regarding patient consultation...',
      time: '2 hours ago', 
      type: 'message',
      icon: MdMail,
    },
  ];

  const quickActions = [
    { name: 'New Appointment', icon: MdEventNote, href: '/appointments/new', color: 'text-blue-500' },
    { name: 'Add Patient', icon: MdPersonAdd, href: '/patients/new', color: 'text-green-500' },
    { name: 'Send Message', icon: MdMail, href: '/messages/new', color: 'text-purple-500' },
    { name: 'Generate Report', icon: MdDescription, href: '/reports/new', color: 'text-orange-500' },
  ];

  return (
    <div className="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content shadow-sm">
      <nav className="navbar max-w-full">
        <div className="flex flex-1 md:gap-1 lg:gap-2">
          {/* Mobile menu button */}
          <label 
            htmlFor="main-drawer" 
            aria-label="open sidebar" 
            className="btn btn-square btn-ghost drawer-button lg:hidden"
          >
            <MdMenu className="h-6 w-6" />
          </label>

          {/* Search */}
          <div className="flex-1 lg:flex-none">
            {/* <div className="form-control">
              <div className="input-group">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="input input-bordered h-10 w-full lg:w-96" 
                />
                <button className="btn btn-square btn-primary">
                  <MdSearch className="h-5 w-5" />
                </button>
              </div>
            </div> */}
          </div>
        </div>

        <div className="flex-none gap-2">
          {/* Quick Actions */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <MdApps className="h-6 w-6" />
            </label>
            <div tabIndex={0} className="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-4 w-72 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-2 gap-2 p-3">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    href={action.href}
                    className="flex flex-col items-center justify-center rounded-lg p-3 hover:bg-base-300 transition-colors duration-200"
                  >
                    <action.icon className={`h-8 w-8 mb-2 ${action.color}`} />
                    <span className="text-sm font-medium">{action.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Theme toggle */}
          <button 
            className="btn btn-ghost btn-circle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <MdLightMode className="h-6 w-6" />
            ) : (
              <MdDarkMode className="h-6 w-6" />
            )}
          </button>

          {/* Notifications */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <MdNotifications className="h-6 w-6" />
                <span className="badge badge-sm badge-blue-500 indicator-item">
                  {notifications.length}
                </span>
              </div>
            </label>
            <div tabIndex={0} className="dropdown-content card card-compact mt-4 w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold">Notifications</h3>
                  <span className="text-sm text-base-content/60">Mark all as read</span>
                </div>
                <div className="divider my-0"></div>
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start space-x-4 p-3 hover:bg-base-200 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex-shrink-0">
                      <notification.icon className="h-10 w-10 p-2 bg-primary/10 text-primary rounded-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{notification.title}</p>
                      <p className="text-sm text-base-content/70">{notification.description}</p>
                      <p className="text-xs text-base-content/60 mt-1">{notification.time}</p>
                    </div>
                  </div>
                ))}
                <div className="card-actions mt-2">
                  <button className="btn btn-primary btn-block">View All Notifications</button>
                </div>
              </div>
            </div>
          </div>

          {/* User menu */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full bg-activeColor">
                {user?.profilePhoto ? (
                  <img src={user.profilePhoto} alt={user.name} />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-primary-content">
                    {user?.name?.charAt(0) || <MdPerson className="h-6 w-6" />}
                  </div>
                )}
              </div>
            </label>
            <ul tabIndex={0} className="menu dropdown-content mt-4 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <div className="px-4 py-3">
                <p className="text-sm font-medium">{user?.name || 'User'}</p>
                <p className="text-xs text-base-content/70">{user?.email || 'user@example.com'}</p>
              </div>
              <div className="divider my-0"></div>
              <li>
                <Link href="/profile" className="flex items-center">
                  <MdPerson className="h-5 w-5" />
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/settings" className="flex items-center">
                  <MdSettings className="h-5 w-5" />
                  Settings
                </Link>
              </li>
              <li>
                <Link href="/help" className="flex items-center">
                  <MdHelp className="h-5 w-5" />
                  Help & Support
                </Link>
              </li>
              <div className="divider my-0"></div>
              <li>
                <button 
                  onClick={handleLogout}
                  className="flex items-center text-error hover:bg-error/10"
                >
                  <MdExitToApp className="h-5 w-5" />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}