import { PrismicLink } from "@prismicio/react";

const CustomLink = ({ link, text, className }) => {
  return (
    <PrismicLink field={link}>
      <span className={className}>{text}</span>
    </PrismicLink>
  );
};

export default CustomLink;
