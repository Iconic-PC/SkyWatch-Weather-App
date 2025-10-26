import { motion } from "framer-motion";
import { Cloud, Globe, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Weather Coverage",
      description:
        "Track weather in cities all over the world, with real-time updates and accurate forecasts.",
    },
    {
      icon: Zap,
      title: "Instant Updates",
      description:
        "Get immediate weather changes, alerts, and notifications to plan your day safely and efficiently.",
    },
    {
      icon: Cloud,
      title: "Beautiful Interface",
      description:
        "Experience weather data in a stunning, intuitive design with animations, icons, and charts.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark text-foreground">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 text-center bg-gradient-to-b from-primary/10 to-transparent">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent"
        >
          About SkyWatch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground"
        >
          SkyWatch is built to provide accurate, real-time weather data worldwide.
          Our mission is to make weather forecasting beautiful, intuitive, and accessible.
        </motion.p>
      </section>

      {/* Features Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:shadow-weather h-full text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-gradient-to-b from-secondary/10 to-transparent text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We aim to deliver weather intelligence that’s not only precise and timely, 
            but also visually engaging. SkyWatch helps millions plan their day, stay safe, 
            and understand the climate better.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Cloud className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">SkyWatch</span>
          </div>
          <p className="text-muted-foreground">© 2025 SkyWatch. Weather Intelligence at Your Fingertips.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
