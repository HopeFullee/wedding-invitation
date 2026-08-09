import { motion } from "framer-motion";
import { FADE_IN_UP_VARIANT } from "@/components/common/animations/motion-container";

export const Message = () => {
  return (
    <motion.div
      variants={FADE_IN_UP_VARIANT}
      className="mt-40 text-center flex-center"
    >
      <p className="space-y-20 text-14 under:block leading-30">
        <span>
          영화처럼 서로의 삶에 나타난
          <br />
          가장 다정한 사람과 시작합니다.
        </span>
        <span>
          맑은 날에는 햇살을 나누고,
          <br />비 오는 날에는 서로의 온기가 되어줄 사람.
        </span>
        <span>
          계절이 흘러도 항상 다정한
          <br />
          눈빛으로 곁을 지키겠습니다.
        </span>
        <span>저희의 시작에 따뜻한 축복을 보태주세요.</span>
      </p>
    </motion.div>
  );
};
