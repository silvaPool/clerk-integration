import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import AuthProviderWithHistory from "./providers/AuthProviderWithHistory";
import Home from "./pages/Home"
import About from "./pages/About"
import ProtectedRoute from "./components/ProtectedRoute";
import Hidden from "./pages/Hidden";

function App() {
 
  return (
    <>


    <div className="App">
      <AuthProviderWithHistory>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route element={<ProtectedRoute />}>
              <Route path="hidden" element={<Hidden />} />
          </Route>
        </Routes>
      </AuthProviderWithHistory>
    </div>
   
       
     
    </>
  );
}



export default App;
