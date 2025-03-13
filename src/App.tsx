import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/customer/Home'
import Contact from './pages/customer/Contact'
import About from './pages/customer/About'
import CustomerLayout from './shared/layouts/CustomerLayout'
import Dashboard from './pages/admin/Dashboard'
import AdminLayout from './shared/layouts/AdminLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer Routing */}
        <Route path="/" element={<CustomerLayout><Home /></CustomerLayout>} />
        <Route path="/about" element={<CustomerLayout><About /></CustomerLayout>} />
        <Route path="/contact" element={<CustomerLayout><Contact /></CustomerLayout>} />

        {/* Admin Routing */}
        <Route path="/admin/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
