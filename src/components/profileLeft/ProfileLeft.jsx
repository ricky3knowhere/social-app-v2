import React from "react";
import FollowersCard from "../followersCard/FollowersCard";
import InfoCard from "../infoCard/InfoCard";
import LogoSearch from "../logoSearch/LogoSearch";

const ProfileLeft = () => {
  return (
    <div className="profileLeft">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
