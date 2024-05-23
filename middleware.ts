import { NextResponse } from "next/server";

import { withInternationalisation } from "@/lib/middleware/withInternatianalisation";

export function defaultMiddleware() {
  return NextResponse.next();
}
export default withInternationalisation(defaultMiddleware);
