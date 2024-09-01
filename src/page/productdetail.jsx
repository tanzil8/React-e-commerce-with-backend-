import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  // Ensure the color logic runs only after the product data is fetched
  let color = product ? (product.price >= 300 ? 'red' : product.price > 100 ? 'green' : 'orange') : 'black';

  return (
    <div className="m-14 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">Product Detail</h1>
      {product ? (
        <div className="m-14 w-1/2 flex flex-col justify-center items-center">
          <img className="h-52 w-52" src={product.image} alt={product.title} />
          <h1 className="my-3 text-center text-2xl font-bold ">
            {product.title}
          </h1>
          <p className="text-gray-600 font-semibold text-center">{product.description}</p>
          <p style={{ color: color }} className="text-center font-bold">
            ${product.price}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Product;
