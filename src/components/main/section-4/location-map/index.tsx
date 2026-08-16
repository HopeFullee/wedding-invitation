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

    // 최초 진입시 목적지로 카메라 고정
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
    window.location.href = `tmap://route?goalname=${address}&goalx=${lng}&goaly=${lat}`;
  };

  return (
    <div className="gap-20 flex-col-center mt-50">
      <NavermapsProvider ncpKeyId={import.meta.env.VITE_NAVER_CLOUD_CLIENT_ID}>
        <Container className="w-full border rounded-md max-w-380 h-260">
          <NaverMap defaultCenter={{ lat, lng }}>
            <Marker position={{ lat, lng }} />
          </NaverMap>
        </Container>
        <div className="gap-20 flex-center">
          <button onClick={handleNaverMap}>네이버지도</button>
          <button onClick={handleKakaoMap}>카카오맵</button>
          {isMobile && <button onClick={handleTmap}>티맵</button>}
        </div>
      </NavermapsProvider>
    </div>
  );
};
