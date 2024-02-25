import React from 'react'
import TopNav from '../../components/globle_Components/TopNav'
import PostCard from '../../components/globle_Components/PostCard'
import { Card } from '@nextui-org/react'

const UserFeedContent = () => {
  return (
    <div>
        <TopNav />
<Card className="flex-row flex-wrap gap-3  justify-center ">
  <PostCard />
  <PostCard />
  <PostCard />
  <PostCard />
  <PostCard />
</Card>
    </div>
  )
}

export default UserFeedContent