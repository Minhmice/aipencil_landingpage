import Bounded from "@/components/Bounded";
import { Content, asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";
import { JSX } from "react";

/**
 * Props for `Bento`.
 */
export type BentoProps = SliceComponentProps<Content.BentoSlice>;

/**
 * Component for "Bento" Slices.
 */
const Bento = ({ slice }: BentoProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading2: ({ children }) => (
            <h2 className="text-balance text-center text-5xl font-medium md:text-7xl text-foreground">
              {children}
            </h2>
          ),
          em: ({ children }) => (
            <em className="bg-gradient-to-b from-primary/20 to-primary bg-clip-text not-italic text-transparent">
              {children}
            </em>
          ),
        }}
      />

      <div className="mx-auto mt-6 max-w-md text-balance text-center text-muted-foreground" >
        <PrismicRichText field={slice.primary.body} />
      </div>

      <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10 ">
        {slice.primary.bento_box.map((item) => (
          <div
            className={clsx(
              "glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-card to-card/80 p-4",
              item.wide ? "md:col-span-2" : "md:col-span-1",
            )}
            key={asText(item.title)}
          >
            <h3 className="text-2xl text-foreground">
              <PrismicText field={item.title} />
            </h3>
            <div className="max-w-md text-balance text-muted-foreground">
              <PrismicRichText field={item.body} />
            </div>
            <PrismicNextImage field={item.image} className="max-h-36 w-auto" />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Bento;
