"use client";

import { env } from "~/env";
import { ConvexReactClient, ConvexProvider } from "convex/react";
import type { ReactNode } from "react";

const convex = new ConvexReactClient(env.NEXT_PUBLIC_CONVEX_URL);

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <ConvexProvider client={convex}> {children} </ConvexProvider>;
}
