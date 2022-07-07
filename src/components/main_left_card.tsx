import React from "react";
import data from "../Data";
import { useStore } from "../store/store";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";

function Main_Left_card({datas , click}:any){

    const currentSalad = useStore(state=>state.currentSalad)
    let activeSalad 
    if (datas["id"]===currentSalad){
        activeSalad = {
            backgroundColor:"$primary",
            "& p":{
                color:"$onPrimary"
            }
        }
    }else{
        activeSalad = {
            "&:hover":{
                backgroundColor:"$primary100",

            },
        }
    }

    return(
        <Flex id={`food${datas["id"]}`}  onClick={click} dir={"column"} justify="between" align={"center"} css={{
            cursor:"pointer",
            borderRadius:"50px",
            padding:"$2 0",
            width:"calc(90%/4)",
            "& img":{
                width:"200px",
                height:"200px",
                "@bp2":{
                    width:"150px",
                    height:"150px",
                }
            },
            ...activeSalad,
            

            }}>
            <img src={datas["img"]} alt={data["1"]["name"]}/>
            <Flex dir={"column"} justify="center" align={"center"}>
                <Text cursor={"click"} css={{
                    headline6:"500",
                    color:"$onBg800"
                    }}>
                    {datas["name"]}
                </Text>

                <Text cursor={"click"} css={{
                    headline6:"700"
                    }}>
                    {datas["price"]}
                </Text>
            </Flex>
        </Flex>
    )
}

export default Main_Left_card