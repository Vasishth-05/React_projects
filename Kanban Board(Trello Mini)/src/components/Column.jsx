import TaskCard from "./TaskCard";

function Column({title,tasks,handleDeleteTask,handleMoveTask,handleMoveBackTask}){
    return <div className="bg-gray-100 rounded-xl p-4 min-h-125">
        <div className="font-bold text-lg mb-4">{title}</div>
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <TaskCard task={task} handleDeleteTask={handleDeleteTask} handleMoveTask={handleMoveTask} handleMoveBackTask={handleMoveBackTask}/>
                </div>
            ))}
        </div>
    </div>
}

export default Column;