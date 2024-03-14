import React,{useState,useEffect} from "react";
import TopNav from "../../components/globle_Components/TopNav";
import ViewPostCard from "../../components/postViewPage_components/ViewPostCard";
import ViewPostCardTab from "../../components/postViewPage_components/ViewPostCardTab";
import ViewPostCardExpanded from "../../components/postViewPage_components/ViewPostCardExpanded";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostByid } from "../../redux/reducers/PostViewReducers";
import { PorgressBar  } from "../../components/postCreationPage_components/PorgressBar";
import {Progress} from "@nextui-org/react";
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}

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
function Loding({ id }) {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const state = useSelector((state) => state.me);
  // const data = useSelector((state) => state.me.data.message);
  // const userId = useSelector((state) => state.me.data._id);
  // console.log(data);
  useEffect(() => {
    dispatch(getPostByid(id));
  }, []);
  return (
    <>
   <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="max-w-md"
          />
    </>
  );
  // : (
  //   <Navigate to="/Login" replace />
  // );
}
const PostViewCentent =  () => {
  const data = useSelector((state) => state.getbyid.data);
  const {id} = useParams();
  console.log(id);
const dispatch = useDispatch();
useEffect(() => {
  console.log(id);
  dispatch(getPostByid(id));
  
}, []);
 const time = calculateTimeDifference(data.createdAt)
 console.log(data);
 console.log(data.error);
const windowWidth = useWindowWidth();
  return (
    <div className="w-full flex-col">
      <TopNav />

{data == undefined || data.error  || data.length <= 1 ? <Loding id ={id}/> : 
      <div className="flex flex-row justify-center">

          {windowWidth > 768 && windowWidth < 1024 ? < ViewPostCardTab data={data} time = {time} /> : null}
          {windowWidth > 1024 ? <ViewPostCardExpanded data={data} time = {time}  /> : null}
          {windowWidth < 768 ? <ViewPostCard data={data} time = {time}/> : null}
       



      </div>}
    </div>
  );
};

export default PostViewCentent;