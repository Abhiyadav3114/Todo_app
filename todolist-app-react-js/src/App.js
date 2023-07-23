import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <TodoWrapper />
          
          </>
        }
      />
      
    </Routes>
    </Router>
  );
}

export default App;
