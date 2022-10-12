import { useEffect, useState } from "react";
import Featured from "../components.js/featured/Featured.jsx";
import List from "../components.js/list/List.jsx";
import Navbar from "../components.js/Navbar/Navbar.jsx";
import "./home.scss";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/" +
            `list${type ? "?type=" + type : ""}${
              genre ? "&genre=" + genre : ""
            }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzlhODIxNjUxNmM2NGM5NDU5NjhlMSIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjQ3OTQ4OTkyLCJleHAiOjE2NDgzODA5OTJ9.XhVVksJ9mtiogEZGgZitKvguP5re4Fa9SwqdSAnA894",
            },
          }
        );
        console.log("res", res.data);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list,index) => (
        <List list={list} key={index}/>
      ))}
    </div>
  );
};

export default Home;
