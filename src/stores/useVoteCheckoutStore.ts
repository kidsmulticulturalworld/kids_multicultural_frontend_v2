import { create } from "zustand";
import { persist } from "zustand/middleware";

export type VoteCheckoutInfo = {
  value: number;
  id_: string;
  contestant_name: string;
  total_price: number;
  price_per_vote: number;
};

type VoteCheckoutState = {
  checkout: VoteCheckoutInfo | null;
  receipt: Record<string, unknown> | null;
  setCheckout: (info: VoteCheckoutInfo) => void;
  setReceipt: (receipt: Record<string, unknown> | null) => void;
  clear: () => void;
};

export const useVoteCheckoutStore = create<VoteCheckoutState>()(
  persist(
    (set) => ({
      checkout: null,
      receipt: null,
      setCheckout: (checkout) => set({ checkout }),
      setReceipt: (receipt) => set({ receipt }),
      clear: () => set({ checkout: null, receipt: null }),
    }),
    { name: "vote-checkout" }
  )
);
