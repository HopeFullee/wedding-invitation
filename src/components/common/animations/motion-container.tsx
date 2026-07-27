/* eslint-disable react-refresh/only-export-components */
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}

export const MotionContainer = ({
  children,
  className,
  delayChildren = 0.3,
  staggerChildren = 0.3,
}: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mainControl = useAnimation();
  const isInView = useInView(containerRef, { once: true }); // 한번만 실행

  const CONTAINER_VARIANT = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delayChildren, // 최초 컨테이너가 애니메이션을 실행하는 delay 시간
        staggerChildren: staggerChildren, // 컨테이너의 하위 motion context가 순차적("도미노")으로 실행하는 delay 시간
      },
    },
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isInView ? mainControl.start("visible") : mainControl.start("hidden");
  }, [isInView]);

  return (
    <motion.div
      ref={containerRef}
      variants={CONTAINER_VARIANT}
      initial="hidden"
      animate={mainControl}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FADE_IN_VARIANT: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const BLUR_OUT_VARIANT: Variants = {
  hidden: {
    y: 18,
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const BLUR_OUT_CONTAINER_VARIANT = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
