import React, { useEffect } from "react";
import TopNav from "../../components/globle_Components/TopNav";
import PostCard from "../../components/globle_Components/PostCard";
import { Card } from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchExplore } from "../../redux/reducers/ExploreReducer";
const ExploreContent = () => {
  const Data = useSelector((state) => state.explore.data);
  console.log(Data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExplore());
  }, []);
  return (
    <div className="w-full">
      <TopNav />
      <Card className="flex-row flex-wrap gap-3  justify-center  ">
        {Data.map((item) => {
          console.log(item);
          return <PostCard key={item._id} data={item} />;
        })}
      </Card>
    </div>
  );
};

export default ExploreContent;
