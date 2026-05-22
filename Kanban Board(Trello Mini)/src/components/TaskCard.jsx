function TaskCard({task,handleMoveTask,handleDeleteTask}){
    return <div className="bg-white p-4 rounded-lg shadow mb-3">
        {task.title}
        <div className="flex gap-2 mt-3">
            <button onClick={() => handleMoveTask(
                task.id,
                task.status
            )} className="bg-black text-white px-3 py-2 rounded mt-3">Move ➡</button>
            <button onClick={() => handleDeleteTask(
                task.id
            )} className="bg-red-500 text-white px-3 py-2 rounded mt-3">Delete</button>
        </div>
    </div>
}

export default TaskCard;