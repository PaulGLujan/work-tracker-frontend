import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function App() {
  return (
    <div className="container mx-auto mt-4 grid grid-cols-6 gap-4">
      <Sidebar />
      <div className="col-span-5">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
