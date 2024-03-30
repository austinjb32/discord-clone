import BunnyAvatar from "../../assets/navigation-icons/bunny_pic.svg";
import OnlineImg from "../../assets/navigation-icons/online.svg";
export default function MainScreenSideBar(){
    return (
        <div className="flex flex-col">
            <div className="flex flex-col p-2">
                <h1 className="text-xl font-extrabold">Active Now</h1>
            </div>
            <div className="flex flex-col justify-center p-2 align-middle rounded-md bg-[#2F3136]">
            <div className="flex flex-col border-solid h-[68px] justify-center">
            <div className="flex flex-row justify-center px-2">
                <div className="flex flex-col items-center justify-center align-middle">
                <div className="flex flex-col items-center justify-center">
      <img src={BunnyAvatar} alt="BunnyAvatar" className="h-[48px]" />
      <img src={OnlineImg} className="relative left-[14px] bottom-[18px] right-0 h-[16px]" />
    </div>
  
                  </div>
                <div className="flex flex-col justify-center w-full px-2">
                  <div className="flex flex-row justify-start">
                    <p className="font-bold text-white text-md">Bunny</p>
                  </div> 
                  <div className="flex flex-row justify-start">
                    <p className="text-[#8E9297] text-sm">
                      Listening to Spotify
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    )
}