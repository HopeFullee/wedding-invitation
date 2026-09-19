import { MotionContainer } from "@/components/common/animations/motion-container";
import { CommonHeading } from "@/components/common/heading";
import { LocationMap } from "@/components/main/section-4/location-map";
import { NavigationProviders } from "@/components/main/section-4/navigation-providers";

export const SectionFour = () => {
  return (
    <section className="min-h-screen px-20 py-60">
      <MotionContainer staggerChildren={0.5}>
        <CommonHeading main="오시는길" sub="— LOCATION —" />
        <div className="mx-auto max-w-360">
          <LocationMap {...DESTINATION_INFO} />
          <NavigationProviders {...DESTINATION_INFO} />
        </div>
      </MotionContainer>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const DESTINATION_INFO = {
  address: "비즈컨벤션",
  lat: 35.2132088,
  lng: 128.8316341,
};
