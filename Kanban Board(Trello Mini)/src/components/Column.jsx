function Column({title,tasks}){
    return <div className="bg-gray-100 rounded-xl p-4 min-h-[500px]">
        <div className="font-bold text-lg mb-4">{title}</div>
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    {task.title}
                </div>
            ))}
        </div>
    </div>
}

export default Column;