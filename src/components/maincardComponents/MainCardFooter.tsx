type TagStrenghtMeter = {
  tagsStrength: number;
};

const TagStrenght: React.FC<TagStrenghtMeter> = ({ tagsStrength }) => {
  const numOfTags: number = tagsStrength;

  let strength: string = "";

  if (numOfTags < 3) {
    strength = "Slabo";
  } else if (numOfTags < 4) {
    strength = "Srednio";
  } else {
    strength = "Dobrze";
  }

  let color: string = "";
  if (strength === "Slabo") {
    color = "red";
  } else if (strength === "Srednio") {
    color = "yellow";
  } else {
    color = "green";
  }

  const dots: JSX.Element[] = Array.from({ length: 5 }, (_, index) => {
    if (index < numOfTags) {
      return (
        <div
          style={{
            backgroundColor: color,
            width: "50px",
            height: "10px",
            marginRight: "5px",
          }}
          key={index}
        />
      );
    } else {
      return (
        <div
          style={{
            backgroundColor: "gray",
            width: "50px",
            height: "10px",
            marginRight: "5px",
          }}
        />
      );
    }
  });

  return (
    <div>
      <div style={{ color: color }}> {strength}</div>
      <div style={{ display: "flex", flexDirection: "row" }}>{dots}</div>
      <div style={{ marginTop: "10px" }}>
        {numOfTags < 5 && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="./public/options/informationfilled.svg"
                alt="i"
                width={"40px"}
                height={"50px"}
              />
            </div>
            <span style={{ padding: "10px" }}>
              Zbyt mało tagów. Dodaj jeszcze {5 - numOfTags} aby poprawić
              widoczność artykułu
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TagStrenght;
