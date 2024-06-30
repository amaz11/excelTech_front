import React from 'react';
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { useDeleteCategoryMutation } from '../feature/categoryApi';

import CategoryUpdateModal from './CategoryUpdateModel';

const CategoryTable = ({ categories, isLoading,
    isFetching,
    isError,
    error }) => {
    const [deleteCategory] = useDeleteCategoryMutation()

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
                        <th className="bg-[#fafbfc] py-3 border font-bold text-[#7f8286] text-center text-lg">Category</th>

                        <th className="bg-[#fafbfc] py-3 border font-bold text-[#7f8286] text-center text-lg">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories?.map((category, index) => (

                        <tr className="border" key={category._id}>
                            <td className="px-4 py-2 border text-center">{index + 1}</td>
                            <td className="py-2 border text-center">{category.name}</td>
                            <td className="px-4 py-2 border">
                                <div className='flex justify-center items-center gap-2'>
                                    <span className='pr-4 border-r'>
                                        <CategoryUpdateModal category={category} name={<FiEdit2 className='cursor-pointer' size={21} />} />

                                    </span>
                                    <hr />
                                    < MdDeleteOutline onClick={() => deleteCategory(category._id)} className='cursor-pointer' size={22} />

                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default CategoryTable;