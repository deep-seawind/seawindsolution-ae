import Commitment from "@/app/(site)/home/Components/Commitment";
import Contact from "@/app/(site)/home/Components/HomeContact";
import FuturisticTech from "@/app/(site)/home/Components/FuturisticTech";
import Hero from "@/app/(site)/home/Components/Hero";
import Projects from "@/app/(site)/home/Components/Projects";
import Solution from "@/app/(site)/home/Components/SolutionServices";
import SearchDomain from "./(site)/home/Components/SearchDomain";


export default function Home() {
  return (
    <>
      <main>
       <SearchDomain/>
        <Solution />
        <FuturisticTech />
        <Commitment />
      
        <Projects />
        <Contact />
      </main>
    </>
  )
}
