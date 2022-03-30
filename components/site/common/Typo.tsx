import classNames from "classnames";
import React from "react";
// Import MaterialUI Component

type Props = {
  className?: string;
  uppercase?: boolean;
  bold?: boolean;
  t:
    | "p"
    | "small"
    | "span"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "smaller";
};

const Typo: React.FC<Props> = ({
  children,
  className,
  t = "p",
  uppercase = false,
  bold = false,
}) => {
  return React.createElement(
    t !== "smaller" ? t : "small",
    {
      className: classNames(
        className,
        { uppercase: uppercase },
        { "font-bold": bold },
        { "text-3xl": t === "h1" },
        { "text-2xl": t === "h2" },
        { "text-xl": t === "h3" },
        { "text-m": t === "h4" },
        { "text-s": t === "h5" },
        { "text-xs": t === "h6" },
        { "text-m": t === "p" },
        { "text-m": t === "span" },
        { "text-xs": t === "small" },
        { "text-sm": t === "smaller" }
      ),
    },
    children
  );
};

export default Typo;
