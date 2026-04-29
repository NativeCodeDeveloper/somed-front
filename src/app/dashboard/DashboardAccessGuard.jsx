"use client";

import {useEffect} from "react";
import {usePathname, useRouter} from "next/navigation";
import {useUser} from "@clerk/nextjs";
import {extractDashboardRole, isSecretariaAllowedPath, isSecretariaRole} from "@/lib/dashboardAccess";

export default function DashboardAccessGuard() {
    const router = useRouter();
    const pathname = usePathname();
    const {isLoaded, user} = useUser();
    const role = extractDashboardRole(user);

    useEffect(() => {
        if (!isLoaded) return;
        if (!isSecretariaRole(role)) return;
        if (isSecretariaAllowedPath(pathname)) return;

        router.replace("/dashboard/no-access");
    }, [isLoaded, pathname, role, router]);

    return null;
}
