import { locations } from "#constants";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "../../store/window";
import useLocationStore, { type LocationType } from "../../store/location";

const Home = () => {
  const projects =
    locations.work?.children ?? ([] as unknown as LocationType[]);
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  const handleOpenProjectFinder = (project: LocationType | null) => {
    setActiveLocation(project);
    openWindow("finder", null);
  };

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.windowPosition)}
            onClick={() =>
              handleOpenProjectFinder(project as unknown as LocationType)
            }
          >
            <img src="/images/folder.png" alt="Folder image" />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
