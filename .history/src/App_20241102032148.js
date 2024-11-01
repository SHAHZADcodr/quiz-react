import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
// Components
import MyNavbar from "./components/Nav";
import Categories from "./components/Categories";
import Questions from "./components/Question";
import 

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Categories />} />{" "}
        {/* Render Categories on Home */}
        <Route path="*" element={<Categories />} />
        {/* Dynamic category route */}
        <Route path="/:category" element={<Questions />} />
      </Routes>
    </>
  );
}

export default App;
