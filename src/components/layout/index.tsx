interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <main className="w-full mx-auto bg-[#F6EEE5] min-h-screen max-w-480">
      {children}
    </main>
  );
};
