import React from "react";
import Ico_dislike from "../asesst/Icons/Ico_disLike";
import Ico_like from "../asesst/Icons/Ico_like";
import Ico_star from "../asesst/Icons/Ico_star";
import Flex from "../Styles/styledComponent/Flex";
import Span from "../Styles/styledComponent/Span";
import Text from "../Styles/styledComponent/Text";
import Main_Right_personCard from "./main_right_personCard";
import darkTheme from "../Styles/darkTheme";
import data from "../Data";
import { useStore } from "../store/store";
import { fadein } from "../Styles/keyframes";

function Main_Right(){

    const currentSalad = useStore(state=>state.currentSalad)

    return(
        <Flex dir={"column"} css={{
            gridArea:"right",
            // border:"1px solid black",
            padding:"$5 $1"

            }}>
            

            <Flex id="mainRight" dir={"column"} css={{
                backgroundColor:"$primary200",
                border:"1px solid $onBg100",
                boxShadow:"$8dp",
                padding:"$2 $3",
                borderRadius:"16px",
                animation:`${fadein} 1s 1.7s both`,
                [`.${darkTheme} &`]:{
                    backgroundColor:"$primary400",
                    "& p , & span":{
                        color:"$onBg"
                    }
                }
                }}>
                <Text css={{
                    headline6:"500",
                    color:"$primary"
                    }}>
                    Overview
                </Text>

                <Text css={{
                    width:"fit-content",
                    backgroundColor:"$primary",
                    color:"$onPrimary",
                    borderRadius:"8px",
                    padding:"4px $1",
                    flex_r:"",
                    jsb_ac:"",
                    headline6:"500",
                    marginTop:"$1",
                    "& svg":{
                        fill:"$onPrimary",
                        marginRight:"4px"
                    }
                    }}>
                    <Ico_star width="24" height="24"/> {data[currentSalad]["star"]}
                </Text>

                <Text css={{
                    headline5:"800",
                    color:"$primary",
                    marginTop:"$2",
                    }}>
                    {data[currentSalad]["name"]}
                </Text>

                <Text css={{
                    subhead1:"500",
                    color:"$primary",
                    marginTop:"$1",
                    }}>
                    {data[currentSalad]["des"]}
                </Text>

                <Flex dir={"column"} css={{
                    position:"relative",
                    marginTop:"$4",
                    "& div:nth-child(2)":{
                        position:'relative',
                        right:"25px"
                    },
                    "& div:nth-child(3)":{

                        right:"47px",
                    },

                    "& div:nth-child(4)":{                        
                        right:"72px",
                        backgroundColor:"$primary",
                        backgroundImage:"none"
                    },
                    
                    }}>

                    <Flex >
                        <Main_Right_personCard/>
                        <Main_Right_personCard/>
                        <Main_Right_personCard/>
                        <Main_Right_personCard data="+10"/>
                    </Flex>

                    <Text css={{
                        marginTop:"$1",
                        subhead1:"600",
                        color:"$primary"
                        }}>
                        Barry , Harry , Rose <br></br>
                        <Span css={{
                            color:"$primary800",
                            subhead2:"500",
                            
                        }}>
                            Other 10 recomendom
                        </Span>
                    </Text>

                </Flex>

                <Flex css={{
                    marginTop:"$2",
                    
                    "& p":{
                        padding:"$1",
                        flex_r:"",
                        jc_ac:"",
                        cursor:"pointer",
                        borderRadius:"8px",
                        "& svg":{
                            cursor:"pointer"
                        },
                        
                    }
                    }}>

                    <Text css={{
                        backgroundColor:"$primary",
                        color:"$onPrimary",
                        "& svg":{
                            fill:"$onPrimary"
                        }
                    }}>
                        <Ico_like width="24" height="24" />
                    </Text>

                    <Text css={{
                        border:"1px solid $primary",
                        marginLeft:"$1",
                        "& svg":{
                            fill:"$primary"
                        }
                        }}>
                        <Ico_dislike width="24" height="24"/>
                    </Text>

                </Flex>

            </Flex>


            <Flex dir="column" css={{
                backgroundColor:"$primary200",
                border:"1px solid $onBg100",
                boxShadow:"$8dp",
                padding:"$2 $3",
                borderRadius:"16px",
                marginTop:"$3",
                animation:`${fadein} 1s 1.5s both`,
                [`.${darkTheme} &`]:{
                    backgroundColor:"$primary400",
                    "& p , & span":{
                        color:"$onBg"
                    }
                }
                }}>
                
                <Flex css={{
                    backgroundImage:"url('http://2.bp.blogspot.com/-ONHffVwXLMg/VWDNIw_OMAI/AAAAAAAAjJ0/OlOzUI4B2z4/s1600/IMG_6612-001.JPG')",
                    backgroundSize:"cover",
                    backgroundOrigin:"content-box",
                    backgroundPosition:"center",
                    width:"100%",
                    height:"120px",
                    borderRadius:"16px",
                    "@bp0-2":{
                        height:"250px",
                    },
                    "@bp4":{
                        height:"120px",
                    }
                    }}>

                </Flex>

                    <Text css={{
                        headline6:"800",
                        color:"$primary",
                        marginTop:"$1"
                        }}>
                        Fish Salad (Greek style)
                    </Text>

                    <Flex justify={"between"} css={{
                        marginTop:"$1"
                        }}>
                        <Text css={{
                            color:"$primary",
                            subhead1:"800"
                            }}>
                            <Span css={{subhead2:"500", textDecoration:"line-through"}}>$50.00</Span><br></br>  $30.00
                        </Text>

                        <Text cursor={"click"} css={{
                            backgroundColor:"$primary",
                            color:"$onPrimary",
                            padding:"$1 $2",
                            borderRadius:"8px",
                            flex_r:"",
                            jc_ac:"",
                            [`.${darkTheme} &`]:{
                                "& p ":{
                                    color:"$onPrimary"
                                }
                            }
                            }}>
                            Book order
                        </Text>

                    </Flex>

            </Flex>

        </Flex>
    )
}


export default Main_Right