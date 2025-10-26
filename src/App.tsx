import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About"; // only if you want it
import Forecast from "@/pages/Forecast";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />      {/* Landing page */}
        <Route path="/about" element={<About />} /> {/* Optional */}
        <Route path="/forecast" element={<Forecast />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
