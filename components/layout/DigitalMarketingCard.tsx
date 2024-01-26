import { Button, Grid } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";
import { DigitalMarketingEnum } from "@/utils/constant";

const DegitalMarketingCards = () => {
  return (
    <div
      style={{
        paddingTop: "5rem",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container className="div-center">
        <Grid item lg={8} sx={{ marginBottom: "40px" }}>
          <div>
            <h2>
              <span style={{ color: "#007aff" }}>
                Digital Marketing Solutions
              </span>
              <br />
              <span style={{ fontSize: "2.5rem", fontWeight: "500" }}>
                Where Your Product Meets Its Spotlight
              </span>
            </h2>
            <h4>
              Our robust digital marketing solutions ensure that your brand-new
              product or service doesn’t go unnoticed. Backed by a dedicated
              team of marketing specialists, we not only bring your vision to
              life but also ensure it captures the attention it truly deserves
              in the digital sphere.
            </h4>
          </div>
        </Grid>
        <Grid
          container
          gap={3}
          className="div-center"
          sx={{ marginBottom: "30px" }}
        >
          {DigitalMarketingEnum.map((item) => {
            return (
              <Grid key={item.id} className="cards" style={{ padding: "26px" }} item md={2}>
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
      <Button variant="contained" sx={{marginBottom:'30px',borderRadius:'5px'}}>View all Marketing Services</Button>
      </Grid>
    </div>
  );
};

export default DegitalMarketingCards;
