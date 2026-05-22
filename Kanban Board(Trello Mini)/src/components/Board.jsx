import Column from "./Column";

function Board({ tasks , handleMoveTask , handleDeleteTask}) {

    const todoTasks = tasks.filter(task => task.status === "todo");
    const doingTasks = tasks.filter(task => task.status === "doing");
    const doneTasks = tasks.filter(task => task.status === "done");

    return (
        <div className="grid grid-cols-3 gap-6 p-6">

            <Column
                title="Todo"
                tasks={todoTasks}
                handleMoveTask={handleMoveTask}
                handleDeleteTask={handleDeleteTask}
            />

            <Column
                title="Doing"
                tasks={doingTasks}
                handleMoveTask={handleMoveTask}
                handleDeleteTask={handleDeleteTask}
            />

            <Column
                title="Done"
                tasks={doneTasks}
                handleMoveTask={handleMoveTask}
                handleDeleteTask={handleDeleteTask}
            />

        </div>
    )
}

export default Board;