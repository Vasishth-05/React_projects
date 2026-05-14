function ProductCard({product,handleAddToCart}){
    return <div class='border rounded-2xl p-5 w-64 shadow-md bg-white hover:scale-105 transition space-y-3'>
        <div class='w-full p-6 bg-red-50 shadow-md rounded-lg ' >
            <div class='text-xl font-semibold mb-2'>{product.id}</div>
            <div class='text-xl font-semibold mb-2'>{product.title}</div>
            <div class='text-lg text-green-500 font-semibold mb-2'>{product.price}</div>
            <div class='text-sm text-gray-500 mb-4'>{product.category}</div>
        </div>
        <button onClick={() => handleAddToCart(product)} class='bg-black text-white px-4 py-2 rounded-lg w-full hover:opacity-80'>Add to cart</button>
    </div>
}

export default ProductCard;