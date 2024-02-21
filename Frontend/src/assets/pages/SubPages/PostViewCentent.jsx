import React from "react";
import TopNav from "../../components/globle_Components/TopNav";
import ViewPostCard from "../../components/postViewPage_components/ViewPostCard";
import ViewPostCardExpanded from "../../components/postViewPage_components/ViewPostCardExpanded";

const PostViewCentent = () => {
  return (
    <div className="w-full flex-col">
      <TopNav />
      <div className="flex flex-row justify-center">
        <ViewPostCardExpanded />
      </div>
    </div>
  );
};

export default PostViewCentent;
