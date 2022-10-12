import "./app.scss";
import Home from "./home/Home";
import { BrowserRouter, Route, Routes ,Navigate} from "react-router-dom";
import Register from "./components.js/register/Register";
import Login from "./components.js/login/Login";
import Watch from "./components.js/Watch/Watch";

const App = () => {
  const user=true;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Navigate to="/register" />}/>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element= {!user ? <Register /> : <Navigate to="/" />}/>
        {user && <><Route path="/series" element={<Home type="series" />} />
        <Route path="/movies" element={<Home type="movies" />} />
        <Route path="/watch" element={<Watch/>} /></>}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
