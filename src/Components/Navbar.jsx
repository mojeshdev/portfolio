import { NavLink } from 'react-router-dom';
import {
    House,
    CircleUserRound,
    SquareChartGantt,
    EqualApproximately,
} from 'lucide-react';

export default function Navbar() {
    const navItems = [
    { to: '/', icon: House, label: 'Home' },
    { to: '/Projects', icon: SquareChartGantt, label: 'Projects' },
    { to: '/About', icon: EqualApproximately, label: 'About' },
    { to: '/Contact', icon: CircleUserRound, label: 'Contact' },
    ];

    return (
    <>
      {/* Desktop Navbar */}
        <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-end space-y-6 z-50">
        {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink key={to} to={to}>
            <div className="group relative w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 overflow-hidden hover:w-44 hover:justify-end pr-4">
              {/* Label appears on hover */}
                <span className="absolute right-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-bold whitespace-nowrap">
                {label}
                </span>
                <Icon className="text-white z-10 ml-3 " size={30} />
            </div>
            </NavLink>
        ))}
        </div>

      {/* Mobile Navbar */}
        <div className="fixed bottom-0 left-0 w-full bg-yellow-500 px-4 py-3 shadow-2xl flex justify-around items-center lg:hidden z-50">
        {navItems.map(({ to, icon: Icon }) => (
            <NavLink key={to} to={to}>
            <div className="text-white p-2">
                <Icon size={28} />
            </div>
            </NavLink>
        ))}
        </div>
    </>
    );
}
