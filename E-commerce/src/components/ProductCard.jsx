function ProductCard({product}){
    return <div>
        <div class='' >{`
            ID:${product.id},
            Product_title:${product.title},
            Product_price:${product.price},
            Product_category:${product.category}`
        }</div>
        <button>Add to cart</button>
    </div>
}

export default ProductCard;