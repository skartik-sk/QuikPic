import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { follow } from "../../redux/reducers/PostCardReducer";
const Popupcard = ({ data }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const dispatch = useDispatch();
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
  const getProfile = () => {
    if (data.profileImage == "") {
      return "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png";
    } else {
      return data.profileImage;
    }
  };
  const [Followers, setFollowers] = useState(data.followers.length);
  const [Following, setFollowing] = useState(data.following.length);
  return (
    <Card shadow="none" className="max-w-[300px] border-none bg-transparent">
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar isBordered radius="full" size="md" src={getProfile()} />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600 mr-2">
              {data.username}
            </h4>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => dispatch(follow({ id: data._id }))}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0">
        <p className="text-small pl-px text-default-500 truncate">{data.bio}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-600 text-small">
            {Following}
          </p>
          <p className=" text-default-500 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-600 text-small">
            {Followers}
          </p>
          <p className="text-default-500 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Popupcard;
