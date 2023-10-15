import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotesPages from "./Pages/NotesPages/NotesPages";
import SignIn from "./Pages/SignInpage/SignIn";
import SignUp from "./Pages/SignUpPage/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="appdiv">
        <Routes>
          <Route path="/notes" element={ <NotesPages /> } />
          <Route path="/" element={ <SignIn/> } />
          <Route path="/signup" element= { <SignUp/> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
