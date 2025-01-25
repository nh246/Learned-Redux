import { Outlet } from "react-router";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-white">
      <NavBar />
      <main className="max-w-7xl mx-auto min-h-screen px-4 text-black">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
