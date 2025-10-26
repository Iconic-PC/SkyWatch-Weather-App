import { motion } from "framer-motion";
import { Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/90 border-b border-border/30"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div 
              className="p-2.5 rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-weather"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Cloud className="w-7 h-7 text-white" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                SkyWatch
              </h1>
              <p className="text-xs text-muted-foreground font-medium">Weather Intelligence at Your Fingertips</p>
            </div>
          </div>
        
        </div>
      </div>
    </motion.header>
  );
};
