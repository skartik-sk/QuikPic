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
} from "@nextui-org/react";
import TopNav from "../../components/globle_Components/TopNav";
import { PorgressBar } from "../../components/postCreationPage_components/PorgressBar";
import AddCaption from "../../components/postCreationPage_components/AddCaption";
import AddImgage from "../../icons/post/AddImgage";
const CreatePostContent = () => {
  const dispatch = useDispatch();
  const file = new FileReader();
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
  function handleOnSubmit() {
    if (acceptedFiles[0] === "undefined") return;
    setValue(100);
    const formData = new FormData();

    formData.append("photo", acceptedFiles[0]);
    formData.append("caption", caption);
    console.log(formData);
    // dispatch(login(formData));
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
                  <Button
                    color="secondary"
                    className="py-4 px-4 my-4"
                    onClick={() => {
                
                      handleOnSubmit;
                    }}
                  >
                    Post
                  </Button>
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
                    <input {...getInputProps()} />
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
      </div>
    </div>
  );
};

export default CreatePostContent;
