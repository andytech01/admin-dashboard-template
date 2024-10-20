import { motion } from "framer-motion";
import CountUp from "react-countup";

const StatCard = ({
  name,
  icon: Icon,
  value,
  prefix = "",
  suffix = "",
  color,
}) => {
  return (
    <motion.div
      className="bg-zinc-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-zinc-700"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-zinc-400">
          <Icon size={20} className="mr-2" style={{ color }} />
          {name}
        </span>
        <p className="mt-1 text-3xl font-semibold text-zinc-100">
          {prefix}
          <CountUp end={value} />
          {suffix}
        </p>
      </div>
    </motion.div>
  );
};
export default StatCard;
