const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
        <main className="w-[90%] m-auto flex flex-col justify-center md:mx-10  md:justify-start md:w-[50%] mt-20">
          {children}
        </main>
  );
}

export default DashboardLayout;
