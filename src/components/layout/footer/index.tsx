import { motion } from "framer-motion";
import {
  MotionContainer,
  BLUR_OUT_CONTAINER_VARIANT,
  BLUR_OUT_VARIANT,
  FADE_IN_UP_VARIANT,
} from "@/components/common/animations/motion-container";
import { CommonHeading } from "@/components/common/heading";
import clsx from "clsx";

export const Footer = () => {
  return (
    <footer className="px-20 select-none py-60 space-y-50">
      <MotionContainer staggerChildren={0.5} className="space-y-50">
        <CommonHeading main="감사합니다" sub="— THANK YOU —" />
        <div className="space-y-12 font-medium leading-loose text-center under:block text-15">
          <motion.q variants={FADE_IN_UP_VARIANT}>
            참석하여 주시는 그 발걸음이
            <br />
            저희에게 가장 큰 축복입니다.
          </motion.q>
          <motion.q variants={FADE_IN_UP_VARIANT}>
            봄날의 햇살처럼 따뜻한 마음으로
            <br />
            저희의 앞날을 지켜봐 주시면 감사하겠습니다.
          </motion.q>
        </div>
      </MotionContainer>
      <MotionContainer staggerChildren={0.5} className="space-y-50">
        <div className="space-y-16 font-medium leading-none tracking-wide text-center font-playfair text-24 under:block text-primary-500">
          {FROM_TO.map((text, idx) => {
            return (
              <motion.p variants={BLUR_OUT_CONTAINER_VARIANT} key={idx}>
                {[...text].map((v, idx) => {
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
            );
          })}
        </div>
        <motion.small
          variants={FADE_IN_UP_VARIANT}
          className="text-center flex-center font-playfair text-14"
        >
          Designed with love by Somang & Soyoung.
          <br />© 2026. All rights reserved.
        </motion.small>
      </MotionContainer>
    </footer>
  );
};

const FROM_TO = ["From", "Somang & Soyoung", "To You"];
