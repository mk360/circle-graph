import * as GraphTypes from "./../GraphTypes";
import calculateCoordinates from "./../calculateCoordinates";

interface DefaultGraph extends GraphTypes.CustomGraphCreator {
    graphSettings: GraphTypes.GraphRendererSettings<{}>
};

class DefaultGraph implements GraphTypes.CustomGraphCreator {
    constructor(settings: GraphTypes.GraphRendererSettings<{}>) {
        this.graphSettings = settings;
    };

    generateGraphPoints(points: GraphTypes.CloudPoint[]) {
        let numberOfPoints = points.length;
        let defaultAngleOffset = 360 / numberOfPoints;
        let newPointAngle = 0;
        let displayablePoints: GraphTypes.DisplayablePoint[] = [];
        for (let point of points) {
            let coordinatesCalculationOptions: GraphTypes.CoordinatesCalculationOptions = {
                center: this.graphSettings.center,
                angle: newPointAngle,
                angleOffset: point.angleOffset || 0,
                distance: this.graphSettings.radius * point.value / (point.valueCap || this.graphSettings.commonValueCap)
            };
            newPointAngle += defaultAngleOffset;
            const pointValueCoordinates = calculateCoordinates(coordinatesCalculationOptions);
            coordinatesCalculationOptions.distance = this.graphSettings.radius + (point.label.distance || 0);
            let labelCoordinates = calculateCoordinates(coordinatesCalculationOptions);
            let displayablePoint: GraphTypes.DisplayablePoint = {
                coordinates: pointValueCoordinates,
                associatedLabel: {...point.label, ...labelCoordinates }
            };
            displayablePoints.push(displayablePoint);
        }  
        return displayablePoints;
    };
};

export default DefaultGraph;
