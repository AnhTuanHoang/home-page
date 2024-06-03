import React, {ReactElement} from "react";
import Header from "../Header";
import Footer from "../Footer";

interface PropTypes {
    content: ReactElement;
    isHome?: boolean;
    title?: string
}

const Page: React.FC<PropTypes> = props => {
    React.useEffect(() => {
        if (props.title && props.title.length > 0) {
            document.title = props.title;
        } else {
            document.title = "NISSHO ELECTRONICS VIETNAM COMPANY LIMITED";
        }
    }, [props.title]);

    React.useEffect(() => {
        console.log("meomeo")
        console.log(props)
    }, [props.isHome]);

    return (
        <div >
            <Header isHome={props.isHome ? props.isHome : false}/>
            {props.isHome ? (
                <></>
            ) : (<>
                <div className={"pt-5"}/>
                <div className={"pt-5"}/>
                <div className={"pt-3"}/>
            </>)}

            <div className="container" style={{alignSelf: "center"}}>
                {props.content}
            </div>
            {props.isHome ? <></> : <><div className={"pt-2"}/></>}
            <Footer/>
        </div>

    );
};

export default Page;
