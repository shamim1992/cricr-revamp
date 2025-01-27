// components/layouts/Sidebar.js
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { 
  MdDashboard, 
  MdPeople, 
  MdLocalHospital,
  MdEventNote,
  MdInsertChart,
  MdSettings,
  MdClose,
  MdKeyboardArrowDown,
  MdPerson 
} from 'react-icons/md';
import { BsBook } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const navigation = [
  { name: 'Dashboard', href: '/dashboard/admin', icon: MdDashboard },
  { 
    name: 'Management',
    icon: MdPeople,
    children: [
      { name: 'Users', href: '/dashboard/admin/users' },
      { name: 'Doctors', href: '/dashboard/admin/doctors' },
      { name: 'Staff', href: '/dashboard/admin/staff' }
    ]
  },
  { 
    name: 'Posts',
    icon: BsBook,
    children: [
      { name: 'Add Post', href: '/dashboard/admin/post/createpost' },
      { name: 'Manage Post', href: '/dashboard/admin/managepost' },
    ]
  },
  { name: 'Appointments', href: '/dashboard/admin/appointments', icon: MdEventNote },
  { name: 'Patients', href: '/dashboard/admin/patients', icon: MdLocalHospital },
  { name: 'Analytics', href: '/dashboard/admin/analytics', icon: MdInsertChart },
  { name: 'Settings', href: '/dashboard/admin/settings', icon: MdSettings },
];

const NavItem = ({ item }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = router.pathname === item.href;
  const hasChildren = item.children && item.children.length > 0;
  const Icon = item.icon;
  // const { user } = useSelector((state) => state.auth);
  
  if (hasChildren) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex items-center w-full px-3 py-2 text-sm rounded-lg
            ${isOpen ? 'bg-base-200' : 'hover:bg-base-200'}
            transition-colors duration-150 ease-in-out
          `}
        >
          <Icon className="w-5 h-5 mr-3" />
          <span>{item.name}</span>
          <MdKeyboardArrowDown 
            className={`ml-auto transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        {isOpen && (
          <div className="pl-4 mt-1 space-y-1">
            {item.children.map((child) => (
              <Link
                key={child.name}
                href={child.href}
                className={`
                  flex items-center px-3 py-2 text-sm rounded-lg
                  ${router.pathname === child.href 
                    ? 'bg-activeColor text-primary-content' 
                    : 'hover:bg-base-200'}
                  transition-colors duration-150 ease-in-out
                `}
              >
                <span className="w-5 h-5 mr-3" />
                {child.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={`
        flex items-center px-3 py-2 text-sm rounded-lg
        ${isActive 
          ? 'bg-activeColor text-white' 
          : 'hover:bg-base-200'}
        transition-colors duration-150 ease-in-out
      `}
    >
      <Icon className="w-5 h-5 mr-3" />
      <span>{item.name}</span>
    </Link>
  );
};

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Mobile Sidebar */}
      <div className={`
        lg:hidden fixed inset-0 z-50 
        ${sidebarOpen ? 'visible' : 'invisible'}
        transition-visibility duration-200
      `}>
        {/* Backdrop */}
        <div 
          className={`
            fixed inset-0 bg-black/50
            ${sidebarOpen ? 'opacity-100' : 'opacity-0'}
            transition-opacity duration-200
          `}
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar Panel */}
        <div className={`
          fixed top-0 left-0 bottom-0 w-72
          bg-base-100 shadow-xl
          transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-200
        `}>
          {/* Close Button */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 p-1 rounded-lg hover:bg-base-200"
          >
            <MdClose className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="flex items-center p-4">
            <h1 className="text-2xl font-bold text-primary">Healthcare</h1>
          </div>

          {/* Navigation */}
          <nav className="px-3 mt-6 space-y-1">
            {navigation.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:z-50 lg:w-72">
        <div className="flex flex-col flex-1 min-h-0 bg-base-100 shadow-lg">
          {/* Logo */}
          <div className="flex items-center h-16 px-4 border-b border-base-200">
            <h1 className="text-2xl font-bold text-primary">Healthcare</h1>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            <nav className="p-3 space-y-1">
              {navigation.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </nav>
          </div>

          {/* User Profile */}
          <div className="p-4 border-t border-base-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-primary-content">
                  <MdPerson className="w-6 h-6" />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-base-content/70"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}