import  {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './features/auth/Login.jsx'
import Register from './features/auth/Register.jsx'
import Redefinir from './features/auth/Redefinir.jsx'
import LandingPage from './features/landingPage/LandingPage.jsx'
import Home from './pages/HomePage.jsx'
import useAuthSession from './hooks/useAuthSession.js'

export default function App() {
  const { user, showLoading } = useAuthSession();
  
  /*
  const [user, setUser] = useState(null);
    useEffect(() => {
      getLoggerUser()
        .then(user => {
          setShowLoading(false);
          setUser(user);
        }).catch(error => {
          setShowLoading(false);
          console.log(error);
        })
    },[])
  */

  return (
    <>
      {
        !showLoading && 
            <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} exact/>
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/home"/>}/>
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/home"/>}/>
              <Route path="/redefenir-senha" element={<Redefinir />}/>
              <Route path="/home" element={user ? <Home /> : <Navigate to="/login"/>} />
            </Routes>
          </Router>
      }
    </>
  ) 
}