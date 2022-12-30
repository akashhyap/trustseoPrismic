import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText, SliceZone } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { components } from "../slices";
import { Bounded } from "./Bounded";

export const Home = ({ home }) => {
  // console.log("index page", home);

  return (
    <>
      <div className="home relative">
         <SliceZone slices={home.data.slices} components={components} />
      </div>
    </>
   
  );
};
