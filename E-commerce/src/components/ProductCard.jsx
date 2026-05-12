function ProductCard({product}){
    return <div>
        <div>{`
            ID:${product.id},
            Product_title:${product.title},
            Product_price:${product.price},
            Product_category:${product.category}`}</div>
    </div>
}

export default ProductCard;