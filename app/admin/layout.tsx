import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEF YÖNETİCİ",
  description: "MEF Hair Designer yönetim paneli",
  manifest: "/admin-manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "MEF YÖNETİCİ",
    statusBarStyle: "black-translucent",
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}