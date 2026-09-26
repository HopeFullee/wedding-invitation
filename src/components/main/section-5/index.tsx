import { MotionContainer } from "@/components/common/animations/motion-container";
import { CommonHeading } from "@/components/common/heading";
import { AccountDropDown } from "@/components/main/section-5/account-drop-down";

export const SectionFive = () => {
  return (
    <section className="px-20 bg-white py-60">
      <MotionContainer
        staggerChildren={0.5}
        className="mx-auto space-y-60 max-w-360"
      >
        <CommonHeading main="마음전하실곳" sub="— ACCOUNT —" />
        <div className="space-y-20">
          <AccountDropDown
            summary="신랑측 계좌번호"
            accountList={ACCOUNT_LIST.groom}
          />
          <AccountDropDown
            summary="신부측 계좌번호"
            accountList={ACCOUNT_LIST.bride}
          />
        </div>
      </MotionContainer>
    </section>
  );
};

const ACCOUNT_LIST = {
  groom: [
    { name: "이소망", bank: "국민은행", account: "501002-04-065399" },
    { name: "전향기", bank: "국민은행", account: "381802-04-146157" },
  ],
  bride: [
    { name: "장소영", bank: "신한은행", account: "110-507-745655" },
    { name: "장세봉", bank: "농협은행", account: "352-0043-9673-53" },
    { name: "김안미", bank: "농협은행", account: "302-0008-2609-21" },
  ],
};
