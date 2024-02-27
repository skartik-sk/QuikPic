import React,{useState,useEffect} from "react";
import TopNav from "../../components/globle_Components/TopNav";
import ViewPostCard from "../../components/postViewPage_components/ViewPostCard";
import ViewPostCardTab from "../../components/postViewPage_components/ViewPostCardTab";
import ViewPostCardExpanded from "../../components/postViewPage_components/ViewPostCardExpanded";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostByid } from "../../redux/reducers/PostViewReducers";

const PostViewCentent = () => {
  const data = useSelector((state) => state.getbyid.data);

  function calculateTimeDifference(postCreationDate) {
    const currentDate = new Date();
    const postDate = new Date(postCreationDate);
  
    const differenceInMilliseconds = currentDate - postDate;
  
    const differenceInDays = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );
    const differenceInHours = Math.floor(
      (differenceInMilliseconds / (1000 * 60 * 60)) % 24
    );
    console.log(`${differenceInDays} days and ${differenceInHours} hours ago`)
  if(differenceInDays===0){
    return `${differenceInHours} hours ago`;
  }
  else if(differenceInHours ===0){
    return `${differenceInDays} days ago`;
  }
  else{

    return `${differenceInDays} days and ${differenceInHours} hours ago`;
  }
  }
  const time = calculateTimeDifference(data.createdAt)



  
  const id = useParams();
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getPostByid(id));
}, []);

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}
const windowWidth = useWindowWidth();
  return (
    <div className="w-full flex-col">
      <TopNav />
      <div className="flex flex-row justify-center">


          {windowWidth > 768 && windowWidth < 1024 ? < ViewPostCardTab data={data} time = {time} /> : null}
          {windowWidth > 1024 ? <ViewPostCardExpanded data={data} time = {time}  /> : null}
          {windowWidth < 768 ? <ViewPostCard data={data} time = {time}/> : null}
       



      </div>
    </div>
  );
};

export default PostViewCentent;
