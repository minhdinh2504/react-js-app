import { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const CustomerLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default CustomerLayout;