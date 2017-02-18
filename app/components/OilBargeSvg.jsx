/* eslint
   "react/jsx-first-prop-new-line": "off",
   "max-len": "off",
   "class-methods-use-this": "off"
   */
import React from 'react';

export class OilBargeSvg extends React.Component {

    mouseEnterCircle(e) {
        console.log(e.target.id);
        //let elt = document.getElementById(e.target.id);
        //elt.style.fill = 'black';
    }
    mouseLeaveCircle(e) {
        console.log(e.target.id);
        //let elt = document.getElementById(e.target.id);
        //elt.style.fill = 'none';
    }
    handleCircleClick(e) {
        console.log(e);
        console.log(e.target.id);
    }

    render() {
        console.log(this);
        return (
            <div></div>
        );
    }
}

export default OilBargeSvg;
