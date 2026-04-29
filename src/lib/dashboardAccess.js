const SECRETARIA_ALLOWED_EXACT_PATHS = new Set([
    "/dashboard",
    "/dashboard/no-access",
    "/dashboard/bloqueosAgenda",
    "/dashboard/calendario",
    "/dashboard/agendaCitas",
    "/dashboard/GestionPaciente",
    "/dashboard/listaPacientes",
    "/dashboard/calendarioGeneral",
]);

const SECRETARIA_ALLOWED_PREFIXES = [
    "/dashboard/AgendaDetalle/",
];

export function normalizeDashboardRole(role = "") {
    const normalizedRole = String(role)
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    if (normalizedRole === "admin" || normalizedRole === "administrador") {
        return "administrador";
    }

    if (normalizedRole === "recepcionista" || normalizedRole === "secretaria") {
        return "secretaria";
    }

    return normalizedRole;
}

export function extractDashboardRole(source = {}) {
    const role =
        source?.role ??
        source?.metadata?.role ??
        source?.publicMetadata?.role ??
        source?.public_metadata?.role ??
        source?.unsafeMetadata?.role ??
        source?.unsafe_metadata?.role ??
        "";

    return normalizeDashboardRole(role);
}

export function isSecretariaRole(role = "") {
    return normalizeDashboardRole(role) === "secretaria";
}

export function isSecretariaAllowedPath(pathname = "") {
    if (SECRETARIA_ALLOWED_EXACT_PATHS.has(pathname)) {
        return true;
    }

    return SECRETARIA_ALLOWED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}
