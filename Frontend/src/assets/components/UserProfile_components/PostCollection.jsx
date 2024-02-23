import React from "react";
import { Divider, Tab, Tabs, Card, CardBody  } from "@nextui-org/react";
import PostCard from "../../components/globle_Components/PostCard";

const PostCollection = () => {
    let tabs = [
        {
            id: "posts",
            label: "Posts",
            content: <PostCard/>             
        },
        {
            id: "collection",
            label: "Saved Collection",
            content: <PostCard/> 
        },
    ]

    return (
        <div className="flex flex-col items-center">
            <Divider className="my-4" style={{ width: "90%", marginTop:"3rem", marginBottom:"2rem"  }} />

            {/* <div className="w-1/3" style={{ marginLeft: "5rem", marginTop:"3rem", marginBottom:"2rem" }}>
                <Divider className="my-4" style={{ width: "90%" }} />
            </div> */}

            <div className="flex-col flex" style={{maxWidth:"64.5rem"}}>
                <Tabs aria-label="Dynamic tabs" items={tabs} style={{display:"block", width:"100%", alignItems:"center"}}>
                    {(item) => (
                        <Tab key={item.id} title={item.label}>
                            <Card>
                                <CardBody className="flex-row flex-wrap gap-3">
                                    {item.content}{item.content}{item.content}{item.content}
                                </CardBody>
                            </Card>
                        </Tab>
                    )}
                </Tabs>
            </div>
        </div>
    )
}

export default PostCollection;