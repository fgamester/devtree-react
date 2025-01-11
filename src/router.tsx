import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomeView from "./views/HomeView";
import NotFoundView from "./views/NotFoundView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomeView />} />
                    <Route path="*" element={<NotFoundView />} />
                    <Route >
                        <Route path="/auth/login" element={<LoginView />} />
                        <Route path="/auth/register" element={<RegisterView />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
