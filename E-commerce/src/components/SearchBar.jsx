function SearchBar({searchTerm,setSearchTerm}){
    return <div class = 'flex justify-center mb-6'>
        <input type="text" placeholder="Search for things here..." class='border p-3 rounded-xl w-full max-w-xl outline-none'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
    </div>
}

export default SearchBar;