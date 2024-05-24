import { createContext, useContext, useState } from "react";

type ItemType = {
  tagName: string;
  text: string;
  numberOfSelectedTags: number;
};

type MyContextType = {
  items: ItemType[];
  setItems: any;
  tags: ItemType[];
  sortTags: (searchValue: string) => void;
};

const MyContext = createContext<MyContextType | undefined>(undefined);

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("");
  }
  return context;
};

export const MyContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialItems: ItemType[] = [
    {
      tagName: "maryla",
      text: "Maryla Rodowicz",
      numberOfSelectedTags: 22,
    },
  ];

  const [items, setItems] = useState<ItemType[]>(initialItems);

  const initialTags = [
    {
      tagName: "maryla",
      text: "Maryla Rodowicz",
      numberOfSelectedTags: 22,
    },
    {
      tagName: "odmrazanie",
      text: "Odmrazanie trupa",
      numberOfSelectedTags: 13,
    },
    {
      tagName: "gwiazda",
      text: "Gwiazda",
      numberOfSelectedTags: 99,
    },
    {
      tagName: "sejm",
      text: "Sejm",
      numberOfSelectedTags: 43,
    },
    {
      tagName: "mariusz",
      text: "Mariusz Kaminski",
      numberOfSelectedTags: 32,
    },
    {
      tagName: "festiwal",
      text: "Festiwal w Opolu",
      numberOfSelectedTags: 2,
    },
    {
      tagName: "ikona",
      text: "Ikona popkultury",
      numberOfSelectedTags: 21,
    },
    {
      tagName: "przeboje",
      text: "Przeboje lat 70",
      numberOfSelectedTags: 25,
    },
    {
      tagName: "kabaret",
      text: "Kabaret",
      numberOfSelectedTags: 56,
    },
    {
      tagName: "plmusic",
      text: "Polska muzyka",
      numberOfSelectedTags: 69,
    },
  ];

  const [tags, setTags] = useState(initialTags);
  const sortTags = (searchValue: string) => {
    if (searchValue.trim() === "") {
      setTags(initialTags);
    } else {
      const sortedTags = initialTags.reduce((acc: any, tag) => {
        if (tag.text.toLowerCase().includes(searchValue.toLowerCase())) {
          return [tag, ...acc];
        } else {
          return [...acc, tag];
        }
      }, []);

      setTags(sortedTags);
    }
  };

  return (
    <MyContext.Provider value={{ items, setItems, tags, sortTags }}>
      {children}
    </MyContext.Provider>
  );
};
