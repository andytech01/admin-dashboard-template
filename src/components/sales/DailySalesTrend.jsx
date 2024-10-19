import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const dailySalesData = [
  { name: "Mon", sales: 1000 },
  { name: "Tue", sales: 1200 },
  { name: "Wed", sales: 900 },
  { name: "Thu", sales: 1100 },
  { name: "Fri", sales: 1300 },
  { name: "Sat", sales: 1600 },
  { name: "Sun", sales: 1400 },
];

const DailySalesTrend = () => {
  return (
    <motion.div
      className="bg-zinc-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-zinc-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-zinc-100 mb-4">
        Daily Sales Trend
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={dailySalesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(80, 80, 80, 0.8)",
                borderColor: "#8b8b8b",
              }}
              itemStyle={{ color: "#ffffff" }}
            />
            <Bar dataKey="sales" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default DailySalesTrend;
