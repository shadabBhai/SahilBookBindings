import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../utils/CartSlice"
const Cart = () => {
    const cartItems = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    // console.log(cartItems)
    const handleRemoveFromCart = (id) => {
        console.log(id)
        dispatch(removeFromCart({ id }))
    }
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            <div className="space-y-4">
                {cartItems.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                        <div className="flex items-center">
                            <img
                                src={item.cover_image}
                                alt={item.title}
                                className="w-16 h-16 object-cover rounded-md mr-4"
                            />
                            <div>
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                                <p className="text-sm text-gray-600">Rate: ${item.rate}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => handleRemoveFromCart(item.id)}
                            className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-200"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart