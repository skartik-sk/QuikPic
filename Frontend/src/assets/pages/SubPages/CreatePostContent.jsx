import React, { useState, useCallback } from "react";
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
import AddCaption from "../../components/postCreationPage_components/AddCaption";
import AddImgage from "../../icons/post/AddImgage";
import { createPost } from "../../redux/reducers/CreatePostReducer";
const CreatePostContent = () => {
  const loading = useSelector((state) => state.create.loading);
  const error = useSelector((state) => state.create.error);
  const dispatch = useDispatch();
  const file = new FileReader();
  const navigate = useNavigate();
  const onDrop = useCallback((acceptedFiles) => {
    file.onload = function () {
      setPreview(file.result);
    };

    file.readAsDataURL(acceptedFiles[0]);
  }, []);
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({ onDrop });
  const [preview, setPreview] = useState(null);
  const [next, setNext] = useState(false);
  const [value, setValue] = useState(0);
  const [caption, setCaption] = useState();
  const handleOnSubmit = () => {
    if (acceptedFiles[0] === undefined) {
      alert("Please select an image");
      setNext(false);
      setValue(0);
      navigate("/CreatePost");
      return;
    }
    if (caption === undefined) {
      alert("add caption");

      return;
    }
    setValue(100);
    const formData = new FormData();
console.log(acceptedFiles[0])
    formData.append("photo", acceptedFiles[0]);
    formData.append("caption", caption);
    console.log(formData);
    dispatch(createPost(formData));
  };
  const handleOnBack = () => {
    setNext(false);
    setValue(0);
  };
  if(error!==""){
    alert(error);
    navigate("/CreatePost");
    return
  }
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
                      onChange={(e) => setCaption(e.target.value)}
                      value={caption}
                      style={{ marginLeft: "2rem", marginRight: "2rem" }}
                      placeholder="Enter your caption"
                    />
                    <div className="flex-row ">
                      <Button
                        color="secondary"
                        className="py-4 px-4 my-4 mx-4"
                        onClick={handleOnBack}
                      >
                        Edit image
                      </Button>
                      <Button
                        style={{ marginLeft: "2rem" }}
                        color="secondary"
                        className="py-4 px-4 "
                        onClick={handleOnSubmit}
                      >
                        Post
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ) : (
              <Card className="max-w-[400px]">
                <CardHeader className="justify-center">
                  <div className="flex items-center justify-center">
                    <span>Add Image</span>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <div
                    style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
                    className="flex flex-col py-4 justify-center align-middle items-center"
                  >
                    <div {...getRootProps()}>
                      <input  type="file"  accept=".png, .jpg, .jpeg" {...getInputProps()} />
                      {isDragActive ? (
                        <p>Drop the files here ...</p>
                      ) : (
                        <AddImgage />
                      )}
                    </div>

                    <span className="py-4 px-4">Drag and Drop image</span>
                    {preview && (
                      <Image
                        width={300}
                        height={200}
                        alt="NextUI hero Image with delay"
                        src={preview}
                      />
                    )}
                    <span className="py-2 px-4"></span>
                    <Button
                      color="secondary"
                      className="py-4 px-4"
                      onClick={() => {
                        setValue(50);
                        setNext(true);
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </CardBody>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePostContent;
