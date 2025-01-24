import { Outlet } from "react-router";

function App() {
  return (
    <>
      <nav>NavBar</nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
