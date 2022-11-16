import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AdminHome from "./pages/AdminHome";
import AdmLogin from "./pages/AdmLogin";
import Channels from "./pages/Channels";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Track from "./pages/Track";
import { getItem } from "./utils/storage";
import UserDetails from "./pages/UserDetails";

export default function MainRoutes() {
    const ProtectedRoutes = ({ redirectTo }) => {
        const isAthenticated = getItem('token');

        return isAthenticated ? <Outlet /> : <Navigate to={redirectTo} />
    }

    const PreventDuplicatedLoginRoutes = ({ redirectTo }) => {
        const isAthenticated = getItem('token');

        return isAthenticated ? <Navigate to={redirectTo} /> : <Outlet />;
    }



    return (
        <Routes>
            <Route element={<PreventDuplicatedLoginRoutes redirectTo='/home' />}>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
            </Route>
            <Route path='/signup' element={<SignUp />} />
            <Route element={<ProtectedRoutes redirectTo='/' />}>
                <Route path='/home' element={<Home />} />
                <Route path="/channels" element={<Channels />} />
                <Route path="/track/:id" element={<Track />} />
                <Route path="/user/details" element={<UserDetails />} />
            </Route>
            <Route path="/admin/login" element={<AdmLogin />} />
            <Route path="/admin/home" element={<AdminHome />} />
        </Routes>
    )


    // return (
    //     <Routes>
    //         <Route>
    //             <Route path="/" element={<Login />}></Route>
    //             <Route path="/login" element={<Login />}></Route>
    //         </Route>
    //         <Route path="/signup" element={<SignUp />} />
    //         <Route path="/home" element={<Home />} />
    //         <Route path="/channels" element={<Channels />} />
    //         <Route path="/track/:id" element={<Track />} />
    //         <Route path="/admin/login" element={<AdmLogin />} />
    //         <Route path="/admin/home" element={<AdminHome />} />
    //     </Routes>
    // );
}
