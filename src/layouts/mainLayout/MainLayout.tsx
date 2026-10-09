import { Outlet } from "react-router-dom"
import Navbar from "../../components/navBar/NavBar"
import Footer from "../../components/footer/Footer"

export default function UserLayout() {
    return <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
}