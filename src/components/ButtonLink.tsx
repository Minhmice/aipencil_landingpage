// src/components/ButtonLink.tsx

import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

type ButtonLinkProps = {
  variant?: "default" | "solid";
} & PrismicNextLinkProps;

export default function ButtonLink({
  className,
  variant = "default",
  ...restProps
}: ButtonLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "relative inline-flex h-fit w-fit rounded-full border px-4 py-2 outline-none transition-colors focus:ring-2",
        {
          "border-primary/20 bg-primary/10 text-primary ring-primary/30 after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-primary after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-primary/40 hover:text-primary after:hover:bg-opacity-15":
            variant === "default",
          "bg-white text-amber-800 border-transparent hover:bg-white/90 ring-amber-600":
            variant === "solid",
        },
        className,
      )}
      {...restProps}
    />
  );
}
