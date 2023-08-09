import React from "react"

export default function Loading() {
    return (
        <svg
            id="tp-logo-sun"
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            version="1.1"
            viewBox="-200 -200 400 400"
            preserveAspectRatio="xMidYMid"
        >
            <path
                d="M100,0 A100 100 0 1 1 0 -100"
                stroke="#f90"
                stroke-width="6"
                fill="none"
                stroke-dasharray="300 1000"
                stroke-dashoffset="0"
                stroke-linecap="round"
            >
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    from="0 0 0"
                    to="360 0 0"
                    dur=".83s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="stroke-dashoffset"
                    values="0;280;0"
                    dur="1.1s"
                    repeatCount="indefinite"
                />
            </path>
        </svg>
    )
}
