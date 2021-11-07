import "./topbar.scss"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="row">
                <div className="left">
                    <a href="#home">
                        {/* <div className="logo">R</div> */}
                        ↩&nbsp;&nbsp;&nbsp;CS3240 20/21 S1 G17</a>
                </div>
                <div className="row">
                    <a href="#interactive">Interactive Prototype</a>
                    <div className="vert-sep"></div>
                    <a href="#presentation">Final Presentation</a>
                    <div className="vert-sep"></div>
                    <a href="https://docs.google.com/document/d/14yST7s2pwt4_eLWf13vi_0ugIHyvfST4X3Y6HfO6ZA8/edit?usp=sharing" target="_blank" rel="noreferrer">Evaluation Report</a>
                </div>
            </div>
        </div>
    )
}
