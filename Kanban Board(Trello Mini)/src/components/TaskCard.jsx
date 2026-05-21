function TaskCard({task,handleMoveTask}){
    return <div className="bg-white p-4 rounded-lg shadow mb-3">
        {task.title}
        <button onClick={() => handleMoveTask(
            task.id,
            task.status
        )} className="bg-black text-white px-3 py-2 rounded mt-3">Move ➡</button>
    </div>
}

export default TaskCard;