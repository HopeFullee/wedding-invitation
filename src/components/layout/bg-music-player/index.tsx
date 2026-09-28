import clsx from "clsx";
import { useRef, useState } from "react";
import musicFile from "/public/assets/bg-music/alex-morgan-calm-piano.webm";

export const BgMusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) audioRef.current.pause();
    else {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error("브금 재생 실패:", error);
      }
    }
  };

  return (
    <div className="sticky top-0 z-10 flex h-0">
      <audio
        ref={audioRef}
        src={musicFile}
        loop={true}
        autoPlay={true}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <button
        type="button"
        className={clsx(
          "ml-auto rounded-full shadow-[1.5px_1.5px_2px_#72512e]/50 cursor-pointer border-1 bg-primary-100 border-primary-500 mr-28 mt-28 size-40 flex-center",
          isPlaying ? "opacity-100" : "opacity-70",
        )}
        aria-label="배경음악 재생 버튼"
        onClick={togglePlay}
      >
        <svg width={20} height={20} className="size-20 text-primary-500">
          <use href="assets/icons/music-note.svg"></use>
        </svg>
      </button>
    </div>
  );
};
