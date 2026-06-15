import { WindowControls } from "#components";
import WindowWrapper from "#hoc/window-wrapper";
import useWindowStore from "../../store/window";

interface ImageFileData {
  name?: string;
  imageUrl?: string;
}

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data as ImageFileData | null;

  if (!data?.imageUrl) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <p>{name ?? "Image"}</p>
      </div>
      <div className="preview">
        <img src={imageUrl} alt={name ?? "Image"} />
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
