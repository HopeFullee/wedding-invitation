import clsx from "clsx";
import { motion } from "framer-motion";
import { FADE_IN_UP_VARIANT } from "@/components/common/animations/motion-container";
import {
  NavermapsProvider,
  Container,
  NaverMap,
  Marker,
} from "react-naver-maps";

interface Props {
  address: string;
  lat: number;
  lng: number;
}

export const LocationMap = ({ address, lat, lng }: Props) => {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  // 1. 네이버 지도
  const handleNaverMap = () => {
    // 목적지 자동 검색
    const routeParam = `p/directions/-/${lng},${lat},${address}/-/car`;

    // 최초 진입시 목적지로 카메라 고정 (네이버는 출발지 미입력시 사용자의 IP를 기준으로 auto-focus를 잡음)
    const cameraParam = `c=${lng},${lat},15,0,0,0,dh`;

    window.open(`https://map.naver.com/${routeParam}?${cameraParam}`, "_blank");
  };

  // 2. 카카오 지도 / 카카오내비
  const handleKakaoMap = () => {
    const routeParam = `${address},${lat},${lng}`;
    window.open(`https://map.kakao.com/link/to/${routeParam}`, "_blank");
  };

  // 3. 티맵
  const handleTmap = () => {
    const routeParam = `route?goalname=${address}&goalx=${lng}&goaly=${lat}`;
    window.location.href = `tmap://${routeParam}`;
  };

  return (
    <div className="gap-12 flex-col-center mt-50">
      <motion.div
        variants={FADE_IN_UP_VARIANT}
        className="w-full overflow-hidden rounded-lg max-w-360 h-260"
      >
        <NavermapsProvider
          ncpKeyId={import.meta.env.VITE_NAVER_CLOUD_CLIENT_ID}
        >
          <Container className="size-full">
            <NaverMap
              disableDoubleTapZoom
              zoomOrigin={{ lat, lng }}
              defaultZoom={16}
              defaultCenter={{ lat, lng }}
              draggable={false}
            >
              <Marker position={{ lat, lng }} />
            </NaverMap>
          </Container>
        </NavermapsProvider>
      </motion.div>

      <motion.div
        variants={FADE_IN_UP_VARIANT}
        className="w-full gap-12 flex-center max-w-360"
      >
        <MapButton
          mapProvider="NAVER"
          iconSrc="/assets/maps/naver-map.webp"
          onClickHandler={handleNaverMap}
        />
        {isMobile && (
          <MapButton
            mapProvider="T-MAP"
            iconSrc="/assets/maps/t-map.webp"
            onClickHandler={handleTmap}
          />
        )}
        <MapButton
          mapProvider="KAKAO"
          iconSrc="/assets/maps/kakao-map.webp"
          onClickHandler={handleKakaoMap}
        />
      </motion.div>
    </div>
  );
};

interface MapButtonProps {
  mapProvider: "NAVER" | "KAKAO" | "T-MAP";
  iconSrc: string;
  onClickHandler: () => void;
}

const MapButton = ({
  mapProvider,
  iconSrc,
  onClickHandler,
}: MapButtonProps) => {
  return (
    <button
      onClick={onClickHandler}
      className={clsx(
        "w-full gap-6 h-40 rounded-lg cursor-pointer flex-center font-poppins text-14",
        mapProvider === "NAVER" && "bg-[#03C75A]",
        mapProvider === "KAKAO" && "bg-[#FAE100]",
        mapProvider === "T-MAP" && "bg-[#2AD1BA]",
      )}
    >
      <img src={iconSrc} alt={mapProvider} className="rounded-md size-24" />
      {mapProvider}
    </button>
  );
};
