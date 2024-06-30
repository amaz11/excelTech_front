import React, { useState } from 'react'
import { useUpdateTaskMutation } from '../feature/taskApi';
import Modal from './Modal';
import { useGetUsersQuery } from '../feature/authApi';
import { FaChevronDown } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';
import { useGetCategoryQuery } from '../feature/categoryApi';

const TaskUpdateModal = ({ name, task }) => {
    const { data, isLoading, isFetching, isError, error } = useGetUsersQuery()
    const { data: category, isLoading: catisLoading, isError: catisError, error: caterror } = useGetCategoryQuery()
    const [updateTask] = useUpdateTaskMutation()
    const [formData, setFormData] = useState({
        title: task.title || '',
        description: task.description || '',
        dueDate: task.dueDate || '',
        priority: task.priority || '',
        status: task.status || '',
        category: task.category._id || '',
        assignedTo: task.assignedTo._id || '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = task._id
        try {
            const res = await updateTask({ id, data: formData }).unwrap();
            if (res.ok) {
                toast.success('Task has been Update');
            }

        } catch (error) {
            toast.error(error.data.message)
        }
    };

    return (
        <Modal title={"Create Task"} name={name}>
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700">Title</label>
                        <input type="text" name="title" className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Task Title" required
                            value={formData.title}
                            onChange={handleChange} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700">Description</label>
                        <textarea name="description" value={formData.description}
                            onChange={handleChange} rows={4} className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Task Description" />
                    </div>

                    <div className='flex flex-wrap items-center gap-2'>
                        <div className="mb-4 grow">
                            <label htmlFor="dueDate" className="block text-gray-700">Due Date</label>
                            <input type="date" name="dueDate" value={formData.dueDate}
                                onChange={handleChange} className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div className="mb-4 grow">
                            <label htmlFor="priority" className="block text-gray-700">Priority</label>
                            <select name="priority" value={formData.priority}
                                onChange={handleChange} className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-4 grow">
                        <label htmlFor="priority" className="block text-gray-700">Assigned-TO</label>
                        <select name="assignedTo" value={formData.assignedTo}
                            onChange={handleChange} className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"

                        >
                            {data?.data?.map(item => <option key={item._id} value={item._id}>{item.username}</option>)}
                        </select>
                    </div>
                    <div className='flex flex-wrap items-center gap-2'>
                        <div className="mb-4 grow">
                            <label htmlFor="priority" className="block text-gray-700">Status</label>
                            <select name="status" value={formData.status}
                                onChange={handleChange} className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"

                            >
                                <option value="To-Do">To-Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                        <div className="mb-4 grow">
                            <label htmlFor="priority" className="block text-gray-700">Category</label>
                            <select name="category" value={formData.category}
                                onChange={handleChange} className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"

                            >
                                {category?.data?.map(item => <option key={item._id} value={item._id}>{item.name}</option>)}
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 py-2 rounded-md w-full text-white transition">Add Task</button>
                </form>
            </div>
        </Modal>
    )
}

export default TaskUpdateModal