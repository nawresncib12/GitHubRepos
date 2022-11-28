import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Layout from "./components/shared/Layout";
import Repos from "./pages/Repos";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/user"
          element={
            <Layout>
              <Search />
            </Layout>
          }
        />
        <Route
          path="/user/:username"
          element={
            <Layout>
              <Repos />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
