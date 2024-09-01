import { useEffect, useState  } from "react"
function Card() {
    







	const [product,  setProduct] = useState([])
	
		useEffect(()=>{
			fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((data)=> setProduct(data))
		},[])
	
		console.log(product);
		
		filteredProducts.map((d)=>{
	
   return(
    <>
<div className="flex flex-wrap m-6 mt-7">
<div class=" max-w-2xl mx-auto">


	<div class= " mt-12 bg-gray-100 shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
		<a href="#">
			<img class="rounded-t-lg p-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7SyzPwd3AYMniANu8X-QaA2xxO-G0Y2isA&s" alt="product image" />
        </a>
			<div class="px-5 pb-5">
				<a href="#">
					<h1 class="text-gray-900 font-bold text-2xl tracking-tight dark:text-white">Apple Watch Series 7
						GPS, Aluminium Case, Starlight Sport</h1>
					<h3 class="text-gray-400 font-semibold text-1xl tracking-tight dark:text-white mt-2">Apple Watch Series 7
						GPS, Aluminium Case, Starlight Sport</h3>
				</a>
				
				<div class="mt-5 flex items-center justify-between">
					<span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
					<a href="#"
						class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
						to cart</a>
				</div>
			</div>
	</div>



</div>

</div>
    </>
   )
})}




export default Card