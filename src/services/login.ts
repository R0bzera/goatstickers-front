// src/services/api.ts
const API_BASE_URL = "http://localhost:8080"; // Ajuste se necessário

export async function autenticarUsuario(data: {
  email: string;
  password: string;
}) {
  const resp = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!resp.ok) {
    const errData = await resp.json().catch(() => ({}));
    throw new Error(errData.message || "Erro ao fazer login");
  }

  return resp.json(); // Espera-se que o backend retorne JWT/token ou dados do usuário
}