import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const getData = () => {
    return axios.get(`http://localhost:3000/books`);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res.data);
      console.log(data);
    });
  }, []);

  return (
    <div
      style={{
        border: "1px solid red",
        width: "80vw",
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {data.map((el) => (
        <div
          id={el.id}
          style={{ width: "20vw", border: "1px solid ", height: "50vh" }}
        >
          <img src={el.img} alt={el.title} width="150px" height={200} />
          <h6>{el.title}</h6>
          <p>
            Auther:- {el.author} (<span>{el.year}</span>)
          </p>
          <p>Price :- {el.price}</p>
          <button className="btn btn-primary" type="submit">
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
