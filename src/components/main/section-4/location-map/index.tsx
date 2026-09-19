import { motion } from "framer-motion";
import { FADE_IN_UP_VARIANT } from "@/components/common/animations/motion-container";
import { NavermapsProvider, Container, NaverMap } from "react-naver-maps";
import { MapMarker } from "./map-marker";
import type { DESTINATION_INFO } from "@/components/main/section-4";

export const LocationMap = ({ lat, lng }: typeof DESTINATION_INFO) => {
  return (
    <div className="w-full mt-50">
      <motion.div
        variants={FADE_IN_UP_VARIANT}
        className="w-full overflow-hidden rounded-lg h-260"
      >
        <NavermapsProvider
          ncpKeyId={import.meta.env.VITE_NAVER_CLOUD_CLIENT_ID}
        >
          <Container className="size-full">
            <NaverMap
              defaultCenter={{ lat, lng }}
              zoomOrigin={{ lat, lng }}
              defaultZoom={17}
              maxZoom={19}
              minZoom={12}
              draggable={false}
            >
              <MapMarker {...{ lat, lng }} />
            </NaverMap>
          </Container>
        </NavermapsProvider>
      </motion.div>
    </div>
  );
};
