"use client";
import PropTypes from "prop-types";
import React, { JSX } from "react";
import { useReducer } from "react";


interface Props {
    property1: "variant-2" | "default";
}

export const Med = ({ property1 }: Props): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`w-[75px] h-[18px] ${state.property1 === "default" ? "relative" : ""}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            <div
                className={`${state.property1 === "default" ? "[font-family:'Inter-Bold',Helvetica]" : ""} ${state.property1 === "variant-2" ? "w-20" : ""} ${state.property1 === "variant-2" ? "-left-0.5" : "left-0"} ${state.property1 === "default" ? "tracking-[0]" : ""} ${state.property1 === "default" ? "text-[15px]" : ""} ${state.property1 === "variant-2" ? "-top-0.5" : "-top-px"} ${state.property1 === "default" ? "text-white" : ""} ${state.property1 === "variant-2" ? "h-[21px]" : ""} ${state.property1 === "default" ? "font-bold" : ""} ${state.property1 === "default" ? "leading-[normal]" : ""} ${state.property1 === "default" ? "whitespace-nowrap" : ""} ${state.property1 === "variant-2" ? "rounded-[3px]" : ""} ${state.property1 === "variant-2" ? "bg-white" : ""} ${state.property1 === "variant-2" ? "relative" : "absolute"}`}
            >
                {state.property1 === "default" && <>MEDICINE</>}

                {state.property1 === "variant-2" && (
                    <div className="absolute top-px left-0.5 [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        MEDICINE
                    </div>
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

Med.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
};
