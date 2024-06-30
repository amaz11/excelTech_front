import React, { useState } from 'react';
import './table.css'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { useDeleteTaskMutation } from '../feature/taskApi';
import { toast } from 'react-toastify';
import TaskUpdateModal from './TaskUpdateModal';
const Table = ({ tasks, isLoading,
    isFetching,
    isError,
    error }) => {
    const [singletaskId, setSingleTaskId] = useState(null);
    const [showToggle, setShowToggle] = useState(false);
    const [deleteTask] = useDeleteTaskMutation()
    const toggleDetails = (id) => {
        setSingleTaskId(id);
        setShowToggle((prev) => (prev && singletaskId === id ? false : true));
    };
    if (isLoading || isFetching) {
        return <div>loading...</div>;
    }
    if (isError) {
        toast.error(error.data.message)
    }
    return (
        <div className='overflow-x-scroll lg:overflow-x-auto'>
            <table className="border-collapse mt-4 mb-4 w-full">
                <thead>
                    <tr>
                        <th className="bg-[#fafbfc] py-3 border font-bold text-[#7f8286] text-center text-lg">SI</th>
                        <th className="bg-[#fafbfc] py-3 border font-bold text-[#7f8286] text-center text-lg">Title</th>
                        <th className="bg-[#fafbfc] py-3 border font-bold text-[#7f8286] text-center text-lg">Description</th>
                        <th className="bg-[#fafbfc] py-3 border font-bold text-[#7f8286] text-center text-lg">DueDate</th>
                        <th className="bg-[#fafbfc] py-3 border font-bold text-[#7f8286] text-center text-lg">Priority</th>
                        <th className="bg-[#fafbfc] py-3 border font-bold text-[#7f8286] text-center text-lg">Status</th>
                        <th className="bg-[#fafbfc] py-3 border font-bold text-[#7f8286] text-center text-lg">Category</th>
                        <th className="bg-[#fafbfc] py-3 border font-bold text-[#7f8286] text-center text-lg">AssignedTo</th>
                        <th className="bg-[#fafbfc] py-3 border font-bold text-[#7f8286] text-center text-lg">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks?.map((task, index) => (
                        <React.Fragment key={task._id}>
                            <tr className="border">
                                <td className="px-4 py-2 border text-center">{index + 1}</td>
                                <td className="py-2 border text-center">{task.title}</td>
                                <td className="flex justify-between items-center px-4 py-2">
                                    <p className='w-32 truncate overflow-hidden'>{task.description}</p>
                                    {showToggle && singletaskId === task._id ? <FaAngleUp className='cursor-pointer' size={22} onClick={() => toggleDetails(task._id)} /> : <FaAngleDown className='cursor-pointer'
                                        size={22} onClick={() => toggleDetails(task._id)}
                                    />}
                                </td>
                                <td className="px-4 py-2 border text-center">{task.dueDate}</td>
                                <td className="px-4 py-2 border text-center">{task.priority}</td>
                                <td className="px-4 py-2 border text-center">{task.status}</td>
                                <td className="px-4 py-2 border text-center">{typeof task.category === 'undefined' ? 'Null' : task.category.name}</td>
                                <td className="flex justify-center items-center py-2">
                                    {showToggle && singletaskId === task._id ? <FaAngleUp size={22} onClick={() => toggleDetails(task._id)} /> : <FaAngleDown className='cursor-pointer'
                                        size={22} onClick={() => toggleDetails(task._id)}
                                    />}
                                </td>
                                <td className="px-4 py-2 border">
                                    <div className='flex justify-center items-center gap-2'>
                                        <span className='pr-4 border-r'>
                                            <TaskUpdateModal name={<FiEdit2 className='cursor-pointer' size={21} />} task={task} />

                                        </span>
                                        <hr />
                                        < MdDeleteOutline onClick={() => deleteTask(task._id)} className='cursor-pointer' size={22} />

                                    </div>
                                </td>
                            </tr>
                            {showToggle && singletaskId === task._id && (
                                <tr>
                                    <td colSpan="9" className="bg-gray-50 p-4 text-black transform origin-top transition-all duration-300 ease-in-out scale-y-100">
                                        <Details task={task} />
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const Details = ({ task }) => {
    return <div>
        <p className='font-medium'><span className='font-semibold'>Title:</span> {task.title}</p>
        <p className='font-medium'><span className='font-semibold'>Description:</span> {task.description}</p>
        <p className='font-medium'><span className='font-semibold'>Due date:</span> {task.dueDate}</p>
        <p className='font-medium'><span className='font-semibold'>Priority:</span> {task.priority}</p>
        <p className='font-medium'><span className='font-semibold'>Status:</span> {task.status}</p>
        <p className='font-medium'><span className='font-semibold'>Category:</span> {typeof task.category === 'undefined' ? 'Null' : task.category.name}</p>
        <p className='font-medium'><span className='font-semibold'>AssignedTo:</span>  {task.assignedTo.username}</p>
    </div>;
};

export default Table;