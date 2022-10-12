import "./Featured.scss";
import { PlayArrow, InfoOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";

const Featured = ({type}) => {

  const [content,setContent]=useState({})

  useEffect(()=>{
    const getRandomContent=async()=>{
      try{
        const res=await axios.get('http://localhost:8080/api/movie/random?type='+`${type}`, {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzlhODIxNjUxNmM2NGM5NDU5NjhlMSIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjQ3OTQ4OTkyLCJleHAiOjE2NDgzODA5OTJ9.XhVVksJ9mtiogEZGgZitKvguP5re4Fa9SwqdSAnA894",
          }
        })
        setContent(res.data)

      }catch(err){
        console.log(err)
      }
    }

    getRandomContent()

  },[])
  return (
    <div className="featured">
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
         {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      
      
      <div className="info">
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <span className="desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        doloremque, vitae quos tempore ex voluptatem facilis recusandae
        similique ipsa, aspernatur deleniti molestias porro, provident sunt quo
        possimus voluptatum eius hic?
      </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
