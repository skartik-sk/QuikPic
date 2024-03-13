import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Button,
  Textarea,
} from "@nextui-org/react";
import AddImgage from "../../icons/post/AddImgage";
import { data } from "autoprefixer";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "../../redux/reducers/CreatePostReducer";
import { useNavigate } from "react-router-dom";
const AddCaption = ({data}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [caption, setCaption] = useState(data.caption);
  const chnage = async() => {
await dispatch(editPost({data:caption,_id:data._id}));
navigate("/Home");
  }
  return (
    <div>
      <div>
        <Card className="max-w-[400px]">
          <CardHeader className="justify-center">
            <div className="flex items-center justify-center">
              <span>Change Caption</span>
            </div>
          </CardHeader>
          <Divider />
          <CardBody style={{ paddingLeft: "4rem", paddingRight: "4rem" }}>
            <div className="flex flex-col py-4 justify-center align-middle items-center gap-4">
              <Textarea
                onChange={(e) => setCaption(e.target.value)}
              defaultValue={data.caption}
                style={{ marginLeft: "2rem", marginRight: "2rem" }}
                placeholder="Enter your caption"
              />
              <Button onClick={chnage} color="secondary" className="py-4 px-4 my-4">
                Update post
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AddCaption;
