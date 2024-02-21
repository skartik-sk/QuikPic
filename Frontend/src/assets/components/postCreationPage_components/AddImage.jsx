import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Button,
} from "@nextui-org/react";
import AddImgage from "../../icons/post/AddImgage";

export const AddImage = () => {
  return (
    <div>
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
            <button className="py-4 px-4">
              <AddImgage />
            </button>
            <span className="py-4 px-4">Select Image</span>
            <Button color="secondary" className="py-4 px-4">
              Upload Image
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
