import React from "react";
import { Progress } from "@nextui-org/react";

export const PorgressBar = ({value}) => {
  return (
    
      <Progress
        isStriped
        aria-label="Loading..."
        color="secondary"
        value={value}
        className="max-w-md"
      />
  
  );
};
