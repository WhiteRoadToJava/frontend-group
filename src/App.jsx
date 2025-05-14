import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./tests/home_test3";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./pages/Unauthorized";
import EditUser from "./pages/user/EditUser";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Aboute from "./pages/Aboute";
import UserProfile from "./pages/user/UserProfile";
import AdminDashboard1 from "./pages/admin/AdminDashboard1";
import NewpPlace from "./pages/place/NewpPlace";
import ViewPlacesByOwzner from "./pages/place/ViewPlacesByOwzner";
import EditPlace from "./components/place/EditPlace";
import ViewPlace from "./components/place/ViewPlace";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app">
          <Navbar />
          <Header />

          <main className="main-content">
            <Routes>
              {/* public routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="/aboute" element={<Aboute />} />

              {/* protected routes for all authenticated users */}
              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<UserProfile />} /> 
                <Route path="/editUser" element={<EditUser />} /> 

                <Route path="/newplace" element={<NewpPlace />} /> 
                <Route path="/viewplacesbyowner" element={<ViewPlacesByOwzner />} /> 
                <Route path="/editplace/:id" element={<EditPlace />} /> 
                <Route exact path="/viewplace" element={<ViewPlace />} />
              </Route>

              {/* protected routes for admins only */}
              <Route element={<ProtectedRoute requiredRoles={["ADMIN"]} />}>
                <Route path="/admin" element={<AdminDashboard1 />} />
              </Route>
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
