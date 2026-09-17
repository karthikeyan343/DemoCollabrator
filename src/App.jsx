import { useState } from 'react'
import './App.css'
import PaymentSuccessPage from './components/SpecifiedComponents/Home/Payment/PaymentSucessPage'
import POS from './Pages/POS'
import PayPage from './Pages/PayPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<POS />} />
        <Route path="/payment" element={<PayPage />} />
        <Route
          path="/payment-success"
          element={<PaymentSuccessPage />}
        />
      </Routes>
    </Router>
  </>
)
}

export default App
