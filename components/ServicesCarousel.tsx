import { PhotoCredit } from "@/components/PhotoCredit";

export type ServiceCard = {
  title: string;
  desc: string;
  image: string;
  label: string;
};

type ServicesCarouselProps = {
  services: ServiceCard[];
};

export function ServicesCarousel({ services }: ServicesCarouselProps) {
  return (
    <section className="page-pad pb-20 md:pb-28">
      <h2 className="type-h2 mb-8 capitalize text-[var(--color-dark-blue)] md:mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((s) => (
          <div key={s.title} className="service-card group min-w-0">
            <div className="frame relative aspect-square overflow-hidden rounded-[21px] bg-[#a66161]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt=""
                className="transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-dark-blue)]/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <span className="absolute left-5 top-6 z-10 max-w-[calc(100%-2.5rem)] rounded-[14px] bg-white/60 px-5 py-2.5 text-[11px] font-semibold leading-snug tracking-tight text-[var(--color-dark-blue)] backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:bg-white/80 md:px-7 md:py-3">
                {s.label}
              </span>
              <PhotoCredit src={s.image} />
            </div>
            <h3 className="mt-6 text-[clamp(28px,2.5vw,38px)] leading-[1] tracking-[-1.14px] text-[var(--color-dark-blue)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
              {s.title}
            </h3>
            <p className="mt-3.5 text-[14px] leading-[22px] text-[var(--color-dark-blue)] transition-opacity duration-500 group-hover:opacity-80">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
