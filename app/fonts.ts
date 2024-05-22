import { Cookie, Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const cookie = Cookie({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});
