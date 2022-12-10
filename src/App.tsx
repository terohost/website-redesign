import "./App.css";
import Hero from "./pages/hero";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-white h-screen pb-20">
      <NavBar />
      <Hero />
      <p className=""></p>
    </div>
  );
}

export default App;
