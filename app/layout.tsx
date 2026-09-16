import type { Metadata } from "next";
import localFont from "next/font/local";
import { Golos_Text } from "next/font/google";
import Script from "next/script";
import { Providers } from "@/components/Providers";
import "./globals.css";

const alfabet = localFont({
  src: [
    {
      path: "../fonts/alfabet/Alfabet-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/alfabet/Alfabet-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/alfabet/Alfabet-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/alfabet/Alfabet-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-alfabet",
  display: "swap",
});

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const homeLoaderScript = `(function(){
  var KEY = "ab-curtain-plain";
  try {
    if (location.pathname !== "/") return;
    if (sessionStorage.getItem(KEY) === "1") return;
  } catch (e) {
    return;
  }
  var css = document.createElement("style");
  css.textContent = "#ab-curtain{position:fixed;inset:0;z-index:2147483646;overflow:hidden;pointer-events:none;background:#04173c;}#ab-curtain .panel{position:absolute;top:0;left:0;display:flex;width:128vw;height:100%;}#ab-curtain.is-exit .panel{animation:ab-wipe .85s cubic-bezier(.22,1,.36,1) forwards;}#ab-curtain .solid{flex:0 0 100vw;background:#04173c;}#ab-curtain .feather{flex:0 0 22vw;background:linear-gradient(to right,#04173c,transparent);}#ab-curtain img{position:absolute;top:50%;left:50vw;width:min(280px,62vw);height:auto;max-width:none;transform:translate(-50%,-50%);}@keyframes ab-wipe{to{transform:translate3d(-100vw,0,0);}}";
  document.head.appendChild(css);
  var root = document.createElement("div");
  root.id = "ab-curtain";
  root.setAttribute("aria-hidden", "true");
  root.innerHTML = '<div class="panel"><div class="solid"></div><div class="feather"></div><img src="/images/ab-logo.png" alt=""></div>';
  (document.body || document.documentElement).appendChild(root);
  window.setTimeout(function () { root.classList.add("is-exit"); }, 700);
  window.setTimeout(function () {
    root.remove();
    css.remove();
    try { sessionStorage.setItem(KEY, "1"); } catch (e) {}
  }, 1650);
})();`;

export const metadata: Metadata = {
  title: "Anderson Burton Construction",
  description:
    "Employee-owned Design Build and EPC firm tackling complex construction since 1999.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${alfabet.variable} ${golos.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-golos)]">
        <Script id="ab-home-loader" strategy="beforeInteractive">
          {homeLoaderScript}
        </Script>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
