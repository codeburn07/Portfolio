import HomePage from "./components/HomePage/HomePage";
import WorkExp from "./components/WorkExp/WorkExp";
import Social from "./components/Social/Social";
import Resume from "./components/Resume/Resume";
import Header from "./components/ThemeButton";
export default function Home({ Component, pageProps }) {
  return (
    <div className="">
      <Header/>
      <HomePage />
      <Resume />
      <WorkExp />
      <Social />
    </div>
  );
}

