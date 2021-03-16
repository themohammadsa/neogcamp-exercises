import React, { useState } from "react";

export const LikeList = () => {
  const [list, setList] = useState([
    {
      tweet:
        "I can’t believe I got fired from the calendar factory. All I did was take a day off!",
      count: 0
    },
    {
      tweet: "I went to buy some camo pants but couldn’t find any.",
      count: 0
    },
    {
      tweet: "I used to have a handle on life, but then it broke.",
      count: 0
    },
    {
      tweet:
        "Don’t you hate it when someone answers their own questions? I do.",
      count: 0
    },
    {
      tweet:
        "Just burned 2,000 calories. That’s the last time I leave brownies in the oven while I nap.",
      count: 0
    }
  ]);

  return (
    <div>
      <h1>Like List </h1>
      <div className="like-list" >
      {list.map((item) => {
        return (
          <div className="like-list-text">
            <li style={{ textAlign: "center" }}>
              {item.tweet}{" "}
              
                {" "}
               
              
            </li>
            <button className="ctr  "
            style={{ margin: "1rem" }}
            onClick={() => {
              item.count += 1;
              setList([...list]);
            }}
          > 👍 {" "}{item.count} </button>
          </div>
        );
      })}
      </div>
    </div>
  );
};
