import React from "react";
import TopNav from "../../components/globle_Components/TopNav";
import { PorgressBar } from "../../components/postCreationPage_components/PorgressBar";
import AddCaption from "../../components/postCreationPage_components/AddCaption";
import { AddImage } from "../../components/postCreationPage_components/AddImage";

const CreatePostContent = () => {
  return (
    <div className="w-full flex-col">
      <TopNav />
      <div className="flex flex-row justify-center item-center">
        <PorgressBar />
      </div>
      <div style={{height:"70vh"}} className="w-full flex justify-center align-middle items-center">
        <AddImage />
        <AddCaption />
      </div>
    </div>
  );
};

export default CreatePostContent;
