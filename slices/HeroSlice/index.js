import React from "react";
import { PrismicNextImage } from "@prismicio/next";
import CustomLink from "../../components/CustomLink";
/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => {
  const introText = slice.primary.title[0].text;

  return (
    <section className="section home_header relative w-full">
      <header className="flex h-[80vh] max-w-5xl mx-auto flex-row items-center justify-between pt-11">
        <div>
          {slice.primary.title ? (
            <div
              field={slice.primary.title}
              dangerouslySetInnerHTML={{ __html: introText }}
            />
          ) : (
            ""
          )}

          <div className="mt-8">
            {slice?.items?.map((item, i) => (
              <CustomLink
                key={i}
                link={item.button_link}
                text={item.button_label}
                className="text-[17px] lg:text-[19px] inline-flex items-center text-left bg-transparent transition-all duration-150 hover:bg-slate-800 text-white-700 hover:text-white py-4 px-2 lg:px-4 border border-white-500 hover:border-transparent rounded"
              />
            ))}
          </div>
        </div>
        <div className="header_img relative hidden h-full lg:block">
          {slice.primary.image ? (
            <PrismicNextImage
              field={slice.primary.image}
              layout="responsive"
              width={13}
              height={15}
              className="pointer-events-none select-none"
            />
          ) : null}
        </div>
      </header>
    </section>
  );
};

export default HeroSlice;
