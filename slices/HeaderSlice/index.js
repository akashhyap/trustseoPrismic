import React from "react";
import RichText from "../../components/RichText";

/**
 * @typedef {import("@prismicio/client").Content.HeaderSliceSlice} HeaderSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSliceSlice>} HeaderSliceProps
 * @param { HeaderSliceProps }
 */
const HeaderSlice = ({ slice }) => {
  return (
    <section className="mt-14">
      {slice.primary.title ? (
        <RichText field={slice.primary.title} className="section_heading" />
      ) : (
        ""
      )}
    </section>
  );
};

export default HeaderSlice;
