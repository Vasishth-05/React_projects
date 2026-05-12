import CategoryFilter from "./components/CategoryFilter"
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import SearchBar from "./components/SearchBar"

function App() {

  const products = [
    {id:1,title:"Pen",price:"10rs",image:null,category:"stationary"},
    {id:2,title:"Bottle",price:"999rs",image:null,category:"essentials"},
    {id:3,title:"Earbuds",price:"3000rs",image:null,category:"electronics"},
    {id:4,title:"Mouse",price:"400rs",image:null,category:"electronics"},
    {id:5,title:"Frame",price:"200rs",image:null,category:"Home decor"}
  ]

  return (
    <>
      <CategoryFilter/>
      <Navbar/>
      <ProductList products={products}/>
      <SearchBar/>
    </>
  )
}

export default App
