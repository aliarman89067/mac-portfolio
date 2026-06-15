import { WindowControls } from "#components";
import { techStack } from "#constants";
import WindowWrapper from "#hoc/window-wrapper";
import { Check, Flag } from "lucide-react";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>
      <div className="techstack">
        <p>
          <span className="font-bold">@ali %</span>
          show tech stack
        </p>
        <div className="label">
          <p className="w-32">Category</p>
          <p className="w-32">Technologies</p>
        </div>
        <ul className="content">
          {techStack.map(({ category, items }, index) => (
            <li key={index} className="flex items-center text-sm">
              <Check className="check" size={20} />
              <h3 className="w-44">{category}</h3>
              <ul className="text-sm">
                {items.map((item, i) => (
                  <li key={i} className="text-sm">
                    {item}
                    {i < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="footnote">
          <p>
            <Check size={20} /> 9 of 9 stacks loaded successfully (100%)
          </p>
          <p className="text-black">
            <Flag size={15} fill="black" />
            Render time: 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
