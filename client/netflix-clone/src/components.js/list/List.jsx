import {
  ArrowForwardIosOutlined,
  ArrowBackIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

function List({list}) {
  const listRef = useRef();
  const [isMoved,setisMoved]=useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

  const onClickArrow = (direction) => {
    setisMoved(true);
    const distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber >0) {
      setSlideNumber(slideNumber- 1)
      listRef.current.style.transform = `translateX(${250 + distance}px)`;
    }
    if (direction === "right" &&slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-250 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => onClickArrow("left")}
          // style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
        {list.Content.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => onClickArrow("right")}
        />
      </div>
    </div>
  );
}

export default List;
