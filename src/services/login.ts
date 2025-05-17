const API_BASE_URL = "http://localhost:8080";

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

  return resp.json();
}