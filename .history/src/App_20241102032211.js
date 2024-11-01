import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
// Components
import MyNavbar from "./components/Nav";
import Categories from "./components/Categories";
import Questions from "./components/Question";
import Home from "./Home";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home/>} />{" "}
        {/* Render Categories on Home */}
        <Route path="*" element={<C/>} />
        {/* Dynamic category route */}
        <Route path="/:category" element={<Questions />} />
      </Routes>
    </>
  );
}

export default App;
