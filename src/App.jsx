import "./App.css";
import Header from "./components/Header";
import Trending from "./components/Trending";
import Likes from "./components/Likes";
import Footer from "./components/Footer";

import moviesData from "./data/moviesData";

function App() {
  return (
    <>
      <div>
        <Header />
        {/* Her bir film verisini Trending bileşenine geçirin */}
        {moviesData.map((movie) => (
          <Trending key={movie.id} movie={movie} />
        ))}
        <Likes />
        <Footer />
      </div>
    </>
  );
}

export default App;
