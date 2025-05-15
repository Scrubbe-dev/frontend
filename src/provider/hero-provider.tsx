'use client'

import {ReactNode} from 'react'
import {HeroUIProvider} from "@heroui/react";

export function HeroProvider({children}:{children:ReactNode}){
    return(
    <HeroUIProvider>
         {children}
    </HeroUIProvider>
    )
}