
const NetworkError = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <img
        src="https://img.freepik.com/free-vector/page-found-with-people-connecting-plug-concept-illustration_114360-1939.jpg?w=1060&t=st=1722894699~exp=1722895299~hmac=298e33935181b132eca85a31feab069bd2664b57fcc93834225c5609486965b9"
        alt="No products found"
        className="mb-4 w-64 h-64 md:w-80 md:h-80 object-cover"
      />
      <p className="text-2xl text-gray-700">{message}</p>
    </div>
  )
}

export default NetworkError