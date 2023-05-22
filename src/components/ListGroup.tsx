//import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Franscisco", "Tokyo", "Paris", "London"];
  //let selectedIndex = 0;

  //Hook
  const [selectedIndex, setSelectedIndec] = useState(-1);
  //const [] useState('');
  //   arr[0]; //varialel(selectedIndex)
  //   arr[1]; // updater function

  //   const getMessage = () => {

  //   };

  //Event handler
  //const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndec(index);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
