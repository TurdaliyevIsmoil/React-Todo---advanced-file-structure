import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div
      className="w-screen min-h-screen bg-cover bg-fixed"
      style={{
        backgroundImage:
          "url(https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg)",
      }}
    >
      <Navbar />
      <Home />;
    </div>
  );
}

export default App;
