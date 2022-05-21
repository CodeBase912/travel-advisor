import React, { useEffect, useRef, useState } from "react";
// import ReactDOM from "react-dom";
import { useDrag } from "@use-gesture/react";
import { a, useSpring, config } from "@react-spring/web";

import styles from "./style.module.css";
import { Icons } from "../../../common/icons";
import classNames from "classnames";
import { IconButton, useMediaQuery } from "@mui/material";

type Props = {
  className: string;
  className_actionBtn: string;
};

const SpringComp: React.FC<Props> = ({
  children,
  className,
  className_actionBtn,
}) => {
  const springRef = useRef(null);
  const [height, setHeight] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [{ y }, api] = useSpring(() => ({ y: -800 }));

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
      y: -800,
      immediate: false,
      config: { ...config.stiff, velocity },
    });
  };

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
      if (my > 70) cancel();

      // when the user releases the sheet, we check whether it passed
      // the threshold for it to close, or if we reset it to its open positino
      if (last) {
        my < -height * 0.15 || (vy > 0.5 && dy > 0)
          ? close(vy)
          : open({ canceled });
      }
      // when the user keeps dragging, we just move the sheet according to
      // the cursor position
      else api.start({ y: my, immediate: true });
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { bottom: 0 },
      rubberband: true,
    }
  );

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
      {/* Display React Spring animated  div on mobile devices only */}
      {isMobile ? (
        <a.div
          className={classNames(
            "w-[97vw] left-[50%] z-50 absolute rounded-[12px]",
            styles.sheet,
            className
          )}
          {...bind()}
          style={{
            top: `calc(100% - 150px)`,
            height: `calc(100% + 150px)`,
            transform: `translateX(-50%)`, // Translate used inline because it doesn't work in tailwind css. **Must investigate
            y,
          }}
          ref={springRef}
        >
          {children}
        </a.div>
      ) : (
        <div className={classNames("w-full", className)}>{children}</div>
      )}
    </div>
  );
};

export default SpringComp;
