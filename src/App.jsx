import { Routes, Route } from 'react-router-dom'
import { HomePage } from './webpage/pages/HomePage.jsx'
import { ProductsPage } from './webpage/pages/ProductsPage.jsx'

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductsPage />} />
      </Routes>
    </>
  )
}

