'use client'
import { Button, Grid } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";
import { DesignCardsEnum } from "@/utils/constant";

const DesignCards = () => {
  return (
    <div
      style={{
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container className="div-center">
        <Grid item lg={8} sx={{ marginBottom: "40px" }}>
          <div>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>
              Our Bespoke Software Solutions
            </h2>
            <h4>
              Rise above the “Build it, and they will come” mindset. Let us help
              you in crafting bespoke solutions, ensuring the perfect unity
              between your vision, your audience, and the rapidly evolving
              digital world.
            </h4>
          </div>
        </Grid>
        <Grid
          container
          gap={3}
          className="div-center"
          sx={{ marginBottom: "30px" }}
        >
           {DesignCardsEnum.map((item) => {
            return (
              <Grid key={item.id} className="cards" style={{ padding: "26px" , height:'260px'}} item md={2}>
                <img
                  className="cards-img"
                  decoding="async"
                  width="67"
                  height="60"
                  src={item.image}
                  alt=""
                  title="image 1"
                  data-lazy-src="https://cdn.scopicsoftware.com/wp-content/uploads/2023/11/image-1.svg"
                  data-ll-status="loaded"
                />
                <h3 style={{ fontWeight: "700" }} className="title-margin">
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.7rem" }}>
                 {item.description}
                </p>
                <Button className="explore-css">
                  Explore more <ArrowRightAltIcon />
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default DesignCards;
