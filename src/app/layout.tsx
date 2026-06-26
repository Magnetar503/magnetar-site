import React from "react";
import {Viewport} from "next";

import "@/styles/tailwind.css"
import "@/styles/style.css"


export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: true,
}

export default function Layout({children}: React.PropsWithChildren) {
    return children
}
