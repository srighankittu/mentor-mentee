import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MentorSignup from "./components/MentorSignup";
import MenteeSignup from "./components/MenteeSignup";

const routes = {
  home: {
    path: "/",
    component: <Login />,
  },
  mentor: {
    path: "/mentor-signup",
    component: <MentorSignup />,
  },
  mentee: {
    path: "/mentee-signup",
    component: <MenteeSignup />,
  },
};

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path={routes.home.path} element={routes.home.component} />
          <Route path={routes.mentor.path} element={routes.mentor.component} />
          <Route path={routes.mentee.path} element={routes.mentee.component} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
