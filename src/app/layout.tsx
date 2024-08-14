import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "@/domain/presentation/styles/main.scss"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
