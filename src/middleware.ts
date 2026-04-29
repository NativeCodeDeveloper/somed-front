import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { isSecretariaAllowedPath, isSecretariaRole } from "./lib/dashboardAccess";

export default clerkMiddleware(async (auth, req) => {
    const {userId, sessionClaims} = await auth();

    if (!userId) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    const role = sessionClaims?.metadata?.role;
    const pathname = req.nextUrl.pathname;

    if (isSecretariaRole(role) && !isSecretariaAllowedPath(pathname)) {
        return NextResponse.redirect(new URL("/dashboard/no-access", req.url));
    }

    return NextResponse.next();
});

export const config = {
    matcher: ["/dashboard/:path*"],
};
