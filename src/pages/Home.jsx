import Headphones from "../components/Headphones/Headphones";
import { headphones } from "../headphones";
import { wireless_headphones } from "../headphones";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Headphones title="Наушники" arr={headphones} />
      <Headphones arr={headphones} />
      <Headphones title="Беспроводные наушники" arr={wireless_headphones} />
      <Footer ru="рус" eng="eng" />
    </>
  );
}
