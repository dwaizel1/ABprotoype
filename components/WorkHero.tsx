export function WorkHero() {
  return (
    <section className="relative flex h-[min(640px,72svh)] min-h-[420px] flex-col overflow-hidden bg-black">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/home/service-4.jpg"
        alt="Aerial view of a substation under construction"
        className="cover-media"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black from-15% via-black/75 to-transparent" />

      <div className="page-pad relative z-10 mt-auto pb-8 md:pb-10">
        <h1
          className="font-[family-name:var(--font-display)] font-normal text-white"
          style={{
            fontSize: "clamp(44px, 6.4vw, 92px)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          Projects
          <br />
          We&rsquo;ve Built
        </h1>
      </div>
    </section>
  );
}
