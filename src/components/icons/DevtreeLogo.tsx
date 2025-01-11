import { SVGProps } from "react"
interface SVGRProps {
    title?: string;
    titleId?: string;
}
export default function DevtreeLogo({
    title,
    titleId,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            id="svg34"
            viewBox="0 0 830.13 182.43"
            width="1em"
            height="1em"
            aria-labelledby={titleId}
        >
            {title ? <title id={titleId}>{title}</title> : null}
            <defs id="defs12">
                <linearGradient
                    id="linear-gradient"
                    x1={198.87}
                    x2={310.15}
                    y1={113.79}
                    y2={113.79}
                    gradientTransform="translate(0 -.01)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop id="stop1" offset={0} stopColor="#00bef5" />
                    <stop id="stop2" offset={1} stopColor="#007dc6" />
                </linearGradient>
                <linearGradient
                    id="linear-gradient-2"
                    x1={198.87}
                    x2={310.15}
                    y1={118.14}
                    y2={118.14}
                    gradientTransform="translate(0 -.01)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop id="stop3" offset={0} stopColor="#fff" />
                    <stop id="stop4" offset={1} stopColor="#fff" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="linear-gradient-3"
                    x1={258.32}
                    x2={255.14}
                    y1={92.31}
                    y2={114.85}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop id="stop5" offset={0} stopColor="#13355c" />
                    <stop id="stop6" offset={1} stopColor="#fff" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    xlinkHref="#linear-gradient"
                    id="linear-gradient-4"
                    x1={254.89}
                    x2={253.51}
                    y1={53.67}
                    y2={98.92}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-2"
                    id="linear-gradient-5"
                    x1={244.69}
                    x2={254.89}
                    y1={17.62}
                    y2={76.76}
                />
                <linearGradient
                    id="linear-gradient-6"
                    x1={359.82}
                    x2={471.1}
                    y1={113.79}
                    y2={113.79}
                    gradientTransform="matrix(-1 0 0 1 471.1 -.01)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop id="stop7" offset={0} stopColor="#e4e61d" />
                    <stop id="stop8" offset={0.99} stopColor="#5fbd3f" />
                </linearGradient>
                <linearGradient
                    xlinkHref="#linear-gradient-2"
                    id="linear-gradient-7"
                    x1={359.82}
                    x2={471.1}
                    y1={118.14}
                    y2={118.14}
                    gradientTransform="matrix(-1 0 0 1 471.1 -.01)"
                />
                <linearGradient
                    id="linear-gradient-8"
                    x1={419.27}
                    x2={416.1}
                    y1={92.28}
                    y2={114.78}
                    gradientTransform="matrix(-1 0 0 1 471.1 0)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop id="stop9" offset={0} stopColor="#085c2d" />
                    <stop id="stop10" offset={1} stopColor="#fff" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    xlinkHref="#linear-gradient-6"
                    id="linear-gradient-9"
                    x1={415.84}
                    x2={414.46}
                    y1={53.67}
                    y2={98.92}
                    gradientTransform="matrix(-1 0 0 1 471.1 0)"
                />
                <linearGradient
                    xlinkHref="#linear-gradient-2"
                    id="linear-gradient-10"
                    x1={405.64}
                    x2={415.84}
                    y1={17.62}
                    y2={76.76}
                    gradientTransform="matrix(-1 0 0 1 471.1 0)"
                />
                <linearGradient
                    id="linear-gradient-11"
                    x1={181.87}
                    x2={134.5}
                    y1={-4.21}
                    y2={164.48}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop id="stop11" offset={0} stopColor="#ffdc00" />
                    <stop id="stop12" offset={1} stopColor="#007dc6" />
                </linearGradient>
                <linearGradient
                    xlinkHref="#linear-gradient-3"
                    id="linear-gradient-12"
                    x1={150.36}
                    x2={162.91}
                    y1={89.95}
                    y2={93.31}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-11"
                    id="linear-gradient-13"
                    x1={174.11}
                    x2={127.37}
                    y1={-3.64}
                    y2={162.79}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-2"
                    id="linear-gradient-14"
                    x1={181.87}
                    x2={134.5}
                    y1={-4.21}
                    y2={164.48}
                />
                <style id="style1">{".cls-12{stroke-width:0;fill:#fff}"}</style>
            </defs>
            <g
                id="g34"
                style={{
                    isolation: "isolate",
                }}
            >
                <g id="BACKGROUND">
                    <g id="g18">
                        <path
                            id="path12"
                            d="M380.73 121.19V36.11h21.48v85.08h-21.48Zm14.52 0v-18.48h20.4c4.8 0 8.98-.92 12.54-2.76 3.56-1.84 6.3-4.58 8.22-8.22 1.92-3.64 2.88-8.06 2.88-13.26s-.98-9.46-2.94-13.02c-1.96-3.56-4.7-6.26-8.22-8.1-3.52-1.84-7.68-2.76-12.48-2.76h-21.36V36.11h21.48c6.56 0 12.6 1.02 18.12 3.06 5.52 2.04 10.32 4.94 14.4 8.7 4.08 3.76 7.26 8.24 9.54 13.44 2.28 5.2 3.42 10.96 3.42 17.28s-1.14 12.2-3.42 17.4c-2.28 5.2-5.46 9.68-9.54 13.44-4.08 3.76-8.86 6.66-14.34 8.7-5.48 2.04-11.46 3.06-17.94 3.06h-20.76Z"
                            className="cls-12"
                        />
                        <path
                            id="path13"
                            d="M500.25 122.51c-6.56 0-12.36-1.3-17.4-3.9s-9-6.22-11.88-10.86c-2.88-4.64-4.32-9.96-4.32-15.96s1.4-11.18 4.2-15.78c2.8-4.6 6.62-8.24 11.46-10.92 4.84-2.68 10.3-4.02 16.38-4.02s11.18 1.26 15.78 3.78c4.6 2.52 8.2 6 10.8 10.44 2.6 4.44 3.9 9.5 3.9 15.18 0 1.2-.06 2.42-.18 3.66-.12 1.24-.38 2.66-.78 4.26l-51.72.24V85.19l43.44-.36-9.36 5.88c-.08-3.28-.56-5.98-1.44-8.1-.88-2.12-2.16-3.74-3.84-4.86-1.68-1.12-3.8-1.68-6.36-1.68s-4.92.64-6.84 1.92c-1.92 1.28-3.4 3.08-4.44 5.4-1.04 2.32-1.56 5.12-1.56 8.4s.56 6.22 1.68 8.58c1.12 2.36 2.72 4.14 4.8 5.34 2.08 1.2 4.64 1.8 7.68 1.8 2.88 0 5.42-.48 7.62-1.44s4.18-2.44 5.94-4.44l10.92 10.92c-2.88 3.28-6.38 5.76-10.5 7.44-4.12 1.68-8.78 2.52-13.98 2.52Z"
                            className="cls-12"
                        />
                        <path
                            id="path14"
                            d="m553.77 121.19-23.88-58.68h22.32l15.24 49.44h-8.52l15.12-49.44h22.08l-23.88 58.68h-18.48Z"
                            className="cls-12"
                        />
                        <path
                            id="path15"
                            d="M598.89 49.79v-12.6h68.52v12.6h-68.52Zm27.36 71.4v-81.6h13.8v81.6h-13.8Z"
                            className="cls-12"
                        />
                        <path
                            id="path16"
                            d="M665.37 121.19v-57.6h13.2v57.6h-13.2Zm13.2-32.04-4.56-2.28c0-7.28 1.62-13.18 4.86-17.7s8.14-6.78 14.7-6.78c2.88 0 5.48.52 7.8 1.56 2.32 1.04 4.48 2.72 6.48 5.04l-8.64 8.88c-1.04-1.12-2.2-1.92-3.48-2.4-1.28-.48-2.76-.72-4.44-.72-3.68 0-6.72 1.16-9.12 3.48-2.4 2.32-3.6 5.96-3.6 10.92Z"
                            className="cls-12"
                        />
                        <path
                            id="path17"
                            d="M739.29 122.39c-5.76 0-10.94-1.3-15.54-3.9-4.6-2.6-8.24-6.18-10.92-10.74-2.68-4.56-4.02-9.68-4.02-15.36s1.32-10.78 3.96-15.3c2.64-4.52 6.22-8.1 10.74-10.74 4.52-2.64 9.54-3.96 15.06-3.96s10.1 1.24 14.22 3.72c4.12 2.48 7.36 5.88 9.72 10.2 2.36 4.32 3.54 9.24 3.54 14.76 0 .96-.06 1.94-.18 2.94s-.3 2.1-.54 3.3h-47.28v-10.8h40.44l-4.92 4.32c-.16-3.52-.84-6.48-2.04-8.88-1.2-2.4-2.9-4.24-5.1-5.52-2.2-1.28-4.9-1.92-8.1-1.92-3.36 0-6.28.72-8.76 2.16-2.48 1.44-4.4 3.46-5.76 6.06-1.36 2.6-2.04 5.7-2.04 9.3s.72 6.76 2.16 9.48c1.44 2.72 3.48 4.82 6.12 6.3 2.64 1.48 5.68 2.22 9.12 2.22 2.96 0 5.7-.52 8.22-1.56 2.52-1.04 4.66-2.56 6.42-4.56l8.4 8.52c-2.8 3.28-6.2 5.76-10.2 7.44-4 1.68-8.24 2.52-12.72 2.52Z"
                            className="cls-12"
                        />
                        <path
                            id="path18"
                            d="M803.37 122.39c-5.76 0-10.94-1.3-15.54-3.9-4.6-2.6-8.24-6.18-10.92-10.74-2.68-4.56-4.02-9.68-4.02-15.36s1.32-10.78 3.96-15.3c2.64-4.52 6.22-8.1 10.74-10.74 4.52-2.64 9.54-3.96 15.06-3.96s10.1 1.24 14.22 3.72c4.12 2.48 7.36 5.88 9.72 10.2 2.36 4.32 3.54 9.24 3.54 14.76 0 .96-.06 1.94-.18 2.94s-.3 2.1-.54 3.3h-47.28v-10.8h40.44l-4.92 4.32c-.16-3.52-.84-6.48-2.04-8.88-1.2-2.4-2.9-4.24-5.1-5.52-2.2-1.28-4.9-1.92-8.1-1.92-3.36 0-6.28.72-8.76 2.16-2.48 1.44-4.4 3.46-5.76 6.06-1.36 2.6-2.04 5.7-2.04 9.3s.72 6.76 2.16 9.48c1.44 2.72 3.48 4.82 6.12 6.3 2.64 1.48 5.68 2.22 9.12 2.22 2.96 0 5.7-.52 8.22-1.56 2.52-1.04 4.66-2.56 6.42-4.56l8.4 8.52c-2.8 3.28-6.2 5.76-10.2 7.44-4 1.68-8.24 2.52-12.72 2.52Z"
                            className="cls-12"
                        />
                    </g>
                </g>
                <g id="OBJECTS">
                    <g id="g33">
                        <g id="g29">
                            <g id="g23">
                                <path
                                    id="path19"
                                    d="M198.87 117.35v23.9c0 5.89 5.97 9.9 11.43 7.67l92.54-37.9a11.78 11.78 0 0 0 7.31-10.9V86.55c0-5.93-5.89-10.05-11.46-8.02l-97.49 35.49c-1.4.51-2.33 1.84-2.33 3.33Z"
                                    style={{
                                        fill: "url(#linear-gradient)",
                                        strokeWidth: 0,
                                    }}
                                />
                                <path
                                    id="path20"
                                    d="M198.87 127.23v14.02c0 5.89 5.97 9.9 11.43 7.67l92.54-37.9a11.78 11.78 0 0 0 7.31-10.9v-13.4l-111.28 40.51Z"
                                    style={{
                                        fill: "url(#linear-gradient-2)",
                                        mixBlendMode: "overlay",
                                        opacity: 0.7,
                                        strokeWidth: 0,
                                    }}
                                />
                                <path
                                    id="path21"
                                    d="M203.67 114.84v23.13c0 5.73 5.82 9.64 11.12 7.46l86.62-35.47a11.78 11.78 0 0 0 7.31-10.9V85.65c0-4.41-4.38-7.47-8.52-5.96l-96.54 35.14Z"
                                    style={{
                                        fill: "url(#linear-gradient-3)",
                                        opacity: 0.83,
                                        mixBlendMode: "multiply",
                                        strokeWidth: 0,
                                    }}
                                />
                                <path
                                    id="path22"
                                    d="M310.15 91.2v-6.29c0-6.39-3.86-12.14-9.77-14.56L210.3 33.46c-5.45-2.23-11.43 1.78-11.43 7.67v23.9c0 1.49.93 2.82 2.33 3.33l93.14 33.91c7.68 2.8 15.81-2.89 15.81-11.07Z"
                                    style={{
                                        fill: "url(#linear-gradient-4)",
                                        strokeWidth: 0,
                                    }}
                                />
                                <path
                                    id="path23"
                                    d="M310.15 84.91c0-6.39-3.86-12.14-9.77-14.56L210.3 33.46c-5.45-2.23-11.43 1.78-11.43 7.67v24.09c0 1.4.82 2.66 2.1 3.23V52.5c0-5.89 5.98-9.9 11.43-7.67l97.75 40.08Z"
                                    style={{
                                        fill: "url(#linear-gradient-5)",
                                        mixBlendMode: "overlay",
                                        opacity: 0.7,
                                        strokeWidth: 0,
                                    }}
                                />
                            </g>
                            <g id="g28">
                                <path
                                    id="path24"
                                    d="M11.46 78.53C5.89 76.5 0 80.63 0 86.55v13.57c0 4.78 2.89 9.09 7.31 10.9l92.54 37.9c5.45 2.23 11.43-1.78 11.43-7.67v-23.9c0-1.49-.93-2.82-2.33-3.33L11.46 78.53Z"
                                    style={{
                                        fill: "url(#linear-gradient-6)",
                                        strokeWidth: 0,
                                    }}
                                />
                                <path
                                    id="path25"
                                    d="M0 86.72v13.4c0 4.78 2.89 9.09 7.31 10.9l92.54 37.9c5.45 2.23 11.43-1.78 11.43-7.67v-14.02L0 86.72Z"
                                    style={{
                                        fill: "url(#linear-gradient-7)",
                                        mixBlendMode: "overlay",
                                        opacity: 0.7,
                                        strokeWidth: 0,
                                    }}
                                />
                                <path
                                    id="path26"
                                    d="M9.94 79.7c-4.14-1.51-8.52 1.56-8.52 5.96v13.41c0 4.78 2.89 9.09 7.31 10.9l86.3 35.34c5.46 2.24 11.44-1.78 11.44-7.68v-22.79L9.94 79.7Z"
                                    style={{
                                        mixBlendMode: "multiply",
                                        strokeWidth: 0,
                                        fill: "url(#linear-gradient-8)",
                                    }}
                                />
                                <path
                                    id="path27"
                                    d="m15.81 102.27 93.14-33.91c1.4-.51 2.33-1.84 2.33-3.33v-23.9c0-5.89-5.97-9.9-11.43-7.67L9.77 70.36A15.73 15.73 0 0 0 0 84.92v6.29c0 8.18 8.12 13.86 15.81 11.07Z"
                                    style={{
                                        fill: "url(#linear-gradient-9)",
                                        strokeWidth: 0,
                                    }}
                                />
                                <path
                                    id="path28"
                                    d="M0 84.91c0-6.39 3.86-12.14 9.77-14.56l90.08-36.89c5.45-2.23 11.43 1.78 11.43 7.67v24.09c0 1.4-.82 2.66-2.1 3.23V52.5c0-5.89-5.98-9.9-11.43-7.67L0 84.91Z"
                                    style={{
                                        fill: "url(#linear-gradient-10)",
                                        mixBlendMode: "overlay",
                                        opacity: 0.7,
                                        strokeWidth: 0,
                                    }}
                                />
                            </g>
                        </g>
                        <g id="g32">
                            <path
                                id="path29"
                                d="m198.92 6.09-55.04 162.53a20.329 20.329 0 0 1-19.25 13.81h-9.05c-3.15 0-5.38-3.1-4.37-6.08l54.98-162.53A20.325 20.325 0 0 1 185.44 0h9.11c3.15 0 5.38 3.1 4.37 6.09Z"
                                style={{
                                    fill: "url(#linear-gradient-11)",
                                    strokeWidth: 0,
                                }}
                            />
                            <path
                                id="path30"
                                d="m198.92 6.09-55.04 162.53a20.329 20.329 0 0 1-19.25 13.81h-9.05c-3.15 0-5.38-3.1-4.37-6.08l54.98-162.53A20.325 20.325 0 0 1 185.44 0h9.11c3.15 0 5.38 3.1 4.37 6.09Z"
                                style={{
                                    opacity: 0.83,
                                    fill: "url(#linear-gradient-12)",
                                    mixBlendMode: "multiply",
                                    strokeWidth: 0,
                                }}
                            />
                            <path
                                id="path31"
                                d="m166.19 13.82-54.97 162.53c-1.01 2.99 1.21 6.08 4.37 6.08h8.16L185.44 0a20.32 20.32 0 0 0-19.25 13.81Z"
                                style={{
                                    fill: "url(#linear-gradient-13)",
                                    strokeWidth: 0,
                                }}
                            />
                            <path
                                id="path32"
                                d="M190.22 6.09h8.7C199.93 3.1 197.71 0 194.55 0h-9.12c-8.72 0-16.46 5.56-19.26 13.82l-54.96 162.53c-1.01 2.99 1.21 6.08 4.37 6.08h.42L170.97 19.9a20.328 20.328 0 0 1 19.26-13.82Z"
                                style={{
                                    mixBlendMode: "overlay",
                                    opacity: 0.7,
                                    fill: "url(#linear-gradient-14)",
                                    strokeWidth: 0,
                                }}
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )

}
