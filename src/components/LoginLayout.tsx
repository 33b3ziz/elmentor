import Header from "./Header";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-dvh p-4">
      <Header />
      <section className="flex justify-center items-center sm:gap-20 h-[calc(100%-56px)] ">
        {children}
      </section>
    </div>
  );
};

export default LoginLayout;
