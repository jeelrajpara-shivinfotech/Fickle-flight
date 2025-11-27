import { Outlet } from "react-router-dom";
import BaseNavbar from "../Components/BaseComponents/BaseNavbar";
import BaseFooter from "../Components/BaseComponents/BaseFooter";

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <BaseNavbar />

            <main className="grow">
                <Outlet />
            </main>
            <BaseFooter/>
        </div>
    )
}