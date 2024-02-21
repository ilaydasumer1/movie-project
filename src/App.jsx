import './App.css';
import Header from './components/Header';
import Trending from "./components/Trending";
import Likes from "./components/Likes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
      <Header />
      <Trending />
      <Likes />
      <Footer />
      </div>
    </>
  )
}

export default App
