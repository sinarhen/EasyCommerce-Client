import HomePageContent from "./components/home-page-content";
import Navbar from "./components/navbar";
import GridBackground from "@/components/ui/grid-background";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="w-full overflow-x-hidden transition-colors duration-700 min-h-screen flex items-center dark:bg-black bg-white  justify-center relative dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
        <HomePageContent/>
      </div>

    </>
  );
}
