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
                    <a href="#interactive-prototype">Interactive Prototype</a>
                    <div className="vert-sep"></div>
                    <a href="#presentation">Final Presentation</a>
                    <div className="vert-sep"></div>
                    <a href="#evaluation-report">Evaluation Report</a>
                </div>
            </div>
        </div>
    )
}
