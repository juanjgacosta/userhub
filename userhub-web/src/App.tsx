import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <p>Main Area</p>
    </div>
  );
}
