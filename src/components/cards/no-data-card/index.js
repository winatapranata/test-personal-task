import Image from "next/image";

export const NoDataCard = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[80vh] ">
        <Image
          src="/static/images/update-icon.png"
          alt="logo"
          width={100}
          height={100}
        />
        <h1 className="text-[#A0AEC0] font-semibold text-center">
          Belum ada tugas
        </h1>
        <p className="text-[#A0AEC0] px-6 text-center">
          Segera tambahkan tugas baru kamu sekarang!
        </p>
      </div>
    </div>
  );
};
