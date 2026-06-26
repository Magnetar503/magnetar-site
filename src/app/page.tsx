"use client"

import {useEffect} from "react"
import {useRouter} from "next/navigation"

import {getLangFromCookies} from "@/utils";


export default function RootPage() {
    const router = useRouter()

    useEffect(() => {
        const lang = getLangFromCookies()
        router.replace(`/${lang}/home`)
    }, [router])

    return null
}
