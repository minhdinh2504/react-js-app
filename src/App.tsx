import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/customer/Home'
import Contact from './pages/customer/Contact'
import About from './pages/customer/About'
import CustomerLayout from './shared/layouts/CustomerLayout'
import Dashboard from './pages/admin/Dashboard'
import AdminLayout from './shared/layouts/AdminLayout'
import CategoryList from './pages/admin/category/CategoryList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer */}
        <Route path='/' element={<CustomerLayout />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* Admin */}
        <Route path='admin' element={<AdminLayout />}>
          <Route index={true} element={<Dashboard />} />
          <Route path='category' element={<CategoryList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
