import { Link, useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <p>Product Details...</p>
      <p>Passing id in URL: {params.productId}</p>
      <p>
        <Link to="..">BACK</Link>
      </p>
    </>
  );
}

// .. one level in higher(Not render sibling)
// this is not fixed - relative path