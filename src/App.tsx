import { DirectMsgBar } from "./Components/DirectMsgBar/DirectMsgBar";
import MainScreen from "./Components/MainScreen/MainScreen";
import MainScreenBar from "./Components/MainScreenBar/MainScreenBar";
import MainScreenSideBar from "./Components/MainScreenBar/MainScreenSideBar";
import { NavigationBar } from "./Components/NavigationBar/NavigationBar";
import DiscordHeaderImage from "./assets/navigation-icons/Discord_ Heading.svg";
import "./index.css"
function App() {

  return (
    <div className="flex flex-col w-screen h-screen bg-[#1E1F22]">
    <div className="flex flex-col h-[22px] p-2">
      <div className="align-top">
      <img src={DiscordHeaderImage}></img>
        </div>
    </div>
    <div className="flex flex-row h-full">
    <NavigationBar />
    <DirectMsgBar />
    <div className="flex flex-col w-screen text-white bg-[#36393F] h-full">
    <MainScreenBar />
    <div className="flex flex-row justify-between w-full h-full" >
    <div className="flex flex-col w-full px-4">
    <MainScreen/>
    </div>
    <div className="flex flex-col w-[417px] border-solid border-[#42454A] border-l-2  px-4">
<MainScreenSideBar/>  
</div>
    </div>

    </div>
    </div>
    </div>
  );

}

export default App;