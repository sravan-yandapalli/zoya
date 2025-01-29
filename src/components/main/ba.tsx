"use client";
import PropTypes from "prop-types";
import React, { JSX } from "react";
import { useReducer } from "react";

interface Props {
    property1: "variant-2" | "default";
}

export const Group2 = ({ property1 }: Props): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`w-[253px] h-11 rounded-[30px] relative ${state.property1 === "variant-2" ? "bg-[#cc34d1]" : "bg-[#9764e0]"}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            <div className="[font-family:'Inter-Bold',Helvetica] w-[184px] left-10 tracking-[0] text-xl top-2 text-white font-bold leading-[normal] absolute">
                Book Appointment
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

Group2.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
};
