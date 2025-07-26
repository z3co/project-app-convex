import type React from "react";
import { ThemeProvider } from "~/components/theme-provider";

import "~/styles/globals.css"
import ConvexClientProvider from "./convex-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Management Dashboard",
  description:
    "A dashboard for managing projects, todos, links, files, and notes.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background min-h-screen font-sans antialiased">
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
