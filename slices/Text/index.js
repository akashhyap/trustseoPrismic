import * as prismicH from "@prismicio/helpers";
import RichText from "../../components/RichText";

const Text = ({ slice }) => {
  return (
    <div className="max-w-5xl mx-auto mt-10">
     {slice.primary.text && <RichText field={slice.primary.text} className="text_description" />}
    </div>
  );
};

export default Text;
