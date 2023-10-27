"use client"
import { CookiesProvider } from 'react-cookie';

export function CookieProvider({children}) {
    return(
        <CookiesProvider defaultSetOptions={{ path: '/' }}>
            {children}
        </CookiesProvider>
    )
};