interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  // 최초 1회 "모바일 URL-bar 크기를 제외한" true-viewport height 크기를 계산 및 DOM 객체에 주입 (초기화)
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  return (
    <main className="w-full mx-auto bg-[#F6EEE5] min-h-screen max-w-480">
      {children}
    </main>
  );
};
