import "swiper/css";
import "swiper/css/pagination";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export const SectionTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // disable body scroll on modal open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSlideClick = (idx: number) => {
    setActiveIndex(idx);
    setIsOpen(true);
  };

  return (
    <section>
      <Swiper
        loop={true}
        spaceBetween={20}
        centeredSlides={true}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView={1.5}
        modules={[Autoplay]}
        className="select-none under:ease-linear! py-20!"
      >
        {[...Array(12)].map((_, idx) => {
          return (
            <SwiperSlide
              key={idx}
              className="overflow-hidden rounded-sm drop-shadow-md"
              onClick={() => handleSlideClick(idx)}
            >
              <img
                src={`assets/gallery/gallery-${idx + 1}.webp`}
                alt={`이소망 장소영 웨딩사진 ${idx + 1}번`}
                draggable={false}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* 모달 콘텐츠 박스 */}
          <div className="relative z-10 w-full select-none max-w-480">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute text-white cursor-pointer right-20 -top-48 flex-center"
              aria-label="닫기 버튼"
            >
              <svg
                width={32}
                height={32}
                className="text-white size-32 hover:text-primary-600"
              >
                <use href="assets/icons/x.svg"></use>
              </svg>
            </button>

            <Swiper
              loop={true}
              initialSlide={activeIndex}
              centeredSlides={true}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="px-20!"
            >
              {[...Array(12)].map((_, idx) => {
                return (
                  <SwiperSlide key={`inner-${idx}`}>
                    <img
                      src={`assets/gallery/gallery-${idx + 1}.webp`}
                      alt={`이소망 장소영 웨딩사진 확대 ${idx + 1}번`}
                      className="max-h-[80vh] w-auto object-contain mx-auto rounded-lg"
                      draggable={false}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
};
