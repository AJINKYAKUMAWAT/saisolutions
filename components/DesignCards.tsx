import { Button, Grid } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

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
          <Grid sx={{ border: "1px solid black" }} style={{padding:'26px'}} item md={2}>
            <h3 style={{ fontWeight: "700" }}>Custom Software Development</h3>
            <p style={{ fontSize: "0.7rem" }}>
              Transform your unique ideas into tailored software solutions,
              expertly developed to address challenges across diverse industries
              and deliver results.
            </p>
            <Button>
              Explore more <ArrowRightAltIcon />
            </Button>
          </Grid>
          <Grid sx={{ border: "1px solid black" }} style={{padding:'28px'}} item md={2}>
            <h3 style={{ fontWeight: "700" }}>UI/UX <br /> Services</h3>
            <p style={{ fontSize: "0.7rem" }}>
              Our UI/UX design experts meticulously craft seamless, user-centric
              interfaces to deliver a seamless, intuitive, and memorable user
              experience.
            </p>
            <Button>
              Explore more <ArrowRightAltIcon />
            </Button>
          </Grid>
          <Grid sx={{ border: "1px solid black" }} item md={2}>
            <h3 style={{ fontWeight: "700" }}>Application Development</h3>
            <p style={{ fontSize: "0.7rem" }}>
              From mobile to desktop, experience applications that streamline
              operations, enhance user engagement, and bolster business growth
              through our dedicated application development services.
            </p>
            <Button>
              Explore more <ArrowRightAltIcon />
            </Button>
          </Grid>
          <Grid sx={{ border: "1px solid black" }} item md={2}>
            <h3 style={{ fontWeight: "700" }}>Web <br /> Development</h3>
            <p style={{ fontSize: "0.7rem" }}>
              Experience cutting-edge web solutions, including specialized web
              apps, stunning websites, and responsive designs, providing
              seamless functionality and capabilities to meet diverse needs.
            </p>
            <Button>
              Explore more <ArrowRightAltIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default DesignCards;
