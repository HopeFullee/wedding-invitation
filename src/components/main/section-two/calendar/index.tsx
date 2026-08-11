import clsx from "clsx";
import { motion } from "framer-motion";
import { FADE_IN_UP_VARIANT } from "@/components/common/animations/motion-container";

export const Calendar = () => {
  return (
    <div className="gap-20 mt-50 flex-col-center">
      <motion.p
        variants={FADE_IN_UP_VARIANT}
        className="tracking-wider text-primary-500 text-18"
      >
        2026 · 11월
      </motion.p>
      <motion.div
        variants={FADE_IN_UP_VARIANT}
        className="grid grid-cols-7 text-center gap-y-20 gap-x-14 text-14"
      >
        {DAYS_OF_WEEK.map((day) => (
          <span
            key={day}
            className={clsx(
              day === "일" && "text-red-500",
              day === "토" && "text-sky-500",
            )}
          >
            {day}
          </span>
        ))}
        {DAYS.map((date, idx) => (
          <div key={idx} className="relative flex items-center justify-center">
            {date && (
              <span
                className={clsx(
                  date === WEDDING_DAY &&
                    "size-28 rounded-full bg-rose-400 text-white flex-center font-semibold",
                  idx % 7 === 6 && "text-blue-500",
                  idx % 7 === 0 && "text-red-500",
                )}
              >
                {date}
              </span>
            )}
          </div>
        ))}
      </motion.div>
      <motion.p
        variants={FADE_IN_UP_VARIANT}
        className="mt-8 font-semibold tracking-wider text-primary-500 text-18"
      >
        11월 15일 <span className="text-rose-400">(일)</span> 오후 2시
      </motion.p>
    </div>
  );
};

function getMonthData(year: number, month: number) {
  const firstDayOfWeek = new Date(year, month - 1, 1).getDay();
  const totalDays = new Date(year, month, 0).getDate();

  const days = Array.from({ length: firstDayOfWeek }, () => 0).concat(
    Array.from({ length: totalDays }, (_, i) => i + 1),
  );

  return days;
}

const DAYS_OF_WEEK = ["일", "월", "화", "수", "목", "금", "토"];
const WEDDING_DAY = 15; // 예식일
const DAYS = getMonthData(2026, 11);
