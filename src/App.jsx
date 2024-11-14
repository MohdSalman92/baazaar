
import './App.css'
import Layout from './/Components/Layout'
// import ProductList from './Pages/ProductList'
import ProductDetails from './Pages/ProductDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from './Pages/ProductList'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<ProductList />} />
        <Route path='ProductDetails/:id' element={<ProductDetails />} />
        </Route>
      </Routes>
      </BrowserRouter>
      {/* <Prod /> */}
    </>
  )
}

export default App
