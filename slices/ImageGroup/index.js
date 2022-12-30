import React from "react";
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
/**
 * @typedef {import("@prismicio/client").Content.ImageGroupSlice} ImageGroupSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGroupSlice>} ImageGroupProps
 * @param { ImageGroupProps }
 */
const ImageGroup = ({ slice }) => {
  const image = slice.items;

  // console.log("image:", image);
  return (
    <section className="max-w-5xl mx-auto mt-14">
      <span className="title">
        {slice.primary.title ? (
          <PrismicRichText field={slice.primary.title} />
        ) : (
          ''
        )}
      </span>
      {slice.primary.description ? (
        <PrismicRichText field={slice.primary.description} />
      ) : (
        ''
      )}
      <div className="image_group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
        {slice?.items?.map((item, i) => {
          return (
            <figure key={i} className="self-center justify-self-center">
              <PrismicNextImage field={item.image} className="max-w-full" />
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default ImageGroup;
