import React, { useState } from 'react'
import Modal from './Modal';
import { usePostCategoryMutation } from '../feature/categoryApi';
import { toast } from 'react-toastify';

const CategoryModal = () => {

    const [postCategory] = usePostCategoryMutation()
    const [formData, setFormData] = useState({
        name: '',
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await postCategory(formData).unwrap();
            if (res.ok) {
                toast.success('Category has been Created');
            }

        } catch (error) {
            toast.error(error.data.message)
        }
    };

    return (
        <Modal title={"Create Category"} name={"Add Category"}>
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700">Category</label>
                        <input type="text" name="name" className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Task Title" required
                            value={formData.name}
                            onChange={handleChange} />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 py-2 rounded-md w-full text-white transition">Add Category</button>
                </form>
            </div>
        </Modal>

    )
}

export default CategoryModal