"use client";
import DesignCards from "@/components/DesignCards";
import React, { ReactNode } from "react";
import { TypeAnimation } from "react-type-animation";
import "@/css/Layout.css";
import IndustriesCards from "../IndustriesCards";
import DegitalMarketingCards from "./DigitalMarketingCard";
import AskQuestion from "./Accordion";

interface Children {
  children: ReactNode;
}

const Dashboard: React.FC<Children> = () => {
  return (
    <div style={{ marginTop: "30vh" }}>
      <h1 className="title">
        <span className="d-title">
          Tech Forward<span>.</span>
        </span>
        <span className="d-title color">Human Focused.</span>
        <span className="d-title-2">
          We design, build, and grow digital products for
        </span>
      </h1>
      <TypeAnimation
        className="d-title-2 margin"
        sequence={[
          // Same substring at the start will only be typed out once, initially
          `the world's leading companies.`,
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          "machine learning & augmented reality.",
          2000,
          "fractional investing platforms.",
          2000,
          "researches and scientists.",
          2000,
          "auction marketplaces & bidding platforms.",
          2000,
          "real-time collaboration platforms.",
          2000,
          "healthcare & biotech.",
          2000,
          "smart devices & connected vehicles.",
          2000,
          "the media & entertainment industry.",
          2000,
          "marketing & advertising organisation.",
          2000,
          "surgical robots & AI-based systems.",
          2000,
          "think tanks, nonprofits and NGOs.",
          2000,
          "blockchain & nft marketplaces.",
          2000,
          "fractional investing platforms.",
          2000,
        ]}
        wrapper="span"
        speed={20}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
      <div style={{ padding: "2.6rem" }}>
        <p className="align">
          <span
            style={{
              marginRight: "10px",
              color: "#fff",
              fontSize: "1.3rem",
              fontWeight: "600",
            }}
          >
            Trusted by
          </span>
          <svg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 2995 128"
            style={{ fill: "#fff", width: "80%", marginLeft: "120px" }}
            className="injected-svg"
            data-src="/_next/static/media/trusted-logos.dd072ccc.svg"
            role="img"
          >
            <style type="text/css"></style>
            <path
              id="fastly-14"
              className="st0"
              d="M2928.2,43v45.4h13.7v-6.9h-4.5V36.1h-9.1L2928.2,43L2928.2,43z M2809.6,81.5h4.6V59.6h-4.6v-6  l4.6-0.8v-6.2c0-7.4,1.6-10.6,11-10.6c2.2,0,4.4,0.3,6.6,0.7l-1.2,7.4c-1-0.2-2-0.3-3-0.3c-3.3,0-4.2,0.3-4.2,3.6v5.3h6.9v6.8h-6.9  v22h4.6v6.9h-18.4L2809.6,81.5L2809.6,81.5z M2923.5,79.3c-1.2,0.2-2.4,0.3-3.6,0.3c-3.8,0.1-3.4-1.1-3.4-4.7V59.6h7.2v-6.8h-7.2  V36.1h-9.1v40.7c0,8,2,11.7,10.6,11.7c2.4-0.1,4.7-0.4,7-1L2923.5,79.3z M2896,59.6v-1.2c-2.3-0.4-4.7-0.5-7-0.5  c-4.3,0-4.8,2.3-4.8,3.5c0,1.7,0.6,2.7,5.2,3.7c6.7,1.5,13.5,3.1,13.5,11.4c0,7.9-4.1,12-12.7,12c-5.3-0.1-10.5-0.9-15.6-2.3v-6.8  h6.9v1.2c2.6,0.4,5.1,0.6,7.7,0.5c4.5,0,5.3-2.4,5.3-3.7c0-1.8-1.3-2.7-5.6-3.5c-8-1.4-14.4-4.1-14.4-12.2c0-7.7,5.1-10.7,13.7-10.7  c4.9,0,9.8,0.7,14.5,2v6.8L2896,59.6L2896,59.6z M2849.7,79.3v-1.1h-1.1v1.1c-4.9-0.3-8.8-4.2-9.1-9.1h1.1V69h-1.1  c0.3-4.9,4.2-8.8,9.1-9.1V61h1.1v-1c4.8,0.3,8.7,4,9.1,8.8v0.3h-1.1v1.1h1.1v0.3C2858.4,75.3,2854.4,79.1,2849.7,79.3L2849.7,79.3z   M2867.9,79.3V50.9h-9.1v2.7c-1.9-1.1-4-1.9-6.2-2.3h0.1V48h1.1v-2.3h-9.2V48h1.1v3.2h0.1c-10.2,1.9-17,11.7-15.1,21.9  c1.9,10.2,11.7,17,21.9,15.1c2.2-0.4,4.4-1.2,6.3-2.4l1.6,2.7h9.7v-9.1L2867.9,79.3L2867.9,79.3z M2965,52.8h18.9v6.8h-4.5  L2967.8,88c-3.3,8-8.8,15.5-17.1,15.5c-2.2,0-4.5-0.2-6.6-0.7l0.8-8.3c1.2,0.2,2.4,0.3,3.6,0.4c3.9,0,8.2-2.4,9.5-6.5l-11.7-28.8  h-4.5v-6.8h18.9v6.8h-4.5l6.6,16.3l6.6-16.3h-4.5V52.8z M2853.9,65.6l-0.7-0.7l-3.5,3.1c-0.2-0.1-0.4-0.1-0.6-0.1  c-1,0-1.8,0.7-1.8,1.7s0.7,1.8,1.7,1.8s1.8-0.7,1.8-1.7c0,0,0,0,0-0.1c0-0.2,0-0.4-0.1-0.5L2853.9,65.6"
            ></path>
            <path
              id="stanford-15"
              className="st0"
              d="M2630.2,40.8c2-3.5,6.1-5.3,10-5.4c3.6-0.2,7.7,0.4,10.2,3.2c-1.3,1.7-2.5,3.4-3.8,5.1  c-1.4-1.6-2.6-4-4.9-4.4c-2.3-0.7-5.1,0.5-5.7,2.9c-1,3.9-0.4,7.9-0.5,11.8h7.4v4.4h-7.4c0,6.6,0,13.3,0,19.9c0,1.9,0.2,3.7,0.6,5.6  c1.7,0.8,3.5,1.2,5.4,1.2c0,0.5,0,1.4,0,1.8c-6-0.5-12.1-0.5-18.1,0c0-0.4,0-1.2,0-1.6c1.9-0.3,4.3-1.2,4.4-3.5  c0.7-7.8,0.2-15.6,0.4-23.5h-4.4c0-0.7,0-1.3,0-2c1.5-0.7,2.9-1.5,4.4-2.2C2628,49.7,2627.7,44.8,2630.2,40.8L2630.2,40.8  L2630.2,40.8z M2739,35.4c-3.9,1-7.9,1.6-11.9,1.8c0,0.4-0.1,1.1-0.2,1.5c1.5,0.5,3.9,0.3,4,2.4c0.6,4.2,0.2,8.5,0.3,12.8  c-5.8-1-12.2-0.9-17.1,2.7c-5.4,3.8-7.2,10.7-6.7,17c0.3,4.8,2.7,9.8,7.1,12.2c5.4,2.8,11.8,2.4,16.8-1c0,1,0.1,2,0.1,2.9  c3.8-0.9,7.7-1.5,11.6-1.7v-1.7c-5.5-0.9-4-3.5-4.4-7.8C2738.7,62.7,2738.5,49.1,2739,35.4L2739,35.4L2739,35.4z M2724.7,57.4  c2.4,0,4.7,0.7,6.6,2c0,7.3,0,14.7,0,22c-4.1,1.9-9.6,1.7-12.8-1.7c-2.8-2.9-3.2-7.2-3-11.1c0.3-3.5,1-7.5,4.1-9.7  C2721,57.9,2722.8,57.4,2724.7,57.4L2724.7,57.4L2724.7,57.4z M2506.9,39.9c4.6-0.2,9.3,0,13.9,0.7c-0.3,3.3-0.3,6.6,0,9.8h-1.8  c-0.4-2-0.7-4.5-2.9-5.4c-3.3-1.3-6.9-1.5-10.3-0.5c-4.4,1.3-5.1,7.7-1.8,10.5c4.1,3.6,9,5.9,13.2,9.3c6.5,5.2,5.7,17.3-2.1,20.9  c-6.5,3-14.2,2.2-20.9,0.4c0-3.2-0.1-6.5-0.2-9.7h2c0.3,2,0.7,4.5,2.7,5.6c3.8,2.1,8.3,2.2,12.3,0.5c4.8-2.6,3.9-10.3-0.6-12.8  c-3.9-3-8.3-5.2-11.9-8.6c-4-3.7-4.5-10.1-1.9-14.8C2498.6,42.1,2502.9,40.3,2506.9,39.9L2506.9,39.9L2506.9,39.9z M2534.4,46.8  l1.5,0.1c0,2.5,0,4.9,0,7.4h11.3v4.2h-11.3c0,5.9-0.1,11.8,0.1,17.7c0.1,2.2,0.2,5.1,2.3,6.4c2.6,1.6,5.8,0.6,8.5-0.4  c0.8,2-1.3,3.1-2.7,3.9c-3.5,1.6-7.4,1.8-11,0.4c-3-1.1-4.4-4.4-4.6-7.4c-0.4-6.9,0-13.8,0.1-20.8h-4.4v-1.4  C2528.9,55.3,2532.1,51.2,2534.4,46.8L2534.4,46.8L2534.4,46.8z M2564.5,53.2c-5.1,0-10.2,2.5-11.8,7.6l1.8,1  c1.9-3.4,6.5-5.2,10.1-3.2c2.8,1.3,3.1,4.7,3,7.4c-4.4,1.4-9,2.5-13.2,4.6c-5,2.7-5.7,10.2-2.1,14.2c4.2,3.9,11.3,3.2,15.5-0.4  c1.4,2.4,4.2,3.6,6.9,2.7c2.3-0.4,3.8-2.3,5.3-4l-1-1.2c-0.9,0.2-2,1-2.9,0.3c-1.2-0.8-1-2.5-1.1-3.8c0.1-5.5,0.4-10.9,0.1-16.4  c0-2.9-1.5-5.6-3.9-7.2C2569.1,53.7,2566.9,53.1,2564.5,53.2L2564.5,53.2L2564.5,53.2z M2567.5,70.2c0,3.7,0,7.4,0,11  c-2.4,1-5.2,2-7.6,0.8c-3-1.6-2.9-6.5-0.4-8.5C2561.9,71.8,2564.8,71,2567.5,70.2L2567.5,70.2L2567.5,70.2z M2661.5,53.3  c-3.8-0.1-7.4,1.1-10.4,3.4c-4.3,3.5-6.2,9.3-6,14.7c0,4.6,1.4,9.6,5.1,12.7c4.3,3.8,10.6,4.1,16,3c5.7-1.2,9.9-6.2,11.1-11.8  c1.3-5.8,0.8-12.5-3.2-17.1C2671,54.5,2666.1,53.2,2661.5,53.3L2661.5,53.3L2661.5,53.3z M2661.5,57.2c2,0,3.9,0.9,5.2,2.4  c2.3,2.8,2.9,6.7,3.1,10.2c0,3.9-0.5,8.1-2.9,11.2c-2.5,3-7.1,3.4-10.1,0.9c-0.1-0.1-0.2-0.1-0.3-0.2c-2.1-2-2.9-4.9-3.4-7.6  c-0.6-3.7-0.3-7.4,0.8-11c0.8-2.3,2.4-4.7,4.8-5.5C2659.7,57.3,2660.6,57.2,2661.5,57.2L2661.5,57.2L2661.5,57.2z M2582.6,55.5  c4,0.1,7.9-0.6,11.6-2.1c0.1,0.9,0.2,1.9,0.3,2.8c4.2-2.9,9.5-3.6,14.3-2.1c3.4,1.3,5.8,4.4,6.1,8c0.7,6.8-0.3,13.6,0.6,20.3  c0.1,2.1,2.4,2.6,4,2.9c0,0.4,0,1.2,0,1.6c-5.6-0.4-16.8,0-16.8,0v-1.6c0,0,4-1.1,4.3-2.3c0.9-5,0.7-10.2,0.6-15.3  c-0.2-3-0.1-6.8-3-8.7c-3.1-1.8-6.9-1-10.1,0.2c0,6.6,0,13.2,0,19.8c0.1,1.8,0,3.8,1.1,5.2c1,0.5,2.1,0.9,3.3,1.1c0,0.4,0,1.2,0,1.6  c-5.5-0.5-11-0.5-16.5,0c0-0.4,0-1.2,0-1.6c1.7-0.4,3.9-0.9,4.2-2.9c0.8-4.8,0.2-9.8,0.4-14.7c-0.1-2.8,0.2-5.6-0.2-8.4  c-0.4-1.9-2.7-1.8-4.1-2.2C2582.6,56.8,2582.6,55.9,2582.6,55.5L2582.6,55.5L2582.6,55.5z M2681,55.4c3.9,0,7.9-0.6,11.6-1.8  l0.1,2.9c3.8-3,9.5-3.8,13.5-0.8L2702,62c-2-2.9-5.9-3.9-9.1-2.2c0,0,0,13.3,0,20c0.2,1.5-0.1,3.4,1.3,4.4c1.3,0.8,3,0.8,4.5,1  c0,0.5,0,1.4,0,1.8c-6-0.4-12.1-0.4-18.1,0v-1.8c1.9-0.3,4-1,4.3-2.2c0.8-2.9,0.4-5.9,0.5-8.8c-0.1-4.7,0.2-9.4-0.1-14.1  c0-2.3-2.6-2.5-4.3-2.8C2680.9,56.6,2680.9,56,2681,55.4L2681,55.4L2681,55.4z"
            ></path>
            <path
              id="monster-16"
              className="st0"
              d="M2413.4,67.6l1.4-0.7c5.9-2.8,8.5-9.9,5.6-15.8c0,0,0,0,0,0c-0.8-1.7-2-3.1-3.4-4.2  c-2.8-2.1-6.2-3.1-9.7-3c-4.1,0-8.2,0-12.4,0c-0.2,0-0.4,0-0.6,0v40.7h8.8v-16l0.2-0.1l0.6,0.5c1.2,1.5,2.4,3,3.6,4.5  c2.8,3.5,5.5,7,8.3,10.6c0.2,0.3,0.5,0.5,0.8,0.5c3.3,0,6.6,0,10.1,0L2413.4,67.6z M2409.6,60.4c-2.1,0.2-4.2,0.1-6.5,0.1V52h4.6  c0.7,0,1.3,0.1,2,0.2c2,0.4,3.4,2.1,3.4,4.1C2413.2,58.3,2411.7,60.1,2409.6,60.4L2409.6,60.4z M2203.4,84.5V41.9l-19.9,19.7  l-19.6-19.5v42.4h8.8V63.2l0.2-0.1l11,11l10.8-10.8v21.3L2203.4,84.5L2203.4,84.5L2203.4,84.5z M2258.7,49.4v35h8.4V67.3l21.2,17.6  v-35h-8.4V67L2258.7,49.4z M2383.4,49.9h-21.6v34.5h21.9v-8c-0.3,0-0.6-0.1-0.9-0.1h-11.7c-0.3,0.1-0.7-0.1-0.8-0.4  c0-0.1,0-0.2,0-0.4c0-1.3,0.1-2.6,0-3.9c0-0.7,0.2-0.8,0.9-0.8h8.8c0.3,0,0.6,0,0.8,0v-7.8h-10.4c0-0.3-0.1-0.5-0.1-0.7v-3.8  c-0.1-0.3,0.1-0.7,0.4-0.8c0.1,0,0.2,0,0.4,0h11.5c0.3,0,0.5,0,0.8-0.1L2383.4,49.9L2383.4,49.9L2383.4,49.9z M2296.8,79.9  c1.5,1.7,3.5,3,5.6,3.8c4.4,1.7,8.9,2,13.4-0.1c5.1-2.5,7.3-8.7,4.8-13.9c-0.4-0.8-0.8-1.5-1.4-2.1c-1.7-1.8-3.8-3.2-6.2-4  c-1.6-0.6-3.1-1.3-4.6-2c-1.1-0.4-1.6-1.7-1.1-2.7c0,0,0,0,0,0c0.3-0.7,1-1.2,1.8-1.3c1.1-0.2,2.2-0.2,3.2-0.1  c1.5,0.4,3,0.9,4.4,1.5l4-6.3c-0.4-0.3-0.6-0.5-0.9-0.7c-3.7-2.5-8.3-3.3-12.7-2.3c-4.3,0.9-7.6,4.3-8.3,8.7  c-0.8,4.4,1.4,8.9,5.5,10.8c1.7,0.9,3.6,1.5,5.4,2.3c0.9,0.4,1.7,0.9,2.5,1.4c0.9,0.7,1.1,2,0.4,2.9c-0.2,0.3-0.5,0.5-0.9,0.7  c-0.5,0.2-1.1,0.4-1.6,0.4c-2.4,0.2-4.7-0.5-6.7-1.8c-0.7-0.4-1.4-1-2.1-1.5L2296.8,79.9z M2328,57.9h7c0.9,0,0.9,0,0.9,0.9v25.6  h8.7V57.9h7.9v-8H2328V57.9L2328,57.9z M2231.6,49.3c-9.9-0.1-18,7.7-18.1,17.6s7.7,18,17.6,18.1c9.9,0.1,18-7.7,18.1-17.6  c0,0,0,0,0,0v-0.2C2249.2,57.5,2241.3,49.5,2231.6,49.3z M2231.1,76.7c-5.3,0-9.6-4.2-9.6-9.5c0-5.3,4.2-9.6,9.5-9.6  c5.3,0,9.5,4.2,9.6,9.4v0.1C2240.5,72.4,2236.4,76.7,2231.1,76.7L2231.1,76.7z"
            ></path>
            <path
              id="yahoo-17"
              className="st0"
              d="M2093.1,45.5c-1.2,5.2-5.8,23.4-7.7,35.6v0.1c-0.8-0.3-1.7-0.4-2.6-0.4l0,0l0,0  c1.7-12,2.7-24.5,3.7-37.1c0-2.5,1.3-3.5,3-3.5h0.7c1.8,0.3,3.2,1.4,3.2,3.2C2093.5,44.1,2093.3,44.8,2093.1,45.5z M1976.6,45.1  c-2.3,0.6-4.7,0.6-7,0l3.6,3.8L1976.6,45.1z M1943.7,48.8l3.6-3.8c-2.3,0.6-4.7,0.6-7,0L1943.7,48.8z M1916.3,46.6l15.3,38.4  l6.2,1.9c-4.2-7.8-12.6-28.3-17.9-41.8L1916.3,46.6z M1916.5,47.2l3.4-2.1c-1.6,0.6-3.3,0.6-4.9,0L1916.5,47.2z M1915.4,48.5l2,3.5  c4.1,11.5,9,23.2,13.5,34.9c0.9-0.5,1.6-1.2,2.2-2l-15.6-38.3L1915.4,48.5z M1904.2,86.8c4.5-11.4,11.6-27.4,13.6-34.7v-5.6l-2,0.6  l-16.2,38.1L1904.2,86.8L1904.2,86.8L1904.2,86.8z M1900.2,39.5l1.5,3.5l3.9-1.8l1.6-1.7C1904.9,40.1,1902.5,40.1,1900.2,39.5  L1900.2,39.5L1900.2,39.5z M1889.2,69.8c5.8-10.2,15.4-26.8,18-30.4c-1.4,0.8-3,1.3-4.6,1.5l-1.2,0.4l-16.6,26.5l1.7,2.9  L1889.2,69.8L1889.2,69.8L1889.2,69.8z M1885.6,69.4l0.7-0.7l16.4-27.7l-2.5-1.5c-2,3.7-9.3,15.6-13.9,23.3l-2.2,4.2L1885.6,69.4z   M1868.9,40.9l16,29l0.9-1.1v-6c-4-7.8-10-16.8-13.7-23.3L1868.9,40.9z M1869.7,41.2l2.7-1.8c-2.3,0.6-4.7,0.6-7,0l1.1,1.2  L1869.7,41.2z M1870,41.1c-1.6-0.2-3.2-0.7-4.5-1.6c5.7,8.6,14.9,25,18,30.4l1.7,0.7l1.2-1.8L1870,41.1z M1889.2,69.9l-2.9-1.1  l-1,1.5l-0.4,19.8l4.7,2.2L1889.2,69.9z M1885.8,68.8l-2.7,1.1l-0.6,22.4l3.2-1.5L1885.8,68.8L1885.8,68.8z M1898.4,86.4l3.2-1.1  l15.9-38.8l-2.4-1.5c-5.6,14.1-12.1,30-17.9,41.8L1898.4,86.4z M1931.9,84.5l-1,2.3c2.3-0.6,4.7-0.6,6.9,0l-4.8-2.1L1931.9,84.5z   M1909.1,74.8h16l3.2-1.2l-3.5-1.7c-4.9,0.2-9.9,0.1-14.8-0.1l-3.4,1.8L1909.1,74.8z M1926.1,74.6l2.3-1.4c-7.3-0.1-14.5-0.1-21.7,0  l2.3,1.4C1914.6,74.4,1920.3,74.4,1926.1,74.6L1926.1,74.6z M1947.4,45.1l-3.3,2l-1.2,0.7v37.4l4.7,1.7  C1946.7,72.9,1946.7,59,1947.4,45.1L1947.4,45.1z M1943.8,47.1l-3.5-2c0.6,14,0.5,27.9,0,41.8l3.5-1L1943.8,47.1L1943.8,47.1z   M1969.3,86.9l4.5-1.7V47.7l-1.1-0.7l-3.5-2C1970,59,1970,72.9,1969.3,86.9L1969.3,86.9z M1946.8,67.8h22.7l3.6-1.4l-2.9-1.6  c-7.8,0.2-15.6,0.1-23.4-0.1l-2.9,1.8L1946.8,67.8z M2001.2,45.1c12.2,0,20.2,7.3,20.2,21c0,14.2-8.5,20.9-20.4,20.9  c-10,0-20.3-5.4-20.3-21C1980.7,53.6,1987.5,45,2001.2,45.1L2001.2,45.1L2001.2,45.1z M1985.5,66.1c0,11.9,5.8,19,15.6,19  c9,0,15.7-6.2,15.7-19s-6.6-19-15.7-19h-0.4C1992.6,47.2,1985.5,52.6,1985.5,66.1L1985.5,66.1z M2001.1,44.5  c13.7,0,22.6,8.1,22.6,21.7c0,12.1-7.4,21.3-22.6,21.3c-14,0-22.5-8.1-22.5-21.4C1978.6,53.9,1986.4,44.5,2001.1,44.5L2001.1,44.5  L2001.1,44.5z M2001.1,45.9c-13.1,0-19.7,8.2-19.7,20.1c0,15,9.9,20.1,19.5,20.1c11.4,0,19.6-6.4,19.6-20.1  C2020.5,52.9,2012.8,45.9,2001.1,45.9C2001.1,45.9,2001.1,45.9,2001.1,45.9z M2052.2,42.9c10,0,23.2,4.5,23.2,23.4  c0,17.5-12.1,23.2-23.2,23.2c-14.6,0-23.4-8.4-23.4-23.4C2028.8,50.8,2038.3,42.9,2052.2,42.9L2052.2,42.9L2052.2,42.9z   M2033.1,65.8c0,15.8,9.1,21.6,19,21.6c9.3,0,19.2-5.2,19.2-21.3c0-14.8-8.1-21.5-19.2-21.5C2043.2,44.6,2033.1,49.4,2033.1,65.8  L2033.1,65.8z M2052.1,42c16.6,0,26.1,9.8,26.1,24.1c0,15.2-10.3,23.8-26,23.8c-18.6,0-26.1-11.3-26.1-24.1  C2026.2,50.3,2037.4,42,2052.1,42L2052.1,42L2052.1,42z M2029.4,66.1c0,14.6,8.6,22.8,22.8,22.8c10.8,0,22.6-5.5,22.6-22.5  c0-18.4-12.9-22.7-22.6-22.7C2038.7,43.5,2029.4,51.2,2029.4,66.1L2029.4,66.1z M2079.4,89.2c0,2.1,1.7,3.2,3.8,3.2  c1.7,0.1,3.1-1.3,3.2-3c0-0.2,0-0.3,0-0.5c0-2-1.6-3.3-3.7-3.3c-1.8,0-3.3,1.4-3.3,3.1C2079.4,89,2079.4,89.1,2079.4,89.2  L2079.4,89.2L2079.4,89.2z M1886.3,92c1.1,0,2.2,0.1,3.3,0.3l-3.3-2.4l-3.3,2.4C1884.1,92.1,1885.2,92,1886.3,92z M1897.8,86.9  c2.2-0.6,4.4-0.6,6.6,0c-0.8-0.5-1.5-1.2-2.1-2L1897.8,86.9L1897.8,86.9z M1940.3,86.9c2.3-0.6,4.7-0.6,7,0l-3.5-2L1940.3,86.9z   M1946.8,67.5c7.8-0.1,15.6-0.1,23.4,0l2.9-1.5c-9.7,0.1-19.5,0.1-29.2,0L1946.8,67.5L1946.8,67.5L1946.8,67.5z M1972.8,84.9v1  l3.6,1c-0.6-13.9-0.7-27.8-0.1-41.8l-3.6,2V84.9L1972.8,84.9z M1973,84.9l-3.5,2c2.3-0.6,4.7-0.6,7,0L1973,84.9z"
            ></path>
            <path
              id="intuitive-18"
              className="st0"
              d="M1673,21.5c4.7,0.3,8.2,4.4,7.9,9.1c-0.3,4.2-3.7,7.6-7.9,7.9l0,0c-4.7-0.3-8.2-4.4-7.9-9.1  C1665.4,25.2,1668.8,21.8,1673,21.5z M1673,34.4c2.4,0,4.4-2,4.4-4.4c0-2.4-2-4.4-4.4-4.4l0,0c-2.4,0-4.4,2-4.4,4.4  C1668.6,32.4,1670.6,34.4,1673,34.4z M1670.8,85.8V47h4.4v38.7H1670.8z M1552.3,85.8V47h4.4v38.7H1552.3z M1589.4,47h3.9v38.7h-5  L1575,53.4v32.4h-3.9V47h5.2l13.1,31.4L1589.4,47L1589.4,47L1589.4,47z M1721.8,85.8V47h4.4v38.7H1721.8z M1793.8,51h-13.8v12.4  h12.8v3.9h-12.8v14.6h13.8v3.9h-18.1V47h18.1V51L1793.8,51z M1758.9,47.1h4.5l-10,38.7h-5.1l-9.5-38.7h4.5l7.5,34L1758.9,47.1  L1758.9,47.1L1758.9,47.1z M1687.5,47.1h21.5V51h-8.6v34.8h-4.4V51h-8.6L1687.5,47.1L1687.5,47.1L1687.5,47.1z M1603.5,47.1h21.5V51  h-8.6v34.8h-4.4V51h-8.6L1603.5,47.1L1603.5,47.1L1603.5,47.1z M1653,47.1h4.2v28.7c0,5.9-4.8,10.6-10.6,10.6s-10.6-4.8-10.6-10.6  V47h4.4v28.7c0,3.5,2.8,6.3,6.3,6.3c3.5,0,6.3-2.8,6.3-6.3V47.1L1653,47.1L1653,47.1z"
            ></path>
            <path
              id="_23andme-19"
              className="st0"
              d="M1316.2,65.8l8.8,29.2l-4,8.3c-2.5,5.1-8.7,7.3-13.8,4.8c-5.1-2.5-7.3-8.7-4.8-13.8l0,0  L1316.2,65.8z M1359.1,1c-5.1-2.5-11.3-0.3-13.8,4.8c0,0,0,0,0,0l-15.7,32.5l8.8,29.2l25.5-52.7C1366.4,9.7,1364.3,3.5,1359.1,1  C1359.1,1,1359.1,1,1359.1,1z M1332.9,120.6c1.8,5.4,7.7,8.3,13.1,6.5c5.2-1.8,8.1-7.2,6.7-12.5l-14.3-47.1L1325.1,95L1332.9,120.6z   M1324.2,20.5c-1.8-5.4-7.7-8.3-13.1-6.5c-5.2,1.8-8.1,7.2-6.7,12.5l11.9,39.2l13.3-27.4L1324.2,20.5z M1316.2,65.7l8.8,29.3  l13.3-27.4l-8.8-29.2L1316.2,65.7z M1356.1,60.7c0-1.7,0.1-4.3,3.3-4.3c1.7,0,3.1,1.3,3.2,3c0,0.1,0,0.2,0,0.2  c0,2.6-1.7,3.8-5.8,6.8c-5,3.6-5.2,6.4-5.3,9.1h15.7v-4h-10c0.5-1.1,2.1-2.1,5.1-4.2c2.2-1.5,4.8-3.5,4.8-7.5c0-4.7-3.5-7.2-7.9-7.2  c-2,0-7.5,0.7-7.5,8.1L1356.1,60.7L1356.1,60.7z M1375.5,65.5c2.1,0,5.1,0.1,5.1,3.3c0,2.6-1.6,3.8-3.4,3.8c-3,0-3.4-2.8-3.4-4l0,0  h-4.4c0,7.2,5.8,7.7,8,7.7c4.6,0,7.8-3.1,7.8-7.4c0-3.9-2.7-5.1-3.5-5.3v-0.1c1.7-0.8,2.8-2.5,2.8-4.4c0-4.8-4-6.4-7.1-6.4  c-5.2,0-7.6,3.1-7.6,7.4h4.2c0-0.8,0-3.8,3.1-3.8c1.5-0.1,2.8,1.1,2.9,2.6c0,0.1,0,0.2,0,0.3c0,3-2.5,3.1-3.8,3.1h-0.7L1375.5,65.5  L1375.5,65.5z M1401.8,62.9c0-4.2-4.4-5-6.8-5c-3.5,0-7.2,0.7-7.7,6h4.4c0-1.3,1.1-2.4,2.4-2.4c0.1,0,0.2,0,0.3,0c1.2,0,3,0.1,3,2  c-0.1,0.8-0.8,1.4-1.6,1.4l-4.1,0.6c-2.9,0.4-5,2.1-5,5.5c0,3.6,2.7,5,5.2,5c2.1,0.1,4.2-0.9,5.6-2.5c0,0.7,0.2,1.4,0.4,2h4.9v-0.6  c-0.6-0.2-1-0.7-1-2.7L1401.8,62.9L1401.8,62.9z M1397.4,69.4c0,2.1-2,3.4-4,3.4c-1.1,0.1-2-0.8-2.1-1.9c0-0.1,0-0.1,0-0.2  c0-1.9,1.4-2.3,3.1-2.6c1.1-0.1,2.1-0.4,3.1-0.9L1397.4,69.4L1397.4,69.4z M1420.5,63.7c0-3.8-2.6-5.8-6-5.8c-2.2-0.1-4.2,1.1-5.2,3  h-0.1v-2.5h-4.3v17.2h4.5v-9.9c0-2.6,1.6-4,3.6-4c2.9,0,2.9,2.1,2.9,3.4v10.5h4.5L1420.5,63.7L1420.5,63.7z M1438.4,52.4h-4.5v8.2  h-0.1c-1-1.7-3-2.8-5-2.7c-3.8,0-7.2,2.9-7.2,8.9c0,4.7,2.1,9.2,7.2,9.2c2,0.1,3.9-0.9,5-2.6h0.1v2.2h4.4L1438.4,52.4L1438.4,52.4z   M1426.3,67.1c0-2.7,1-5.3,3.8-5.3c3.1,0,3.9,2.8,3.9,5.5c0,2.6-1.1,4.9-4,4.9S1426.3,69.2,1426.3,67.1L1426.3,67.1z M1466.2,52.4  h-7.5l-4.4,18.3h-0.1l-4.5-18.3h-7.6v23.2h4.9V56.2l0,0l4.5,19.4h5.1l4.6-19.4h0.1v19.4h4.8L1466.2,52.4L1466.2,52.4z M1481,70.5  c-0.5,1.2-1.6,2-2.9,1.9c-3.7,0-3.9-2.9-4-4.2h11.8v-0.8c0-7.9-4.7-9.5-8.1-9.5c-7.5,0-8.2,6.6-8.2,8.7c0,7.1,3.7,9.4,8.6,9.4  c3.5,0.2,6.7-2.1,7.6-5.5C1485.7,70.5,1481,70.5,1481,70.5z M1474.2,65.3c0.3-2.3,1.4-3.6,3.5-3.6c1.5,0,3.2,0.8,3.5,3.6H1474.2  L1474.2,65.3z"
            ></path>
            <path
              id="shell-20"
              className="st0"
              d="M975.7,72h21.8c-0.3,4.8,2,5.9,3.1,6.7c1.2,0.4,10.3,0.9,14.8,0.1c1.8-0.3,3.5-1,3.5-6.5  c0-2.3-0.6-4.9-3.2-5.5c-9.5-0.8-18.8,0.2-28.4-0.7c-9.5-2.1-11-4.6-11.5-12.1c0.7-10.4,4.4-13.5,15-13.8c11.1-0.3,22.2-0.3,33.3,0  c11.3,0,14.8,4.4,14.8,13.9h-20c0-4.7-0.9-6.5-3.2-6.7c-4.9-0.3-9.7-0.3-14.6,0c-1.8,0-4.2,0.9-4.2,5.2c0,4,1,5,3.7,5.4  c8.2,0.3,16.5,0.5,24.6,1c13.5,0.8,13.9,6.7,14.3,13c0.2,9-3,12.1-5.4,13.6c-2.2,1-13.1,2.2-15.2,2.2h-21.5  c-5.5,0-10.9-0.7-16.2-2.1C976.2,84.3,975.7,77.7,975.7,72L975.7,72L975.7,72z M1180.1,88h19.1V40.4h-19.1V88z M1212,88h18.8V40.4  H1212V88z M1169,63.1c-0.3-1.5-0.8-2.9-1.3-4.4c-3.2-5.3-14.5-5.3-25.3-5.5c-8.2,0-20.4,0.2-24,3.7c-1.4,1.8-2.4,3.9-2.7,6.2  c-0.4,2.3-0.5,4.7-0.5,7.1c0,2.5,0.2,12,4.8,14.5c4.3,2.8,17.2,3.1,22.1,3.1c5.3,0,19.8-0.6,22-3c3.8-1.3,4.7-6.1,5.5-9.8h-18.7  c0,3.7-2.9,5.9-8.8,5.6c-5.3,0.3-8.3-0.9-8.3-7.5l35.8,0.1C1169.7,69.8,1169.5,66.4,1169,63.1L1169,63.1L1169,63.1z M1150.8,66.3  h-17c0-1.1,0.2-2.2,0.6-3.2c1.2-3,4.4-3.1,7.7-3.4c5.2,0,7.4,1.2,8.3,3.4C1150.9,64.1,1151,65.2,1150.8,66.3L1150.8,66.3  L1150.8,66.3z M1050.7,88h18.6V67.8c0.4-2.8,1.1-5,8-5c6.5-0.1,8.3,1.7,8.3,5V88h18.6V67.8c0-6.6-0.1-10.2-4.4-12.1  c-3.8-2.5-9.3-2.1-14.5-2.1c-5.4,0-11.4,0.7-16,2.9v-16h-18.7V88L1050.7,88z"
            ></path>
            <path
              id="uber-21"
              className="st0"
              d="M901.6,79.1c-0.6,0.9-1.9,1.2-2.8,0.5c-0.1-0.1-0.2-0.1-0.3-0.2L889.5,68h0.5  c17.4-3.7,13-24.5-1.3-24.8H859v40.7h4.7V70.6c0-1.7,0.6-2.6,2.5-2.6h17.2l11.9,14.9c2.4,2,6.6,2.9,9.3,0L901.6,79.1z M865.8,63.5  c-1.7,0-2.1,0.9-2.1,0.9V47.7h25.1c10.6,0.4,10.9,15.3,0,15.8L865.8,63.5L865.8,63.5z M816.3,43.2h-37.5v40.7h38.8v-4.7h-34.1V67.7  c0-1.7,0.6-2.6,2.5-2.6h20.2v-4.5h-20.6c-1.7,0-2.1,0.9-2.1,0.9V47.7h32.8L816.3,43.2L816.3,43.2z M732.2,63  c8.1-6,4.6-18.5-5.6-19.8h-31.1v40.7h31.1C736.6,82.6,741.5,69.9,732.2,63z M700.3,47.7h25.8c3.6,0,6.5,2.9,6.5,6.5  s-2.9,6.5-6.5,6.5l0,0h-23.7c-1.7,0-2.1,0.9-2.1,0.9V47.7z M726.1,79.2h-25.8V67.7c0-1.7,0.6-2.6,2.5-2.6h23.3  c3.9,0.3,6.8,3.8,6.5,7.6C732.3,76.2,729.6,79,726.1,79.2L726.1,79.2z M636.2,84.8c3.5,0,17.8-2.3,17.8-15.7V43.2h-4.8V68  c0,11.9-13.3,11.3-13.3,11.3h-4.2c0,0-13.3,0.6-13.3-11.3V50.2c0-3.7-2.9-7-7.5-7v4.7c1.6,0.1,2.9,1.5,2.8,3.1c0,0,0,0,0,0V69  c0,13.4,14.3,15.7,17.8,15.7L636.2,84.8L636.2,84.8z"
            ></path>
            <path
              id="google-22"
              className="st0"
              d="M53.8,53.4H28.3V61h18.1c-0.9,10.7-9.7,15.2-18.1,15.2c-11,0-20-8.8-20-19.8c0-0.1,0-0.2,0-0.3  C8.1,45,17,35.9,28,35.7c0.1,0,0.2,0,0.3,0c5.1,0,10,1.9,13.7,5.5l5.3-5.5c-5.2-5-12.1-7.7-19.2-7.6C12.7,28.2,0.3,40.5,0,55.9  c0.2,15.6,12.9,28.1,28.5,27.9c14.9,0,25.8-10.2,25.8-25.3C54.3,56.8,54.2,55.1,53.8,53.4L53.8,53.4L53.8,53.4z M74.7,47.9  c-9.9,0.1-17.9,8.1-17.8,18c0.1,9.9,8.1,17.9,18,17.8c9.8-0.1,17.7-8,17.8-17.8C92.7,54.1,83.4,47.9,74.7,47.9L74.7,47.9z   M74.8,54.9c5.2,0,10,4.2,10,10.9s-4.8,10.9-10,10.9c-5.7,0-10.2-4.6-10.2-10.9S69.1,55,74.8,54.9L74.8,54.9z M113.8,47.9  C104,48,96,56.1,96,65.9s8.1,17.9,18,17.8c9.8-0.1,17.7-8,17.8-17.8C131.8,54.1,122.5,47.9,113.8,47.9L113.8,47.9z M113.9,54.9  c5.2,0,10,4.2,10,10.9s-4.8,10.9-9.9,10.9c-5.7,0-10.2-4.6-10.2-10.9S108.2,55,113.9,54.9L113.9,54.9L113.9,54.9z M152.2,47.9  c-9.6,0-17.2,8.4-17.2,17.9c0,10.8,8.8,17.9,17,17.9c3.8,0.2,7.4-1.4,9.8-4.3v3.5c0,6.2-3.8,9.9-9.4,9.9c-4.1,0-7.7-2.6-9.2-6.4  l-6.9,2.9c2.4,5.2,7.4,10.5,16.1,10.5c9.6,0,16.9-6,16.9-18.7V49h-7.5v3C159.4,49.3,155.9,47.9,152.2,47.9L152.2,47.9L152.2,47.9z   M152.9,54.9c4.7,0,9.6,4,9.6,10.9s-4.8,10.8-9.7,10.8c-5.1,0-9.9-4.2-9.9-10.8C142.9,59,147.9,54.9,152.9,54.9L152.9,54.9  L152.9,54.9z M202.7,47.9c-9.1,0-16.7,7.2-16.7,17.9c0,11.3,8.5,18,17.6,18c7.6,0,12.2-4.1,15-7.8l-6.2-4.1c-1.8,3.1-5.2,5-8.8,4.9  c-5,0-7.3-2.8-8.8-5.4l24-10l-1.2-2.9C215.3,52.7,209.9,47.9,202.7,47.9L202.7,47.9L202.7,47.9z M203,54.8c2.8-0.1,5.3,1.4,6.6,3.8  l-16,6.7C193,60.1,197.9,54.8,203,54.8L203,54.8z M174.6,82.7h7.9V29.9h-7.9V82.7z"
            ></path>
            <path
              id="airbnb-23"
              className="st0"
              d="M417.1,41c0,3-2.4,5.4-5.4,5.4c-3,0-5.4-2.4-5.4-5.4c0-3,2.3-5.4,5.4-5.4  C414.7,35.7,417.1,38.1,417.1,41z M394.7,52c0,0.5,0,1.3,0,1.3s-2.6-3.3-8.1-3.3c-9.1,0-16.2,6.9-16.2,16.5c0,9.5,7,16.5,16.2,16.5  c5.6,0,8.1-3.4,8.1-3.4V81c0,0.7,0.5,1.2,1.2,1.2h6.8V50.8c0,0-6.2,0-6.8,0C395.2,50.8,394.7,51.4,394.7,52z M394.7,72.1  c-1.3,1.8-3.8,3.4-6.8,3.4c-5.3,0-9.4-3.3-9.4-9s4.1-9,9.4-9c2.9,0,5.6,1.7,6.8,3.4V72.1z M407.6,50.8h8v31.4h-8V50.8z M527.5,50  c-5.5,0-8.1,3.3-8.1,3.3V35.7h-8v46.5c0,0,6.2,0,6.8,0c0.7,0,1.2-0.6,1.2-1.2v-1.4l0,0c0,0,2.6,3.4,8.1,3.4c9.1,0,16.2-7,16.2-16.5  C543.6,57,536.5,50,527.5,50z M526.1,75.4c-3.1,0-5.5-1.6-6.8-3.4V60.8c1.3-1.7,3.9-3.4,6.8-3.4c5.3,0,9.4,3.3,9.4,9  S531.5,75.4,526.1,75.4z M507.2,63.6v18.7h-8V64.5c0-5.2-1.7-7.3-6.2-7.3c-2.4,0-4.9,1.3-6.5,3.1v21.9h-8V50.8h6.4  c0.7,0,1.2,0.6,1.2,1.2v1.3c2.3-2.4,5.4-3.3,8.5-3.3c3.5,0,6.4,1,8.8,3C506.1,55.3,507.2,58.3,507.2,63.6z M458.9,50  c-5.5,0-8.1,3.3-8.1,3.3V35.7h-8v46.5c0,0,6.2,0,6.8,0c0.7,0,1.2-0.6,1.2-1.2v-1.4l0,0c0,0,2.6,3.4,8.1,3.4c9.1,0,16.2-7,16.2-16.5  C475.1,57,468,50,458.9,50z M457.6,75.4c-3.1,0-5.5-1.6-6.8-3.4V60.8c1.3-1.7,3.9-3.4,6.8-3.4c5.3,0,9.4,3.3,9.4,9  S462.9,75.4,457.6,75.4z M435.9,50c2.4,0,3.7,0.4,3.7,0.4v7.4c0,0-6.7-2.3-10.9,2.5v22h-8V50.8c0,0,6.2,0,6.8,0  c0.7,0,1.2,0.6,1.2,1.2v1.3C430.1,51.5,433.4,50,435.9,50z M352.5,79.4c-0.4-1-0.8-2.1-1.3-3c-0.7-1.5-1.3-2.9-1.9-4.3l-0.1-0.1  c-5.8-12.5-12-25.2-18.5-37.8l-0.3-0.5c-0.7-1.3-1.3-2.6-2-3.9c-0.8-1.5-1.7-3.1-3-4.6c-2.7-3.3-6.5-5.2-10.6-5.2  c-4.2,0-7.9,1.8-10.7,5c-1.3,1.5-2.2,3.1-3,4.6c-0.7,1.3-1.3,2.7-2,3.9l-0.3,0.5c-6.4,12.5-12.7,25.2-18.5,37.8l-0.1,0.2  c-0.6,1.3-1.3,2.8-1.9,4.3c-0.4,0.9-0.8,1.9-1.3,3c-1.1,3.1-1.4,6-1,9c0.9,6.3,5.1,11.5,10.9,13.9c2.2,0.9,4.4,1.3,6.8,1.3  c0.7,0,1.5-0.1,2.2-0.2c2.8-0.3,5.6-1.3,8.4-2.8c3.4-1.9,6.7-4.7,10.4-8.7c3.7,4,7,6.8,10.4,8.7c2.8,1.6,5.6,2.5,8.4,2.8  c0.7,0.1,1.5,0.2,2.2,0.2c2.3,0,4.7-0.4,6.8-1.3c5.8-2.3,9.9-7.7,10.9-13.9C354,85.4,353.6,82.5,352.5,79.4z M314.9,83.7  c-4.5-5.7-7.4-11-8.4-15.5c-0.4-1.9-0.5-3.6-0.3-5.1c0.2-1.3,0.7-2.5,1.3-3.5c1.6-2.3,4.3-3.7,7.4-3.7s5.8,1.3,7.4,3.7  c0.7,1,1.2,2.2,1.3,3.5c0.3,1.5,0.2,3.3-0.3,5.1C322.3,72.6,319.4,77.9,314.9,83.7z M348.2,87.6c-0.6,4.3-3.5,8.1-7.6,9.8  c-2,0.8-4.2,1.1-6.4,0.8c-2.1-0.3-4.2-0.9-6.4-2.2c-3-1.7-6-4.3-9.5-8.1c5.5-6.8,8.9-13,10.1-18.5c0.6-2.6,0.7-4.9,0.4-7.1  c-0.3-2.1-1.1-4-2.3-5.7c-2.6-3.8-6.9-5.9-11.8-5.9s-9.2,2.3-11.8,5.9c-1.2,1.7-1.9,3.6-2.3,5.7c-0.3,2.2-0.3,4.6,0.4,7.1  c1.3,5.5,4.7,11.8,10.1,18.6c-3.4,3.8-6.5,6.4-9.5,8.1c-2.2,1.3-4.3,1.9-6.4,2.2c-2.3,0.3-4.4-0.1-6.4-0.8c-4.1-1.7-7-5.4-7.6-9.8  c-0.3-2.1-0.1-4.2,0.8-6.5c0.3-0.8,0.7-1.7,1.1-2.7c0.6-1.3,1.3-2.8,1.9-4.2l0.1-0.2c5.8-12.5,12-25.2,18.4-37.5l0.3-0.5  c0.7-1.3,1.3-2.6,2-3.8c0.7-1.3,1.4-2.6,2.3-3.7c1.8-2,4.1-3.1,6.7-3.1s4.9,1.1,6.7,3.1c0.9,1.1,1.7,2.3,2.3,3.7  c0.7,1.3,1.3,2.6,2,3.8l0.3,0.5c6.4,12.5,12.5,25.2,18.3,37.6v0.1c0.7,1.3,1.3,2.8,1.9,4.2c0.4,1,0.8,1.8,1.1,2.7  C348.3,83.4,348.5,85.5,348.2,87.6z"
            ></path>
          </svg>
        </p>
      </div>
      <DesignCards />
      <IndustriesCards />
      <DegitalMarketingCards/>
      <AskQuestion/>
    </div>
  );
};

export default Dashboard;
