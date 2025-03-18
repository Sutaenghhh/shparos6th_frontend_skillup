import AuthHeader from "@/components/layouts/AuthHeader";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthHeader />
      {children}
      <footer></footer>
    </>
  );
}
