import ProductList from "./components/ProductList"
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import { useEffect, useState } from "react"

function App() {

  const [cart,setCart] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");
  const [selectedCategory,setSelectedCategory] = useState("All");
  const [products,setProducts] = useState([])

  const handleAddToCart = (product) => {
    setCart([...cart,product]);
  }

  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.error("Error fetching Data:", error);
      }
    }
    fetchData();
  } , []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
    (
      selectedCategory === "all" ||
      product.category.toLowerCase() === selectedCategory.toLowerCase()
    )
  );

  return (
    <div className="min-h-screen bg-gray-100">   
      <Navbar cart={cart}/>
      <div className = 'px-6 py-4'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <ProductList products={filteredProducts} handleAddToCart={handleAddToCart}/>
      </div>
    </div>
  )
}

export default App
