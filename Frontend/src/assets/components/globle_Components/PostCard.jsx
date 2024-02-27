import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faBookmark,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  AvatarGroup,
  Avatar,
  Dropdown,
  Link,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  User,
  Spacer,
} from "@nextui-org/react";
import { ThreeDot } from "../../icons/Navbar/ThreeDot";
import Popupcard from "./Popupcard";
import { useDispatch, useSelector } from "react-redux";
import { bookmark, like } from "../../redux/reducers/PostCardReducer";
import {

  useNavigate,
} from "react-router-dom";
const PostCard = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [bookmarked, setBokmarked] = useState(false);
  const [liked, setLiked] = useState(false);
  //in complete
  //! to add functionality to change the value of liked and bookmarked
  // const data = useSelector((state) => state.postcard.liked);
  const userId = localStorage.getItem("user");
  console.log(userId);
  console.log(data.likes);
  console.log(data.likes.includes(userId));
  if (data.likes.includes(userId) && liked == false) {
    console.log("hello");
    setLiked(true);
  } else if (data.likes.includes(userId) == false && liked == true) {
    setLiked(false);
  }
  
  // const bookmarked = useSelector((state) => state.postcard.bookmarked);
const postviewPage = ()=>{
  navigate(`/postview/${data._id}`);

}
  return (
    <div>
      <Card style={{ width: "325px" }} className="py-4 max-w-[340px] ">
        <CardHeader
          // style={{ width: "310px" }}
          className="pb-0 pt-1 px-4 flex-row justify-between align-middle items-center"
        >
          <Popover showArrow placement="bottom">
            <PopoverTrigger>
              <User
                as="button"
                name="Zoe Lang"
                description="Product Designer"
                className="transition-transform"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
              />
            </PopoverTrigger>
            <PopoverContent className="p-1">
              <Popupcard />
            </PopoverContent>
          </Popover>

          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <button>
                <ThreeDot />
              </button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardHeader>
        <CardBody
          style={{ width: "fit-content " }}
          className="overflow-visible py-2 w-fit"
        >

          <button
            style={{ width: "fit-content ", height: "fit-content" }}
            className=""
            onClick={postviewPage}
          >
            <Image
              loading="false"
              width={300}
              height={200}
              alt="NextUI hero Image with delay"
              src={data.image}
            />
          </button>
        </CardBody>
        <CardFooter className="flex-col items-start pb-0 pt-2 px-2 w-16 space-y-2">
          <CardBody className="flex-row justify-between">
            <div className="flex gap-3">
              <button
                onClick={(e) => {
                  dispatch(like({ id: data._id }));
                }}
              >
                {liked == true ? (
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: "#e32400", fontSize: "20px" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: "#818181", fontSize: "20px" }}
                  />
                )}
              </button>
              <button onClick={postviewPage}>
                <FontAwesomeIcon
                  onMouseOver={(e) => {
                    e.target.style.color = "#C0C0C0";
                  }}
                  //25CED1
                  onMouseOut={(e) => {
                    e.target.style.color = "#818181";
                  }}
                  icon={faComment}
                  style={{
                    color: "#818181",
                    fontSize: "20px",
                    hover: { color: "#ff0000" },
                  }}
                />
              </button>
              <button>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  onMouseOver={(e) => {
                    e.target.style.color = "#CBF3F0";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "#818181";
                  }}
                  style={{
                    color: "#818181",
                    fontSize: "20px",
                    hover: { color: "#ff0000" },
                  }}
                />
              </button>
            </div>

            <button
              onClick={(e) => {
                dispatch(bookmark({ id: data._id }));
                bookmarked === true ? setBokmarked(false) : setBokmarked(true);
              }}
            >
              {bookmarked === true ? (
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{ color: "#FFD43B", fontSize: "20px" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{ color: "#818181", fontSize: "20px" }}
                />
              )}
            </button>
          </CardBody>

          <CardBody className="flex-row justify-between py-1">
            <CardBody className="truncate px-0 py-1 ">
              <div className="truncate w-[15px]">
                Liked by kartik and many others
              </div>
            </CardBody>

            <AvatarGroup isBordered max={3} size="sm">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
            </AvatarGroup>
          </CardBody>
          <CardBody
            // style={{ width: "300px" }}
            className="truncate text-default-400 "
          >
            <div className="truncate w-[300px]">{data.caption}</div>
          </CardBody>
          <CardBody className="font-semibold text-default-400 text-small w-fit">
            3-months ago
          </CardBody>
        </CardFooter>
      </Card>

      <Spacer y={2} />
    </div>
    //   <Card className="max-w-[340px]">
    //   <CardHeader className="justify-between">
    //     <div className="flex gap-5">
    //       <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
    //       <div className="flex flex-col gap-1 items-start justify-center">
    //         <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
    //         <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
    //       </div>
    //     </div>
    //     {/* <Button
    //       className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
    //       color="primary"
    //       radius="full"
    //       size="sm"
    //       variant={isFollowed ? "bordered" : "solid"}
    //       onPress={() => setIsFollowed(!isFollowed)}
    //     >
    //       {isFollowed ? "Unfollow" : "Follow"}
    //     </Button> */}
    //   </CardHeader>
    //   <CardBody className="px-3 py-0 text-small text-default-400">
    //     <p>
    //       Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
    //       Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
    //     </p>
    //     <span className="pt-2">
    //       #FrontendWithZoey
    //       <span className="py-2" aria-label="computer" role="img">
    //         💻
    //       </span>
    //     </span>
    //   </CardBody>
    //   <CardFooter className="gap-3">
    //     <div className="flex gap-1">
    //       <p className="font-semibold text-default-400 text-small">4</p>
    //       <p className=" text-default-400 text-small">Following</p>
    //     </div>
    //     <div className="flex gap-1">
    //       <p className="font-semibold text-default-400 text-small">97.1K</p>
    //       <p className="text-default-400 text-small">Followers</p>
    //     </div>
    //   </CardFooter>
    // </Card>
  );
};

export default PostCard;
