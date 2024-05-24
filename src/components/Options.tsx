import "./options.css";

const options = [
  {
    name: "info",
    img: "./public/options/information.svg",
    hover_text: "",
  },
  {
    name: "chat",
    img: "./public/options/chat.svg",
    hover_text: "",
  },
  {
    name: "options",
    img: "./public/options/options.svg",
    hover_text: "",
  },
  {
    name: "tags",
    img: "./public/options/tags.svg",
    hover_text: "",
  },
  {
    name: "adduser",
    img: "./public/options/adduser.svg",
    hover_text: "",
  },
];
const Options = () => {
  return (
    <div className="options-container">
      <div className="options-main">
        {options.map((e: any) => {
          return (
            <div id={e.name} className={"options-map-img-container"}>
              <img src={e.img} alt={e.name} width={"30px"} height={"30px"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
