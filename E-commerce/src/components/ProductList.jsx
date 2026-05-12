import ProductCard from "./ProductCard";

function ProductList({products}){
    return <div>
        <div>
            {products.map((product,index) => (
                <ProductCard key={index} product={product}/>
            ))}
        </div>
    </div>
}

export default ProductList;