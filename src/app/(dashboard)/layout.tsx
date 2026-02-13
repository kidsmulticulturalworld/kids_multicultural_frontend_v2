export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Dashboard navigation will go here */}
      {children}
    </div>
  );
}
