import * as GraphTypes from "./GraphTypes";

function calculateCoordinates(options: GraphTypes.CoordinatesCalculationOptions): GraphTypes.Point {
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
