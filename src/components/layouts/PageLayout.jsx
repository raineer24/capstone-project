import { Link, useLocation } from "react-router-dom";

const PageLayout = ({ title, children }) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/create", label: "Create User" },
  ];

  return (
    <div className="min-h-screen">
      {/*  Simple Navigation */}
      <nav className="bg-white">
        <div className="max-w-4xl">
          <div className="flex">
            <h2 className="text-lg">User Manager</h2>
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium ${
                    location.pathname === item.path
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl">
        {title && (
          <h1 className="text-2xl font-bold text-gray-900 mb-6">{title}</h1>
        )}
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
