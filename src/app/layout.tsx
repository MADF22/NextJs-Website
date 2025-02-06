import { Poppins } from "next/font/google";
import Provider from "./provider";

const poppins = Poppins({
  weight: ["400", "700"], // Memuat varian regular dan bold
  subsets: ["latin-ext"], // Jika Anda membutuhkan karakter tambahan
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={poppins.className} suppressHydrationWarning>
      <head />
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
