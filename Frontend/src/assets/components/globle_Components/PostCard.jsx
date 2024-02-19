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
  User,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { ThreeDot } from "../../icons/Navbar/ThreeDot";
const PostCard = () => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBokmarked] = useState(false);
  return (
    <div className="">
      <Card className="py-4  ">
        <CardHeader className="pb-0 pt-1 px-4 flex-row justify-between align-middle items-start">
          <button>
            <User
              name="Jane Doe"
              description="Product Designer"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              }}
            />
          </button>

          <button>
            <ThreeDot />
          </button>
        </CardHeader>
        <CardBody className="overflow-visible py-2 ">
          <button>
            <Image
              alt="Card background"
              className="object-cover  rounded-large"
              src="https://plus.unsplash.com/premium_photo-1708110920881-635419c3411f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"
              width={270}
            />
          </button>
        </CardBody>
        <CardFooter className="flex-col items-start pb-2 pt-2 px-4">
          <div className="flex justify-between w-full">
            <div className="flex gap-3">
              <button
                onClick={(e) => {
                  liked === true ? setLiked(false) : setLiked(true);
                }}
              >
                {liked === true ? (
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
              <button>
                <FontAwesomeIcon
                  icon={faComment}
                  style={{ color: "#818181", fontSize: "20px" }}
                />
              </button>
              <button>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ color: "#818181", fontSize: "20px" }}
                />
              </button>
            </div>

            <button
              onClick={(e) => {
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
          </div>
          <div>
            liked by <span className="font-bold">{"Jane Doe"}</span> and
            <span className="font-bold"> {"100 others"}</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostCard;
