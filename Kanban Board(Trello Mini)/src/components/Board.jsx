import Column from "./Column";

function Board({ tasks , handleMoveTask , handleDeleteTask , handleMoveBackTask}) {

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
                handleMoveBackTask={handleMoveBackTask}
            />

            <Column
                title="Doing"
                tasks={doingTasks}
                handleMoveTask={handleMoveTask}
                handleDeleteTask={handleDeleteTask}
                handleMoveBackTask={handleMoveBackTask}
            />

            <Column
                title="Done"
                tasks={doneTasks}
                handleMoveTask={handleMoveTask}
                handleDeleteTask={handleDeleteTask}
                handleMoveBackTask={handleMoveBackTask}
            />

        </div>
    )
}

export default Board;