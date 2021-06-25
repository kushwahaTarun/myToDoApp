import React from "react";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";

const ToDoValues = (props) => {
  return (
    <>
      <div className="container mx-auto w-25 pt-2 d-inline-block">
        <ul className="flex-row">
          <li
            className="text-center text-capitalize py-2 rounded py-2 "
            id = {props.id}
            onTouch = {() => {
                props.onClick(props.id);
            }}
          >
            <DeleteOutlineRoundedIcon /> {props.value}
          </li>
        </ul>
      </div>
    </>
  );
};

export default ToDoValues;
