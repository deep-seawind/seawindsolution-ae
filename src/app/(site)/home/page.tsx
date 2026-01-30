import React from "react"; 

import SolutionServices from "./Components/SolutionServices";
import FuturisticTech from "./Components/FuturisticTech";
import Commitment from "./Components/Commitment";
import Projects from "./Components/Projects";
import HomeContact from "./Components/HomeContact";
import SearchDomain from "./Components/SearchDomain";


export default function HireDeveloperPage() {
 

  return (
    <>
  
      <SolutionServices />
      <FuturisticTech />
      <Commitment />
      <Projects />
      <SearchDomain/>
      <HomeContact />
    </>
  );
}
