import { MotionContainer } from "@/components/common/animations/motion-container";
import { CommonHeading } from "@/components/common/heading";
import { Calendar } from "@/components/main/section-three/calendar";

export const SectionThree = () => {
  return (
    <section className="min-h-screen px-20 bg-white py-60">
      <MotionContainer staggerChildren={0.5}>
        <CommonHeading main="예식일" sub="— WEDDING DATE —" />
        <Calendar />
      </MotionContainer>
    </section>
  );
};
