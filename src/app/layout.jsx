import "./globals.css";
import localFont from "next/font/local";

const robotoMono = localFont({
    src: [
        {
            path: "../../public/fonts/RobotoMono-Medium.ttf",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-roboto-mono",
    display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={robotoMono.variable}>
        {children}
      </body>
    </html>
  );
}
