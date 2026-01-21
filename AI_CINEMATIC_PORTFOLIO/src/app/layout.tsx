export const metadata = {
  title: "Nithish Kondapaka | AI Cinematic Portfolio",
  description: "Cinematic AI/ML portfolio experience"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "black",
          overflowX: "hidden"
        }}
      >
        {children}
      </body>
    </html>
  );
}
