import Column from "./Column";

function Board({ tasks , handleMoveTask }) {

    const todoTasks = tasks.filter(task => task.status === "todo");
    const doingTasks = tasks.filter(task => task.status === "doing");
    const doneTasks = tasks.filter(task => task.status === "done");

    return (
        <div className="grid grid-cols-3 gap-6 p-6">

            <Column
                title="Todo"
                tasks={todoTasks}
                handle={handleMoveTask}
            />

            <Column
                title="Doing"
                tasks={doingTasks}
                handle={handleMoveTask}
            />

            <Column
                title="Done"
                tasks={doneTasks}
                handle={handleMoveTask}
            />

        </div>
    )
}

export default Board;