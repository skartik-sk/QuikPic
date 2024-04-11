import React from "react";
import { Progress } from "@nextui-org/react";

export const PorgressBar = ({value}) => {
  return (
    
      <Progress
        isStriped
        aria-label="Loading..."
        color="secondary"
        value={value}
        marks={[
          {
            value: 0.2,
            label: "20%",
          },
          {
            value: 0.5,
            label: "50%",
          },
          {
            value: 0.8,
            label: "80%",
          },
        ]}
        className="max-w-md"
      />
  
  );
};
