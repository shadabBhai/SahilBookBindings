import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../utils/CartSlice"
import EmptyCart from "../Components/EmptyCart"
import { Link } from "react-router-dom"
const Cart = () => {
    const cartItems = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    // console.log(cartItems)
    const handleRemoveFromCart = (id) => {
        console.log(id)
        dispatch(removeFromCart({ id }))
    }
    return cartItems.length === 0 ? <EmptyCart /> : (
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
                            className="bg-gray-200 hover:text-white py-1 px-3 rounded-md hover:bg-red-800 transition duration-200"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <div className="flex justify-center items-center">
                    <button className="bg-gray-500 text-white py-1 px-3 rounded-md disabled">Total Amount : $</button>
                </div>
                <div className="flex justify-center items-center">
                    <Link to="/checkout"> <button className="bg-gray-200 hover:text-white py-1 px-3 rounded-md hover:bg-gray-800 transition duration-200">Check Out</button></Link>
                </div>

            </div>
        </div>
    )

}

export default Cart