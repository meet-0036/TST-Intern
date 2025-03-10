import { Link } from "react-router-dom";

const productList = [
  {
    id: 1,
    title: "Soup",
  },
  {
    id: 2,
    title: "Liquid",
  },
  {
    id: 3,
    title: "Detergent",
  },
];

function ProductsPage() {
  return (
    <>
      <h1>The Products Page : </h1>
      <ul>
        {productList.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
