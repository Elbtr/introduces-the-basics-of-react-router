import { Link, useParams } from "react-router-dom";

function ProductList() {
  const params = useParams();

  return (
    <>
      <h1>The Product list.</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductList;
