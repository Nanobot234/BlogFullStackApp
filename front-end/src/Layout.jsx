import NavBar from "./pages/NavBar";
import { Outlet } from "react-router-dom";


// This is the parent path
export default function Layout()  {
     return (
         <>
         <NavBar/>
         <Outlet/> 
         </>
     )
}