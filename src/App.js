
import './App.css';
import Navbar from "./components/Navbar"
import News from "./components/News"
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<News category="general"/>} ></Route>
        <Route exact path="/business" element={<News category="business"/>}></Route>
        <Route exact path="/entertainment" element={<News category="entertainment"/>}></Route>
        <Route exact path="/general" element={<News category="general"/>}></Route>
        <Route exact path="/health" element={<News category="health"/>}></Route>
        <Route exact path="/science" element={<News category="science"/>}></Route>
        <Route exact path="/sports" element={<News category="sports"/>}></Route>
        <Route exact path="/technology" element={<News category="technology"/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
