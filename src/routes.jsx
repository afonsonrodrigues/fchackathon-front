import { Route, Routes } from "react-router-dom";
import AdminHome from "./pages/AdminHome";
import AdmLogin from "./pages/AdmLogin";
import Channels from "./pages/Channels";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Track from "./pages/Track";

export default function MainRoutes() {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Login />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/track/:id" element={<Track />} />
            <Route path="/admin/login" element={<AdmLogin />} />
            <Route path="/admin/home" element={<AdminHome />} />
            <Route path="/channels" element={<Channels />} />
        </Routes>
    );
}
