
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
export interface CustomRenderer<OutputType> {
    generateGraphPoints(points: CloudPoint[]): DisplayablePoint[];
    renderPoints(points: DisplayablePoint[], pointRenderer: (point: DisplayablePoint) => OutputType): OutputType[];
}
export interface GraphFactory {
    defaultRenderer: CustomRenderer<HTMLElement>
    currentRenderer: CustomRenderer<any>
    customRenderers: {
        [key: string]: CustomRenderer<any>
    }
    addRenderer<T>(key: string, renderer: CustomRenderer<T>): void
    useDefaultRenderer(): GraphFactory["defaultRenderer"]
    useRenderer(key: keyof GraphFactory["customRenderers"]): CustomRenderer<any>
}
export type CoordinatesCalculationOptions = {
    center: Coordinates
    angle: number
    angleOffset: number
    distance: number
};
