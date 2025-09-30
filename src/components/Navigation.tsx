import { Link, useLocation } from "react-router-dom";
import { BookOpen, Users, UserPlus, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/students", label: "View Students", icon: Users },
    { to: "/add-student", label: "Add Student", icon: UserPlus },
  ];

  return (
    <nav className="bg-gradient-academic text-white shadow-elevated">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8" />
            <h1 className="text-xl font-bold">Library Management System</h1>
          </div>
          
          <div className="flex items-center gap-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === to
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;