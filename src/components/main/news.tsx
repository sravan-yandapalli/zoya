import PropTypes from "prop-types";
import React, { JSX } from "react";
import { useReducer } from "react";

interface Props {
    property1: "variant-2" | "default";
}

export const News = ({ property1 }: Props): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`w-[46px] h-[18px] ${state.property1 === "variant-2" ? "shadow-[0px_4px_4px_#00000040]" : ""} ${state.property1 === "variant-2" ? "bg-black" : ""} ${state.property1 === "default" ? "relative" : ""}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            <div
                className={`-top-px ${state.property1 === "default" ? "[font-family:'Inter-Bold',Helvetica]" : ""} ${state.property1 === "variant-2" ? "w-[50px]" : ""} ${state.property1 === "variant-2" ? "-left-0.5" : "left-0"} ${state.property1 === "default" ? "tracking-[0]" : ""} ${state.property1 === "default" ? "text-[15px]" : ""} ${state.property1 === "default" ? "text-white" : ""} ${state.property1 === "variant-2" ? "h-5" : ""} ${state.property1 === "default" ? "font-bold" : ""} ${state.property1 === "default" ? "leading-[normal]" : ""} ${state.property1 === "default" ? "whitespace-nowrap" : ""} ${state.property1 === "variant-2" ? "relative" : "absolute"}`}
            >
                {state.property1 === "default" && <>NEWS</>}

                {state.property1 === "variant-2" && (
                    <>
                        <div className="absolute w-[50px] h-[19px] top-px left-0 bg-white rounded-[3px]" />

                        <div className="absolute top-0 left-0.5 [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                            NEWS
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

interface State {
    property1: "variant-2" | "default";
}

type Action = "mouse_enter" | "mouse_leave";

function reducer(state: State, action: Action): State {
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

News.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
};
