import React from "react";
import {
  Spinner,
  RadioGroup,
  Radio,
  Switch,
  Card,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { UserFeedPage } from "./assets/pages/UserFeedPage";

export default function App() {
  const colors = ["primary", "secondary", "success", "warning", "danger"];

  return (
    <>
      <div className=" bg-black">hi</div>
      <RadioGroup
        label="Select your favorite city"
        color="secondary"
        defaultValue="london"
      >
        <Radio value="buenos-aires">Buenos Aires</Radio>
        <Radio value="sydney">Sydney</Radio>
        <Radio value="san-francisco">San Francisco</Radio>
        <Radio value="london">London</Radio>
        <Radio value="tokyo">Tokyo</Radio>
      </RadioGroup>
      <Spinner />
      <Switch defaultSelected size="lg" color="secondary">
        Dark mode
      </Switch>
      <div className=" flex  gap-4">
        <Spinner label="Default" color="default" labelColor="foreground" />
        <Spinner label="Primary" color="primary" labelColor="primary" />
        <Spinner label="Secondary" color="secondary" labelColor="secondary" />
        <Spinner label="Success" color="success" labelColor="success" />
        <Spinner label="Warning" color="warning" labelColor="warning" />
        <Spinner label="Danger" color="danger" labelColor="danger" />
      </div>
      <Card isFooterBlurred radius="lg" className="border-none">
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src="https://images.unsplash.com/photo-1682687220945-922198770e60?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
          width={200}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Available soon.</p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Notify me
          </Button>
        </CardFooter>
      </Card>
      <UserFeedPage/>
    </>
  );
}
