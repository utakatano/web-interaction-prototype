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
          <span className="relative opacity-0 scale-50 group-active:opacity-100 group-active:scale-100 group-active:text-[140px] group-active:rotate-[360deg] transition-all duration-1000">
            😵‍💫
          </span>
        </div>
      </div>

      <div className="flex gap-2 flex-1">
        <div className="relative w-[70%] border order-2 cursor-pointer group">
          <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-gray-950 w-[30px] h-[30px] scale-0 transition-all group-active:scale-100 duration-300"></div>
          <div className="absolute top-1/2 left-1/2 translate-y-[calc(-50%-20px)] translate-x-[calc(-50%+20px)] bg-gray-800 w-[40px] h-[40px] scale-0 transition-all group-active:scale-100 duration-300 delay-[250ms]"></div>
          <div className="absolute top-1/2 left-1/2 translate-y-[calc(-50%+30px)] translate-x-[calc(-50%-30px)] bg-gray-700 w-[60px] h-[60px] scale-0 transition-all group-active:scale-100 duration-300 delay-[500ms]"></div>
          <div className="absolute top-1/2 left-1/2 translate-y-[calc(-50%-40px)] translate-x-[calc(-50%+40px)] bg-gray-600 w-[80px] h-[80px] scale-0 transition-all group-active:scale-100 duration-300 delay-[750ms]"></div>
          <div className="absolute top-1/2 left-1/2 translate-y-[calc(-50%+60px)] translate-x-[-50%] bg-gray-600 w-[100px] h-[100px] scale-0 transition-all group-active:scale-100 duration-300 delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 translate-y-[calc(-50%-60px)] translate-x-[calc(-50%-40px)] bg-gray-500 w-[120px] h-[120px] scale-0 transition-all group-active:scale-100 duration-300 delay-[1250ms]"></div>
        </div>

        <div className="relative w-[30%] border order-1 cursor-pointer overflow-hidden group">
          <div className="absolute z-10 top-0 w-full h-full opacity-0 outline outline-[40px] outline-gray-950 transition-all duration-200 group-active:opacity-100 group-active:scale-90"></div>
          <div className="absolute z-[9] top-0 w-full h-full opacity-0 outline outline-[20px] outline-gray-600 transition-all duration-200 group-active:delay-[150ms] group-active:opacity-100 group-active:scale-[85%]"></div>
          <div className="absolute z-[8] top-0 w-full h-full opacity-0 outline outline-[20px] outline-gray-400 transition-all duration-200 group-active:delay-[300ms] group-active:opacity-100 group-active:scale-[80%]"></div>
          <div className="absolute z-[7] top-0 w-full h-full opacity-0 outline outline-[20px] outline-gray-300 transition-all duration-200 group-active:delay-[450ms] group-active:opacity-100 group-active:scale-75"></div>
          <span className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] text-[64px] opacity-0 transition group-active:delay-[800ms] group-active:opacity-100">
            🥴
          </span>
        </div>
      </div>

      <div className="flex gap-2 h-[180px]">
        <div className="w-[40%] border order-3"></div>
        <div className="w-[20%] border order-2"></div>
        <div className="w-[40%] border order-1"></div>
      </div>
    </div>
  );
};
