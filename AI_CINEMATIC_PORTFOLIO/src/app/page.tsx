import SceneClient from "./SceneClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Page() {
  return (
    <main style={{ height: "500vh", background: "black" }}>
      <SceneClient />
    </main>
  );
}
