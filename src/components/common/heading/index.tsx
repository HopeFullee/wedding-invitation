import {
  BLUR_OUT_VARIANT,
  BLUR_OUT_CONTAINER_VARIANT,
} from "@/components/common/animations/motion-container";
import { motion } from "framer-motion";
import clsx from "clsx";

export type CommonHeadingType = {
  main: string;
  sub: string;
};

export const CommonHeading = ({ main, sub }: CommonHeadingType) => {
  return (
    <div className="mx-auto leading-none text-center flex-col-center w-fit gap-y-14">
      <motion.p
        variants={BLUR_OUT_CONTAINER_VARIANT}
        className="text-22 font-light tracking-[10%] font-playfair text-primary-500"
      >
        {[...sub].map((v, idx) => {
          return (
            <motion.span
              className={clsx(
                "inline-block last:tracking-normal",
                !v.trim() && "mx-[2.5px] md:mx-4",
              )}
              variants={BLUR_OUT_VARIANT}
              key={idx}
            >
              {v}
            </motion.span>
          );
        })}
      </motion.p>
      <motion.h3
        variants={BLUR_OUT_CONTAINER_VARIANT}
        className="text-24 tracking-[20%] font-noto-kr font-normal text-primary-500"
      >
        {[...main].map((v, idx) => {
          return (
            <motion.span
              className={clsx(
                "inline-block last:tracking-normal",
                !v.trim() && "mx-[2.5px] md:mx-5",
              )}
              variants={BLUR_OUT_VARIANT}
              key={idx}
            >
              {v}
            </motion.span>
          );
        })}
      </motion.h3>
    </div>
  );
};
