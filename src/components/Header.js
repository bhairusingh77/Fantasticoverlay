import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest('button')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full p-5 flex justify-between items-center bg-black shadow-md font-montserrat z-30">
        <Link 
          to="/" 
          className="text-3xl font-extrabold text-yellow-500 no-underline hidden lg:block"
        >
          Fantastic Overlay
        </Link>
        
        <div className="lg:hidden">
          <span className="text-3xl font-extrabold text-yellow-500">
            Fantastic Overlay
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-4">
          <Link 
            to="/" 
            className="text-lg font-medium text-gray-200 px-3 py-2 rounded-md bg-gray-800 bg-opacity-50 backdrop-blur-sm transition-transform transform hover:bg-gray-700 hover:bg-opacity-70 hover:text-yellow-400 hover:font-bold hover:scale-105 no-underline"
          >
            Home
          </Link>
          <Link 
            to="/plugins" 
            className="text-lg font-medium text-gray-200 px-3 py-2 rounded-md bg-gray-800 bg-opacity-50 backdrop-blur-sm transition-transform transform hover:bg-gray-700 hover:bg-opacity-70 hover:text-yellow-400 hover:font-bold hover:scale-105 no-underline"
          >
            Plugins
          </Link>
          {/* <Link 
            to="/about" 
            className="text-lg font-medium text-gray-200 px-3 py-2 rounded-md bg-gray-800 bg-opacity-50 backdrop-blur-sm transition-transform transform hover:bg-gray-700 hover:bg-opacity-70 hover:text-yellow-400 hover:font-bold hover:scale-105 no-underline"
          >
            About Us
          </Link> */}
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-200 hover:text-yellow-400 focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isSidebarOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
        
        {/* Mobile Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed top-0 left-0 w-64 h-full bg-black text-gray-200 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-300 lg:hidden z-40`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <span className="text-2xl font-extrabold text-yellow-500">
              Fantastic Overlay
            </span>
            <button
              className="text-gray-200 hover:text-yellow-400 focus:outline-none"
              onClick={toggleSidebar}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <nav className="mt-8">
            <ul className="space-y-4 px-4">
              <li>
                <Link 
                  to="/" 
                  className="block py-2 px-4 rounded-md bg-gray-800 bg-opacity-50 backdrop-blur-sm hover:bg-gray-700 hover:bg-opacity-70 hover:text-yellow-400 hover:font-bold no-underline"
                  onClick={toggleSidebar}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/plugins" 
                  className="block py-2 px-4 rounded-md bg-gray-800 bg-opacity-50 backdrop-blur-sm hover:bg-gray-700 hover:bg-opacity-70 hover:text-yellow-400 hover:font-bold no-underline"
                  onClick={toggleSidebar}
                >
                  Plugins
                </Link>
              </li>
              <li>
                {/* <Link 
                  to="/About" 
                  className="block py-2 px-4 rounded-md bg-gray-800 bg-opacity-50 backdrop-blur-sm hover:bg-gray-700 hover:bg-opacity-70 hover:text-yellow-400 hover:font-bold no-underline"
                  onClick={toggleSidebar}
                >
                  About Us
                </Link> */}
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* Add padding to the top of the main content to account for the fixed header */}
      <div className="pt-20"> {/* Adjust the padding value as needed */}
        {/* Main content goes here */}
      </div>
    </>
  );
}

export default Header;
