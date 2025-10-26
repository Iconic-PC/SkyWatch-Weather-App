import { Cloud, CloudRain, Sun, CloudDrizzle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ForecastCardProps {
  day: string;
  high: number;
  low: number;
  condition: string;
  delay: number;
}

export const ForecastCard = ({ day, high, low, condition, delay }: ForecastCardProps) => {
  const getWeatherIcon = () => {
    const lower = condition.toLowerCase();
    if (lower.includes("rain")) return CloudRain;
    if (lower.includes("drizzle")) return CloudDrizzle;
    if (lower.includes("sun") || lower.includes("clear")) return Sun;
    return Cloud;
  };

  const WeatherIcon = getWeatherIcon();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card border-border">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-semibold mb-4 text-foreground">{day}</h3>
          <WeatherIcon className="h-12 w-12 mx-auto mb-4 text-primary" />
          <p className="text-sm text-muted-foreground mb-3">{condition}</p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl font-bold text-foreground">{high}°</span>
            <span className="text-xl text-muted-foreground">{low}°</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
