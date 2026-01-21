'use client';

export const dynamic = "force-dynamic";

import dynamicImport from "next/dynamic";

const Scene = dynamicImport(() => import("./Scene"), { ssr: false });

export default function Home() {
  return (
    <main style={{ height: '500vh', background: 'black' }}>
      <Scene />
      <a
        href="/Nithish_Kondapaka_Resume.pdf"
        download
        style={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          padding: '12px 18px',
          borderRadius: 8,
          background: '#00eaff',
          color: 'black',
          fontWeight: 600,
          textDecoration: 'none',
          zIndex: 20
        }}
      >
        Download Resume
      </a>
    </main>
  );
}
