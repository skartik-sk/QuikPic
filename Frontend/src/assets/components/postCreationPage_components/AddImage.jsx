import React, {useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,

  Textarea,
} from "@nextui-org/react";
import AddImgage from "../../icons/post/AddImgage";
import { Link } from "react-router-dom";
export const AddImage = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
const [preview, setPreview] = useState(null);
const [next, setNext] = useState(false);
  return (
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
                style={{ marginLeft: "2rem", marginRight: "2rem" }}
                placeholder="Enter your caption"
              />
              <Button color="secondary" className="py-4 px-4 my-4">
                Post
              </Button>
            </div>
          </CardBody>
        </Card>
      ) : (
        <Card className="max-w-[400px]">
          <CardHeader className="justify-center">
            <div className="flex items-center justify-center"></div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div
              style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
              className="flex flex-col py-4 justify-center align-middle items-center"
            >
              <div {...getRootProps()}>
                <input
                  {...getInputProps()}
                  //not working
                  accept=".png, .jpg, .jpeg"
                   
                />
                {isDragActive ? <p>Drop the files here ...</p> : <AddImgage />}
              </div>

              <span className="py-4 px-4">Drag and Drop image</span>

              <Button
                color="secondary"
                className="py-4 px-4"
                onClick={() => {
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
  );
};
