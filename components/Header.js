import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { useEffect, useState } from "react";

const Profile = ({ name, description, profilePicture }) => {
  return (
    <div className="px-4">
      <div className="grid max-w-lg grid-cols-1 justify-items-center gap-8">
        <PrismicLink href="/" tabIndex="-1">
          <div className="relative h-40 w-40 overflow-hidden rounded-full bg-slate-300">
            {prismicH.isFilled.image(profilePicture) && (
              <PrismicNextImage
                field={profilePicture}
                fill={true}
                className="object-cover"
              />
            )}
          </div>
        </PrismicLink>
        {(prismicH.isFilled.richText(name) ||
          prismicH.isFilled.richText(description)) && (
          <div className="grid grid-cols-1 gap-2 text-center">
            {prismicH.isFilled.richText(name) && (
              <Heading>
                <PrismicLink href="/">
                  <PrismicText field={name} />
                </PrismicLink>
              </Heading>
            )}
            {prismicH.isFilled.richText(description) && (
              <p className="font-serif text-2xl italic leading-normal tracking-tight text-slate-500">
                <PrismicText field={description} />
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const NavItem = ({ children }) => {
  return <li className="text-white transition-all">{children}</li>;
};

export const Header = ({ navigation, settings }) => {
  const sitelogo =
    prismicH.isFilled.image(settings.data.profilePicture) &&
    settings.data.profilePicture;

  const [stateNavbar, setStateNavbar] = useState(false);

  useEffect(() => {
    const fixNavBar = () => {
      if (window.scrollY > 0) {
        setStateNavbar(true);
      } else {
        setStateNavbar(false);
      }
    };
    window.addEventListener("scroll", fixNavBar);

    return () => {
      window.removeEventListener("scroll", fixNavBar);
    };
  }, []);

  return (
    <Bounded
      as="header"
      className={`beforeScroll relative z-10 ${
        stateNavbar ? "afterScroll py-2" : ""
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div className={`relative transition-all ${stateNavbar ? "basis-16": "basis-20"}`}>
          {prismicH.isFilled.image(sitelogo) && (
            <PrismicNextImage
              field={sitelogo}
              layout="responsive"
              width={84}
              height={60}
              className="object-cover"
            />
          )}
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center gap-10">
            {navigation.data?.links.map((item) => (
              <NavItem key={prismicH.asText(item.label)}>
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </NavItem>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
};
