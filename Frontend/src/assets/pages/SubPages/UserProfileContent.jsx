import React, { useEffect } from "react";
import TopNav from "../../components/globle_Components/TopNav";
import ProfileDetails from "../../components/UserProfile_components/ProfileDetails";
import PostCollection from "../../components/UserProfile_components/PostCollection";
import { useDispatch,useSelector } from "react-redux";
import { getUserPost } from "../../redux/reducers/getSavedPostsReducer";
const UserProfileContent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserPost());
    }, []);
    const data = useSelector((state) => state.getSavedPost.UserPostdata);
    console.log(data); 
    return (
        <div className="w-full flex-col">
            <TopNav />
            <ProfileDetails />
            {data.length === 0  || data === undefined ? <h1 className="text-center text-2xl mt-10">No Post Found</h1> : 
            <PostCollection data = {data} />
            }
            
        </div>
    )
}

export default UserProfileContent;