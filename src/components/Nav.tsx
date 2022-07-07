import React from "react";
import Ico_food from "../asesst/Icons/Ico_food";
import Ico_menu from "../asesst/Icons/Ico_menu";
import Ico_search from "../asesst/Icons/Ico_search";
import Ico_themeSwitch from "../asesst/Icons/Ico_themeSwitchj";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";
import { useStore } from "../store/store";
import { fadeinTop } from "../Styles/keyframes";

function Nav(){

    const setTheme = useStore(state=>state.setTheme)
    const currentTheme = useStore(state=>state.currentTheme)
    return(
        <Flex justify={"between"} align="center" css={{
            width:"100%",
            "& svg":{
                cursor:"pointer"
            },
            animation:`${fadeinTop} 1s 0s both`
        }}>

            <Flex css={{
                "& svg":{
                    fill:"$primary",
                    "@bp4":{
                        height:"35px",
                        width:"35px"
                    }
                }
            }}>
                <Ico_food width="50" height="50"/>
                <Text cursor={"click"} css={{
                    logo:["400","50px"],
                    "@bp4":{
                        logo:["400","35px"],
                    }
                }}>Veg Me</Text>
            </Flex>

            <Flex css={{

                "& svg":{
                    fill:"$onBg800",
                    marginRight:"$2",
                    "&:hover":{
                        fill:"$onBg",
                        transform:"scale(1.1)"
                    },
                    "@bp4":{
                        height:"30px",
                        width:"30px",
                        marginRight:"$1",
                    }
                },
                "& svg[id=search]":{
                    fill:"none",
                    stroke:"$onBg800",
                    "&:hover":{
                        stroke:"$onBg",
                        transform:"scale(1.1)"
                    }
                }
            }} >
                <Ico_search width="42" height="42" id="search"/>
                <Ico_themeSwitch width="42" height="42" id="themeSwitch" click={()=>{currentTheme==="light"?setTheme("dark"): setTheme("light")}}/>
                <Ico_menu width="42" height="42" id="menu"/>
            </Flex>

        </Flex>
    )
}


export default Nav