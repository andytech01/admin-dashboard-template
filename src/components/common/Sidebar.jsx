import {
  BarChart2,
  DollarSign,
  ChevronsRight,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: BarChart2,
    color: "#6366f1",
    href: "/",
  },
  { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
  { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
  { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
  { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
  { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-zinc-800 bg-opacity-50 backdrop-blur-md p-3 pt-6 flex flex-col border-r border-zinc-700">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <AnimatePresence mode="wait">
            {isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="flex items-center pl-2"
              >
                <img
                  src="/logo-white.svg"
                  alt="Logo"
                  className="w-10 h-10 mr-3"
                />
                <span className="text-white text-lg font-bold">Dashboard</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Menu Icon */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`absolute right-0 p-4 rounded-full hover:bg-zinc-700 transition-colors max-w-fit ${
              isSidebarOpen ? "" : "-top-2"
            }`}
          >
            <motion.div
              animate={{
                rotate: isSidebarOpen ? 180 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
            >
              <ChevronsRight size={24} />
            </motion.div>
          </motion.button>
        </div>

        <nav
          className={`${
            isSidebarOpen ? "mt-14" : "mt-20"
          } mb-8 flex-grow flex flex-col justify-between`}
        >
          <div>
            {SIDEBAR_ITEMS.map((item) => (
              <Link key={item.href} to={item.href}>
                <motion.div
                  className={`flex items-center p-4 text-base font-medium rounded-lg transition-colors mb-2 ${
                    location.pathname === item.href
                      ? "bg-zinc-600 text-white"
                      : "hover:bg-zinc-700 hover:text-white text-zinc-400"
                  }`}
                >
                  <item.icon
                    size={25}
                    style={{ color: item.color, minWidth: "25px" }}
                  />
                  <AnimatePresence>
                    {isSidebarOpen && (
                      <motion.span
                        className="ml-4 whitespace-nowrap"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, delay: 0.3 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            ))}
          </div>
          <Link key={"/settings"} to={"/settings"}>
            <motion.div
              className={`flex items-center p-4 text-base font-medium rounded-lg transition-colors mb-2 ${
                location.pathname === "/settings"
                  ? "bg-zinc-600 text-white"
                  : "hover:bg-zinc-700 hover:text-white text-zinc-400"
              }`}
            >
              <Settings
                size={25}
                style={{ color: "#86c4ff", minWidth: "25px" }}
              />
              <AnimatePresence>
                {isSidebarOpen && (
                  <motion.span
                    className="ml-4 whitespace-nowrap"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2, delay: 0.3 }}
                  >
                    Settings
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </Link>
        </nav>
      </div>
    </motion.div>
  );
};
export default Sidebar;
