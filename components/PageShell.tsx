import Link from "next/link";
import { SiteHeader } from "./SiteHeader";

type PageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

export function PageShell({ eyebrow, title, intro, children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-museum-paper px-5 pb-16 pt-28 text-museum-ink sm:px-8 sm:pt-32">
      <SiteHeader />
      <section className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 border-y border-museum-line py-8 sm:grid-cols-[0.55fr_1fr] sm:py-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-museum-muted">
            {eyebrow}
          </p>
          <div>
            <h1 className="font-display text-[clamp(2.8rem,8vw,7.4rem)] font-medium leading-[0.88] tracking-[-0.01em]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-museum-muted sm:text-base">
              {intro}
            </p>
          </div>
        </div>
        {children}
        <Link
          href="/"
          className="mt-14 inline-flex border-b border-museum-ink pb-1 text-[11px] font-bold uppercase tracking-[0.18em] transition hover:text-museum-muted"
        >
          返回展厅
        </Link>
      </section>
    </main>
  );
}
