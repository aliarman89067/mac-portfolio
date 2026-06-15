import React from "react";
import useWindowStore from "../../store/window";

const WindowControls = ({ target }: { target: string }) => {
  const { closeWindow, minimizedWindow, maximizeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" onClick={() => minimizedWindow(target)} />
      <div className="maximize" onClick={() => maximizeWindow(target)} />
    </div>
  );
};

export default WindowControls;
