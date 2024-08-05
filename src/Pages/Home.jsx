

const Home = () => {
    return (
        <>

            <div >
                {/* Hero Section */}
                <section
                    className="bg-cover bg-center w-full h-screen flex items-center justify-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                    <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
                        <div className="text-center text-white px-4 md:px-8">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">Professional Bookbinding Services</h1>
                            <p className="text-lg md:text-2xl mb-8">Crafting beautiful books with precision and care.</p>

                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded shadow-md">
                                <h3 className="text-2xl font-bold mb-4">Thesis</h3>
                                <p className="text-gray-700">Thesis services for your unique needs.</p>
                            </div>
                            <div className="bg-white p-6 rounded shadow-md">
                                <h3 className="text-2xl font-bold mb-4">Book Restoration</h3>
                                <p className="text-gray-700">Expert restoration services to bring your old books back to life.</p>
                            </div>
                            <div className="bg-white p-6 rounded shadow-md">
                                <h3 className="text-2xl font-bold mb-4">Printing & Binding</h3>
                                <p className="text-gray-700">High-quality printing and binding services for all types of books.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-16">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Us</h2>
                        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
                            At BookBinder, we are passionate about the art of bookbinding. With years of experience, our team is dedicated to providing top-notch services to our clients. Whether you need custom bookbinding, restoration, or printing, we ensure every project is handled with the utmost care and precision.
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
                        <p className="text-gray-700 text-lg md:text-xl mb-8">Have a question or need a quote? Get in touch with us today!</p>
                        {/* Uncomment and use the following Link component if needed */}
                        {/* <Link to="/contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </Link> */}
                    </div>
                </section>


            </div>
        </>
    )
}

export default Home