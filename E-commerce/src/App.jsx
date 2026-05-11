import CategoryFilter from "./components/CategoryFilter"
import Navbar from "./components/Navbar"
import ProductCart from "./components/ProductCart"
import ProductList from "./components/ProductList"
import SearchBar from "./components/SearchBar"

function App() {

  return (
    <>
      <CategoryFilter/>
      <Navbar/>
      <ProductCart/>
      <ProductList/>
      <SearchBar/>
    </>
  )
}

export default App
