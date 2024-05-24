import "./maincardOptions.css";

interface Option {
  source: string;
  text: string;
  disabled: boolean;
}

const starsOptions: Option[] = [
  {
    source: "./public/options/starscolored.svg",
    text: "CMS AI",
    disabled: true,
  },
  {
    source: "./public/options/stars.svg",
    text: "Analizuj tekst",
    disabled: false,
  },
  {
    source: "./public/options/tagcolored.svg",
    text: "Najbardziej popularne tagi",
    disabled: false,
  },
];

const MainCardOptions: React.FC = () => {
  return (
    <>
      {starsOptions.map((option) => (
        <div
          key={option.text}
          id={option.text}
          className="maincard-options-map-container"
        >
          <img src={option.source} alt="icon" width={"40px"} height={"40px"} />
          <span
            className="maincard-options-map-span"
            style={option.disabled ? { color: "gray" } : {}}
          >
            {option.text}
          </span>
        </div>
      ))}
    </>
  );
};

export default MainCardOptions;
