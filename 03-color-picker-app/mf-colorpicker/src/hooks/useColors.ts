import { useEffect, useState } from "react";

export const useColors = () => {
  const [color, setColor] = useState("#000");
  const [colorList, setColorList] = useState<string[]>([]);

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
