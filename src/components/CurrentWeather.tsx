import { Cloud, Droplets, Wind, Eye, Gauge, Sunrise, Sunset, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface CurrentWeatherProps {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  pressure: number;
  sunrise: string;
  sunset: string;
  feelsLike: number;
}

export const CurrentWeather = ({
  city,
  temperature,
  condition,
  humidity,
  windSpeed,
  visibility,
  pressure,
  sunrise,
  sunset,
  feelsLike,
}: CurrentWeatherProps) => {
  const getWeatherIcon = () => {
    const lower = condition.toLowerCase();
    if (lower.includes("cloud")) return Cloud;
    if (lower.includes("sun") || lower.includes("clear")) return Sun;
    if (lower.includes("rain")) return Droplets;
    return Cloud;
  };

  const WeatherIcon = getWeatherIcon();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground border-0 shadow-weather mb-8">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <WeatherIcon className="h-24 w-24" />
              <div>
                <h2 className="text-5xl font-bold mb-2">{temperature}°C</h2>
                <p className="text-xl opacity-90">{condition}</p>
                <p className="text-lg opacity-75 mt-1">Feels like {feelsLike}°C</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-3xl font-semibold mb-2">{city}</h3>
              <p className="text-lg opacity-90">{new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/20">
            <div className="flex items-center gap-3">
              <Droplets className="h-6 w-6 opacity-75" />
              <div>
                <p className="text-sm opacity-75">Humidity</p>
                <p className="text-xl font-semibold">{humidity}%</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Wind className="h-6 w-6 opacity-75" />
              <div>
                <p className="text-sm opacity-75">Wind Speed</p>
                <p className="text-xl font-semibold">{windSpeed} km/h</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Eye className="h-6 w-6 opacity-75" />
              <div>
                <p className="text-sm opacity-75">Visibility</p>
                <p className="text-xl font-semibold">{visibility} km</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Gauge className="h-6 w-6 opacity-75" />
              <div>
                <p className="text-sm opacity-75">Pressure</p>
                <p className="text-xl font-semibold">{pressure} mb</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-around mt-6 pt-6 border-t border-white/20">
            <div className="flex items-center gap-2">
              <Sunrise className="h-5 w-5 opacity-75" />
              <div>
                <p className="text-sm opacity-75">Sunrise</p>
                <p className="font-semibold">{sunrise}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Sunset className="h-5 w-5 opacity-75" />
              <div>
                <p className="text-sm opacity-75">Sunset</p>
                <p className="font-semibold">{sunset}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
