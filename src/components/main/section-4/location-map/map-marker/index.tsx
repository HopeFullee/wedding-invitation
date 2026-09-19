import "./index.css";
import { Marker, useNavermaps } from "react-naver-maps";

export const MapMarker = ({ lat, lng }: { lat: number; lng: number }) => {
  const navermaps = useNavermaps(); // Provider 내부에서만 호출 가능

  const W = 32;
  const H = 40;

  const markerContent = [
    '<div class="marker-container">',
    '  <div class="marker-icon">',
    '    <img src="assets/icons/pin.svg" alt="핀포인트" />',
    "  </div>",
    '  <p class="address-name">비즈컨벤션</p>',
    "</div>",
  ].join("");

  return (
    <Marker
      position={new navermaps.LatLng(lat, lng)}
      icon={{
        content: markerContent,
        size: new navermaps.Size(W, H),
        anchor: new navermaps.Point(W / 2, H), // 하단 중앙이 좌표가 되도록
      }}
    />
  );
};
