import { DirectMsgBar } from "./Components/DirectMsgBar/DirectMsgBar";
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
    <div className="flex flex-row">
    <NavigationBar />
    <DirectMsgBar />
    <div className="w-screen p-4 text-white bg-[#36393F]">

      <h1 className="text-2xl">Discord with React!</h1>

      <button className="px-4 py-2 mt-4 font-bold text-white bg-green-500 rounded hover:bg-green-700">

        Click Me

      </button>

    </div>
    </div>
    </div>
  );

}

export default App;