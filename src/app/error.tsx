"use client"

import { useEffect } from 'react';
import Link from 'next/link';

import {cn, getLangFromCookies, setFluidTextSizeStyle} from "@/utils";


export default function Error({error, reset}: { error: Error & { digest?: string }; reset: () => void; }) {
    useEffect(() => {
        console.error("App Error:", error);
    }, [error]);

    return (
        <html lang="ru">
            <body className={"p-2.5 flex items-center justify-center"}>
                <div className={cn(
                    "flex flex-col justify-center items-center w-max p-10",
                    "border border-[#282828] rounded-[var(--border-15)] bg-[#141414]"
                )}>
                    <h2 className={"fluid-text"} style={setFluidTextSizeStyle(80, 60)}>
                        500
                    </h2>
                    <p className={"fluid-text mb-6"} style={setFluidTextSizeStyle(30, 18)}>
                        Произошла неизвестная ошибка
                    </p>
                    <div className={"flex flex-wrap gap-1.5"}>
                        <button
                            className={"button px-5 py-2"}
                            onClick={reset}
                            data-btn-style={"white-bg"}
                            title={"Попробовать исправить проблему"}
                        >
                            Попробовать снова
                        </button>
                        <Link
                            href={`/${getLangFromCookies()}/home`}
                            className={"button px-5 py-2"}
                            data-btn-style={"white-bg"}
                            title={"Вернуться на главную"}
                        >
                            На главную
                        </Link>
                    </div>
                </div>
            </body>
        </html>
    )
}