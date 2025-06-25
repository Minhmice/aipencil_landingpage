import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { JSX } from "react";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
      <div className="relative text-foreground">
        {isFilled.richText(slice.primary.heading) && (
          <h1 className="hero__heading text-balance text-5xl font-medium md:text-7xl">
            <PrismicText field={slice.primary.heading} />
          </h1>
        )}
        {isFilled.richText(slice.primary.body) && (
          <div className="mx-auto mt-6 max-w-md text-balance text-muted-foreground">
            <PrismicRichText field={slice.primary.body} />
          </div>
        )}
        {isFilled.link(slice.primary.link) && (
          <ButtonLink className="mt-8" field={slice.primary.link}>
            {slice.primary.buttonlabel}
          </ButtonLink>
        )}
        {isFilled.image(slice.primary.image) && (
          <div className="hero__image glass-container mt-16 w-fit">
            <div className="hero__glow absolute inset-0 -z-10 bg-primary/30 blur-2xl filter" />
            <PrismicNextImage
              className="rounded-lg"
              field={slice.primary.image}
              priority
              sizes="100vw"
            />
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default Hero;
