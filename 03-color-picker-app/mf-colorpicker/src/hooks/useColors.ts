import { useEffect, useState } from "react";
import { getColorList, getLastColor } from "../helpers/getColors";

export const useColors = () => {
  const [color, setColor] = useState(getLastColor());
  const [colorList, setColorList] = useState<string[]>(getColorList());

  const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) =>
    setColor(event.target.value);

  const handleSubmitSaveColor = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setColorList([color, ...colorList]);
  };

  useEffect(() => {
    localStorage.setItem("colorList", JSON.stringify(colorList));
  }, [colorList]);

  return {
    color,
    colorList,
    handleChangeColor,
    handleSubmitSaveColor,
  };
};
