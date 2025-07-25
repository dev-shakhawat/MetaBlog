import { useSelector } from "react-redux"



function colorSchema() {

    const  theme = useSelector((state) => state.theme.value)
    
    const colorpalette = {

        // light mode
        "light": {
            "bgprimary": "#ffffff", 
            "bgsecondary": "#f4f4f5",
            "switchbg" : "#E8E8EA",
            "textprimary": "#181A2A",
            "textsecondary": "#A1A1AA",
            "tagbg": "#f6f8ff",
            "tagtext": "#4B6BFB"
        } ,   
        
        
        // dark mode
        "dark": {
            "bgprimary": "#181A2A", 
            "bgsecondary": "#242535",
            "switchbg" : "#4B6BFB",
            "textprimary": "#ffffff",
            "textsecondary": "#97989F",
            "tagbg": "#f6f8ff",
            "tagtext": "#4B6BFB",
        }

    }
    return theme === "dark" ? colorpalette.dark : colorpalette.light
}

export default colorSchema