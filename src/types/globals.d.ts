export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: "admin" | "administrador" | "recepcionista" | "secretaria";
    };
  }
}
