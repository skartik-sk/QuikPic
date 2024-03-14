import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Image,
  Textarea,
  Progress,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import TopNav from "../../components/globle_Components/TopNav";
import { PorgressBar } from "../../components/postCreationPage_components/PorgressBar";
import { useParams } from "react-router-dom";
import { createPost, editPost } from "../../redux/reducers/CreatePostReducer";
import { getPostByid } from "../../redux/reducers/PostViewReducers";
const EditPostContent = () => {
  const loading = useSelector((state) => state.create.loading);
  const error = useSelector((state) => state.create.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(() => {
    dispatch(getPostByid(id))
  }, []);
   
  const [next, setNext] = useState(true);
  const [value, setValue] = useState(50);
  const oldCaptoin = useSelector((state) => state.getbyid.data.caption);
  const [caption, setCaption] = useState(oldCaptoin);
  const handleOnSubmit = async () => {
    if (caption === undefined) {
      alert("add caption");
      return;
    }
    setValue(100);
    console.log({caption:caption,_id:id});
    await dispatch(editPost({caption:caption,_id:id}));
    navigate(`/PostView/${id}`);
  };
  if(error!==""){
    alert(error);
    navigate(`/EditPost/${id}`);
    return
  }
  console.log(oldCaptoin);
  return (
    <div className="w-full flex-col">
      <TopNav />
      <div className="flex flex-row justify-center item-center">
        <PorgressBar value={value} />
      </div>
      <div
        style={{ height: "70vh" }}
        className="w-full flex justify-center align-middle items-center"
      >
        {loading ? (
          <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="max-w-md"
          />
        ) : (
          <div>
            {next ? (
              <Card className="max-w-[400px]">
                <CardHeader className="justify-center">
                  <div className="flex items-center justify-center">
                    <span>Add Caption</span>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody style={{ paddingLeft: "4rem", paddingRight: "4rem" }}>
                  <div className="flex flex-col py-4 justify-center align-middle items-center gap-4">
                    <Textarea
                    defaultValue={oldCaptoin}
                      onChange={(e) => setCaption(e.target.value)}
                      value={caption}
                      style={{ marginLeft: "2rem", marginRight: "2rem" }}
                      placeholder="Enter your caption"
                    />
                    <div className="flex-row ">
                     
                      <Button
                        style={{ marginLeft: "2rem" }}
                        color="secondary"
                        className="py-4 px-4 "
                        onClick={handleOnSubmit}
                      >
                       Edit Post
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ) : 
            null }
          </div>
        )}
      </div>
    </div>
  );
};



export default EditPostContent;
