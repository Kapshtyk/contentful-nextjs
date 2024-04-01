import { draftMode } from "next/headers";

// eslint-disable-next-line @typescript-eslint/require-await
export function GET(_request: Request) {
  draftMode().disable();
  return new Response("Draft mode is disabled");
}
