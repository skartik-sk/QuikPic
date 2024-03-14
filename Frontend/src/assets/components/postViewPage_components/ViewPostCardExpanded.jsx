import React, { useState } from "react";
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

  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input,
  User,
  Spacer,
  Divider,
  button,
} from "@nextui-org/react";
import { ThreeDot } from "../../icons/Navbar/ThreeDot";
import Popupcard from "../globle_Components/Popupcard";
import { useDispatch } from "react-redux";
import { getPostByid,  commentToPost } from "../../redux/reducers/PostViewReducers";
import { bookmark, like } from "../../redux/reducers/PostCardReducer";
import { ToastContainer, toast } from 'react-toastify';
import {Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { me } from "../../redux/reducers/MeReducer";
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';

const ViewPostCardExpanded = ({ data, time }) => {
  console.log(data);
  const dispatch = useDispatch();
  const notify = () => toast("URL copied to clipboard");
  const navigate = useNavigate();
  const location = useLocation();
  const [bookmarked, setBokmarked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  //in complete
  //! to add functionality to change the value of liked and bookmarked
  // const data = useSelector((state) => state.postcard.liked);
  const userId = useSelector((state) => state.me.data._id);
  const userImg = useSelector((state) => state.me.data.profileImage);
  const bookmarkedPosts = useSelector((state) => state.me.data.savedPosts);
  console.log(userId);
  console.log(bookmarkedPosts);
  const shareUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    notify();
  };
  const liking = async () => {
    await dispatch(like({ id: data._id }));
    // dispatch(me());
    dispatch(getPostByid({ id: data._id }));
    //navigate(`/postview/${data._id}`);

  }; 
  const bookmarking = async () => {
    await dispatch(bookmark({ id: data._id }));
    dispatch(me());
    dispatch(getPostByid({ id: data._id }));
    //navigate(`/postview/${data._id}`);
  };
  const postviewPage = () => {
    navigate(`/postview/${data._id}`);
  };
  const delingpost = async () => {
    await dispatch(delPost({ id: data._id }));
    navigate(`/Explore`);
  }

  const [isCreated, setIsCreator] = useState(false);
  useEffect(() => {
    if (data.createdBy._id === userId) {
      setIsCreator(true);
    } else {
      setIsCreator(false);
    }
  }, [data.createdBy._id, userId]);

  const getProfile = () => {
    if (data.createdBy.profileImage == "") {
      return "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png";
    } else {
      return data.createdBy.profileImage;
    }
  }; const getUserProfile = () => {
    if (data.createdBy.profileImage == "") {
      return "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png";
    } else {
      return userImg;
    }
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const addComment = async(e) => {
    if (comment !== "") {
     await dispatch(commentToPost({ id: data._id, comment: comment }));
      setComment("");
    dispatch(getPostByid({ id: data._id }));
    }
  };
  
  return (
    <div>
       <ToastContainer />
    
      <Card
        style={{ width: "800px" }}
        className="py-4 max-w-[340px] flex flex-row  "
      >
        <div className="left flex-1  flex-col item-center">
           <CardBody
          style={{ width: "fit-content " }}
          className="flex justify-center"
        >
          <button
            style={{ width: "fit-content ", height: "fit-content" }}
            className=""
          >
            <Image
              width={400}
              height={500}
              alt="NextUI hero Image with delay"
              src={data.image} />
          </button>
        </CardBody>
          <div className="w-[100%]">
          <CardBody className="flex-row justify-between">
            <div className="flex gap-3">
            <button onClick={liking}>
                {data.likes.includes(userId) ? (
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
              <button onClick={shareUrl}>
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
              onClick={bookmarking}
            >
              {bookmarkedPosts.includes(data._id) ? (
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
            <CardBody className="flex-row justify-between ">
              <CardBody className="truncate p-0 ">
                <div className="truncate w-[15px]">
                  {data.likes !== undefined
                    ? "Be the first to like this post"
                    : `Liked by kartik and others`}
                </div>
              </CardBody>

              <AvatarGroup isBordered max={2} size="sm">
                {data.likes !== undefined
                  ? data.likes.map((like, index) => (
                      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    ))
                  : null}
              </AvatarGroup>
            </CardBody>
          </div>
        </div>
        <div className="right flex-1">
        <CardHeader
          // style={{ width: "310px" }}
          className="pb-0 pt-1 px-4 flex-row justify-between align-middle items-center"
        >
          <Popover showArrow placement="bottom">
            <PopoverTrigger>
              <User
                as="button"
                name= {data.createdBy.username}
                className="transition-transform"
                avatarProps={{
                  src: getProfile(),
              }}
              />
            </PopoverTrigger>
            <PopoverContent className="p-1">
            <Popupcard data={data.createdBy} />
             </PopoverContent>
          </Popover>

          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <button>
                <ThreeDot />
              </button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Static Actions">
              <DropdownItem key="new">
                <Link to="/CreatePost">Create Post</Link>
              </DropdownItem>

              <DropdownItem key="copy">Repost</DropdownItem>
              {isCreated ? (
                <DropdownItem key="edit"><Link to={`/EditPost/${data._id}`}>

                Edit Post
                </Link></DropdownItem>
              ) : null}
              {isCreated ? (
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                  onClick={delingpost}
                >
                  Delete Post
                </DropdownItem>
              ) : (
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Report Post
                </DropdownItem>
              )}
            </DropdownMenu>
         </Dropdown>
        </CardHeader>

          <CardFooter className="flex-col items-start pb-0 pt-2 px-2 w-16 space-y-2 gap-4">
            <CardBody
              // style={{ width: "300px" }}
              className="text-default-400 py-0"
            >
              {data.caption}
            </CardBody>
            <CardBody className="font-semibold text-default-400 text-small w-fit py-0">
              {time}
            </CardBody>
            <Divider />
            <Card className="max-w-[340px]  ">
              <div className="flex flex-col ">
                {data.comments !== undefined
                  ? data.comments.map((comment, index) => (
                    <div className="w-full">
                    <CardHeader className="flex  gap-4 justify-between align-top items-start">
                      <div className="flex ">
                      <Popover showArrow placement="bottom">
        <PopoverTrigger>
          <User
            as="button"
            className="transition-transform"
            avatarProps={{
              src:
                comment.commenter === null || comment.commenter.profileImage === ""
                  ? "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
                  : comment.commenter.profileImage,
            }}
          />
        </PopoverTrigger>
        <PopoverContent className="p-1">
        <Popupcard data={comment.commenter} />
         </PopoverContent>
      </Popover>
                            </div>
                      <span
                        style={{ width: "290px" }}
                        className="text-default-500  "
                      >
                        {comment.comment}
                      </span>
                    </CardHeader>
                    <Divider />
                  </div>
                    ))
                  : null}
              </div>
              <CardBody className="px-3 py-0 text-small text-default-400"></CardBody>
            </Card>
            <div className=" w-[340px] h-[240px] px-8 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
              <Input
                onChange={handleChange}
                value={comment}
                style={{ width: "300px" }}
                placeholder="Add a comment"
                radius="lg"
                classNames={{
                  label: "text-black/50 dark:text-white/90",
                  input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                  ],
                  innerWrapper: "bg-transparent",
                  inputWrapper: [
                    "shadow-xl",
                    "bg-default-200/50",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focused=true]:bg-default-200/50",
                    "dark:group-data-[focused=true]:bg-default/60",
                    "!cursor-text",
                  ],
                }}
                endContent={
                  <button onClick={addComment}>
                    <div>
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        style={{
                          color: "#25CED1",
                          fontSize: "20px",
                        }}
                      />{" "}
                    </div>
                  </button>
                }
                startContent={
                  <User
                  as="button"
                  className="transition-transform"
                  avatarProps={{
                    src: getUserProfile()
             }}
                />}
              />
            </div>
          </CardFooter>
        </div>
      </Card>

      <Spacer y={2} />
    </div>
  );
};

export default ViewPostCardExpanded;