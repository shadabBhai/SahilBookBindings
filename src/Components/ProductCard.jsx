
const ProductCard = ({ image, title, author }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="w-full h-48">
                <img className="object-cover w-full h-full" src={image} alt={title} />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {author}
                </p>
            </div>
        </div>
    );
};


export default ProductCard