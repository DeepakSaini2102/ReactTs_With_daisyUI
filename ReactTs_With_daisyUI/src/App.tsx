// src/App.tsx
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import MainLayout from "./layout/MainLayout"; // Import MainLayout

const App = () => {
  return (
    <Router>
      {" "}
      {/* Wrap MainLayout with Router */}
      <MainLayout />
    </Router>
  );
};

export default App;
