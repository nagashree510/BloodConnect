
import { useEffect } from "react";
import { useState } from "react";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import Donate from "./components/Donate";
const App=()=>{
const [loading ,setLoading]=useState(true)
useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)
  },2000)
},[])
  return (
  <>
  <Layout>
    {loading &&<Loader/>}
    {!loading&&
    <div className="flex items-center w-1/2 h-full justify-center">
      </div>}
      <Donate/>
  </Layout>
  </>
  )
}

export default App;
