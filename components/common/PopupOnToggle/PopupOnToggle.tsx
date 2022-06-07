import React, { useEffect, useRef, useState } from "react";
// import ReactDOM from "react-dom";
import { useDrag } from "@use-gesture/react";
import { a, useSpring, config } from "@react-spring/web";

import styles from "./style.module.css";
import { Icons } from "../icons";
import classNames from "classnames";
import { IconButton } from "@mui/material";

type Props = {
  className: string;
  className_actionBtn: string;
  position?: string;
};

const PopupOnToggle: React.FC<Props> = ({
  children,
  className,
  className_actionBtn,
  position = "top",
}) => {
  const springRef = useRef(null);
  const [height, setHeight] = useState(0);
  const initialPosiiton = position === "top" ? { y: -800 } : { y: 800 };
  const [{ y }, api] = useSpring(() => initialPosiiton);

  useEffect(() => {
    if (springRef?.current && height === 0) {
      // @ts-ignore
      setHeight(springRef?.current.offsetHeight);
    }
  }, [height]);

  const open: (config: any) => void = ({ canceled }) => {
    // when cancel is true, it means that the user passed the upwards threshold
    // so we change the spring config to create a nice wobbly effect
    api.start({
      y: 0,
      immediate: false,
      config: canceled ? config.wobbly : config.stiff,
    });
  };
  const close = (velocity = 0) => {
    api.start({
      ...initialPosiiton,
      immediate: false,
      config: { ...config.stiff, velocity },
    });
  };

  const bounds = position === "top" ? { bottom: 0 } : { top: 0 };
  const bind = useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
      canceled,
    }) => {
      // if the user drags up passed a threshold, then we cancel
      // the drag so that the sheet resets to its open position
      if (position === "top" && my > 70) cancel();
      if (position === "bottom" && my < -50) cancel();

      // when the user releases the sheet, we check whether it passed
      // the threshold for it to close, or if we reset it to its open positino
      if (last) {
        if (position === "top") {
          my < -height * 0.15 || (vy > 0.5 && dy > 0)
            ? close(vy)
            : open({ canceled });
        } else if (position === "bottom") {
          my > height * 0.5 || (vy > 0.5 && dy > 0)
            ? close(vy)
            : open({ canceled });
        }
      }
      // when the user keeps dragging, we just move the sheet according to
      // the cursor position
      else api.start({ y: my, immediate: true });
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: bounds,
      rubberband: true,
    }
  );

  const style =
    position === "top"
      ? {
          top: `calc(100% - 150px)`,
          height: `calc(100% + 150px)`,
          transform: `translateX(-50%)`, // Translate used inline because it doesn't work in tailwind css. **Must investigate
          y,
        }
      : {
          bottom: `calc(-100vh + 100%)`,
          height: `calc(100% + 180px + 20px)`,
          transform: `translateX(-50%)`, // Translate used inline because it doesn't work in tailwind css. **Must investigate
          y,
        };

  return (
    <div className="flex w-full" style={{ overflow: "hidden" }}>
      <IconButton
        className={classNames(className_actionBtn)}
        onClick={() => {
          open({ cancelled: true });
        }}
        disableRipple
      >
        {Icons.filter}
      </IconButton>
      <a.div
        className={classNames(
          "w-[97vw] left-[50%] z-50 absolute rounded-[12px] flex flex-col",
          { "justify-end": position === "top" },
          { "justify-start": position === "bottom" },
          styles.sheet,
          className
        )}
        {...bind()}
        style={style}
        ref={springRef}
      >
        {/* Drag Handle Bar */}
        {position === "bottom" && (
          <div className="!h-2 w-20 mb-5 mt-1 rounded-full bg-gray-500 m-auto"></div>
        )}
        {children}
        {/* Drag Handle Bar */}
        {position === "top" && (
          <div className="!h-2 w-20 mt-5 mb-1 rounded-full bg-gray-500 m-auto"></div>
        )}
      </a.div>
    </div>
  );
};

export default PopupOnToggle;
