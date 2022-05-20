import React, { useEffect } from "react";
// import ReactDOM from "react-dom";
import { useDrag } from "@use-gesture/react";
import { a, useSpring, config, SpringConfig } from "@react-spring/web";

import styles from "./style.module.css";
import { Icons } from "../../../common/icons";
import classNames from "classnames";

const items = ["save item", "open item", "share item", "delete item", "cancel"];
// const height = items.length * 60 + 80;
const height = 400;

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className: string;
  className_actionBtn: string;
};

const SpringComp: React.FC<Props> = ({
  children,
  isOpen,
  setIsOpen,
  className,
  className_actionBtn,
}) => {
  console.log("children: ", children);

  useEffect(() => {
    console.log("isOpen>>>>: ", isOpen);
  }, [isOpen]);

  // console.log("children: ", children?.getBoundingCLientRect().height);
  const [{ y }, api] = useSpring(() => ({ y: -height }));

  const open: (config: any) => void = ({ canceled }) => {
    // when cancel is true, it means that the user passed the upwards threshold
    // so we change the spring config to create a nice wobbly effect
    api.start({
      y: 0,
      immediate: false,
      config: canceled ? config.wobbly : config.stiff,
    });
    setIsOpen(true);
  };
  const close = (velocity = 0) => {
    api.start({
      y: -height,
      immediate: false,
      config: { ...config.stiff, velocity },
    });
    setIsOpen(false);
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

  const display = y.to((py) => (py < height ? "block" : "none"));

  const bgStyle = {
    transform: y.to(
      [0, height],
      ["translateY(-8%) scale(1.16)", "translateY(0px) scale(1.05)"]
    ),
    opacity: y.to([0, height], [0.4, 1], "clamp"),
  };

  return (
    <div className="flex" style={{ overflow: "hidden" }}>
      {isOpen ? (
        <div
          className={className_actionBtn}
          onClick={() => {
            console.log("Triggered close");
            close(1);
          }}
        >
          {Icons.close}
        </div>
      ) : (
        <div
          className={className_actionBtn}
          onClick={() => {
            open({ cancelled: true });
          }}
        >
          {Icons.filter}
        </div>
      )}
      <a.div
        className={classNames(styles.sheet, className)}
        {...bind()}
        style={{ top: `calc(100% - 130px)`, y }}
      >
        {children}
      </a.div>
    </div>
  );

  // return ReactDOM.createPortal(
  //   modalContent,
  //   //@ts-ignore
  //   modalRoot
  // );
};

export default SpringComp;
