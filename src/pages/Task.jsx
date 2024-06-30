import React, { useState } from 'react'
import Table from '../components/Table';
import { useGetTaskQuery } from '../feature/taskApi';
import { toast } from 'react-toastify';
import TaskModal from '../components/TaskModal';

const Task = () => {
    const { data: tasks,
        isLoading,
        isFetching,
        isError,
        error, } = useGetTaskQuery()

    return (
        <div>
            <TaskModal />
            <Table tasks={tasks?.data} isFetching={isFetching} isLoading={isLoading} error={error} isError={isError} />
        </div>
    )
}

export default Task