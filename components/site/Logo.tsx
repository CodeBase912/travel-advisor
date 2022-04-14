import React from "react";
import Link from "next/link";
import classNames from "classnames";
// Import MaterialUI Components
import { Box, Typography } from "@mui/material";

type Props = {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  to?: string;
};

const Logo: React.FC<Props> = ({ size = "md", to = "/" }) => {
  return (
    <Link href={to}>
      <a>
        <Box className="relative">
          <Typography
            component="h1"
            className={classNames(
              "font-bold",
              { "text-sm": size === "sm" },
              { "text-md": size === "md" },
              { "text-lg": size === "lg" },
              { "text-xl": size === "xl" },
              { "text-2xl": size === "2xl" }
            )}
          >
            Xplore
          </Typography>
          <Box
            className={classNames(
              "absolute -bottom-0  w-3 h-3 rounded-full bg-primary",
              { "w-2 h-2 -right-2": size === "sm" },
              { "w-2 h-2 -right-2": size === "md" },
              { "w-3 h-3 -right-3": size === "lg" },
              { "w-3 h-3 -right-3": size === "xl" },
              { "w-3 h-3 -right-3": size === "2xl" }
            )}
          ></Box>
        </Box>
      </a>
    </Link>
  );
};

export default Logo;
