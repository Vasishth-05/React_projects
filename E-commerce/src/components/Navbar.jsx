function Navbar({cart}){
    return <div class='flex justify-between items-center px-6 py-4 bg-white shadow-md'>
        <h1>Mini Store</h1>
        <h1>Cart : {cart.length}</h1>
    </div>
}

export default Navbar;