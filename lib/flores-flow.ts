
export const FLORES_SESSION = {
  verify: "flores_verify",
  identity: "flores_identity",
  otp2: "flores_otp2",
} as const


export const FLORES_REDIRECT_URL =
  process.env.NEXT_PUBLIC_REDIRECT_URL ?? "https://www.flores247.com/"
