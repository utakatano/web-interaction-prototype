export const Comic = () => {
  return (
    <div className="flex flex-col gap-4 py-10 px-6 h-full">
      <div className="flex gap-2 h-[150px]">
        <div className="flex justify-center items-center w-[40%] border order-2 cursor-pointer overflow-hidden group">
          <span className="opacity-0 text-[30px] group-active:opacity-100 group-active:text-[200px] transition-all">
            👊
          </span>
        </div>
        <div className="flex justify-center items-center w-[60%] border order-1 cursor-pointer group">
          <span className="relative opacity-0 text-[30px] group-active:opacity-100 group-active:text-[140px] group-active:rotate-[360deg] transition-all duration-1000">
            😵‍💫
          </span>
        </div>
      </div>

      <div className="flex gap-2 flex-1">
        <div className="w-[70%] border order-2"></div>
        <div className="w-[30%] border order-1"></div>
      </div>

      <div className="flex gap-2 h-[180px]">
        <div className="w-[40%] border order-3"></div>
        <div className="w-[20%] border order-2"></div>
        <div className="w-[40%] border order-1"></div>
      </div>
    </div>
  );
};
