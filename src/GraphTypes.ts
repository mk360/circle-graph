declare namespace Graph {
    export type CircleVisualSettings = {
        borderColor?: string
        borderThickness?: number
        backgroundColor?: string
    };
    export type CenterPoint = Point & PointLabel;
    export type GraphRendererSettings<CustomSettings extends { [key: string]: any }> = {
        radius: number
        center: Point
        commonAngleOffset?: number
        commonValueCap: number
        points: CloudPoint[]
        showGraphDottedLines?: boolean
    } & CircleVisualSettings & CustomSettings;
    export type Coordinates = {
        x: number
        y: number
    };
    export type DisplayablePointLabel = {
        text: string
        fontSize?: number
        fontFamily?: string
        color?: string
    };
    export type PointLabel = DisplayablePointLabel & {
        distance?: number
    };
    export type Point = {
        pointThickness?: number
        label?: PointLabel
    } & Coordinates;
    export type CloudPoint = {
        angleOffset?: number
        value: number
        valueCap?: number
    } & Point & { label: PointLabel };
    export type DisplayablePoint = {
        coordinates: Coordinates
        associatedLabel?: Coordinates & PointLabel
    };
    interface CustomRenderer<OutputType, CustomSettings extends { [key: string]: any } = {}> {
        new(settings: GraphRendererSettings<CustomSettings>): CustomRenderer<OutputType, CustomSettings>;
        graphSettings: GraphRendererSettings<CustomSettings>;
        generateGraphPoints(points: CloudPoint[]): DisplayablePoint[];
        renderPoints(points: DisplayablePoint[], uniquePointRenderer: (point: DisplayablePoint) => OutputType): OutputType[];
    }
};