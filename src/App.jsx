import Header from "./components/Header";
import Trending from "./components/Trending";
import Likes from "./components/Likes";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="app-component">
        <Header />
        <Trending />
        <Likes />
        <Footer />
      </div>
  );
}

export default App;
