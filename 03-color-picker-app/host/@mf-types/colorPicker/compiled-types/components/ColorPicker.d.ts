declare const ColorPicker: ({ color, colorList, handleChangeColor, handleSubmitSaveColor }: {
    color: string;
    colorList: string[];
    handleChangeColor: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmitSaveColor: (event: React.FormEvent<HTMLFormElement>) => void;
}) => import("react/jsx-runtime").JSX.Element;
export default ColorPicker;
