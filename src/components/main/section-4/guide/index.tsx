import { motion } from "framer-motion";
import { FADE_IN_UP_VARIANT } from "@/components/common/animations/motion-container";

export const LocationGuide = () => {
  return (
    <motion.div variants={FADE_IN_UP_VARIANT} className="px-4">
      <ul className="space-y-28">
        <li className="space-y-8">
          <p className="px-4 pb-4 font-semibold border-b-1 border-primary-300">
            교통편 안내
          </p>

          <p className="px-6 space-y-8 leading-loose break-keep text-14">
            예식장 위치가 산업단지 인근이므로, 대중교통 이용 시 배차 간격이 다소
            길 수 있습니다. 하객분들의 편의를 위해
            <strong> "김해여객터미널"</strong> 또는
            <strong> "KTX 진영역"</strong>
            에서 택시 이용 시 약 15~20분이 소요됩니다.
          </p>
        </li>

        <li className="space-y-8">
          <p className="px-4 pb-4 font-semibold border-b-1 border-primary-300">
            주차 안내
          </p>

          <p className="px-6 space-y-8 leading-loose break-keep text-14">
            비즈컨벤션 주차장: 하객 3시간 무료.
            <br />
            전기차 충전소가 구비되어 있습니다.
          </p>
        </li>
      </ul>
    </motion.div>
  );
};
