import Link from "next/link";
import { SiteHeader } from "./SiteHeader";

type PageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
  centeredHeader?: boolean;
};

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
  centeredHeader = false
}: PageShellProps) {
  return (
    <main className="min-h-screen bg-museum-paper px-5 pb-16 pt-28 text-museum-ink sm:px-8 sm:pt-32">
      <SiteHeader />
      <section className="mx-auto max-w-6xl">
        <div
          className={`mb-12 grid gap-8 border-y border-museum-line py-10 sm:py-12 ${
            centeredHeader
              ? "justify-items-center text-center"
              : "sm:grid-cols-[0.55fr_1fr]"
          }`}
        >
          {eyebrow ? (
            <p
              className={`text-ui-label uppercase text-museum-muted ${
                centeredHeader ? "text-center" : ""
              }`}
            >
              {eyebrow}
            </p>
          ) : null}
          <div className={centeredHeader ? "mx-auto" : ""}>
            <h1 className="text-page-title">
              {title}
            </h1>
            <p
              className={`mt-6 max-w-2xl text-muted-copy ${
                centeredHeader ? "mx-auto" : ""
              }`}
            >
              {intro}
            </p>
          </div>
        </div>
        {children}
        <Link
          href="/"
          className="mt-14 inline-flex border border-museum-ink px-4 py-2 text-ui-label uppercase transition hover:bg-museum-ink hover:text-museum-paper"
        >
          返回展厅
        </Link>
      </section>
    </main>
  );
}
