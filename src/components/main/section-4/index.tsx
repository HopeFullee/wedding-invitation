import { MotionContainer } from "@/components/common/animations/motion-container";
import { CommonHeading } from "@/components/common/heading";
import { LocationMap } from "@/components/main/section-4/location-map";

export const SectionFour = () => {
  return (
    <section className="min-h-screen px-20 py-60">
      <MotionContainer staggerChildren={0.5}>
        <CommonHeading main="오시는길" sub="— LOCATION —" />
        <LocationMap {...DESTINATION_INFO} />
      </MotionContainer>
    </section>
  );
};

const DESTINATION_INFO = {
  address: "비즈컨벤션",
  lat: 35.2132088,
  lng: 128.8316341,
};
