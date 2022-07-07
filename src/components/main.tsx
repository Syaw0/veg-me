import React from "react";
import { fadein } from "../Styles/keyframes";
import Flex from "../Styles/styledComponent/Flex";
import Main_Left from "./main_left";
import Main_Right from "./Main_right";

function Main(){
    return(
        <Flex css={{
            width:"100%",
            display:"grid",
            gridTemplateAreas:"'left left right'",
            gridColumnGap:"18px",
            marginTop:"$6",
            "@bp0-2":{
                flex_c:"",
            },
            
            }}>
            <Main_Left/>
            <Main_Right/>
        </Flex>
    )
}


export default Main