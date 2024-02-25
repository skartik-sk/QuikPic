import React from "react";
import SideNav from "../components/globle_Components/SideNav";
import BottomNav from "../components/globle_Components/BottomNav";
import CreatePosContent from "./SubPages/CreatePostContent";
//import { Grid, Row, Col, Container } from '@nextui-org/react';

const CreatePostPage = () => {
  return (
    <div>
      <div className="flex-col">
        <div className="flex ">
          <div
            className="
            md:flex"
          >
            <SideNav />
          </div>
          {/* <Container gap={2}>
  <Grid>
    
  </Grid>
</Container> */}

          <CreatePosContent />
        </div>

        <div className="sticky bottom-0 md:!hidden">
          <BottomNav />
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
