import FriendImg from "../../assets/navigation-icons/friends.svg";
import NitroImg from "../../assets/navigation-icons/nitro.svg";
import PlusImg from "../../assets/navigation-icons/Plus.svg";
import BunnyAvatar from "../../assets/navigation-icons/bunny_pic.svg";
import OnlineImg from "../../assets/navigation-icons/online.svg";
export const DirectMsgBar = () => {
  return (
    <div className="flex flex-row w-[240px] h-screen bg-[#2F3136] justify-center rounded-tl-md">
      <div className="flex flex-col align-middle">
        <div className="flex flex-row align-middle pt-[10px] pb-[12px] px-[10px] w-full">
          <input
            type="text"
            placeholder="Find or start a conversation"
            className="w-full h-[32px] bg-[#40444B] rounded-md text-white text-sm px-2"
          ></input>
        </div>
        <div className="flex flex-col pt-[10px] px-[10px]">
          <div className="flex flex-col">
            <button className="w-[224px] h-[42px] bg-[#40444B] rounded-md text-white text-sm px-2">
              <div className="flex flex-row justify-center">
                <div className="flex flex-row w-[34px]">
                  <img src={FriendImg} alt="Friend" />
                </div>
                <div className="flex flex-row w-full ">
                  <p className="pl-2">Friends</p>
                </div>
              </div>
            </button>
            <button className="w-[224px] h-[42px] text-[#8E9297] text-sm px-2">
              <div className="flex flex-row justify-center">
                <div className="flex flex-row w-[34px]">
                  <img src={NitroImg} alt="Nitro" />
                </div>
                <div className="flex flex-row w-full ">
                  <p className="pl-2">Nitro</p>
                </div>
              </div>
            </button>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row py-[19px] justify-between align-middle">
              <div className="flex flex-col">
                <p className="font-bold text-[#8E9297]">DIRECT MESSAGE</p>
              </div>
              <div className="flex flex-col justify-center">
                <a href="">
                  <img
                    src={PlusImg}
                    alt="Plus"
                    className="h-[10px] align-middle"
                  />
                </a>
              </div>
            </div>
            <button>
              <div className="flex flex-row px-2">
                <div className="flex flex-col justify-center align-middle">
                  <img
                    src={BunnyAvatar}
                    alt="BunnyAvatar"
                    className="h-[32px]"
                  />
                  <img
                    src={OnlineImg}
                    className="relative left-[12px] bottom-[11px] right-0 h-[13px]"
                  />
                </div>
                <div className="flex flex-col w-full px-2">
                  <div className="flex flex-row justify-start">
                    <p className="text-white">Bunny</p>
                  </div>
                  <div className="flex flex-row justify-start">
                    <p className="text-[#8E9297] text-sm">
                      Listening to Spotify
                    </p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
