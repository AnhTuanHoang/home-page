import React, {ReactElement} from "react";
import Header from "../Header";
import Footer from "../Footer";

interface PropTypes {
    content: ReactElement;
    title?: string;
}

const Page: React.FC<PropTypes> = props => {

    return (
        <div>
            <Header/>
            <div style={{
                alignSelf: "center"
            }}
            >
                {/*<div style={*/}
                {/*    {*/}
                {/*        height: "6.25rem"*/}
                {/*    }*/}
                {/*}></div>*/}
                {props.content}
            </div>
            <Footer/>
        </div>

    );
};

export default Page;
