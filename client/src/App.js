import { Route, Routes } from "react-router-dom";
import "./App.css"; 
import Post from "./components/Post";
import Header from "./components/Header";

function App() {
  return (
    <Routes>
      <Route
        index
        element={
            <main>
              <Header />
              <Post />
              <Post />
              <Post />
            </main>
        }
      />
      <Route path="/login" element={
        <div>Login Page</div>
      }/>
    </Routes>
  );
}

export default App;
