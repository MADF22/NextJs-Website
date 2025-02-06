import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HeroComponent from "./components/HeroComponent";
import AchivesComponent from "./components/AchivesComponent";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavbarComponent />
      <HeroComponent />
      <AchivesComponent />
      <FooterComponent />
    </div>
  );
}
