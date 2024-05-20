import Footer from "../components/Footer/Footer";

export default function Contacts() {
  return (
    <>
      <div className="for-other-pages">
        <h1>Контакты:</h1>
        <p>
          <a href="tel:+74996861014" className="phone">
            +74996861014
          </a>
        </p>
      </div>
      <Footer ru="рус" eng="eng" />
    </>
  );
}
