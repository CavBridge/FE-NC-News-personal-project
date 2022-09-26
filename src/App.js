import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Topics from "./Components/Topics";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/articlesdata/:topic" element={<Topics />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
