import  {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from './features/auth/Login.jsx'
import Register from './features/auth/Register.jsx'
import Redefinir from './features/auth/Redefinir.jsx'
import LandingPage from './features/landingPage/LandingPage.jsx'

import './assets/styles/App.css'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} exact/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/redefenir-senha" element={<Redefinir />}/>
      </Routes>
    </Router>
  )
}

//        <Route path="/home" element={<Home/>} />