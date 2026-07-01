import { PostHogProvider } from "@/components/providers/post-hog";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <>
      <PostHogProvider>{children}</PostHogProvider>
    </>
  );
};
