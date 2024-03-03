import HomePageContent from "./components/home-page-content";
import Navbar from "./components/navbar";
import GridBackground from "@/lib/grid-background";

export default function Home() {
  return (
    <>
      <Navbar/>
      <GridBackground className='flex items-center '>
        <HomePageContent/>
      </GridBackground>

    </>
  );
}
