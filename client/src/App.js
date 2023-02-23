import { Route, Routes } from "react-router-dom";
import "./App.css"; 
import Post from "./components/Post";
import Header from "./components/Header";
import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<IndexPage/>} />
        <Route path="/login" element={<LoginPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
