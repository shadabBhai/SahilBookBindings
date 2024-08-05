const Error = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <p className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</p>
                <p className="mt-2 text-gray-600">Sorry, the page you are looking for does not exist.</p>
                <a
                    href="/"
                    className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                >
                    Go to Home
                </a>
            </div>
        </div>
    );
};

export default Error;