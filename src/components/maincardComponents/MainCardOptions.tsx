import "./maincardOptions.css";

interface Option {
  source: string;
  text: string;
}

const starsOptions: Option[] = [
  {
    source: "./public/options/starscolored.svg",
    text: "CMS AI",
  },
  {
    source: "./public/options/stars.svg",
    text: "Analizuj tekst",
  },
  {
    source: "./public/options/tagcolored.svg",
    text: "Najbardziej popularne tagi",
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
          <span className="maincard-options-map-span">{option.text}</span>
        </div>
      ))}
    </>
  );
};

export default MainCardOptions;
