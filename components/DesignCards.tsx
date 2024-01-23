import { Button, Grid } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";

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
          <Grid className="cards" style={{padding:'26px'}} item md={2}>
          <img className="cards-img" decoding="async" width="67" height="60" src="https://cdn.scopicsoftware.com/wp-content/uploads/2023/11/image-1.svg" alt="" title="image 1" data-lazy-src="https://cdn.scopicsoftware.com/wp-content/uploads/2023/11/image-1.svg" data-ll-status="loaded"/>
            <h3 style={{ fontWeight: "700" }} className="title-margin">Custom Software Development</h3>
            <p style={{ fontSize: "0.7rem" }}>
              Transform your unique ideas into tailored software solutions,
              expertly developed to address challenges across diverse industries
              and deliver results.
            </p>
            <Button className="explore-css">
              Explore more <ArrowRightAltIcon />
            </Button>
          </Grid>
          <Grid  className="cards" style={{padding:'28px'}} item md={2}>
          <img  className="cards-img" decoding="async" width="67" height="61" src="https://cdn.scopicsoftware.com/wp-content/uploads/2023/11/image-2.svg" alt="" title="image 2"  data-lazy-src="https://cdn.scopicsoftware.com/wp-content/uploads/2023/11/image-2.svg" data-ll-status="loaded"/>
            <h3 style={{ fontWeight: "700" }} className="title-margin">UI/UX <br /> Services</h3>
            <p style={{ fontSize: "0.7rem" }}>
              Our UI/UX design experts meticulously craft seamless, user-centric
              interfaces to deliver a seamless, intuitive, and memorable user
              experience.
            </p>
            <Button className="explore-css">
              Explore more <ArrowRightAltIcon />
            </Button>
          </Grid>
          <Grid  className="cards" item md={2}>
          <img style={{top:'-10px'}} className="cards-img" decoding="async" width="67" height="61" src="https://cdn.scopicsoftware.com/wp-content/uploads/2023/11/image-3.svg" alt="" title="image 3"  data-lazy-src="https://cdn.scopicsoftware.com/wp-content/uploads/2023/11/image-3.svg" data-ll-status="loaded"/>
            <h3 style={{ fontWeight: "700" }} className="title-margin">Application Development</h3>
            <p style={{ fontSize: "0.7rem" }}>
              From mobile to desktop, experience applications that streamline
              operations, enhance user engagement, and bolster business growth
              through our dedicated application development services.
            </p>
            <Button className="explore-css">
              Explore more <ArrowRightAltIcon />
            </Button>
          </Grid>
          <Grid  className="cards" item md={2}>
          <img style={{top:'-10px'}} className="cards-img" decoding="async" width="67" height="61" src="https://cdn.scopicsoftware.com/wp-content/uploads/2023/11/image-4.svg" alt="" title="image 4" data-lazy-src="https://cdn.scopicsoftware.com/wp-content/uploads/2023/11/image-4.svg" data-ll-status="loaded"/>
            <h3 style={{ fontWeight: "700" }} className="title-margin">Web <br /> Development</h3>
            <p style={{ fontSize: "0.7rem" }}>
              Experience cutting-edge web solutions, including specialized web
              apps, stunning websites, and responsive designs, providing
              seamless functionality and capabilities to meet diverse needs.
            </p>
            <Button className="explore-css">
              Explore more <ArrowRightAltIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default DesignCards;
