import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import { Route } from "react-router-dom";

const App =  () => {

  return (
    <div>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/video/:categoryId:/:videoId" element={<Video></Video>}></Route>
     </Routes>
    </div>
  )
}

export default App