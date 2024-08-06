const EmptyCart = () => {
    return (
        <div className="container mx-auto p-4 h-screen">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">

                <h1 className="text-2xl font-semibold mb-2">Your Cart is Empty</h1>
                <p className="text-gray-600 mb-4">
                    {"It looks like you haven't added anything to your cart yet. Browse our products and add items to your cart to see them here."}
                </p>

            </div>
        </div>
    );
};

export default EmptyCart;
