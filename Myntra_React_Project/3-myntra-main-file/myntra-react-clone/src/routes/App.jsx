import Footer from "../components/Footer"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import FetchItems from "../components/FetchItems"
import { useSelector } from "react-redux"
import LoadingSpinner from "../components/LoadingSpinner"
import { useState } from "react"
function App() {

  const fetchStatus = useSelector((store) => store.fetchStatus);
  // const [fetch , currentlyFetching] = useState(false);
  

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  )
}

export default App;
