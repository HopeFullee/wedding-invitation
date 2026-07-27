import {
  MotionContainer,
  FADE_IN_VARIANT,
  BLUR_OUT_VARIANT,
  BLUR_OUT_CONTAINER_VARIANT,
} from "@/components/common/animations/motion-container";
import { motion } from "framer-motion";
import clsx from "clsx";

export const HeroBanner = () => {
  return (
    <div className="bg-[url(/assets/gallery/gallery-1.webp)] bg-cover bg-center h-screen max-h-1000 p-20">
      <div className="mt-[8%] flex-col-center">
        <MotionContainer className="flex-col-center">
          <div className="flex-col-center gap-y-12">
            <motion.img
              variants={FADE_IN_VARIANT}
              src="/assets/banner-title.png"
              className="w-[65%]"
              alt="invitation"
            />

            <motion.h1
              variants={BLUR_OUT_CONTAINER_VARIANT}
              className="text-28 tracking-[15%] font-noto-kr text-[#83562A]"
            >
              {[..."이소망 & 장소영"].map((v, idx) => {
                return (
                  <motion.span
                    key={idx}
                    variants={BLUR_OUT_VARIANT}
                    className={clsx(
                      "inline-block last:tracking-normal",
                      !v.trim() && "mx-8",
                    )}
                  >
                    {v}
                  </motion.span>
                );
              })}
            </motion.h1>
          </div>
        </MotionContainer>
      </div>
    </div>
  );
};
