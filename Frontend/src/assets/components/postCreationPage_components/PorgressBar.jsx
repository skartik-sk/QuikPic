import React from "react";
import { Progress } from "@nextui-org/react";

export const PorgressBar = () => {
  return (
    
      <Progress
        isStriped
        aria-label="Loading..."
        color="secondary"
        value={50}
        className="max-w-md"
      />
  
  );
};
