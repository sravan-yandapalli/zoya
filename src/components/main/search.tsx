"use client";
import PropTypes from "prop-types";
import React, { JSX } from "react";
import { useReducer } from "react";

interface Props {
    property1: "variant-2" | "default";
    className: any;
}

export const Group = ({ property1 }: Props): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`border border-solid w-[105px] h-[43px] rounded-[10px] relative ${state.property1 === "variant-2" ? "border-[#6d6e71]" : "border-white"} ${state.property1 === "variant-2" ? "bg-[#fff9f9]" : "bg-[#aa93e3]"}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            <div
                className={`[font-family:'Inter-Bold',Helvetica] left-7 tracking-[0] text-[15px] top-2.5 font-bold leading-[normal] whitespace-nowrap absolute ${state.property1 === "variant-2" ? "text-[#6d6e71]" : "text-white"}`}
            >
                LOGIN
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

Group.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
};
