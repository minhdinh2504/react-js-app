import { ReactNode, useContext, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet, useNavigate } from 'react-router-dom';
import UserContext from "../../context/UserContext";
import AlertContext from "../../context/AlertContext";
import { isEmpty } from 'lodash';


const AdminLayout = () => {
  const userStore = useContext(UserContext);
  const alert = useContext(AlertContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (isEmpty(userStore?.user)) {
      alert?.error("Yêu cầu đăng nhập")
      navigate("/login")
    }
  }, [])

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex">
        <Sidebar />
        <div className="content flex-grow p-4">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AdminLayout;
