import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import Landing from "./components/Landing";
// import CreateCourse from './components/CreateCourse';
// import Register from './components/Register';
// import ShowCourses from './components/ShowCourses';
import Signin from './Signin';
import Signup from './Signup';
import { AppBar } from '@mui/material';
import Appbar from './Appbar';
import AddCourse from './AddCourse';

// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {
    return (
      <div style={{
        width:"100vm",
        height:"100vh",
        backgroundColor:"aliceblue",
      }}>
        <Router>
          <Appbar></Appbar>
            <Routes>
              <Route path="/addcourse" element={<AddCourse />} />
                <Route path="/login" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                
            </Routes>
        </Router>
        </div>
    );
}

export default App;