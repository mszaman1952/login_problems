import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./components/Login";
import Registration from "./components/Registration";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;