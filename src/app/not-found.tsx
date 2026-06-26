"use client"

import Link from "next/link";

import {cn, getLangFromCookies, setFluidTextSizeStyle} from "@/utils";


export default function NotFound() {
    return (
        <html lang="ru">
            <body className={"p-2.5 flex items-center justify-center"}>
                <div className={cn(
                    "flex flex-col justify-center items-center w-max p-10",
                    "border border-[#282828] rounded-[var(--border-15)] bg-[#141414]"
                )}>
                    <h2 className={"fluid-text"} style={setFluidTextSizeStyle(80, 60)}>
                        404
                    </h2>
                    <p className={"fluid-text mb-6"} style={setFluidTextSizeStyle(30, 18)}>
                        Страница не найдена
                    </p>
                    <Link
                        href={`/${getLangFromCookies()}/home`}
                        className={"button px-5 py-2"}
                        data-btn-style={"white-bg"}
                        title={"Вернуться на главную"}
                    >
                        На главную
                    </Link>
                </div>
            </body>
        </html>
    )
}
