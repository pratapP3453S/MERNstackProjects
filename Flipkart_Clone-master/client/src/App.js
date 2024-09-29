import Headers from "./components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import Routing from "./Routes/Routing";

function App() {
  return (
    <>
      <Headers />
      <div style={{margin: '0 7% 0 7%'}}>
      <Routing />
      </div>
      <Footer />
    </>
  );
}

export default App;
