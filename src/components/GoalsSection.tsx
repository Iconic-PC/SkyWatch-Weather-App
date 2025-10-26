import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, Trophy, Zap } from "lucide-react";

const goals = [
  { id: 1, title: "Daily Steps", current: 10456, target: 15000, icon: Target, color: "from-primary to-primary-glow" },
  { id: 2, title: "Weekly Workouts", current: 5, target: 7, icon: Trophy, color: "from-secondary to-[hsl(15,90%,55%)]" },
  { id: 3, title: "Calories Burned", current: 2890, target: 3500, icon: Zap, color: "from-accent to-[hsl(160,65%,48%)]" },
];

export const GoalsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Card className="p-6 border-border/50 backdrop-blur-sm bg-card/80">
        <h3 className="text-lg font-semibold mb-4">Today's Goals</h3>
        <div className="space-y-4">
          {goals.map((goal, index) => {
            const progress = (goal.current / goal.target) * 100;
            const Icon = goal.icon;
            
            return (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${goal.color}`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{goal.title}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {goal.current.toLocaleString()} / {goal.target.toLocaleString()}
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </motion.div>
            );
          })}
        </div>
      </Card>
    </motion.div>
  );
};
