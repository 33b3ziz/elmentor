const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex justify-center items-center sm:gap-20 h-[calc(100%-56px)] ">
      {children}
    </section>
  );
};

export default LoginLayout;
