import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cloud, Droplets, MapPin, Wind, Thermometer, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";

const Forecast = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [locationFetched, setLocationFetched] = useState(false);

  const apiKey = "37fddc43c716f581cf78c39c010991ce";

  // Fetch weather by city (manual search)
  const fetchWeather = async (city: string) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) throw new Error("City not found");
      const data = await response.json();

      processWeatherData(data);
    } catch (err: any) {
      setError(err.message || "Unable to fetch weather");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // ✅ New: Fetch weather directly by latitude/longitude
  const fetchWeatherByCoords = async (lat: number, lon: number) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) throw new Error("Location weather not found");
      const data = await response.json();

      processWeatherData(data);
    } catch (err: any) {
      setError(err.message || "Unable to fetch weather for your location");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Shared helper to format data
  const processWeatherData = (data: any) => {
    const current = data.list[0];
    const forecast = data.list
      .filter((_: any, i: number) => i % 8 === 0)
      .slice(0, 5)
      .map((d: any) => ({
        date: new Date(d.dt_txt).toLocaleDateString(undefined, { weekday: "short" }),
        temperature: d.main.temp,
        icon: d.weather[0].icon,
        description: d.weather[0].description,
      }));

    setWeather({
      city: data.city.name,
      country: data.city.country,
      temperature: current.main.temp,
      description: current.weather[0].description,
      humidity: current.main.humidity,
      windSpeed: current.wind.speed,
      icon: current.weather[0].icon,
      forecast,
    });
  };

  // ✅ Automatically detect user’s location and fetch weather
  useEffect(() => {
    if (locationFetched) return;

    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          await fetchWeatherByCoords(latitude, longitude);
          setLocationFetched(true);
        },
        () => {
          setError("Location access denied. Please search manually.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, [locationFetched]);

  return (
    <div className="min-h-screen bg-gradient-dark text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent"
          >
            Search Weather Forecast
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10"
          >
            Get real-time weather updates and 5-day forecasts for any city worldwide.
          </motion.p>

          <div className="max-w-xl mx-auto">
            <SearchBar onSearch={fetchWeather} />
          </div>
        </div>
      </section>

      {/* Weather Display */}
      <section className="py-24 container mx-auto px-4">
        {loading && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground text-lg"
          >
            Fetching weather data...
          </motion.p>
        )}

        {error && !loading && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-red-400 text-lg"
          >
            {error}
          </motion.p>
        )}

        {weather && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {/* Current Weather */}
            <Card className="p-10 bg-card/50 backdrop-blur border-border/50 text-center">
              <div className="flex flex-col items-center">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt={weather.description}
                  className="w-24 h-24 mb-4"
                />
                <h2 className="text-5xl font-bold mb-2">{weather.temperature.toFixed(1)}°C</h2>
                <p className="text-muted-foreground text-lg capitalize mb-4">{weather.description}</p>
                <div className="flex items-center gap-2 text-lg mb-6 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  {weather.city}, {weather.country}
                </div>
                <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-primary" /> {weather.humidity}%
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4 text-primary" /> {weather.windSpeed} m/s
                  </div>
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-primary" /> Feels like {weather.temperature.toFixed(1)}°C
                  </div>
                </div>
              </div>
            </Card>

            {/* Forecast Cards */}
            <div>
              <h3 className="text-3xl font-bold mb-8 flex items-center justify-center gap-2 text-foreground">
                <CalendarDays className="w-6 h-6 text-primary" />
                5-Day Forecast
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                {weather.forecast.map((day: any) => (
                  <motion.div
                    key={day.date}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className="p-6 bg-card/60 border-border/40 text-center hover:border-primary/50 hover:shadow-weather transition-all">
                      <p className="text-lg font-medium mb-2">{day.date}</p>
                      <img
                        src={`https://openweathermap.org/img/wn/${day.icon}.png`}
                        alt={day.description}
                        className="w-12 h-12 mx-auto mb-2"
                      />
                      <p className="text-2xl font-semibold mb-1">{day.temperature.toFixed(0)}°C</p>
                      <p className="text-sm text-muted-foreground capitalize">{day.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30 text-center text-muted-foreground">
        © 2025 SkyWatch. Beautiful Weather Intelligence.
      </footer>
    </div>
  );
};

export default Forecast;
