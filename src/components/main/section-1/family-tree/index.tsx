import { motion } from "framer-motion";
import {
  MotionContainer,
  FADE_IN_UP_VARIANT,
} from "@/components/common/animations/motion-container";

export const FamilyTree = () => {
  return (
    <MotionContainer staggerChildren={0.4}>
      <div className="mt-40 space-y-40 flex-col-center">
        <motion.div
          variants={FADE_IN_UP_VARIANT}
          className="w-full h-20 gap-8 flex-center"
        >
          <img src="assets/icons/star-line.svg" className="h-full" alt="" />
        </motion.div>

        <div className="gap-24 flex-col-center">
          <motion.div
            variants={FADE_IN_UP_VARIANT}
            className="space-y-8 text-center"
          >
            <p className="tracking-[8px] text-primary-500 text-12 -mr-8">
              신랑
            </p>
            <p className="tracking-wider text-14">전향기의 아들</p>
            <p className="font-semibold text-18 text-primary-500 tracking-[8px] -mr-8">
              이소망
            </p>
          </motion.div>

          <motion.img
            variants={FADE_IN_UP_VARIANT}
            src="/assets/icons/flower.svg"
            alt=""
            className="size-16"
          />

          <motion.div
            variants={FADE_IN_UP_VARIANT}
            className="space-y-8 text-center"
          >
            <p className="tracking-[8px] text-primary-500 text-12 -mr-8">
              신부
            </p>
            <p className="tracking-wider text-14">장세봉 · 김안미의 딸</p>
            <p className="font-semibold text-18 text-primary-500 tracking-[8px] -mr-8">
              장소영
            </p>
          </motion.div>
        </div>
      </div>
    </MotionContainer>
  );
};
