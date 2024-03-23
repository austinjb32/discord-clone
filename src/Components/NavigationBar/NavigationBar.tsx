import DiscordButton from "../../assets/navigation-icons/Button.svg";
export const NavigationBar = () => {
    return (
        <div className="flex flex-row w-[72px] h-screen bg-[#1E1F22] justify-center pt-[12px]">
            <div className="flex flex-col align-middle">
           <div className="flex flex-col align-middle">
           <a href=""> 
            <img src={DiscordButton} alt="Button" />    
            </a> 
            </div>       
            </div>
        </div>
    );
    }