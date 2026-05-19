import Column from "./Column";

function Board({ tasks }) {

    const todoTasks = tasks.filter(task => task.status === "todo");
    const doingTasks = tasks.filter(task => task.status === "doing");
    const doneTasks = tasks.filter(task => task.status === "done");

    return (
        <div className="grid grid-cols-3 gap-6 p-6">

            <Column
                title="Todo"
                tasks={todoTasks}
            />

            <Column
                title="Doing"
                tasks={doingTasks}
            />

            <Column
                title="Done"
                tasks={doneTasks}
            />

        </div>
    )
}

export default Board;