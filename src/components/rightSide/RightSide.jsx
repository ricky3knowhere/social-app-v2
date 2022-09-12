import React, { useState } from "react";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../trendCard/TrendCard";
import "./rightSide.css";
import ShareModal from "../shareModal/ShareModal";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="rightSide">
      <div className="navIcons">
        <img src={Home} alt="home" />
        <UilSetting />
        <img src={Noti} alt="notif" />
        <img src={Comment} alt="comment" />
      </div>
      <TrendCard />
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
