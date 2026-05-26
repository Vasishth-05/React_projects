function Form () {
    return (
        <div>
            <form className="flex-col justify-end items-center">
                <div>Pet Name</div>
                <input 
                    type="text" 
                    placeholder="pet name" 
                    className="border-2 border-black-600 mb-4 " />
                <div>Pet Type</div>
                <input 
                    type="text" 
                    placeholder="Pet Type"
                     className="border-2 border-black-600 mb-4" />
                <div>Pet Breed</div>
                <input 
                    type="text" 
                    placeholder="pet Breed"
                     className="border-2 border-black-600 mb-4" />
                <div>Your Name</div>
                <input 
                    type="text" 
                    placeholder="Your Name"
                    className="border-2 border-black-600 mb-4" />
                <div>Phone Number</div>
                <input 
                    type="text" 
                    placeholder="Phone Number"
                    className="border-2 border-black-600 mb-4" />
            </form>
            <button className="border-2 border-black-600 mb-4 w-32 bg-green-500 hover:bg-green-400">Submit</button>
        </div>
    )
}

export default Form;