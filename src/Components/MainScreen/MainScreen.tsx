import BunnyAvatar from "../../assets/navigation-icons/bunny_pic.svg";
import OnlineImg from "../../assets/navigation-icons/online.svg";
export default function MainScreen(){
    return (
        <div className="flex flex-col py-4">
            <div className="flex flex-row align-middle  border-solid border-[#42454A] border-b-2">
            <div className="flex flex-row pb-2">
                <h1 className="text-xs font-semibold">ONLINE - </h1>
                <h1 className="text-xs font-semibold">1</h1>
            </div>
            </div>
          <div className="flex flex-col w-full">
          <div className="flex flex-col justify-center pb-2 pt-2 border-solid border-[#42454A] border-b-2 w-full">
            <div className="flex flex-col p-2 align-middle rounded-md bg-[#2F3136]">
            <div className="flex flex-row px-2 h-[48px]">
                <div className="flex flex-col justify-center align-middle">
                <div className="flex flex-col items-center justify-center">
      <img src={BunnyAvatar} alt="BunnyAvatar" className="h-[40px]" />
      <img src={OnlineImg} className="relative left-[14px] bottom-[15px] right-0 h-[16px]" />
    </div>
  
                  </div>
                <div className="flex flex-col w-full px-2 ">
                  <div className="flex flex-row justify-start">
                    <p className="font-bold text-white">Bunny</p>
                  </div>
                  <div className="flex flex-row justify-start">
                    <p className="text-[#8E9297] text-sm">
                      Listening to <b>Spotify</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="flex flex-col justify-center pb-2 pt-2 border-solid border-[#42454A] border-b-2 w-full">
            <div className="flex flex-col p-2 align-middle rounded-md bg-[#2F3136]">
            <div className="flex flex-row px-2 h-[48px]">
                <div className="flex flex-col justify-center align-middle">
                <div className="flex flex-col items-center justify-center">
      <img src={BunnyAvatar} alt="BunnyAvatar" className="h-[40px]" />
      <img src={OnlineImg} className="relative left-[14px] bottom-[15px] right-0 h-[16px]" />
    </div>
  
                  </div>
                <div className="flex flex-col w-full px-2 ">
                  <div className="flex flex-row justify-start">
                    <p className="font-bold text-white">Bunny</p>
                  </div>
                  <div className="flex flex-row justify-start">
                    <p className="text-[#8E9297] text-sm">
                      Listening to <b>Spotify</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
    )
}