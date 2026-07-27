import {
  MotionContainer,
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
    <MotionContainer staggerChildren={0}>
      <div className="mx-auto leading-none text-center flex-col-center w-fit gap-y-12">
        <motion.p
          variants={BLUR_OUT_CONTAINER_VARIANT}
          className="text-24 font-light tracking-[10%] font-playfair text-[#72512E]"
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
          className="text-28 tracking-[2%] font-noto-kr font-normal text-[#72512E]"
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
        <span className="bg-primary-500 mx-auto block h-1 w-[86%]" />
      </div>
    </MotionContainer>
  );
};
