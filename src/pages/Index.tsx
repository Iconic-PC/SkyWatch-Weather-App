import { motion } from "framer-motion";
import { Cloud, MapPin, TrendingUp, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import heroWeather from "@/assets/hero-weather.jpg";
import weatherFeatures from "@/assets/weather-features.jpg";
import appShowcase from "@/assets/app-showcase.jpg";

const Index = () => {
  const features = [
    {
      icon: MapPin,
      title: "Global Coverage",
      description:
        "Access accurate weather data for cities worldwide with real-time updates and comprehensive forecasting.",
    },
    {
      icon: TrendingUp,
      title: "5-Day Forecasts",
      description:
        "Plan ahead with detailed 5-day weather forecasts including temperature highs, lows, and conditions.",
    },
    {
      icon: Zap,
      title: "Real-Time Updates",
      description:
        "Get instant weather updates with live data on temperature, humidity, wind speed, and more.",
    },
    {
      icon: Shield,
      title: "Weather Alerts",
      description:
        "Stay safe with timely weather alerts and notifications for severe weather conditions.",
    },
    {
      icon: Globe,
      title: "Multiple Locations",
      description:
        "Track weather in multiple cities simultaneously and switch between locations instantly.",
    },
    {
      icon: Cloud,
      title: "Beautiful UI",
      description:
        "Experience weather data like never before with our stunning, intuitive interface design.",
    },
  ];

  const stats = [
    { value: "100+", label: "Active Users" },
    { value: "195", label: "Countries" },
    { value: "99.9%", label: "Accuracy" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroWeather}
            alt="Dramatic weather scene with sunset breaking through storm clouds"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 inline-block"
            >
              <Cloud className="w-20 h-20 text-primary mx-auto mb-4 drop-shadow-glow" />
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent leading-tight">
              Weather Intelligence
              <br />
              Made Beautiful
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Experience the perfect blend of accuracy and elegance. SkyWatch
              delivers real-time weather data for cities worldwide with stunning
              visuals and intuitive design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Link to Forecast Page */}
              <Link to="/forecast">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary-glow hover:shadow-weather transition-all"
                >
                  Explore Weather Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to stay informed about weather conditions, all
              in one beautiful interface
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:shadow-weather h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-elevated"
          >
            <img
              src={weatherFeatures}
              alt="Beautiful weather icons showing sun, clouds, rain, and lightning"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end">
              <div className="p-12">
                <h3 className="text-4xl font-bold mb-4 text-foreground">
                  Stunning Visualizations
                </h3>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Experience weather data brought to life with beautiful icons,
                  charts, and animations that make understanding conditions
                  effortless.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="py-32 bg-gradient-to-b from-secondary/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Always With You
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                SkyWatch works seamlessly across all your devices. Whether
                you're on desktop, tablet, or mobile, enjoy the same beautiful
                experience everywhere you go.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Responsive design that adapts to any screen",
                  "Offline mode for weather you've already checked",
                  "Dark mode for comfortable nighttime viewing",
                  "Lightning-fast performance on any device",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-lg text-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-3xl blur-3xl"></div>
              <img
                src={appShowcase}
                alt="Smartphone displaying SkyWatch weather app interface"
                className="relative z-10 w-full rounded-3xl shadow-elevated"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden p-16 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary-glow/10 to-accent/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Ready to Experience Weather Differently?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join millions of users who trust SkyWatch for accurate, beautiful
                weather forecasting
              </p>

              {/* ✅ Updated Links */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/forecast">
                  <Button
                    size="lg"
                    className="text-lg px-10 py-6 bg-gradient-to-r from-primary to-primary-glow hover:shadow-weather"
                  >
                    Get Started Free
                  </Button>
                </Link>

                <Link to="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-10 py-6 border-primary/30 hover:border-primary hover:bg-primary/10"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Cloud className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">SkyWatch</span>
            </div>
            <p className="text-muted-foreground">
              © 2025 SkyWatch. Weather Intelligence at Your Fingertips.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
