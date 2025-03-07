import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"grid grid-cols-2 min-h-screen"}>
      <div
        className={
          "bg-[#0D3D38] w-full h-full flex items-center justify-center"
        }
      >
        <Image
          src={"/assets/images/auth-illustration.png"}
          alt="Robot icon"
          width={650}
          height={650}
          className="object-contain"
        />
      </div>

      <div
        className={
          "flex flex-col justify-center px-3 py-8 w-full max-w-lg mx-auto"
        }
      >
        <div className={"space-y w-full"}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
