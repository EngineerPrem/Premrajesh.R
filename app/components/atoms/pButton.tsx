"use client";

import React from "react";
import clsx from "clsx";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export const PButton = ({
    children,
    className,
    onClick,
    type = "button",
}: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx(
                "px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition",
                className
            )}
        >
            {children}
        </button>
    );
};
