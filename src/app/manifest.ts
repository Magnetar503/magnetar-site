import type { MetadataRoute } from "next";

import {LINK_START} from "@/const";


export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Magnetar Dev",
        short_name: "Magnetar",
        description: "Портфолио и услуги разработки - Magnetar",
        start_url: `/${LINK_START}/`,
        display: "standalone",
        background_color: "#0c0c0c",
        theme_color: "#f1f1f1",
        orientation: "portrait-primary",
        icons: [
            {
                src: `/${LINK_START}/img/avatar192.png`,
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: `/${LINK_START}/img/avatar512.png`,
                sizes: "512x512",
                type: "image/png",
            },
        ]
    }
}