/**
 * Stripe publishable keys (pk_test_… / pk_live_…) are meant for browser use.
 * They only tokenize card details with Stripe — they cannot charge cards or
 * access your account. Never put the secret key (sk_…) in client code.
 */
export const stripePublishableKey =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "";

export const paymentsUnavailableMessage =
  "Online payments are temporarily unavailable. Please try again later.";

export const paymentFailedMessage =
  "We couldn't process your payment. Please check your card details and try again.";

/** Log the real error for debugging, keep the UI message user-friendly. */
export function logPaymentError(context: string, error: unknown) {
  if (process.env.NODE_ENV !== "production") {
    console.error(`[payment] ${context}`, error);
  }
}
