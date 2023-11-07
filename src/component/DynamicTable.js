import React, { useState } from "react";
import "../styles/style.css"; // Your custom CSS file // Import the AddRowModal component

const initialData = [
  {
    title: "Gym",
  },
  {
    title: "hello world",
  },
  {
    title: "buy eggs",
  },
];

function DynamicTable() {
  const [data, setData] = useState(initialData);
  const [newdata, newSetData] = useState("");
  const handleAdd = () => {
    if (newdata === "") {
      alert("Please input first");
    } else {
      const newItems = {
        title: newdata,
      };
      setData([newItems, ...data]);
      newSetData("");
    }
  };
  const handleRemove = (id) => {
    const updatedData = [...data];
    updatedData.splice(id, 1);
    setData(updatedData);
  };

  const handleClick = (index) => {
    const updatedData = data.map((item, i) => {
      if (i === index) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setData(updatedData);
  };
  console.log(data);
  return (
    <body>
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input
          type="text"
          id="myInput"
          value={newdata}
          placeholder="Title..."
          onChange={(e) => newSetData(e.target.value)}
        />
        <span onClick={handleAdd} className="addBtn">
          Add
        </span>
      </div>

      <ul id="myUL">
        {data.map((item, index) => (
          <li
            key={index}
            className={item.checked ? "checked" : ""}
            onClick={() => handleClick(index)}
          >
            {item.title}
            <span className="close" onClick={(e) => { e.stopPropagation(); handleRemove(index); }}>
              x
            </span>
          </li>
        ))}
      </ul>
    </body>
  );
}

export default DynamicTable;
