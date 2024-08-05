

const Loading = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg w-full">
            <div className="w-96 h-48 bg-gray-300 animate-pulse"></div>
            <div className="px-6 py-4">
                <div className="h-6 bg-gray-300 rounded mb-2 w-3/4 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
            </div>
        </div>
    )
}

export default Loading