import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevHive | Consultora y Fábrica de Software",
  description:
    "Landing page comercial de DevHive: consultoría, desarrollo de software a medida y transformación digital para empresas.",
  metadataBase: new URL("https://devhive.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
