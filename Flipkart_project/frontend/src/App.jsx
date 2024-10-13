import Header from "./components/header/Header"
import Home from "./components/home/Home"
import DataProvider from "./context/DataProvider"
import DetailView from "./components/details/DetailView"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import Cart from "./components/cart/Cart"


function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: "54px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>

  )
}

export default App
