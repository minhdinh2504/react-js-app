import { faAngleDoubleLeft, faAngleDoubleRight, faCheckCircle, faDashboard, faUser, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(true);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 765) {
                setIsExpanded(false);
            } else {
                setIsExpanded(true);
            }
        };

        // Set initial state
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <aside className={`flex flex-col bg-white border-t-1 border-r-1 border-[#c2c2c2] h-[calc(100vh-64px)] ${isExpanded ? "w-64" : "w-12"}`}>
            <div className="sidebar-top">
                <Link to={"/dashboard"} className="border-b border-slate-100 flex items-center">
                    <FontAwesomeIcon icon={faDashboard} className="p-4 min-w-4" />
                    <span className={`${isExpanded ? "block" : "hidden"}`}>Menu</span>
                </Link>
            </div>
            <div className="sidebar-menu flex-grow">
                <Link to={"/manage/quiz"} className="border-b border-slate-100 flex items-center hover:bg-[#33adff] hover:text-white">
                    <FontAwesomeIcon icon={faCheckCircle} className="p-4 min-w-4" />
                    <span className={`${isExpanded ? "block" : "hidden"}`}>Todo Management</span>
                </Link>
                <Link to={"/manage/quiz"} className="border-b border-slate-100 flex items-center hover:bg-[#33adff] hover:text-white">
                    <FontAwesomeIcon icon={faUser} className="p-4 min-w-4" />
                    <span className={`${isExpanded ? "block" : "hidden"}`}>User Management</span>
                </Link>
                <Link to={"/manage/quiz"} className="border-b border-slate-100 flex items-center hover:bg-[#33adff] hover:text-white">
                    <FontAwesomeIcon icon={faUserShield} className="p-4 min-w-4" />
                    <span className={`${isExpanded ? "block" : "hidden"}`}>Role Management</span>
                </Link>
            </div>
            <div className="sidebar-bottom flex justify-end">
                <button type="button" onClick={toggleSidebar} className="whitespace-nowrap  items-center" title="Toggle Sidebar">
                    <FontAwesomeIcon icon={isExpanded ? faAngleDoubleLeft : faAngleDoubleRight} className="p-4 min-w-4" />
                </button>
            </div>
        </aside>
    )
}
export default Sidebar;