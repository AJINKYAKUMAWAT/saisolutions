import { Grid } from "@mui/material";
import React from "react";
import medical from "@/public/assets/img/medical.jpg";
import Image from "next/image";
import { IndustryEnum } from "@/utils/constant";

const IndustriesCards = () => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div
        style={{
          padding: "5rem 15rem 3rem 15rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2 style={{ marginBottom: "0" }}>Industries</h2>
        <h4 style={{ textAlign: "center" }}>
          As a team of seasoned software development experts, we have a rich
          history of partnering with businesses from various sectors. Our deep
          understanding of the distinct challenges and intricacies of each
          industry ensures we tailor our solutions to your business needs.
        </h4>
      </div>
      <Grid container>
        {IndustryEnum.map((i) => {
          return (
            <Grid key={i.id} item md={3}>
              <figure style={{ margin: "0" }}>
                <Image className="img-width" src={i.image} alt="Mountains" />
                <figcaption>{i.title}</figcaption>
              </figure>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default IndustriesCards;
