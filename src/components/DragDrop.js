import React, { useState } from "react";

import Picture from "./Picture";
import { useDrop } from "react-dnd";

const PictureList = [
  {
    id: 1,
    url:
      "https://yt3.ggpht.com/ytc/AAUvwnjOQiXUsXYMs8lwrd4litEEqXry1-atqJavJJ09=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 2,
    url: "https://cdn.pixabay.com/photo/2015/07/15/09/00/man-845847_1280.jpg"
  },
  {
    id: 3,
    url: "https://cdn.pixabay.com/photo/2015/07/15/09/00/man-845847_1280.jpg"
  }
];

export default function DragDrop() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };

  return (
    <>
      <div className="Pictures">
        {PictureList.map((pic) => {
          return <Picture url={pic.url} id={pic.id} />;
        })}
      </div>

      <div className="Board" ref={drop}>
        {board.map((pic) => {
          return <Picture url={pic.url} id={pic.id} />;
        })}
      </div>
    </>
  );
}
