import Heading from "./componenetheading/heading";
import Banner from "./componentbanner/banner";
import { useEffect, useState } from "react";
import Login from "./page/signin";
import Signup from "./page/signup";
import Product from "./page/productdetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from '/src/page/home.jsx';  
function App() {
  const [search, setSearch] = useState('');
  const [priority, setPriority] = useState('');
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const filteredProducts = product
    .filter((data) => {
      return search === '' ? data : data.category.toLowerCase().includes(search.toLowerCase());
    })
    .filter((d) => {
      if (priority === 'high') {
        return d.price >= 300;
      } else if (priority === 'medium') {
        return d.price > 100 && d.price < 300;
      } else if (priority === 'low') {
        return d.price <= 100;
      } else {
        return true; // Show all products if no filter is applied
      }
    });

  return (
    <>
      <BrowserRouter>
        <nav class="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
          <div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
            <div class="text-indigo-500 md:order-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
              <ul class="flex font-semibold justify-between">
                <li class="md:px-4 md:py-2 text-indigo-500"><Link to="/Login">Signin</Link></li>
                <li class="md:px-4 md:py-2 text-indigo-500"><Link to="/Signup">Signup</Link></li>
                <li class="md:px-4 md:py-2 text-indigo-500"><Link to="/">Home</Link></li>
                <li>  	<form class="flex items-center max-w-sm mx-auto">
		<label for="simple-search" class="sr-only">Search</label>

              <div class="relative w-full">
                        <input
                            type="text"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            id="simple-search"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                            placeholder="Search product name..."
                            required
                        />
                    </div>
					</form></li>
					<li><select class="ml-6 w-28 h-10 round md:rounded" id="priority" onChange={(e) => setPriority(e.target.value)}>
                    <option value="">All</option>
                    <option value="high">HIGH</option>
                    <option value="medium">MEDIUM</option>
                    <option value="low">LOW</option>

                </select></li>     
              </ul>
            </div>
            <div class="order-2 md:order-3">
              <button class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Login</span>
              </button>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/product/:id" element={<Product />} />

          <Route path="/" element={
            <>  <Banner />
            <Heading />
            <div className="flex flex-wrap m-6 mt-7">
        {filteredProducts.map((d) => {
          let { price } = d;
          let color = price >= 300 ? 'red' : price > 100 ? 'green' : 'orange';
          return (
            <>
           <Link  to={`/Product/${d.id}`}   key={d.id} class="max-w-2xl mx-auto">
       <div  class="max-w-2xl mx-auto">
              <div class="mt-12 bg-gray-100 shadow-md rounded-lg max-w-sm min-h-96 max-h-full dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="h-72 rounded-t-lg p-8" src={d.image} alt="product image" height={72} />
                </a>
                <div class="px-5 pb-5">
                  <a href="#">
                    <h1 class="text-gray-900 font-bold text-2xl tracking-tight dark:text-white">{d.category}</h1>
                    <h3 class="text-gray-400 font-semibold text-xs tracking-tight dark:text-white mt-1">{d.description}</h3>
                  </a>
                  <div class="mt-5 flex items-center justify-between">
                    <span style={{ color: color }} class="text-3xl font-bold text-gray-900 dark:text-white">{d.price}</span>
                    <a href="#"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                  </div>
                </div>
              </div>
           </div>
           </Link>
           </>
          );
        })}
      </div>
      </>
          }
      
      
  
      
      /> {/* Add Home route */}
        </Routes>
      </BrowserRouter>

    
      
    </>
  );
}

export default App;
