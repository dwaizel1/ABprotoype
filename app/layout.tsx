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
  var KEY = "ab-intro";
  try {
    if (location.pathname !== "/") return;
    if (sessionStorage.getItem(KEY) === "1") return;
    sessionStorage.setItem(KEY, "1");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  } catch (e) {
    return;
  }
  var BOX_W = "min(320px, calc(100vw - 140px))";
  var css = document.createElement("style");
  css.textContent = [
    "#ab-intro{position:fixed;inset:0;z-index:2147483646;display:flex;align-items:center;justify-content:center;background:#04173c;pointer-events:none;animation:abi-fade .35s ease 2.9s forwards;}",
    "#ab-intro .row{display:flex;align-items:center;}",
    "#ab-intro .tile-wrap{display:flex;justify-content:flex-end;width:64px;margin-right:0;overflow:hidden;animation:abi-gap .6s cubic-bezier(.65,0,.35,1) .65s forwards,abi-tile-out .45s cubic-bezier(.65,0,.35,1) 1.55s forwards;}",
    "#ab-intro .tile{position:relative;display:flex;flex:0 0 64px;align-items:center;justify-content:center;width:64px;height:64px;overflow:hidden;border-radius:14px;clip-path:inset(0 round 14px);background:#fecd07;animation:abi-tile-in .38s cubic-bezier(.22,1,.36,1) both;}",
    "#ab-intro .tile::after{content:'';position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.6) 50%,transparent 70%);transform:translateX(-120%);animation:abi-shine .7s ease .78s forwards;}",
    "#ab-intro .mark{position:relative;width:38px;height:23px;}",
    "#ab-intro .mark img{position:absolute;inset:0;width:100%;height:100%;max-width:none;}",
    "#ab-intro .mark .a{transform:translateY(190%);animation:abi-settle .5s cubic-bezier(.22,1,.36,1) .26s forwards;}",
    "#ab-intro .mark .b{transform:translateY(-190%);animation:abi-settle .5s cubic-bezier(.22,1,.36,1) .38s forwards;}",
    "#ab-intro .bar{position:absolute;left:0;bottom:0;width:100%;height:3px;background:#fecd07;transform:scaleX(0);transform-origin:left;animation:abi-load 1.1s cubic-bezier(.65,0,.35,1) .85s forwards,abi-hide .25s ease 2.15s forwards;}",
    "#ab-intro .box{position:relative;display:flex;align-items:center;justify-content:center;flex:0 0 auto;width:0;height:64px;overflow:hidden;border:2px solid transparent;border-radius:12px;animation:abi-grow .6s cubic-bezier(.65,0,.35,1) .65s forwards,abi-expand .75s cubic-bezier(.76,0,.24,1) 2.15s forwards;}",
    "#ab-intro .fill{position:absolute;top:50%;left:50%;width:100vw;height:100vh;transform:translate(-50%,-50%);opacity:0;animation:abi-show .3s ease 1.95s forwards;}",
    "#ab-intro .fill img{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover;object-position:center;}",
    "#ab-intro .fill::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.75),rgba(0,0,0,.3),rgba(0,0,0,.4));}",
    "#ab-intro .word-wrap{position:absolute;top:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;width:calc(" + BOX_W + " - 4px);animation:abi-recenter .75s cubic-bezier(.76,0,.24,1) 2.15s forwards;}",
    "#ab-intro .word{display:flex;overflow:hidden;white-space:nowrap;color:#fff;font-family:var(--font-alfabet),sans-serif;font-weight:500;font-size:clamp(14px,4vw,20px);letter-spacing:.08em;line-height:1.2;animation:abi-hide .3s ease 2.55s forwards;}",
    "#ab-intro .word span{display:inline-block;transform:translateY(110%);animation:abi-rise .45s cubic-bezier(.22,1,.36,1) forwards;}",
    "@keyframes abi-tile-in{from{transform:scale(.12);border-radius:50%;clip-path:inset(0 round 32px);}to{transform:scale(1);border-radius:14px;clip-path:inset(0 round 14px);}}",
    "@keyframes abi-grow{from{width:0;border-color:rgba(255,255,255,0);}to{width:" + BOX_W + ";border-color:#fff;}}",
    "@keyframes abi-settle{to{transform:translateY(0);}}",
    "@keyframes abi-shine{to{transform:translateX(120%);}}",
    "@keyframes abi-load{to{transform:scaleX(1);}}",
    "@keyframes abi-gap{from{margin-right:0;}to{margin-right:12px;}}",
    "@keyframes abi-rise{to{transform:translateY(0);}}",
    "@keyframes abi-tile-out{from{width:64px;margin-right:12px;}to{width:0;margin-right:0;}}",
    "@keyframes abi-show{to{opacity:1;}}",
    "@keyframes abi-recenter{to{left:calc(50vw - " + BOX_W + " / 2);}}",
    "@keyframes abi-hide{to{opacity:0;}}",
    "@keyframes abi-expand{from{width:" + BOX_W + ";height:64px;border-radius:12px;border-color:#fff;}to{width:100vw;height:100vh;border-radius:0;border-color:transparent;}}",
    "@keyframes abi-fade{to{opacity:0;}}"
  ].join("");
  document.head.appendChild(css);

  var letters = "ANDERSON BURTON".split("").map(function (ch, i) {
    var delay = (0.76 + i * 0.032).toFixed(3);
    return '<span style="animation-delay:' + delay + 's">' + (ch === " " ? "&nbsp;" : ch) + "</span>";
  }).join("");

  var root = document.createElement("div");
  root.id = "ab-intro";
  root.setAttribute("aria-hidden", "true");
  root.innerHTML =
    '<div class="row">' +
      '<div class="tile-wrap"><div class="tile"><div class="mark">' +
        '<img class="a" src="/images/ab-mark-a.png" alt="">' +
        '<img class="b" src="/images/ab-mark-b.png" alt="">' +
      "</div></div></div>" +
      '<div class="box">' +
        '<div class="fill"><img src="/images/home/hero.jpg" alt=""></div>' +
        '<div class="word-wrap"><div class="word">' + letters + "</div></div>" +
        '<div class="bar"></div>' +
      "</div>" +
    "</div>";
  (document.body || document.documentElement).appendChild(root);

  window.setTimeout(function () {
    root.remove();
    css.remove();
  }, 3300);
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
