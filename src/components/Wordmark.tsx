import React from "react";
import clsx from "clsx";

type WordmarkProps = {
  className?: string;
};

export default function Wordmark({ className }: WordmarkProps) {
  return (
    <svg
      width="160"
      height="40"
      viewBox="0 0 324 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("text-primary", className)}
    >
      <path
        d="M308.444 23.917V45.0816H304.999V23.917H308.444ZM323.638 48.5262V51.9707H304.999V48.5262H323.638Z"
        fill="currentColor"
      />
      <path d="M293.89 23.917V51.9707H290.445V23.917H293.89Z" fill="currentColor" />
      <path
        d="M281.129 51.9707H274.354C270.642 51.9707 267.121 50.5163 264.442 47.8755C261.801 45.1965 260.347 41.6754 260.347 37.963C260.347 34.2123 261.801 30.6912 264.442 28.0121C267.121 25.3713 270.642 23.917 274.354 23.917H281.129V27.3615H274.354C268.537 27.3615 263.791 32.1073 263.791 37.963C263.791 43.7804 268.537 48.5262 274.354 48.5262H281.129V51.9707Z"
        fill="currentColor"
      />
      <path
        d="M230.244 51.9707V30.7678L233.689 36.7V51.9707H230.244ZM247.007 23.917H250.452V51.9707H250.414H246.472L242.07 44.3927L240.386 41.4075L238.396 38.0012L230.244 23.917H234.224L242.338 38.0012L247.007 46.115V23.917Z"
        fill="currentColor"
      />
      <path
        d="M205.65 39.6852V48.5262H220.844V51.9707H205.65H202.205V48.5262V39.6852V36.2407V30.806H205.65V36.2407H213.342V39.6852H205.65ZM202.205 23.917H220.844V27.3615H202.205V23.917Z"
        fill="currentColor"
      />
      <path
        d="M185.386 23.917C189.749 23.917 193.232 27.4381 193.232 31.7628V31.8394C193.232 36.1259 189.749 39.647 185.386 39.647H179.339V51.9324H175.933V39.647V36.2407H179.339H185.386C187.835 36.2407 189.864 34.2505 189.864 31.8394V31.7628C189.864 29.3134 187.835 27.3232 185.386 27.3232H175.933V23.917H185.386Z"
        fill="currentColor"
      />
      <path
        d="M151.064 23.917V51.9707H147.619V23.917H151.064Z"
        fill="currentColor"
      />
      <path
        d="M128.737 27.9741L126.823 32.0309L117.561 51.9326H113.772L124.948 27.9741L126.823 23.8789L128.737 27.9741ZM139.836 51.9326H136.047L128.737 36.1261L130.612 32.0692L139.836 51.9326Z"
        fill="currentColor"
      />
      <path
        d="M68.5966 7.83333H84.2759L76.4362 0L68.5966 7.83333Z"
        fill="url(#paint0_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M68.5966 76.375V72.4583H84.2759V76.375H68.5966Z"
        fill="url(#paint1_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.3184 70.5L48.9976 54.8333H68.5966V31.3333L23.5188 76.375H0L66.6367 9.79167H84.2759V70.5H33.3184ZM78.3962 68.5417H80.3561V11.75H78.3962V68.5417ZM72.5164 68.5417H74.4763V11.75H72.5164V68.5417Z"
        fill="url(#paint2_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="84.2759"
          y1="37.9241"
          x2="0"
          y2="37.9241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--primary)" />
          <stop offset="1" stopColor="var(--primary)" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="84.2759"
          y1="37.9241"
          x2="0"
          y2="37.9241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--primary)" />
          <stop offset="1" stopColor="var(--primary)" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="84.2759"
          y1="37.9241"
          x2="0"
          y2="37.9241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--primary)" />
          <stop offset="1" stopColor="var(--primary)" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
