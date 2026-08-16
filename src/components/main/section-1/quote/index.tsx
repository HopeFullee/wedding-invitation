import { motion } from "framer-motion";
import { FADE_IN_UP_VARIANT } from "@/components/common/animations/motion-container";

export const Quote = () => {
  return (
    <motion.div variants={FADE_IN_UP_VARIANT} className="space-y-12 mt-50">
      <div className="text-center text-14 text-primary-500">
        <p>- 영화 &lt;어바웃 타임&gt; 중 -</p>
      </div>
      <div className="relative gap-4 mx-auto text-center min-h-92">
        <img
          src="/assets/icons/quote.svg"
          className="absolute left-10 size-24"
          alt="quote"
        />
        <p className="space-y-12 text-14 under:block text-primary-500">
          <span>인생은 누구나 비슷한 길을 걸어간다.</span>
          <span>결국엔 늙어서 지난날을 추억하는 것일 뿐이다.</span>
          <span>그러니 결혼은 따뜻한 사람과 하거라.</span>
        </p>
        <img
          src="/assets/icons/quote.svg"
          className="absolute rotate-180 right-10 size-24 bottom-4"
          alt="quote"
        />
      </div>
    </motion.div>
  );
};
