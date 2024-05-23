import { NextResponse } from "next/server";

import { withInternationalisation } from "@/lib/middleware/withInternatianalisation";

export function defaultMiddleware() {
  return NextResponse.next();
}
export default withInternationalisation(defaultMiddleware);

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
