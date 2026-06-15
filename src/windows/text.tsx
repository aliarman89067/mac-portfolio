import { WindowControls } from "#components";
import WindowWrapper from "#hoc/window-wrapper";
import useWindowStore from "../../store/window";

interface TextFileData {
  name?: string;
  image?: string;
  subtitle?: string;
  description?: string[];
}

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data as TextFileData | null;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name ?? "Text File"}</h2>
      </div>
      <div className="txtfile px-4 py-3">
        {image ? (
          <div className="w-full">
            <img
              src={image}
              alt={name ?? "Text file"}
              className="w-full h-auto rounded"
            />
          </div>
        ) : null}
        {subtitle ? (
          <h3 className="text-lg font-semibold">{subtitle}</h3>
        ) : null}

        <div className="space-y-3 leading-relaxed text-base">
          {Array.isArray(description)
            ? description.map((text, index) => <p key={index}>{text}</p>)
            : null}
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
