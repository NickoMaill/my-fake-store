import { Dispatch, SetStateAction } from "react";
import { Image } from "react-native";

export const getHeight = (source: string, newWidth: number, setImageHeight: Dispatch<SetStateAction<number>>) => {

    Image.getSize(source, (width: number, height: number) => {
        const newHeight: number = Math.floor((height / width) * newWidth);
        setImageHeight(newHeight)
    })
}