import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Jain — Student, Developer & Maker",
  description:
    "Aditya Jain is a student, developer and maker based in Dubai, building projects across software, robotics, 3D printing, engineering and motorsport.",
  keywords: [
    "Aditya Jain",
    "Aditya Jain Dubai",
    "developer",
    "maker",
    "3D printing",
    "robotics",
    "F1",
    "engineering",
    "aviation",
  ],
  authors: [{ name: "Aditya Jain" }],
  creator: "Aditya Jain",
  openGraph: {
    title: "Aditya Jain — Student, Developer & Maker",
    description:
      "Building ideas into things that work — software, hardware, 3D printing, robotics and motorsport.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}