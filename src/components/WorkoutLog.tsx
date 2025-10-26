import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Dumbbell, Timer, Flame } from "lucide-react";

const workouts = [
  { id: 1, name: "Morning Run", type: "Cardio", duration: "35 min", calories: 420 },
  { id: 2, name: "Strength Training", type: "Weights", duration: "45 min", calories: 380 },
  { id: 3, name: "Yoga Session", type: "Flexibility", duration: "30 min", calories: 150 },
  { id: 4, name: "Evening Cycling", type: "Cardio", duration: "50 min", calories: 520 },
];

export const WorkoutLog = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Card className="p-6 border-border/50 backdrop-blur-sm bg-card/80">
        <h3 className="text-lg font-semibold mb-4">Recent Workouts</h3>
        <div className="space-y-3">
          {workouts.map((workout, index) => (
            <motion.div
              key={workout.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary-glow">
                  <Dumbbell className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-medium">{workout.name}</h4>
                  <p className="text-sm text-muted-foreground">{workout.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Timer className="w-4 h-4" />
                  <span>{workout.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-secondary">
                  <Flame className="w-4 h-4" />
                  <span className="font-medium">{workout.calories}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};
