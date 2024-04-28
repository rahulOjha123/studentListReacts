import React from "react";

function List(props) {
  return (
    <>
      {props.namelist.map((val, index) => {
        return (
          <>
            <div className="list-div">
              <div className="imgs">
                <img src={val.img} alt="student" />
              </div>
              <div className="student">
                <span className="name">{val.name}</span>
                <span className="age">{val.age}</span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default List;
