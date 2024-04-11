import React, { useState, useEffect } from "react";

import { Image, Button } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProfileDetails = () => {
  const data = useSelector((state) => state.me.data);

  const getProfile = () => {
    if (data.profileImage == "") {
      return "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png";
    } else {
      return data.profileImage;
    }
  };
  const [isFollowed, setIsFollowed] = useState(false);
  useEffect(() => {
    // Check if the user is already followed
    const checkFollowStatus = () => {
      // Your logic to check if the user is already followed
      // For example, you can check if the user's ID is present in the followers array

      // Set the value of isFollowed accordingly
      setIsFollowed(data.followers.includes(data._id));
    };
    checkFollowStatus();
  }, []);
  const [Followers, setFollowers] = useState(data.followers.length);
  const [Following, setFollowing] = useState(data.following.length);
  const [post, setPost] = useState(data.post.length);
console.log(data);
  return (
    <div
      style={{
        marginTop: "2rem",
        flex: "row",
        display: "flex",
        justifyContent: "center",
      
      }}
    >
      <div className="flex-1 flex-row items-center justify-center">
        <Image
          width={230}
          height={230}
          alt="NextUI hero Image"
          src={getProfile()}
        />
      </div>

      <div
        className="flex flex-1 flex-col"
        style={{ gap: "1.2rem", width: "4rem" }}
      >
        <div className="flex flex-row items-center justify-between">
          <h2>{data.username}</h2>
          <Button color="primary" size="sm">
            <Link to = "/Setting">

            Edit Profile
            </Link>
          </Button>
        </div>

        <div className="flex flex-row items-center justify-between gap-4">
          <div className="flex flex-row items-center justify-between gap-1">
            <h3 className="text-xs font-semibold">{post}</h3>
            <h3 className="text-xs">Posts</h3>
          </div>
          <div className="flex flex-row items-center justify-between gap-1">
            <h3 className="text-xs font-semibold">{Followers}</h3>
            <h3 className="text-xs">Followers</h3>
          </div>
          <div className="flex flex-row items-center justify-between gap-1">
            <h3 className="text-xs font-semibold">{Following}</h3>
            <h3 className="text-xs">Following</h3>
          </div>
        </div>

        <div className="text-wrap">
          <h3>{data.bio}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
