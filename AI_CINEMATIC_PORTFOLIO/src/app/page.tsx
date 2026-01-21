'use client';

export const dynamic = "force-dynamic";
export const revalidate = 0;

import dynamicImport from "next/dynamic";

const Scene = dynamicImport(() => import("./Scene"), { ssr: false });
