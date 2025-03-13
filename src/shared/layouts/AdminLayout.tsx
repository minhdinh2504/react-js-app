import { ReactNode } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const AdminLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="flex-grow flex">
                <Sidebar />
                <div className="content flex-grow p-4">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default AdminLayout;