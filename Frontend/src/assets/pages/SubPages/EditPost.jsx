import React, { useEffect } from "react";
import TopNav from "../../components/globle_Components/TopNav";
import { PorgressBar } from "../../components/postCreationPage_components/PorgressBar";
import AddCaption from "../../components/postCreationPage_components/AddCaption";
import { AddImage } from "../../components/postCreationPage_components/AddImage";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../../../../../Backend/Controllers/post/postController";
const EditPost = () => {
  const {id} = useParams();
  console.log(id);
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getPostById({id:id}));
}, []);
const data = useSelector((state) => state.postView.data);
  return (
    <div className="w-full flex-col">
      <TopNav />
      <div className="flex flex-row justify-center item-center">
        <PorgressBar value={50} />
      </div>
      <div
        style={{ height: "70vh" }}
        className="w-full flex justify-center align-middle items-center"
      >
        <AddCaption data = {data} />
      </div>
    </div>
  );
};

export default EditPost;
