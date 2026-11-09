import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { LoginForm } from "@/components/auth/LoginForm";
import { safeNext } from "@/lib/me";
import { getMe } from "@/lib/session";

export const metadata: Metadata = { title: "Sign in — Miracle" };

export default async function LoginPage({ searchParams }: PageProps<"/login">) {
  const next = safeNext((await searchParams).next);
  if (await getMe()) redirect(next);

  return (
    <div className="relative min-h-screen bg-[#000000] text-white">
      <header className="relative mx-auto flex h-20 max-w-page items-center px-4 sm:px-6 border-b border-[#2A2A2A]">
        <Logo href="/login" size="lg" />
      </header>

      <main className="relative mx-auto grid max-w-page items-center gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[minmax(0,440px)_1fr] lg:gap-16 lg:pt-16">
        <section className="card p-6 sm:p-8 bg-[#121212] border border-[#2A2A2A]">
          <h1 className="text-2xl font-bold tracking-tight text-white">Sign In to Miracle</h1>
          <p className="mt-1.5 text-xs text-[#AAAAAA]">
            Full-Stack AI Lead Generation & Google Ecosystem Automation.
          </p>
          <LoginForm next={next} devHint={process.env.NODE_ENV !== "production"} />
        </section>

        <aside className="hidden lg:block space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-white text-xs font-semibold uppercase tracking-wider">
            <span>Automated Lead Hunter & Outreach Suite</span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white leading-tight">
            Autonomous Google Lead Pipeline. <br />
            <span className="text-[#888888]">Scrape. Qualify. Hook. Book.</span>
          </h2>
          <p className="text-sm text-[#AAAAAA] leading-relaxed max-w-md">
            Direct Google Account integration controls YouTube, Google Sheets, Gmail, and Google Meet Calendar with automated AI scoring and 1-line personalized hooks.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2 max-w-md text-xs">
            <div className="p-4 rounded-xl bg-[#121212] border border-[#2A2A2A] space-y-1">
              <div className="font-semibold text-white">YouTube & Maps Engine</div>
              <p className="text-[#777777]">Ban-free stealth browser discovery and deep email extraction.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#121212] border border-[#2A2A2A] space-y-1">
              <div className="font-semibold text-white">Google Sheet & Meet</div>
              <p className="text-[#777777]">Auto-syncs score &gt;= 7 leads and sends Google Calendar invitations.</p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
