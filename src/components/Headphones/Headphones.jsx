import CardProduct from "../CardProduct/CardProduct";
import "./Headphones.css";

export default function Headphones({ title, arr }) {
  return (
    <section className="section-headphones">
      <h2 className="title-section-headphones">{title}</h2>
      <div className="card-wrapper">
        {arr.map((headphone) => (
          <CardProduct {...headphone} />
        ))}
      </div>
    </section>
  );
}
