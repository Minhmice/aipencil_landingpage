"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Content, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { MdMenu, MdClose } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import clsx from "clsx";
import { gsap } from "gsap";
import * as FiIcons from "react-icons/fi";

import ButtonLink from "@/components/ButtonLink";
import Wordmark from "@/components/Wordmark";
import ThemeToggle from "@/components/ThemeToggle";

const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active === item && dropdownRef.current) {
      gsap.fromTo(
        dropdownRef.current,
        {
          opacity: 0,
          scale: 1.125,
          y: 0,
        },
        {
          opacity: 1,
          scale: 1,
          y: 30,
          duration: 0.3,
          ease: "power3.out",
        },
      );
    }
  }, [active, item]);

  return (
    <div
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)}
      className="relative"
    >
      <p className="cursor-pointer px-8   py-8 text-xl ease-in-out hover:text-primary">
        {item}
      </p>
      {active === item && (
        <div
          ref={dropdownRef}
          className="absolute top-10 left-1/2 -translate-x-1/2 pt-4"
        >
          <div className="bg-card backdrop-blur-sm rounded-2xl overflow-hidden border border-primary shadow-xl">
            <div className="w-max h-full p-6">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      className="relative flex items-center justify-center space-x-4 space-y-10"
    >
      {children}
    </nav>
  );
};

const HoveredLink = ({
  field,
  children,
  icon: Icon,
  description,
  ...rest
}: {
  field: LinkField;
  children: React.ReactNode;
  icon?: React.ElementType;
  description?: string;
}) => {
  // Render complex layout if an icon is provided
  if (Icon) {
    return (
      <PrismicNextLink
        field={field}
        className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted"
        {...rest}
      >
        <div className="flex-shrink-0 text-2xl text-primary-foreground bg-primary/20 p-2 rounded-md">
          <Icon />
        </div>
        <div>
          <p className="font-semibold text-foreground">{children}</p>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </PrismicNextLink>
    );
  }

  // Fallback to simple link
  return (
    <PrismicNextLink
      field={field}
      className="text-muted-foreground hover:text-foreground"
      {...rest}
    >
      {children}
    </PrismicNextLink>
  );
};

type NavBarProps = {
  settings: Content.SettingsDocument;
};

const features = [
    { title: "Quản lý dự án", description: "Quản lý tiến độ, nhân lực, dòng tiền dự án", link: "/features/project-management", icon: FiIcons.FiClipboard },
    { title: "Quản lý lịch biểu", description: "Lịch làm việc công ty, phòng ban", link: "/features/schedule-management", icon: FiIcons.FiCalendar },
    { title: "Mạng nội bộ", description: "Truyền thông và văn hóa doanh nghiệp", link: "/features/internal-social-network", icon: FiIcons.FiGlobe },
    { title: "Quản lý công việc", description: "Giao việc, giám sát và đánh giá kết quả", link: "/features/task-management", icon: FiIcons.FiBriefcase },
    { title: "Quản lý tài liệu", description: "Lưu trữ, chia sẻ và quản lý tài liệu", link: "/features/document-management", icon: FiIcons.FiFileText },
    { title: "Quản lý quy trình", description: "Số và tự động hóa 100% quy trình", link: "/features/process-management", icon: FiIcons.FiGitMerge },
    { title: "Quản lý văn bản", description: "Quản lý công văn đi, đến nội bộ", link: "/features/text-management", icon: FiIcons.FiInbox },
];

const solutions = [
    { 
        category: 'BY STAGE', 
        items: [
            { title: "Enterprises", link: "/solutions/enterprises", icon: FiIcons.FiBriefcase },
            { title: "Startups", link: "/solutions/startups", icon: FiIcons.FiTrendingUp },
        ]
    },
    { 
        category: 'BY BUSINESS MODEL', 
        items: [
            { title: "Ecommerce", link: "/solutions/ecommerce", icon: FiIcons.FiShoppingCart },
            { title: "Platforms", link: "/solutions/platforms", icon: FiIcons.FiGrid },
            { title: "SaaS", link: "/solutions/saas", icon: FiIcons.FiLayers },
            { title: "Marketplaces", link: "/solutions/marketplaces", icon: FiIcons.FiHome },
            { title: "Retail", link: "/solutions/retail", icon: FiIcons.FiTag },
        ]
    },
     { 
        category: 'BY USE CASE', 
        items: [
            { title: "Finance automation", link: "/solutions/finance-automation", icon: FiIcons.FiBarChart2 },
            { title: "Crypto", link: "/solutions/crypto", icon: FiIcons.FiDollarSign },
            { title: "Embedded finance", link: "/solutions/embedded-finance", icon: FiIcons.FiCreditCard },
            { title: "Creator economy", link: "/solutions/creator-economy", icon: FiIcons.FiEdit },
            { title: "Global businesses", link: "/solutions/global-businesses", icon: FiIcons.FiGlobe },
            { title: "AI companies", link: "/solutions/ai-companies", icon: FiIcons.FiCpu },
        ]
    },
];

export default function NavBar({ settings }: NavBarProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const signUpItem = settings.data.navigation.find(
    (item) => item.type === "button_1",
  );
  const ctaItem = settings.data.navigation.find(
    (item) => item.type === "button_2",
  );

  return (
    <nav className="bg-background p-4 md:p-6" aria-label="Main">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Left & Center Group */}
        <div className="flex items-center gap-10">
          <Link href="/" className="z-50" onClick={() => setOpen(false)}>
            <Wordmark className="text-primary" />
            <span className="sr-only">AI Pencil Home Page</span>
          </Link>

          <Menu setActive={setActive}>
            <div className="hidden items-center gap-8 md:flex">
              {settings.data.navigation.map((item) => {
                if (item.label === "Feature") {
                  return (
                    <MenuItem
                      key={item.label}
                      setActive={setActive}
                      active={active}
                      item={item.label!}
                    >
                      {/* Feature Dropdown Content */}
                      <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-[30rem]">
                         {features.map((feature) => (
                             <HoveredLink key={feature.title} field={{ link_type: "Web", url: feature.link }} icon={feature.icon} description={feature.description}>
                                 {feature.title}
                             </HoveredLink>
                         ))}
                      </div>
                    </MenuItem>
                  );
                }
                 if (item.label === "Solution") {
                  return (
                    <MenuItem
                      key={item.label}
                      setActive={setActive}
                      active={active}
                      item={item.label!}
                    >
                      {/* Solution Dropdown Content */}
                      <div className="flex gap-10 w-[40rem]">
                        {solutions.map((section) => (
                            <div key={section.category}>
                                <h3 className="uppercase text-xs font-bold text-muted-foreground mb-4">{section.category}</h3>
                                <div className="flex flex-col gap-4">
                                    {section.items.map((solution) => (
                                        <HoveredLink key={solution.title} field={{link_type: "Web", url: solution.link}} icon={solution.icon}>
                                            {solution.title}
                                        </HoveredLink>
                                    ))}
                                </div>
                            </div>
                        ))}
                      </div>
                    </MenuItem>
                  );
                }
                if (item.label === "Pricing") {
                  return (
                    <PrismicNextLink
                      key={item.label}
                      field={item.link}
                      className="px-3 py-3 text-xl ease-in-out hover:text-primary"
                    >
                      {item.label}
                    </PrismicNextLink>
                  );
                }
                return null; // Don't render sign up/cta in this group
              })}
            </div>
          </Menu>
        </div>

        {/* Right side: Sign Up, CTA, and Theme Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-6 md:flex">
            {signUpItem && (
              <PrismicNextLink
                field={signUpItem.link}
                className="px-3 py-3 text-xl ease-in-out hover:text-primary"
              >
                {signUpItem.label}
              </PrismicNextLink>
            )}
            {ctaItem && (
              <ButtonLink
                field={ctaItem.link}
                className="font-bold group flex items-center gap-1 border-2 border-ring bg-transparent px-6 py-2 text-xl hover:bg-primary hover:text-background"
              >
                {ctaItem.label}
                <FiArrowRight className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </ButtonLink>
            )}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="p-2 text-3xl text-foreground md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MdMenu />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={clsx(
          "fixed inset-0 z-40 flex flex-col items-center bg-background p-4 text-foreground transition-transform duration-300 ease-in-out md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <button
          type="button"
          className="self-end p-2 text-3xl"
          aria-expanded={open}
          onClick={() => setOpen(false)}
        >
          <MdClose />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="mt-20 flex flex-col items-center gap-8">
          {settings.data.navigation.map((item) => {
            if (item.type === "button_2") {
              return (
                <ButtonLink
                  key={item.label}
                  field={item.link}
                  onClick={() => setOpen(false)}
                  className="group-hover: text-background, background-primary group flex items-center gap-1 text-lg"
                >
                  {item.label}
                </ButtonLink>
              );
            }
            return (
              <PrismicNextLink
                key={item.label}
                field={item.link}
                className="text-2xl text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </PrismicNextLink>
            );
          })}
        </div>
        <div className="absolute bottom-8">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
