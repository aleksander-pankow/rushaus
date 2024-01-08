// app/providers.jsx
"use client";

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

interface ProvidersProps {
    children: ReactNode; // Specify children prop type as ReactNode
}

export function Providers({ children }: ProvidersProps) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
