import ProductCard from "./ProductCard";

function ProductList({products , handleAddToCart}){
    return <div>
        <div class="flex flex-wrap gap-6 justify-center p-6 max-w-7xl mx-auto">
            {products.map((product,index) => (
                <ProductCard key={index} product={product   } handleAddToCart={handleAddToCart}/>
            ))} 
        </div>
    </div>
}

export default ProductList;