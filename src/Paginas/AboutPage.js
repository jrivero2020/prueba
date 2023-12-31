import { Link } from "react-router-dom";
export default function AboutPage() {
  return (
    <div>
      <h1>Estamos otro </h1>
      <Link to="/">Ir a la pagina principal</Link>
      <p> </p>
      <Link to="/users">Ir usuarios</Link>
    </div>
  );
}
