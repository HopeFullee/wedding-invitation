import { MotionContainer } from "@/components/common/animations/motion-container";
import { CommonHeading } from "@/components/common/heading";
import { Quote } from "@/components/main/section-1/quote";
import { Message } from "@/components/main/section-1/message";
import { FamilyTree } from "@/components/main/section-1/family-tree";

export const SectionOne = () => {
  return (
    <section className="px-20 py-60">
      <MotionContainer staggerChildren={0.5}>
        <CommonHeading main="초대합니다" sub="— INVITATION —" />
        <Quote />
        <Message />
      </MotionContainer>
      <FamilyTree />
    </section>
  );
};
