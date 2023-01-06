import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio() {
  return (
    <Box>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        paddingX={"20%"}
      >
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
            />
          </Grid>
        ))}
      </Grid>
      {/* <div style={{
        width:"full"
        display:"grid",
      }}>
        {info.portfolio.map((project, index) => (
          <div key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
            />
          </div>
        ))}
      </div> */}
    </Box>
  );
}
