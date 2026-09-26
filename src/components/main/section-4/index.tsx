import { MotionContainer } from "@/components/common/animations/motion-container";
import { CommonHeading } from "@/components/common/heading";
import { LocationMap } from "@/components/main/section-4/location-map";
import { NavigationProviders } from "@/components/main/section-4/navigation-providers";
import { LocationAddress } from "@/components/main/section-4/address";
import { LocationGuide } from "@/components/main/section-4/guide";

export const SectionFour = () => {
  return (
    <section className="px-20 py-60">
      <MotionContainer
        staggerChildren={0.5}
        className="mx-auto space-y-50 max-w-360"
      >
        <CommonHeading main="오시는길" sub="— LOCATION —" />
        <div className="mt-10 space-y-12">
          <LocationMap {...DESTINATION_INFO} />
          <NavigationProviders {...DESTINATION_INFO} />
        </div>
        <LocationAddress />
        <LocationGuide />
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
