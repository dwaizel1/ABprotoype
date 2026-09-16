export const CUYAMA_PHOTO = "/images/home/service-2.jpg";

export function PhotoCredit({ src }: { src: string }) {
  if (src !== CUYAMA_PHOTO) return null;

  return (
    <span className="pointer-events-none absolute bottom-2.5 left-2.5 z-10 max-w-[calc(100%-1.25rem)] rounded-[4px] bg-black/45 px-2 py-1 text-[10px] leading-[1.3] font-medium tracking-[0.01em] text-white/95">
      Photo courtesy of RRM Design Group
    </span>
  );
}
