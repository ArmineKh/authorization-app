import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";

import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className='bg-light' style={{minHeight: "100vh"}}>
      
          <BrowserRouter>
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/news" element={<News />} />

                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
              
            
                
                <Route
                  path="*"
                  element={
                    <main style={{ padding: "1rem" }}>
                      <p>There's nothing here!</p>
                    </main>
                  }
                >
                </Route>

              </Routes>
          </BrowserRouter>
        
    </div>
  );
}

export default App;
