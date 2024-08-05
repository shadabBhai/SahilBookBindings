import { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './Loading';
import ProductCard from '../Components/ProductCard';

const Product = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://freetestapi.com/api/v1/books');
                setData(response.data);
                console.log(response.data[0])
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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
            <div className="flex justify-center items-center min-h-screen" >
                <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.map(item => (
                        <ProductCard
                            key={item.id}
                            image={item.cover_image}
                            title={item.title}
                            author={item.author} />
                    ))}
                </div>

            </div>


        </div>
    );
}

export default Product