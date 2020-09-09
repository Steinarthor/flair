declare module '*.scss' {
    const content: { [className: string]: string }
    export default content
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default content
}

declare module '*.json' {
    const value: any
    export default value
}
