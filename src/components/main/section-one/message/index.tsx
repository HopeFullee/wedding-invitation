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
          2011년, 우연으로 시작한 인연이 15년이라는
          <br />
          깊어진 시간을 지나 필연이 되려 합니다.
        </span>
        <span>
          영화처럼 서로의 삶에 나타난 가장 다정한
          <br />
          사람과 이제는 평생을 약속합니다.
        </span>
        <span>
          맑은 날엔 함께 햇살을 즐기고,
          <br />비 오는 날엔 서로의 온기가 되겠습니다.
        </span>
        <span>
          살아갈 모든 계절 동안 늘
          <br />
          다정한 눈빛으로 곁을 지키겠습니다.
        </span>
        <span>
          저희 두 사람의 다정한 시작에
          <br />
          따뜻한 축복을 함께해 주시면 감사하겠습니다.
        </span>
      </p>
    </motion.div>
  );
};
