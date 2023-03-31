import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainRoute from "./routes/MainRoute";
import SingleProductPage from "./pages/SingleProductPage";

import HomePage from  "./pages/Home/HomePage";

function App() {
  return (
    <>

      <Navbar />
      <MainRoute />
      <Footer />

    </>
  );
}

export default App;
