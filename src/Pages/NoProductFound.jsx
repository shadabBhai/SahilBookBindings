

const NoProductFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <img
                src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150696458.jpg"
                alt="No products found"
                className="mb-4 w-64 h-64 md:w-80 md:h-80 object-cover"
            />
            <p className="text-2xl text-gray-700">No products found</p>
        </div>
    )
}

export default NoProductFound