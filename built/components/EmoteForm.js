"use strict";
var React = require('react');
class EmoteForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null, React.createElement("label", null, "emoteIdentifier: ", React.createElement("input", {type: "text", value: this.props.emoteObject.emoteIdentifier, onChange: this.props.emoteIdentifierChangeHandler})), React.createElement("br", null), React.createElement("label", null, "slide: ", React.createElement("input", {type: "checkbox", checked: this.props.emoteObject.slide, onChange: this.props.slideChangeHandler})), !this.props.emoteObject.slide ? '' :
            React.createElement("label", null, "speed: ", React.createElement("input", {type: "text", value: this.props.emoteObject.speed, onChange: this.props.speedChangeHandler})), !this.props.emoteObject.slide ? '' :
            React.createElement("label", null, "speed:", React.createElement("select", {defaultValue: "{this.props.emoteObject.speed}", onChange: this.props.speedChangeHandler}, React.createElement("option", {value: ""}, "-- optional slide speed modifier --"), React.createElement("option", null, "slowest"), React.createElement("option", null, "slower"), React.createElement("option", null, "slow"), React.createElement("option", null, "fast"), React.createElement("option", null, "faster"), React.createElement("option", null, "fastest"))), React.createElement("br", null), React.createElement("label", null, "vibrate: ", React.createElement("input", {type: "checkbox", checked: this.props.emoteObject.vibrate, onChange: this.props.vibrateChangeHandler})), React.createElement("br", null), React.createElement("label", null, "reverse: ", React.createElement("input", {type: "checkbox", checked: this.props.emoteObject.reverse, onChange: this.props.reverseChangeHandler})), React.createElement("br", null), React.createElement("label", null, "hueRotate: ", React.createElement("input", {type: "checkbox", checked: this.props.emoteObject.hueRotate, onChange: this.props.hueRotateChangeHandler})), React.createElement("br", null), React.createElement("label", null, "invertColors: ", React.createElement("input", {type: "checkbox", checked: this.props.emoteObject.invertColors, onChange: this.props.invertColorsChangeHandler})), React.createElement("br", null), React.createElement("label", null, "spin:", React.createElement("select", {defaultValue: "{this.props.emoteObject.spin}", onChange: this.props.spinChangeHandler}, React.createElement("option", {value: ""}, "-- optional spin --"), React.createElement("option", {value: "xspin"}, "spin clockwise around x axis"), React.createElement("option", {value: "yspin"}, "spin clockwise around y axis"), React.createElement("option", {value: "zspin"}, "spin clockwise around z axis"), React.createElement("option", {value: "spin"}, "spin clockwise around all 3 axes"), React.createElement("option", {value: "!xspin"}, "spin counterclockwise around x axis"), React.createElement("option", {value: "!yspin"}, "spin counterclockwise around y axis"), React.createElement("option", {value: "!zspin"}, "spin counterclockwise around z axis"), React.createElement("option", {value: "!spin"}, "spin counterclockwise around all 3 axes"))), React.createElement("br", null), React.createElement("label", null, "rotateDegrees:", React.createElement("input", {type: "number", min: "0", max: "359", step: "1", value: this.props.emoteObject.rotateDegrees.toString(), onChange: this.props.rotateDegreesChangeHandler})), React.createElement("br", null), React.createElement("label", null, "brody: ", React.createElement("input", {type: "checkbox", checked: this.props.emoteObject.brody, onChange: this.props.brodyChangeHandler})), React.createElement("br", null), React.createElement("label", null, "xAxisTranspose:", React.createElement("input", {type: "number", min: "-150", max: "150", step: "1", value: this.props.emoteObject.xAxisTranspose.toString(), onChange: this.props.xAxisTransposeChangeHandler})), React.createElement("br", null), React.createElement("label", null, "zAxisTranspose:", React.createElement("input", {type: "number", min: "0", max: "10", step: "1", value: this.props.emoteObject.zAxisTranspose.toString(), onChange: this.props.zAxisTransposeChangeHandler})), React.createElement("br", null), React.createElement("label", null, "firstLineText: ", React.createElement("input", {type: "text", value: this.props.emoteObject.firstLineText, onChange: this.props.firstLineTextChangeHandler})), React.createElement("br", null), React.createElement("label", null, "secondLineText: ", React.createElement("input", {type: "text", value: this.props.emoteObject.secondLineText, onChange: this.props.secondLineTextChangeHandler})), React.createElement("br", null), React.createElement("label", null, "altText: ", React.createElement("input", {type: "text", value: this.props.emoteObject.altText, onChange: this.props.altTextChangeHandler})), React.createElement("br", null)));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EmoteForm;
//# sourceMappingURL=EmoteForm.js.map