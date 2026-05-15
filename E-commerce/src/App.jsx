import ProductList from "./components/ProductList"
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import { useState } from "react"

function App() {

  const [cart,setCart] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");

  const handleAddToCart = (product) => {
    setCart([...cart,product]);
  }

  const products = [
    {id:1,title:"Pen",price:"10rs",image:null,category:"stationary"},
    {id:2,title:"Bottle",price:"999rs",image:null,category:"essentials"},
    {id:3,title:"Earbuds",price:"3000rs",image:null,category:"electronics"},
    {id:5,title:"Frame",price:"200rs",image:null,category:"Home decor"}
  ]

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">   
      <Navbar cart={cart}/>
      <div class = 'px-6 py-4'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter/>
        <ProductList products={filteredProducts} handleAddToCart={handleAddToCart}/>
      </div>
    </div>
  )
}

export default App
