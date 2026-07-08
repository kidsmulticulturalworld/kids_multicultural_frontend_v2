export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        height: "100vh",
        maxHeight: "100dvh",
        overscrollBehavior: "none",
        overflow: "auto",
      }}
    >
      {children}
    </div>
  );
}
