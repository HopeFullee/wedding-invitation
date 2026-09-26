import clsx from "clsx";
import { motion } from "framer-motion";
import { FADE_IN_UP_VARIANT } from "@/components/common/animations/motion-container";
import type { DESTINATION_INFO } from "@/components/main/section-4";

export const NavigationProviders = (props: typeof DESTINATION_INFO) => {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  return (
    <motion.nav variants={FADE_IN_UP_VARIANT} className="w-full">
      <ul className="gap-12 flex-center under:w-full">
        <li>
          <MapLink provider="NAVER" {...props} />
        </li>
        {isMobile && (
          <li>
            <MapLink provider="T-MAP" {...props} />
          </li>
        )}
        <li>
          <MapLink provider="KAKAO" {...props} />
        </li>
      </ul>
    </motion.nav>
  );
};

type MapLinkProps = {
  provider: "NAVER" | "T-MAP" | "KAKAO";
} & typeof DESTINATION_INFO;

const MapLink = ({ provider, address, lat, lng }: MapLinkProps) => {
  const formatHref = ({ provider }: { provider: MapLinkProps["provider"] }) => {
    if (provider === "NAVER") {
      // 목적지 자동 검색
      const routeParam = `p/directions/-/${lng},${lat},${address}/-/car`;

      // 최초 진입시 목적지로 카메라 고정 (네이버는 출발지 미입력시 사용자의 IP를 기준으로 auto-focus를 잡음)
      const cameraParam = `c=${lng},${lat},15,0,0,0,dh`;

      return `https://map.naver.com/${routeParam}?${cameraParam}`;
    }

    if (provider === "KAKAO") {
      const routeParam = `${address},${lat},${lng}`;
      return `https://map.kakao.com/link/to/${routeParam}`;
    }

    if (provider === "T-MAP") {
      const routeParam = `route?goalname=${address}&goalx=${lng}&goaly=${lat}&by=CAR`;

      if (/Android/i.test(navigator.userAgent)) {
        const fallback = `#Intent;scheme=tmap;package=com.skt.tmap.ku;S.browser_fallback_url=market://details?id=com.skt.tmap.ku;end;`;
        return `intent://${routeParam}${fallback}`;
      }

      return `tmap://${routeParam}`; // iOS
    }
  };

  return (
    <a
      target="_blank"
      href={formatHref({ provider })}
      className={clsx(
        "w-full gap-6 h-40 rounded-lg cursor-pointer flex-center font-poppins text-14",
        provider === "NAVER" && "bg-[#03C75A]",
        provider === "T-MAP" && "bg-[#2AD1BA]",
        provider === "KAKAO" && "bg-[#FAE100]",
      )}
    >
      <img
        className="rounded-md size-24"
        src={`/assets/maps/${provider.toLowerCase()}.webp`}
        alt={`${provider} 링크 이동`}
      />
      {provider}
    </a>
  );
};
