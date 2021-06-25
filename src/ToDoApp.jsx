import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import character from "./character.jpg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ToDoValues from "./ToDoValues";

const ToDoApp = () => {
  const [data, setData] = useState("");
  const [dispData, setDispData] = useState([]);

  const inputData = (event) => {
    setData(event.target.value);
  };

  const updatedData = (event) => {
    event.preventDefault();
    setDispData((preValues) => {
      return [...preValues, data];
    });
    setData("");
  };

  const delData = (id) => {
    dispData.filter((value , index) => {
      return index != id;
    })
  }

  return (
    <>
      <section className="d-flex">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <h1 className="display-5 text-primary py-3">ToDoApp</h1>
              <div className="row mt-md-5 align-items-center">
                <div className="col-md-6 col-10 mx-auto">
                  <picture>
                    <img
                      src={character}
                      className="img-fluid"
                      alt="bussiness picturue"
                    />
                  </picture>
                </div>

                <div className="col-md-6 col-10 mx-auto">
                  <div>
                    <form className="w-50 mx-auto" onSubmit={updatedData}>
                      <label htmlFor="Task" className="display-6 mb-2">
                        ToDo Task
                      </label>
                      <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Save an Item"
                        required
                        name="field"
                        value={data}
                        onChange={inputData}
                      />
                      <button className="btn btn-outline-success mt-3">
                        Save <ArrowForwardIcon />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {dispData.map((values, index) => {
        return <ToDoValues value={values} key={index} id = {index} onClick = {delData}/>;
      })}
    </>
  );
};

export default ToDoApp;
