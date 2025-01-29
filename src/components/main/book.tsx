"use client";
import PropTypes from "prop-types";
import { JSX } from "react";
import React from "react";
import { useReducer } from "react";

interface Props {
    property1: "variant-2" | "default";
    className: any;
}

export const Group1 = ({ property1, className }: Props): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`w-[133px] h-12 rounded-[10px] relative ${state.property1 === "variant-2" ? "bg-[#fe8917fa]" : "bg-[#fad563]"} ${className}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            <div
                className={`[font-family:'Inter-Bold',Helvetica] left-[21px] tracking-[0] text-base top-[13px] font-bold leading-[normal] whitespace-nowrap absolute ${state.property1 === "variant-2" ? "text-black" : "text-white"}`}
            >
                BOOK NOW
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

Group1.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
};
