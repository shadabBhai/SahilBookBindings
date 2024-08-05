

const NoProductFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <img
                src="https://example.com/empty-shop.png" // Replace with the actual URL of the empty shop image
                alt="No products found"
                className="mb-4 w-64 h-64 object-cover"
            />
            <p className="text-2xl text-gray-700">No products found</p>
        </div>
    )
}

export default NoProductFound