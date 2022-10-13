import "../../assets/css/styles.css";
import { useState } from "react";

export default function DragableItem() {
  const [dragItem, setDragItem] = useState(0);
  const [list, setList] = useState([
    "The Call Of Ktulu",
    "For Whom The Bell Tolls",
    "The Day That Never Comes",
    "The Memory Remains",
    "Confusion",
    "Moth Into Flame",
    "The Outlaw Torn",
    "No Leaf Clover",
    "Halo on Fire",
  ]);

  //Event handlers for drag and drop items
  const handleDragStart = (index: any) => {
    console.log("Im dragging item number : " + index);
    setDragItem(index);
  };

  const handleDragEnter = (e: any, index: number) => {
    e.target.style.backgroundColor = "#336699";
    const newList: string[] = [...list];
    const item = newList[dragItem];
    newList.splice(dragItem, 1);
    newList.splice(index, 0, item);

    setDragItem(index);
    setList(newList);
  };

  const handleDragLeave = (e: any) => {
    e.target.style.backgroundColor = "transparent";
  };
  const handleDrop = (e: any) => {
    e.target.style.backgroundColor = "transparent";
  };

  return (
    <ul className='dnd'>
      {list &&
        list.map((item, index) => (
          <li
            draggable
            key={index}
            onDragStart={() => handleDragStart(index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragLeave={(e) => handleDragLeave(e)}
            onDrop={(e) => handleDrop(e)}
            onDragOver={(e) => e.preventDefault()}
          >
            {item}
          </li>
        ))}
    </ul>
  );
}
