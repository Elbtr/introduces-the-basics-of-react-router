import { Link } from "react-router-dom";

const PRODUCT = [
  { id: "p1", title: "product-1" },
  { id: "p2", title: "product-2" },
  { id: "p3", title: "product-3" },
];

function ProductPage() {
  return (
    <>
      <h1>The Product page.</h1>
      <ul>
        {PRODUCT.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ProductPage;
