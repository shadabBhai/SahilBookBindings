import { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './Loading';
import ProductCard from '../Components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToStore } from '../utils/ProductSlice';
import NoProductFound from './NoProductFound';

const Product = () => {


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch()
    const products = useSelector((state) => state.productForStore)
    const [searchQuery, setSearchQuery] = useState('');
    const [filterQuery, setFilterQuery] = useState(searchQuery)
    const [filteredProducts, setFilteredProducts] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://freetestapi.com/api/v1/books');
                //console.log(response.data)
                dispatch(addProductToStore(response.data))
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [dispatch]);

    const handleSearchChange = (e) => {
        // console.log(e.target.value)
        setSearchQuery(e.target.value)
    }
    const handleSearchFilter = () => {
        setFilterQuery(searchQuery)

    }
    useEffect(() => {
        if (products) {
            setFilteredProducts(
                products.filter(product =>
                    product.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
                    product.author.toLowerCase().includes(filterQuery.toLowerCase())
                )
            );
        }
    }, [filterQuery, products]);

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen gap-2 flex-wrap ">

            {
                Array.from({ length: 6 }).map((_, index) => (
                    <Loading key={index} />
                ))
            }



        </div>
    )
    if (error) return <p>Error: {error.message}</p>;


    return (
        <div>
            <div className="flex justify-center items-center m-4 space-x-4">
                <input
                    type="text"
                    placeholder="Search by title or author..."
                    className="p-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800 text-lg w-80"
                    onChange={handleSearchChange}
                />
                <button
                    className="px-5 py-3 bg-gray-200 hover:text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                    onClick={handleSearchFilter}

                >
                    Search
                </button>
            </div>

            {
                filteredProducts.length === 0 ? <NoProductFound /> :
                    (
                        <div className="flex justify-center items-center min-h-screen" >

                            <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {filteredProducts?.map(item => (
                                    <ProductCard
                                        key={item.id}
                                        image={item.cover_image}
                                        title={item.title}
                                        author={item.author} />
                                ))}
                            </div>

                        </div>
                    )
            }



        </div>
    );
}

export default Product