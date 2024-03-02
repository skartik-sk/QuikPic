import TopNav from "../../components/globle_Components/TopNav";
import PostCard from "../../components/globle_Components/PostCard";
import { Card } from "@nextui-org/react";
import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFeed } from "../../redux/reducers/UserFeedReducers";
const UserFeedContent = () => {
  const Data = useSelector((state) => state.userfeed.data);
  console.log(Data)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFeed());
  }, []);
  return (
    <div>
      <TopNav />
      <Card className="flex-row flex-wrap gap-3  justify-center ">
        {Data.length <1 ? (
          <div>Kisi ko follow kar lo yar</div>
        ) : (
          Data.map((item) => {
            console.log(item);
            return <PostCard key={item._id} data={item} />;
          })
        )}
      </Card>
    </div>
  );
};

export default UserFeedContent;
