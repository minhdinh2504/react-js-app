import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/customer/Home'
import Contact from './pages/customer/Contact'
import About from './pages/customer/About'
import CustomerLayout from './shared/layouts/CustomerLayout'
import Dashboard from './pages/admin/Dashboard'
import AdminLayout from './shared/layouts/AdminLayout'
import CategoryList from './pages/admin/category/CategoryList'
import AlertContext, { AlertProvider } from './context/AlertContext'
import Alert from './shared/components/Alert'
import Login from './pages/customer/Login'
<<<<<<< HEAD
import Register from './pages/customer/Register'
=======
import UserProvider from './context/UserContext'
>>>>>>> 0559aeea2e284d2ac97f9333dd27e877da25a3c9

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <AlertProvider>
        <Alert />
        <Routes>
          {/* Customer */}
          <Route path='/' element={<CustomerLayout />}>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          {/* Guest */}
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          {/* Admin */}
          <Route path='admin' element={<AdminLayout />}>
            <Route index={true} element={<Dashboard />} />
            <Route path='category' element={<CategoryList />} />
          </Route>
        </Routes>
      </AlertProvider>
=======
      <UserProvider>
        <AlertProvider>
          <Alert />
          <Routes>
            {/* Customer */}
            <Route path='/' element={<CustomerLayout />}>
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            {/* Guest */}
            <Route path='login' element={<Login />} />
            {/* Admin */}
            <Route path='admin' element={<AdminLayout />}>
              <Route index={true} element={<Dashboard />} />
              <Route path='category' element={<CategoryList />} />
            </Route>
          </Routes>
        </AlertProvider>
      </UserProvider>
>>>>>>> 0559aeea2e284d2ac97f9333dd27e877da25a3c9
    </BrowserRouter>
  )
}

export default App
