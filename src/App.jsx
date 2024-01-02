 import { useEffect,useState } from "react";
 import User from "./pages/User";
 import Nav from "./components/Nav";
 import "./App.css";
 function App(){

    const[data,setData]=useState("");


    return(
      <>
         <Nav setData={setData} data={data}/>
         <User data={data} setData={setData}/>
      </>
    )
 }

 export default App;