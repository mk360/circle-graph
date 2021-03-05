import * as GraphTypes from "./GraphTypes";

function calculateCoordinates(options: GraphTypes.CoordinatesCalculationOptions) {
    let { x: centerX, y: centerY } = options.center;
    let realAngle = options.angle + options.angleOffset;
    let pointY = centerY + options.distance * Math.cos(realAngle * Math.PI / 180);
    let pointX = centerX + options.distance * Math.sin(realAngle * Math.PI / 180);
    return {
        x: pointX,
        y: pointY
    };
};

export default calculateCoordinates;

console.log(calculateCoordinates({ 
    angle: 75,
    center: {
        x: 10,
        y: 10
    },
    distance: 10,
    angleOffset: 15
}));
