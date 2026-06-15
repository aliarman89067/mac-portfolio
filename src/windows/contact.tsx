import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/window-wrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-5 w-full">
        <img
          src="/images/profile.png"
          alt="Ali arman"
          className="w-20 rounded-full"
        />
        <h3>Let's Connect</h3>
        <p>Whether it's a startup idea, a bug, or a big vision, let's talk.</p>
        <div className="flex flex-col gap-2">
          <p>aliarman69720@gmail.com</p>
          <p>+923118314410</p>
        </div>
        <ul>
          {socials.map(({ id, bg, icon, link, text }) => (
            <li key={id} style={{ background: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
