"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

type ContactDrawerContextValue = {
  open: boolean;
  openContact: () => void;
  closeContact: () => void;
};

type Audience = "partners" | "careers" | "investor";

type FieldDef = {
  key: string;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  options?: string[];
  required?: boolean;
  span?: 1 | 2;
};

const audienceOptions: {
  id: Audience;
  label: string;
  description: string;
  headline: string;
  mailto: string;
  subjectPrefix: string;
  fields: FieldDef[];
}[] = [
  {
    id: "partners",
    label: "Contractors & Vendors",
    description: "Trade partners, GCs, suppliers, and manufacturers",
    headline: "Let's talk partnership.",
    mailto: "sales@andersonburton.com",
    subjectPrefix: "Contractor & vendor inquiry",
    fields: [
      { key: "name", label: "Full name", placeholder: "Your name", required: true },
      {
        key: "email",
        label: "Email",
        type: "email",
        placeholder: "you@company.com",
        required: true,
      },
      { key: "phone", label: "Phone", type: "tel", placeholder: "805 555 0100" },
      {
        key: "company",
        label: "Company",
        placeholder: "Company name",
        required: true,
      },
      {
        key: "kind",
        label: "I am a",
        type: "select",
        options: ["Contractor", "Vendor"],
        required: true,
      },
      {
        key: "specialty",
        label: "Trade, specialty, or product",
        placeholder: "Electrical, concrete, steel, equipment…",
        required: true,
      },
      {
        key: "regions",
        label: "Regions you cover",
        placeholder: "Central Coast, statewide, national…",
        required: true,
      },
      {
        key: "license",
        label: "License number",
        placeholder: "CSLB or equivalent",
      },
      {
        key: "message",
        label: "How would you like to work together?",
        type: "textarea",
        placeholder: "Capabilities, products, recent projects, availability…",
        required: true,
        span: 2,
      },
    ],
  },
  {
    id: "careers",
    label: "Applying to a job",
    description: "Open roles, apprenticeships, or general interest",
    headline: "Join the people who own the work.",
    mailto: "sales@andersonburton.com",
    subjectPrefix: "Careers inquiry",
    fields: [
      { key: "name", label: "Full name", placeholder: "Your name", required: true },
      {
        key: "email",
        label: "Email",
        type: "email",
        placeholder: "you@email.com",
        required: true,
      },
      { key: "phone", label: "Phone", type: "tel", placeholder: "805 555-0100" },
      {
        key: "role",
        label: "Role you're interested in",
        type: "select",
        options: [
          "Project Manager",
          "Superintendent",
          "Estimator",
          "Field / Trade",
          "Office / Admin",
          "Internship / Apprenticeship",
          "Other / General interest",
        ],
        required: true,
      },
      {
        key: "experience",
        label: "Years of experience",
        type: "select",
        options: ["0–2", "3–5", "6–10", "10+", "Student / early career"],
        required: true,
      },
      {
        key: "location",
        label: "Preferred location",
        placeholder: "Arroyo Grande, remote-friendly…",
        required: true,
      },
      {
        key: "linkedin",
        label: "LinkedIn or portfolio",
        placeholder: "https://…",
        span: 2,
      },
      {
        key: "message",
        label: "Why Anderson Burton?",
        type: "textarea",
        placeholder: "Background, availability, and what you're looking for…",
        required: true,
        span: 2,
      },
    ],
  },
  {
    id: "investor",
    label: "Investor",
    description: "Capital, partnership, or ownership conversations",
    headline: "Let's discuss opportunity.",
    mailto: "sales@andersonburton.com",
    subjectPrefix: "Investor inquiry",
    fields: [
      { key: "name", label: "Full name", placeholder: "Your name", required: true },
      {
        key: "email",
        label: "Email",
        type: "email",
        placeholder: "you@firm.com",
        required: true,
      },
      { key: "phone", label: "Phone", type: "tel", placeholder: "805 555-0100" },
      {
        key: "organization",
        label: "Organization / firm",
        placeholder: "Firm or fund name",
        required: true,
      },
      {
        key: "interest",
        label: "Type of interest",
        type: "select",
        options: [
          "Equity / ownership",
          "Strategic partnership",
          "Project-level capital",
          "General introduction",
        ],
        required: true,
      },
      {
        key: "timeline",
        label: "Timeline",
        type: "select",
        options: [
          "Exploring / no rush",
          "Next 3 months",
          "Next 6–12 months",
          "Ready to talk now",
        ],
        required: true,
      },
      {
        key: "message",
        label: "What should we know?",
        type: "textarea",
        placeholder: "Goals, thesis, or how you'd like to engage…",
        required: true,
        span: 2,
      },
    ],
  },
];

const ContactDrawerContext = createContext<ContactDrawerContextValue | null>(
  null,
);

export function useContactDrawer() {
  const ctx = useContext(ContactDrawerContext);
  if (!ctx) {
    throw new Error("useContactDrawer must be used within ContactProvider");
  }
  return ctx;
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openContact = useCallback(() => setOpen(true), []);
  const closeContact = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash === "#contact") {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <ContactDrawerContext.Provider value={{ open, openContact, closeContact }}>
      {children}
      <ContactDrawer />
    </ContactDrawerContext.Provider>
  );
}

const fieldClassName =
  "w-full rounded-none border-0 border-b border-white/25 bg-transparent px-0 text-[16px] text-white outline-none transition-[border-color] placeholder:text-white/35 focus:border-[var(--color-yellow)]";

function ContactDrawer() {
  const { open, closeContact } = useContactDrawer();
  const titleId = useId();
  const [audience, setAudience] = useState<Audience>("partners");
  const [values, setValues] = useState<Record<string, string>>({});

  const selected = useMemo(
    () => audienceOptions.find((o) => o.id === audience) ?? null,
    [audience],
  );

  const selectAudience = (id: Audience) => {
    setAudience(id);
    setValues({});
  };

  const setValue = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    if (!open) return;
    setAudience("partners");
    setValues({});
  }, [open]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selected) return;

    const lines = selected.fields.map((field) => {
      const answer = values[field.key]?.trim() || "—";
      return `${field.label}: ${answer}`;
    });

    const subject = encodeURIComponent(
      `${selected.subjectPrefix} — ${values.name || "website"}`,
    );
    const body = encodeURIComponent(
      `Audience: ${selected.label}\n\n${lines.join("\n")}`,
    );
    window.location.href = `mailto:${selected.mailto}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className={`fixed inset-0 z-[100] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close contact panel"
        className={`absolute inset-0 bg-[var(--color-dark-blue)]/55 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeContact}
        tabIndex={open ? 0 : -1}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        inert={!open ? true : undefined}
        className={`absolute inset-y-0 left-0 flex w-[75%] flex-col bg-[var(--color-dark-blue)] text-white shadow-[24px_0_60px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-10 lg:px-14">
          <p className="type-eyebrow text-[var(--color-yellow)]">Contact</p>
          <button
            type="button"
            onClick={closeContact}
            className="btn flex size-11 items-center justify-center rounded-full border border-white/25 text-[18px] transition-colors hover:bg-white/10"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto px-6 py-8 md:px-10 md:py-10 lg:px-14 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-20">
            <div>
              <h2
                id={titleId}
                className="font-[family-name:var(--font-display)] text-[clamp(34px,4.2vw,56px)] leading-[1.02] tracking-[-0.03em]"
              >
                {selected ? selected.headline : "Who are you reaching out as?"}
              </h2>
              <p className="mt-4 max-w-[420px] text-[15px] leading-[1.65] text-white/70 md:text-[16px]">
                {selected
                  ? "Answer a few questions and we’ll route your note to the right team."
                  : "Choose one so we can ask the right questions before you send."}
              </p>

              <div
                className="mt-8 flex flex-col gap-3"
                role="radiogroup"
                aria-label="I am contacting as"
              >
                {audienceOptions.map((option) => {
                  const active = audience === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => selectAudience(option.id)}
                      className={`btn rounded-[16px] border px-5 py-4 text-left transition ${
                        active
                          ? "border-[var(--color-yellow)] bg-[var(--color-yellow)]/10"
                          : "border-white/20 hover:border-white/45 hover:bg-white/5"
                      }`}
                    >
                      <span className="block text-[16px] font-medium md:text-[17px]">
                        {option.label}
                      </span>
                      <span className="mt-1 block text-[13px] leading-[1.45] text-white/60">
                        {option.description}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 border-t border-white/10 pt-8 lg:mt-14">
                <p className="text-[13px] font-semibold tracking-[0.08em] uppercase">
                  Anderson Burton
                </p>
                <p className="mt-2 text-[14px] leading-[1.6] text-white/70">
                  121 Nevada St, Arroyo Grande, CA
                  <br />
                  <a
                    href="tel:8054815096"
                    className="transition-opacity hover:opacity-70"
                  >
                    805 481 5096
                  </a>
                  {" · "}
                  <a
                    href="mailto:sales@andersonburton.com"
                    className="transition-opacity hover:opacity-70"
                  >
                    sales@andersonburton.com
                  </a>
                </p>
              </div>
            </div>

            <div className="min-h-[280px]">
              {!selected ? (
                <div className="flex h-full min-h-[280px] items-center rounded-[20px] border border-dashed border-white/20 px-8 py-12 text-[15px] leading-[1.6] text-white/50 lg:px-10">
                  Choose an option to load the matching questions.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col">
                  <p className="type-eyebrow text-white/45">
                    {selected.label} details
                  </p>
                  <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    {selected.fields.map((field) => {
                      const spanClass =
                        field.span === 2 || field.type === "textarea"
                          ? "sm:col-span-2"
                          : "";
                      const value = values[field.key] ?? "";

                      return (
                        <label
                          key={field.key}
                          className={`flex flex-col gap-2 ${spanClass}`}
                        >
                          <span className="text-[12px] font-medium tracking-[0.06em] uppercase text-white/55">
                            {field.label}
                            {field.required ? "" : " (optional)"}
                          </span>
                          {field.type === "textarea" ? (
                            <textarea
                              name={field.key}
                              value={value}
                              onChange={(e) =>
                                setValue(field.key, e.target.value)
                              }
                              required={field.required}
                              rows={4}
                              className={`${fieldClassName} resize-none py-3`}
                              placeholder={field.placeholder}
                            />
                          ) : field.type === "select" ? (
                            <select
                              name={field.key}
                              value={value}
                              onChange={(e) =>
                                setValue(field.key, e.target.value)
                              }
                              required={field.required}
                              className={`${fieldClassName} h-12 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%278%27 fill=%27none%27%3E%3Cpath d=%27M1 1.5 6 6.5 11 1.5%27 stroke=%27%23ffffff99%27 stroke-width=%271.5%27/%3E%3C/svg%3E')] bg-[length:12px_8px] bg-[right_0_center] bg-no-repeat pr-6`}
                            >
                              <option value="" disabled>
                                Select…
                              </option>
                              {field.options?.map((option) => (
                                <option
                                  key={option}
                                  value={option}
                                  className="bg-[var(--color-dark-blue)] text-white"
                                >
                                  {option}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type={field.type ?? "text"}
                              name={field.key}
                              value={value}
                              onChange={(e) =>
                                setValue(field.key, e.target.value)
                              }
                              required={field.required}
                              className={`${fieldClassName} h-12`}
                              placeholder={field.placeholder}
                            />
                          )}
                        </label>
                      );
                    })}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-yellow mt-10 inline-flex h-[52px] w-fit items-center rounded-full px-8 text-[15px] font-medium"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
