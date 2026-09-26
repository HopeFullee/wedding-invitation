import { Footer } from "@/components/layout/footer";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  // 최초 1회 "모바일 URL-bar 크기를 제외한" true-viewport height 크기를 계산 및 DOM 객체에 주입 (초기화)
  // P.S 카카오 브라우저는 상단/하단 양각으로 브라우저 UI(bar)가 있음 ㅡㅡ.
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  return (
    <main className="w-full min-h-screen mx-auto shadow-center bg-primary-50 max-w-480 min-w-360">
      {children}
      <Footer />
    </main>
  );
};
