import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addToCart } from '../utils/CartSlice';

const ProductDetail = () => {
    const { id } = useParams(); // Extract product id from the URL
    const productList = useSelector((state) => state.productForStore); // Get products from Redux store
    const [singleProduct, setSingleProduct] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        const foundProduct = productList.find(item => item.id == id);
        setSingleProduct(foundProduct)
    }, [])
    const handleAddToCart = () => {
        dispatch(addToCart(singleProduct))
    }

    // console.log(singleProduct)
    if (!singleProduct) return <p>Product isLoading</p>
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-center items-center">
                    <img
                        src={singleProduct.cover_image}
                        alt={singleProduct.title}
                        className="w-full h-full object-cover rounded-lg shadow-lg" // Adjust width and height as needed
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-2">{singleProduct.title}</h1>
                    <h4 className="text-lg font-semibold text-gray-800">
                        Genre:{" "}
                        <span className="text-gray-600">{singleProduct.genre.join(" , ")}</span>
                    </h4>
                    <p className="text-lg text-gray-700 mb-4">{singleProduct.description}</p>
                    <p className="text-md font-semibold mb-2">Author: {singleProduct.author}</p>
                    <p className="text-md font-semibold mb-4">Publication Year: {singleProduct.publication_year}</p>
                    <button
                        onClick={handleAddToCart}
                        className="bg-gray-200 text-black py-2 px-4 rounded-md hover:bg-gray-800 hover:text-white transition duration-200"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
