import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banking from "./pages/Banking";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Nav from "./Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
