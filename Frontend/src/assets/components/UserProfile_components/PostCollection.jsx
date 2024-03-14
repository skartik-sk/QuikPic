import React,{useEffect, useState} from "react";
import { Divider, Tab, Tabs, Card, CardBody  } from "@nextui-org/react";
import PostCard from "../../components/globle_Components/PostCard";
import {useSelector} from 'react-redux'

const PostCollection = () => {
    let tabs = [
        {
            id: "1",
            label: "Posts",
            content: <PostCard/>             
        },
        {
            id: "2",
            label: "Saved Collection",
            content: <PostCard/> 
        },
    ]
const data = useSelector((state) => state.getSavedPost.UserPostdata);
const [Post, setPost] = useState([]);
const [savedPosts, setSavedPosts] = useState([]);
console.log(data.post);
console.log(data.savedPosts);
useEffect(() => {
setPost(data.post);
setSavedPosts(data.savedPosts);
}  , [data]);
    return (
        <div className="flex flex-col items-center">
            <Divider className="my-4" style={{ width: "90%", marginTop:"3rem", marginBottom:"2rem"  }} />

            {/* <div className="w-1/3" style={{ marginLeft: "5rem", marginTop:"3rem", marginBottom:"2rem" }}>
                <Divider className="my-4" style={{ width: "90%" }} />
            </div> */}

            <div className="flex-col flex" style={{maxWidth:"64.5rem"}}>
                { data === undefined || data.post === undefined || data.savedPosts === undefined ? <h1 className="text-center text-2xl mt-10">No Post Found</h1> :
                

                <Tabs aria-label="Dynamic tabs" items={tabs} style={{display:"block", width:"100%", alignItems:"center"}}>
                    {(item) => (
                        <Tab key={item.id} title={item.label}>
                            <Card>
                                <CardBody className="flex-row flex-wrap gap-3">
                                   {item.id === "1" ? 
                                    Post.map((post) => <PostCard key={post._id} data={post }  />) :
                                   savedPosts.map((post) => <PostCard key={post._id} data={post} />)}
                                </CardBody>
                            </Card>
                        </Tab>
                    )}
                </Tabs>
}
            </div>
        </div>
    )
}

export default PostCollection;