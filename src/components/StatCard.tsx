import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  unit: string;
  icon: LucideIcon;
  gradient: string;
  delay?: number;
}

export const StatCard = ({ title, value, unit, icon: Icon, gradient, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="relative overflow-hidden p-6 border-border/50 backdrop-blur-sm bg-card/80 hover:shadow-[var(--shadow-card)] transition-all duration-300">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                {value}
              </span>
              <span className="text-sm text-muted-foreground ml-1">{unit}</span>
            </div>
          </div>
          <div
            className="p-3 rounded-xl"
            style={{ background: gradient }}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
