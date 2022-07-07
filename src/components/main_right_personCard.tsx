import React from "react";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";

function Main_Right_personCard(props:any){
    return(
        <Flex justify={"center"} align="center" css={{
            backgroundImage:`url('${"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}')`,
            backgroundSize:"cover",
            backgroundOrigin:"content-box",
            backgroundPosition:"center",
            width:"45px",
            height:"45px",
            borderRadius:"8px"
            }}>
                <Text css={{
                    headline6:"600",
                    color:"$onPrimary",

                    }}>{props.data}</Text>
        </Flex>
    )
}

export default Main_Right_personCard