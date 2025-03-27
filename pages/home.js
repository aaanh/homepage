import { useRouter } from "next/router";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import NavBar from "../components/NavBar";
import SEO from "../components/SEO";
import dynamic from "next/dynamic";

const DynamicHomeContent = dynamic(() =>
  import("../components/Home")
);
const DynamicExperience = dynamic(() =>
  import("../components/Experience")
);
const DynamicProjects = dynamic(() =>
  import("../components/Projects")
);
const DynamicAwards = dynamic(() => import("../components/Awards"));
const DynamicContact = dynamic(() => import("../components/Contact"));
const DynamicHelp = dynamic(() => import("../components/Help"));

function MinimizeBtn({ clickEvent }) {
  return (
    <button
      onClick={clickEvent}
      className="flex items-center justify-center hover:text-yellow-500 transition-all ease-in-out rounded-full p-1 hover:bg-slate-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
}

function MaximizeBtn({ clickEvent, isMaximized }) {
  return (
    <button
      onClick={clickEvent}
      className={
        "flex items-center justify-center hover:text-green-500 transition-all ease-in-out rounded-full p-1 hover:bg-slate-700 " +
        (isMaximized ? "rotate-180" : "")
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 11l7-7 7 7M5 19l7-7 7 7"
        />
      </svg>
    </button>
  );
}

function CloseBtn({ clickEvent }) {
  return (
    <button
      onClick={clickEvent}
      className="flex items-center justify-center hover:text-red-500 transition-all ease-in-out rounded-full p-1 hover:bg-slate-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

const COMMANDS = {
  CONTACT: "cd /etc/contact",
  HELP: ":help",
  AWARDS: "cd /bin/awards",
  EXPERIENCE: "cd /var/experience",
  PROJECTS: "cd /lib/projects",
  USES: "curl -O /uses",
  RESUME: "wget resume",
  HISTORY: "history",
  HOME: "cd ~"
};

const COMMAND_ACTIONS = {
  [COMMANDS.CONTACT]: { type: 'setContent', payload: 'contact' },
  [COMMANDS.HELP]: { type: 'setContent', payload: 'help' },
  [COMMANDS.AWARDS]: { type: 'setContent', payload: 'awards' },
  [COMMANDS.EXPERIENCE]: { type: 'setContent', payload: 'experience' },
  [COMMANDS.PROJECTS]: { type: 'setContent', payload: 'projects' },
  [COMMANDS.USES]: { type: 'navigate', payload: '/uses' },
  [COMMANDS.RESUME]: { type: 'navigate', payload: '/resume' },
  [COMMANDS.HISTORY]: { type: 'setContent', payload: 'history' },
  [COMMANDS.HOME]: { type: 'setContent', payload: 'home' }
};

const cmdList = Object.values(COMMANDS);

const Prompt = ({ className }) => (
  <p className={className}>guest@aaanh.home $ </p>
);

export default function Home() {
  const [cmdHistory, addCmdHistory] = useState([]);
  const [command, setCommand] = useState();
  const [content, setContent] = useState("home");
  const [isMaximized, setMaximize] = useState(false);
  const [isMinimized, setMinimize] = useState(false);
  const [isValidCmd, setValidCmd] = useState(true);
  const router = useRouter();

  const handleCommandAction = (action) => {
    if (!action) return;
    
    switch (action.type) {
      case 'setContent':
        setContent(action.payload);
        break;
      case 'navigate':
        router.push(action.payload);
        break;
      default:
        break;
    }
  };

  const handleCommandInput = (e) => {
    setCommand(e.target.value);
  };

  const addHistory = (cmd) => {
    if (!cmd) return;
    addCmdHistory((oldHistory) => [...oldHistory, cmd]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isValid = cmdList.includes(command);
    setValidCmd(isValid);
    
    if (isValid) {
      addHistory(command);
      const action = COMMAND_ACTIONS[command];
      handleCommandAction(action);
    }
  };

  return (
    <div
      className={
        "flex sm:max-h-[80vh] sm:min-h-screen h-screen min-w-screen dark:text-white dark:bg-neutral-900 transition-all ease-in-out"
      }
    >
      <SEO title="aaanh's Portfolio"></SEO>
      <button
        onClick={() => setMinimize(!isMinimized)}
        className={
          "hover:bg-green-500 w-20 h-18 invisible flex flex-col justify-center items-center rounded-lg border-green-500 p-2 transition-all ease-in-out border text-2xl absolute left-1/2 bottom-10" +
          (isMinimized ? " sm:visible" : " invisible")
        }
      >
        <p>💾</p>
        <p>·</p>
      </button>
      <div
        className={
          "dark:bg-neutral-900 flex flex-col m-auto w-screen sm:max-h-screen shadow-2xl transition-all ease-in-out rounded-b-[16px] " +
          (isMaximized
            ? "sm:min-h-screen"
            : "sm:max-h-[768px] sm:max-w-[1366px]") +
          (isMinimized ? " sm:invisible" : "")
        }
      >
        <div className="flex justify-between items-center max-h-14 w-full bg-green-500 bg-opacity-80 rounded-t-[16px]">
          <div className=" p-2 px-4 min-w-[100px] flex space-x-10 bg-black bg-opacity-10 text-white rounded-t-[16px]">
            <div>~ @ aaanh.home</div>
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/empty");
              }}
              className="hover:bg-green-900 rounded-full w-6 h-6 flex items-center justify-center relative top-1"
            >
              <IoMdClose></IoMdClose>
            </button>
          </div>
          <div className="flex justify-end items-center space-x-2 px-2">
            <MinimizeBtn
              isMinimized={isMinimized}
              clickEvent={() => setMinimize(!isMinimized)}
            ></MinimizeBtn>
            <MaximizeBtn
              isMaximized={isMaximized}
              clickEvent={() => setMaximize(!isMaximized)}
            ></MaximizeBtn>
            <CloseBtn clickEvent={() => router.push("/")}></CloseBtn>
          </div>
        </div>
        <div
          className={
            "max-h-[72vh] overflow-y-scroll overflow-x-hidden p-4 font-fira-code text-md " +
            (isMaximized ? "sm:max-h-max" : "sm:max-h-[70vh]")
          }
        >
          <div className="flex flex-wrap space-x-4 items-center">
            <Prompt className="text-purple-500 font-bold"></Prompt>
            <form onSubmit={handleSubmit}>
              <input
                list="cmds"
                className="w-auto border-none text-sky-500 font-bold block px-3 py-2 dark:bg-neutral-900 bg-white border border-slate-300 text-md placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-transparent
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                placeholder="try :help & Enter"
                name="terminal"
                onChange={handleCommandInput}
                autoComplete="off"
                value={command || ''}
              />
              <datalist id="cmds">
                {cmdList.map(cmd => (
                  <option key={cmd} value={cmd} />
                ))}
              </datalist>
            </form>
            <div className="transition-all ease-in-out">
              {isValidCmd ? null : "🛑 Invalid Command"}
            </div>
          </div>
          {content == "history" ? (
            <HistoryContent cmdHistory={cmdHistory}></HistoryContent>
          ) : null}
          {content == "awards" ? (
            <DynamicAwards></DynamicAwards>
          ) : null}
          {content == "contact" ? (
            <DynamicContact></DynamicContact>
          ) : null}
          {content == "experience" ? (
            <DynamicExperience></DynamicExperience>
          ) : null}
          {content == "help" ? <DynamicHelp></DynamicHelp> : null}
          {content == "home" ? (
            <DynamicHomeContent></DynamicHomeContent>
          ) : null}
          {content == "projects" ? (
            <DynamicProjects></DynamicProjects>
          ) : null}
        </div>
        <NavBar
          setCommand={setCommand}
          setContent={setContent}
        ></NavBar>
      </div>
    </div>
  );
}

function HistoryContent({ cmdHistory }) {
  return (
    <div className="flex max-h-[600px]">
      <table className="table-auto border-collapse border-spacing-x-2">
        <thead>
          <tr>
            <th className="px-2">Index</th>
            <th className="px-2">Command</th>
          </tr>
        </thead>
        <tbody>
          {cmdHistory.map((cmd, index) => (
            <tr key={index}>
              <td className="text-sky-500">{index + 1}</td>
              <td>{cmd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
