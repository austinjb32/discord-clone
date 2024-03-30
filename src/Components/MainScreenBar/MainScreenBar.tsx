import FriendImg from "../../assets/navigation-icons/friends.svg";
import GroupDM from "../../assets/navigation-icons/groupdm.svg";
import HelpImage from "../../assets/navigation-icons/help.svg";
import InboxImage from "../../assets/navigation-icons/Inbox.svg";
export default function MainScreenBar() {
    return (
        <div className="flex flex-col w-full h-[50px] justify-center  bg-[#36393F] shadow-lg px-2">
<div className="flex flex-row w-full h-[24px] justify-between">
<div className="flex flex-row w-full h-[24px] pr-4">
  <div className="flex flex-row w-full h-[24px]">
         <div className="flex flex-row gap-2 pr-4">
<div className="flex flex-col w-[34px] justify-center align-middle p-[6px]">
  <img src={FriendImg} alt="Friend" className="fill-[#42454A]"/>
</div>
<div className="flex flex-col font-semibold align-middle">
Friends
</div>
</div>
<div className="flex flex-row justify-center gap-2 align-middle border-l-[2px] border-[#42454A]">
<div className="flex flex-col justify-center p-2 align-middle">
<button className="hover:bg-[#3E4249] px-2 rounded-md">
Online
</button>
</div>
<div className="flex flex-col justify-center p-2 align-middle">
<button className="hover:bg-[#3E4249] px-2 rounded-md">
All
</button >
</div>
<div className="flex flex-col justify-center p-2 align-middle">
<button className="hover:bg-[#3E4249] px-2 rounded-md">
Pending
</button>
</div>
<div className="flex flex-col justify-center p-2 align-middle">
<button className="hover:bg-[#3E4249] px-2 rounded-md">
Suggestion
</button>
</div>
<div className="flex flex-col justify-center p-2 align-middle">
<button className="hover:bg-[#3E4249] px-2 rounded-md">
Blocked
</button>
</div>
<div className="flex flex-col justify-center p-2 align-middle">
<button className="px-2 rounded-sm bg-[#3BA55D]">
Add Friend
</button>
</div>
</div>
</div>
<div className="flex flex-col justify-center">
    <img src={InboxImage}/>
</div>
         </div>
         <div className="flex flex-row justify-center gap-3 px-5  border-l-[2px] align-middle  border-[#42454A]">
        <div className="flex flex-col align-middle">
        <img src={GroupDM}/>
        </div>
        <div className="flex flex-col justify-center align-middle">
        <img src={HelpImage}/>
        </div>
         </div>
</div>
        </div>
    )
}
