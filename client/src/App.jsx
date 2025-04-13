import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AddPosition from "./pages/AddPosition";
import EditPosition from "./pages/EditPosition";
import PositionList from "./pages/PositionList";
import Login from "./pages/Login";
import Info from "./pages/Info";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="positions" element={<PositionList />} />
          <Route path="addPosition" element={<AddPosition />} />
          <Route path="editPosition/:id" element={<EditPosition />} />
          <Route path="login" element={<Login/>} />
          <Route path="Info" element={<Info/>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
