import { FloresLoginPage } from "@/components/flores-login-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login",
  description: "Secure login portal for Flores247 benefits account. Access your FSA, HSA, or HRA account to view balances, file claims, and manage your benefits online.",
  keywords: [
    "Flores247 login",
    "benefits portal login",
    "FSA account login",
    "HSA account login",
    "HRA account login",
    "employee benefits login",
    "participant login",
    "employer login",
    "benefits management",
    "file claims online"
  ],
  openGraph: {
    title: "Flores247 - Login to Your Benefits Account",
    description: "Secure login portal for Flores247 benefits account. Access your FSA, HSA, or HRA account to view balances, file claims, and manage your benefits online.",
    type: "website",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
}

export default function Page() {
  return (
    <>
      {/* SEO Info Section - hidden from users, visible to crawlers */}
      <section className="seo-info-section" aria-hidden="true" style={{ display: 'none' }}>
        <h1>Flores247 Client Login</h1>
        <h2>Manage Your Employee Benefits Account</h2>
        <p>
          Flores247 provides secure access to your employee benefits portal. Manage your Flexible Spending Account (FSA), Health Savings Account (HSA), Health Reimbursement Arrangement (HRA), and COBRA benefits. View your account balance, file claims, submit documentation, and explore your benefits online through the Flores & Associates benefits platform.
        </p>
        <div>
          <article>
            <h3>FSA - Flexible Spending Account</h3>
            <p>Manage your Flexible Spending Account, submit eligible medical and dependent care expenses, and track your reimbursements through the Flores247 portal.</p>
          </article>
          <article>
            <h3>HSA - Health Savings Account</h3>
            <p>Access your Health Savings Account, check your balance, view eligible expenses, and manage your healthcare savings through Flores247.</p>
          </article>
          <article>
            <h3>HRA - Health Reimbursement Arrangement</h3>
            <p>Manage your Health Reimbursement Arrangement, submit claims for qualified medical expenses, and track your reimbursements online.</p>
          </article>
          <article>
            <h3>COBRA Continuation Coverage</h3>
            <p>Access your COBRA benefits, make premium payments, and manage your continuation coverage through the Flores247 portal.</p>
          </article>
        </div>
      </section>
      <FloresLoginPage />
    </>
  )
}