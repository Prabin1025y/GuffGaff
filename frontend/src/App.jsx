import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"
import Home from "./pages/home/Home"
import { ToastContainer } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from "./context/AuthContext"

function App() {


  const { authUser } = useAuthContext();
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} pauseOnHover={false} theme="dark" />
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
    </>
  )
}

export default App
