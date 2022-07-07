import React from "react";
import Flex from "../Styles/styledComponent/Flex";
import data from "../Data";
import Ico_arrowLeft from "../asesst/Icons/Ico_arrowLeft";
import Ico_arrowRight from "../asesst/Icons/Ico_arrowRight";
import Text from "../Styles/styledComponent/Text";
import Ico_playBox from "../asesst/Icons/Ico_playBox";
import Main_Left_card from "./main_left_card";
import { useStore } from "../store/store";
import { fadein } from "../Styles/keyframes";
function Main_Left(){

    const currentSalad = useStore(state=>state.currentSalad)
    const setSalad = useStore(state=>state.setSalad)
    

    const handleArrows = (e:any)=>{
        if(e.currentTarget.id === 'right'){
            if(currentSalad === "4"){
                setSalad("1")
            }else{
                setSalad(`${Number(currentSalad) + 1}`)
            }
        }else{
            if(currentSalad === "1"){
                setSalad("4")
            }else{
                setSalad(`${Number(currentSalad) - 1 }`)
            }
        }
        
    }

    return(
        <Flex  dir={"column"} css={{
            // border:"1px solid black",
            height:"100%",
            gridArea:"left",
            
            

            }}>

            <Flex id="mainContop" css={{
                "@bp3":{
                    
                    flex_c:"",
                    jc_ac:"",
                    "& div":{
                        jc_ac:""
                    }
                }
            }}>

                <Flex dir={"column"} justify="start" align={"center"} css={{
                    animation:`${fadein} 1s 1s both`,
                    "& img":{
                        width:"350px",
                        height:"350px",
                    },
                    "& svg":{
                        fill:"$primary",
                        cursor:"pointer"
                    }
                    }}>
                    <img id="mainImg" src={data[currentSalad]["img"]} alt={data["1"]["name"]}/>
                    <Flex justify={"around"} css={{
                        width:"100%",
                        }}>
                        <Ico_arrowLeft width="32" height="32" id="left" click={(e:any)=>handleArrows(e)}/>
                        <Ico_arrowRight width="32" height="32" id="right" click={(e:any)=>handleArrows(e)} />
                    </Flex>
                </Flex>

                <Flex dir={"column"} justify="start" align={"start"} css={{
                    paddingTop:"$6",
                    animation:`${fadein} 1s 1.5s both`,
                    "@bp3":{
                        paddingTop:"$2",
                    }
                    
                    }}>

                    <Flex id="maindatacon" dir={"column"} css={{

                        // animation:`${fadein} 1s 2s both`
                        }}>
                        <Text css={{
                            headline5:"500",
                            color:"$onBg600"
                            }}>Most  Healthy Salad
                        </Text>

                        <Text css={{
                            display3:"600",
                            color:"$onBg800"
                            }}>
                            {data[currentSalad]["name"].split(" ")[0]}
                        </Text>

                        <Text css={{
                            display1:"600",
                            letterSpacing:"4px",
                            color:"$onBg800",
                            
                            }}>
                            {data[currentSalad]["name"].split(" ")[1]}
                        </Text>
                    </Flex>

                    <Flex css={{
                        paddingTop:"$3",
                        "@bp2":{
                            flex_c:""
                        },
                        "& p":{
                            flex_r:"",
                            jc_ac:""
                        },
                        "& svg":{

                        }
                        }}>
                        <Text cursor={"click"} css={{
                            color:"$onPrimary",
                            backgroundColor:"$primary",
                            padding:"$1 $2",
                            borderRadius:"8px",
                            headline6:"500",
                            boxShadow:"$1dp",
                            "&:hover":{
                                
                                backgroundColor:"$primary700",
                            }
                            }}>
                            Book Order
                        </Text>
                        <Text cursor={"click"} css={{
                            color:"$primary",
                            padding:"$1 $2",
                            borderRadius:"8px",
                            headline6:"500",
                            "& svg":{
                                fill:"$primary",

                            },
                            "&:hover":{
                                color:"$primary600",
                                "& svg":{
                                    fill:"$primary600"
                                }
                            }
                            }}>
                            <Ico_playBox width="32" height="32" /> Watch Recipe
                        </Text>

                    </Flex>
                </Flex>

            </Flex>


            <Flex justify={"between"} align="center" css={{
                    paddingTop:"$5",
                    animation:`${fadein} 1s 1.9s both`,
                    "@bp4":{
                        display:"grid",
                        gridTemplateColumns:"auto auto",
                        justifyContent:"space-around",
                        gridRowGap:"16px",
                        "& div":{
                            width:"100%",

                        }
                    }

                }}>
                    
                {Object.keys(data).map((v:any  , i:number)=>{
                    // console.log(data[v])
                    return(
                        <Main_Left_card click={(e:any)=>{setSalad(e.currentTarget.id.split("food")[1])}} key={i} datas={data[v]}/>)
                })}
            

            </Flex>

        </Flex>
    )
}


export default Main_Left