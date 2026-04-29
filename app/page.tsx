import info from "@/data/info.json";
import pricing from "@/data/pricing.json";
import gallery from "@/data/gallery.json";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <HomePage
      info={info}
      pricing={pricing}
      gallery={gallery}
    />
  );
}
