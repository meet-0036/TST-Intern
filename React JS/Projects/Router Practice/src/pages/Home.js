import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
const nevigate = useNavigate();

function clickHandler() {
  nevigate('/products');  
}

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        {/* Go to <a href="/products">the new Page.</a> */}
        Go to <Link to="/products">the list of products</Link>.
      </p>
      <p>
    <button className="text-white border rounded-lg px-4 hover:bg-white/20" onClick={clickHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
