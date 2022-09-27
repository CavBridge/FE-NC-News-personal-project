import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Topics from "./Components/Topics";
import Article from "./Components/Article";
import TopicsButton from "./Components/Topic_buttons";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <TopicsButton />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/articles/:topic" element={<Topics />}></Route>
          <Route path="/article/:article_id" element={<Article />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
