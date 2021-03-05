import * as GraphTypes from "./GraphTypes";
import calculateCoordinates from "./calculateCoordinates";

interface GraphBuilder extends GraphTypes.CustomRenderer<HTMLElement> {
    graphSettings: GraphTypes.GraphRendererSettings<{}>
};

class GraphBuilder implements GraphTypes.CustomRenderer<HTMLElement> {
    constructor(settings: GraphTypes.GraphRendererSettings<{}>) {
        this.graphSettings = settings;
    };

    generateGraphPoints(points: GraphTypes.CloudPoint[]) {
        let numberOfPoints = points.length;
        let defaultAngleOffset = 360 / numberOfPoints;
        let newPointAngle = 0;
        let displayablePoints: GraphTypes.DisplayablePoint[] = [];
        
        return displayablePoints;
    };

    renderPoints() {
    
    };
};