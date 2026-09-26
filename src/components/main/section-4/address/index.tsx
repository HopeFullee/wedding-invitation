import { motion } from "framer-motion";
import { FADE_IN_UP_VARIANT } from "@/components/common/animations/motion-container";

export const Address = () => {
  return (
    <motion.address variants={FADE_IN_UP_VARIANT} className="py-12">
      <ul className="gap-8 text-center flex-col-center text-primary-500">
        <li className="font-semibold leading-loose text-18">
          비즈컨벤션 웨딩홀
        </li>
        <li className="font-medium">경남 김해시 주촌면 골든루트로 80-16 5층</li>
        <li className="font-medium">Tel. 0507-1355-1486</li>
      </ul>
    </motion.address>
  );
};
