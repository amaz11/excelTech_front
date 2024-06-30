import React from 'react'
import CategoryModal from '../components/CategotyModal'
import { useGetCategoryQuery } from '../feature/categoryApi'
import CategoryTable from '../components/CategoryTable'

const Category = () => {
    const { data: category,
        isLoading,
        isFetching,
        isError,
        error, } = useGetCategoryQuery()
    return (
        <div>
            <CategoryModal />
            <CategoryTable categories={category?.data} isFetching={isFetching} isLoading={isLoading} error={error} isError={isError} />
        </div>
    )
}

export default Category