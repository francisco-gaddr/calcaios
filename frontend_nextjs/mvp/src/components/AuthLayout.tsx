import Image from "next/image";

const AuthLayout = ({
  children,
  bgColor,
  image,
}: {
  children: React.ReactNode;
  bgColor: string;
  image: string;
}) => {
  return (
    <div className={"grid grid-cols-2 min-h-screen"}>
      <div
        className={`${bgColor} w-full h-full flex items-center justify-center`}
      >
        <Image
          src={image}
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
