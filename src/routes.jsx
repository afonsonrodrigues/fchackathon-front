import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Track from './pages/Track';
import AdmLogin from './pages/AdmLogin';
import AdminHome from './pages/AdminHome';

export default function MainRoutes() {
    return (
        <Routes>
            <Route >
                <Route path='/' element={<Login />} ></Route>
                <Route path='/login' element={<Login />} ></Route>
            </Route>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/home' element={<Home />} />
            <Route path='/track/:id' element={<Track />} />
            <Route path='/admin/login' element={<AdmLogin />} />
            <Route path='/admin/home' element={<AdminHome />} />
        </Routes>
    )
}