import React from "react"
import Navbar from "./Navbar"
const Layout=({children})=>{
return (
    <div className="bg-rose-600 min-h-screen font-display p-4 flex flex-col items-center">
    <Navbar/>
    {children}
    </div>
   
)
}
export default Layout