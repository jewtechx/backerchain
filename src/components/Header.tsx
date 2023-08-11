import { Outlet } from "react-router-dom";
import Footer from "./Footer";


function Header() {
  return (
  <div className="min-h-screen flex flex-col">
<h1 className="text-blue-950 text-center text-4xl">Hello BACKER CHAIN</h1>
<Outlet/ >

<Footer />
  </div>
  )
}

export default Header;
