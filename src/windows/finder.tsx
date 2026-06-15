import { WindowControls } from "#components";
import { locations } from "#constants";
import WindowWrapper from "#hoc/window-wrapper";
import { Search } from "lucide-react";
import useLocationStore, { type LocationType } from "../../store/location";
import clsx from "clsx";
import useWindowStore from "../../store/window";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const renderList = (
    items: {
      id: number;
      icon: string;
      name: string;
    }[],
  ) =>
    items.map((item) => (
      <li
        key={item.id}
        className={clsx(
          item.id === activeLocation?.id ? "active" : "not-active",
        )}
        onClick={() => setActiveLocation(item as LocationType | null)}
      >
        <img src={item.icon} alt={item.name} className="w-4" />
        <p className="text-sm font-medium truncate">{item.name}</p>
      </li>
    ));

  const openItem = (item: { fileType: string; kind: string; href: string }) => {
    if (item.fileType === "pdf") return openWindow("resume", null);
    if (item.kind === "folder")
      return setActiveLocation(item as unknown as LocationType | null);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>
      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            <h3>Favorites</h3>
            <ul>{renderList(Object.values(locations))}</ul>
          </div>
          <div>
            <h3>Work</h3>
            <ul>{renderList(locations.work.children)}</ul>
          </div>
        </div>
        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li
              key={item.id}
              //   @ts-expect-error conflication because of types
              className={item.position}
              onClick={() =>
                openItem(
                  item as unknown as {
                    fileType: string;
                    kind: string;
                    href: string;
                  },
                )
              }
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
