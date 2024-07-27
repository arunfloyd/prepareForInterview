import { useEffect, useState } from "react";

const saveTasks = (tasks) => {
  console.log("Saving tasks:", tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const loadTasks = () => {
  const storedTasks = localStorage.getItem("tasks");
  console.log("Loading stored tasks:", storedTasks);
  return storedTasks ? JSON.parse(storedTasks) : [];
};

const Todo = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState(() => loadTasks());
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    console.log("Component mounted, current array:", array);
  }, []);

  useEffect(() => {
    console.log("Array changed, saving to localStorage:", array);
    saveTasks(array);
  }, [array]);

  const handleAdd = () => {
    if (text.trim() === "") return;

    console.log("Adding/updating task:", text);
    if (editIndex !== null) {
      setArray(prevArray => {
        const newArray = [...prevArray];
        newArray[editIndex] = text;
        return newArray;
      });
      setEditIndex(null);
    } else {
      setArray(prevArray => [...prevArray, text]);
    }
    setText("");
  };

  const handleEdit = (index) => {
    console.log("Editing task at index:", index);
    setText(array[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    console.log("Deleting task at index:", index);
    setArray(prevArray => prevArray.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>{editIndex !== null ? "Update" : "Add"}</button>
      {array.map((val, index) => (
        <h1 key={index}>
          {val} <button onClick={() => handleEdit(index)}>Edit</button>{" "}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </h1>
      ))}
    </div>
  );
};

export default Todo;