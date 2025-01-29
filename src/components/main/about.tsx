'use client';
import PropTypes from "prop-types";
import React, { JSX } from "react";
import { useReducer } from "react";

interface Props {
    property1: "variant-2" | "default";
    className: any;
}

export const About = ({ property1, className }: Props): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`h-[18px] ${state.property1 === "variant-2" ? "w-14" : "w-[54px]"} ${state.property1 === "variant-2" ? "bg-black" : ""} ${state.property1 === "default" ? "relative" : ""} ${className}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            <div
                className={`-top-px ${state.property1 === "default" ? "[font-family:'Inter-Bold',Helvetica]" : ""} ${state.property1 === "variant-2" ? "w-[59px]" : ""} ${state.property1 === "variant-2" ? "left-[-3px]" : "left-0"} ${state.property1 === "default" ? "tracking-[0]" : ""} ${state.property1 === "default" ? "text-[15px]" : ""} ${state.property1 === "default" ? "text-white" : ""} ${state.property1 === "variant-2" ? "h-[19px]" : ""} ${state.property1 === "default" ? "font-bold" : ""} ${state.property1 === "default" ? "leading-[normal]" : ""} ${state.property1 === "default" ? "whitespace-nowrap" : ""} ${state.property1 === "variant-2" ? "relative" : "absolute"}`}
            >
                {state.property1 === "default" && <>ABOUT</>}

                {state.property1 === "variant-2" && (
                    <>
                        <div className="absolute w-[59px] h-[18px] top-px left-0 bg-[#d9d9d9] rounded-[3px]" />

                        <div className="absolute w-14 top-0 left-[3px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                            ABOUT
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

function reducer(state: any, action: any) {
    switch (action) {
        case "mouse_enter":
            return {
                ...state,
                property1: "variant-2",
            };

        case "mouse_leave":
            return {
                ...state,
                property1: "default",
            };
    }

    return state;
}

About.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
};
