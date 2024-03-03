import HomePageContent from "./components/home-page-content";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className='relative overflow-hidden flex items-center text-center h-screen md:text-start w-full justify-center'>
        <HomePageContent/>

      </div>
    </>
  );
}
