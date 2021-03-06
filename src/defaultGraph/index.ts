import * as GraphTypes from "./../GraphTypes";
import calculateCoordinates from "./../calculateCoordinates";

interface HTMLGraph extends GraphTypes.CustomRenderer<HTMLElement> {
    graphSettings: GraphTypes.GraphRendererSettings<{}>
};

class HTMLGraph implements GraphTypes.CustomRenderer<HTMLElement> {
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
        }  
        return displayablePoints;
    };

    renderPoints() {
    
    };
};