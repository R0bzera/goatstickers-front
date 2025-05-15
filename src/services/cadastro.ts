const API_BASE_URL = "http://localhost:8080";

export async function cadastrarUsuario(data: {
  name: string;
  email: string;
  password: string;
}) {
  const resp = await fetch(`${API_BASE_URL}/users/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!resp.ok) {
    const errData = await resp.json();
    throw new Error(errData.message || "Erro ao cadastrar usuário");
  }

  return resp.json();
}