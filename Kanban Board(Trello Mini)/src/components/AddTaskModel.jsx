import { useState } from "react";

function AddTaskModel({isOpen,setIsOpen,handleAddTask}){

    const [taskTitle,setTaskTitle] = useState("");

    if (isOpen === false) return null

    return <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl w-96">
            <div className="text-xl font-bold mb-4">Add New Task</div>
            <input className="w-full border rounded-lg p-3 mb-4 outline-none"
            type="text" 
            placeholder="Enter task..."
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}/>
            <div className="flex gap-3">
                <button className="bg-black text-white px-4 py-2 rounded-lg flex-1" onClick={() => {
                    const newTask = {
                            id:Date.now(),
                            title: taskTitle,
                            status:"todo"
                        }
                        handleAddTask(newTask);
                        setTaskTitle("");
                }}>Add</button>
                <button className="bg-gray-200 px-4 py-2 rounded-lg flex-1" onClick={() => setIsOpen(false)}>Close</button>
            </div>
        </div>
    </div>
}

export default AddTaskModel;