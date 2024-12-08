import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation(); // Hook to get the current route

  return (
    <nav
      className={`${
        collapsed ? 'w-20' : 'w-64'
      } bg-atlantaBlack text-atlantaGold min-h-screen p-4 flex flex-col items-center top-0 left-0 transition-all duration-300`}
    >
      
      {/* Collapse/Expand Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="text-atlantaGold bg-atlantaRed p-2 rounded mb-6"
      >
        {collapsed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Navigation Links (Visible only when expanded) */}
      {!collapsed && (
        <>
          {/* Atlanta United FC Logo (Links to Home) */}
          <Link to="/" className="mb-8">
            <img
              src="https://images.mlssoccer.com/image/upload/assets/logos/ATL.svg"
              alt="Atlanta United FC Logo"
              className="w-24 h-auto"
            />
          </Link>
          <div className="space-y-4 text-center">
            <Link
              to="/team"
              className={`block p-2 rounded ${
                location.pathname === '/team' ? 'bg-atlantaRed' : 'hover:underline'
              }`}
            >
              Team
            </Link>
            <Link
              to="/league"
              className={`block p-2 rounded ${
                location.pathname === '/league' ? 'bg-atlantaRed' : 'hover:underline'
              }`}
            >
              League
            </Link>
          </div>
        </>
      )}

      {/* Footer Trademark (Visible in Both States) */}
      <div className="mt-auto text-center">
        {!collapsed && (
          <>
            <p className="text-xs">&copy; 2024 Atlanta United FC.</p>
            <p className="text-xs">All rights reserved.</p>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;