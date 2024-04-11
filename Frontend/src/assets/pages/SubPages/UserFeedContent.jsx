import TopNav from "../../components/globle_Components/TopNav";
import PostCard from "../../components/globle_Components/PostCard";
import { Card } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFeed } from "../../redux/reducers/UserFeedReducers";
const UserFeedContent = () => {
  // const Data = useSelector((state) => state.userfeed.data);
  // console.log(Data)
  
  const Data = useSelector((state) => state.userfeed.data);
  const dispatch = useDispatch();
  // const doSomeing = async () => {
  //   await  dispatch(fetchFeed());
  //   const Responce = useSelector((state) => state.userfeed.data);
  //   setData(Responce)
  // };
  useEffect(() => {
   // doSomeing();
    dispatch(fetchFeed());
  }, []);
  return (
    <div className="w-full">
      <TopNav />
      <Card className="flex-row flex-wrap gap-3  justify-center ">
        {Data.length <= 1 || Data === undefined || Data.length == undefined ? (
          <div>Kisi ko follow kar lo yar</div>
        ) : (
          Data.toReversed().map((item) => {
            return <PostCard key={item._id} data={item} />;
          })
        )}
      </Card>
    </div>
  );
};

export default UserFeedContent;