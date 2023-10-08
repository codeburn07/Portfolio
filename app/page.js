import HomePage from "./components/HomePage/HomePage";
import WorkExp from "./components/WorkExp/WorkExp";
import Social from "./components/Social/Social";
import Resume from "./components/Resume/Resume";
import Header from "./components/Header";
import Scroll from "./components/Scroll/Scroll";
export default function Home() {
  return (
    <div className="">
      <Header />
      <HomePage />
      <Resume />
      {/* <WorkExp />
      <Social /> */}
      <Scroll />
    </div>
  );
}
