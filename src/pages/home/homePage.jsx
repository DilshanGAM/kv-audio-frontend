import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import Home from "./home";
import Items from "./items";
import Gallery from "./gallery";
import Contact from "./contact";
import ErrorNotFound from "./error";
import ProductOverview from "./productOverview";

export default function HomePage(){
  return(
    <>
      <Header/>
      <div className="h-[calc(100vh-100px)] w-full bg-primary">
        <Routes path="/*">
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/items" element={<Items/>}/>
          <Route path="/product/:key" element={<ProductOverview/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/*" element={<ErrorNotFound/>}/>
        </Routes>
      </div>
    </>
  )
}