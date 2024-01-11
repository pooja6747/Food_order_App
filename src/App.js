import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { Navbar } from "./Component/Navbar";
import { Route,Routes } from "react-router-dom";
import { Header } from "./Component/Header";
import { Prroducts } from "./Component/Prroducts";
import { About } from "./Component/About";
import { Contact } from "./Component/Contact";
import { Calculator } from "./Calculator/Calculator";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


function App() {
  let [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000)
  },[])

  return (
    <div className="App">
    {
      loading?<ClipLoader color={'#3d2514'} css={override} size={40}/>
      :
      <>
  
      <Routes>
  
    <Route path='/' element={<Header/>}/>
    <Route path='/product' element={<Prroducts/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
   
  </Routes>
  <Navbar/>
{/* <Header/> */}
{/* <Calculator/> */}
       </>
    }
   </div>
  );


}

export default App;
