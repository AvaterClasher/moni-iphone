import { useState } from "react";
import { createContext } from "react";
import { useGLTF } from '@react-three/drei';



export const ColorContext = createContext({});


export const ColorContextProvider = ({children}) => {
    const { materials } = useGLTF("/scene.gltf");
    const [currentColor, serCurrentColor] = useState({
        color:"#6209D4",
        text:"French Violet",
        rgbColor: "98, 9, 212"
    })

    let changeColorContext = (colorObj) => {

        materials.Body.color.set(colorObj.color);
        serCurrentColor(colorObj)
      }

    return(
        <ColorContext.Provider value={{currentColor, changeColorContext}}>
            {children}
        </ColorContext.Provider>
    )

}