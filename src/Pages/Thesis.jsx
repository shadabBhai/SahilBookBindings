import { useState } from 'react'
import { useDispatch } from "react-redux"
import { addThises } from '../utils/ThisesSlice'
import { useNavigate } from "react-router-dom"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { storage } from '../utils/Firebase'

const Thesis = () => {
    const [formData, setFormData] = useState({
        pageCount: '',
        coverPageColor: 'red',
        coverPagePrintingColor: 'golden',
        transparentFoil: 'no',
        address1: '',
        address2: '',
        pin: '',
        district: '',
        state: '',
        mobile: '',
        email: '',
        name: '',
    });
    const dispatch = useDispatch()
    const [file, setFile] = useState(null)
    const navigate = useNavigate()


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file' && files) {
            setFile(files[0]);
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        if (!file) {
            alert("Please select  a file");
            return
        }
        const storageRef = ref(storage, `theses/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                // console.log("Upload is" + progress + "% done");
            },
            (error) => {
                console.error("Upload failed:", error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                    const fileMetadata = { name: file.name, type: file.type, size: file.size, downloadURL };
                    dispatch(addThises({ ...formData, fileMetadata }))
                    // console.log({ ...formData, fileMetadata });
                })

            }
        )




        setFormData({

            pageCount: '',
            coverPageColor: 'red',
            coverPagePrintingColor: 'golden',
            transparentFoil: 'no',
            address1: '',
            address2: '',
            pin: '',
            district: '',
            state: '',
            mobile: '',
            email: '',
            name: '',

        })
        setFile(null)
        navigate("/checkout")

    };

    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row space-x-0 md:space-x-4 p-4 bg-white rounded-lg shadow-md w-full max-w-4xl">
                {/*Thesis deatils */}
                <div className="flex flex-col space-y-4 md:w-1/2">
                    <div className="mb-4">
                        <label className="block text-gray-700">Choose File</label>
                        <input
                            type="file"
                            name="file"
                            onChange={handleChange}
                            className="mt-2 p-2 border rounded w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Page Count</label>
                        <input
                            type="number"
                            name="pageCount"
                            value={formData.pageCount}
                            onChange={handleChange}
                            className="mt-2 p-2 border rounded w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Cover Page Color</label>
                        <select
                            name="coverPageColor"
                            value={formData.coverPageColor}
                            onChange={handleChange}
                            className="mt-2 p-2 border rounded w-full"
                            required
                        >
                            <option value="red">Red</option>
                            <option value="black">Black</option>
                            <option value="blue">Blue</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Cover Printing Color</label>
                        <select
                            name="coverPagePrintingColor"
                            value={formData.coverPagePrintingColor}
                            onChange={handleChange}
                            className="mt-2 p-2 border rounded w-full"
                            required
                        >
                            <option value="golden">Golden</option>
                            <option value="silver">Silver</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Transparent Foil</label>
                        <div className="mt-2 flex space-x-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="transparentFoil"
                                    value="yes"
                                    checked={formData.transparentFoil === 'yes'}
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <span className="ml-2">Yes</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="transparentFoil"
                                    value="no"
                                    checked={formData.transparentFoil === 'no'}
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <span className="ml-2">No</span>
                            </label>
                        </div>
                    </div>
                </div>
                {/*user details*/}
                <div className="flex flex-col space-y-4 md:w-1/2 mt-4 md:mt-0">
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="mt-2 p-2 border rounded w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Address 1</label>
                        <input
                            type="text"
                            name="address1"
                            value={formData.address1}
                            onChange={handleChange}
                            placeholder="Address 1"
                            className="mt-2 p-2 border rounded w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Address 2</label>
                        <input
                            type="text"
                            name="address2"
                            value={formData.address2}
                            onChange={handleChange}
                            placeholder="Address 2"
                            className="mt-2 p-2 border rounded w-full"
                            required
                        />
                    </div>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <div className="mb-4 md:mb-0">
                            <label className="block text-gray-700">PIN</label>
                            <input
                                type="text"
                                name="pin"
                                value={formData.pin}
                                onChange={handleChange}
                                placeholder="PIN"
                                className="mt-2 p-2 border rounded w-full"
                                required
                            />
                        </div>
                        <div className="mb-4 md:mb-0">
                            <label className="block text-gray-700">District</label>
                            <input
                                type="text"
                                name="district"
                                value={formData.district}
                                onChange={handleChange}
                                placeholder="District"
                                className="mt-2 p-2 border rounded w-full"
                                required
                            />
                        </div>
                        <div className="mb-4 md:mb-0">
                            <label className="block text-gray-700">State</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                placeholder="State"
                                className="mt-2 p-2 border rounded w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Mobile Number</label>
                        <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Mobile Number"
                            className="mt-2 p-2 border rounded w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="mt-2 p-2 border rounded w-full"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-300 hover:text-white p-2 rounded hover:bg-gray-800"
                    >
                        Check out
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Thesis;

