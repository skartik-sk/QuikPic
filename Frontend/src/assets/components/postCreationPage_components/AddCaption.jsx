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

const AddCaption = () => {
  
  return (
    <div>
      <div>
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
      </div>
    </div>
  );
};

export default AddCaption;
