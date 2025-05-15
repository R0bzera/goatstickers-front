import { useState } from "react";
import { autenticarUsuario } from "../../services/login";

function LoginForms({ onSuccess }: { onSuccess?: () => void }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    setLoading(true);
    try {
      const data = await autenticarUsuario(form);
      if (data.token) {
        localStorage.setItem("token", data.token);
        setMsg("Login realizado com sucesso!");
        if (onSuccess) onSuccess();
      } else {
        setMsg("Login realizado, mas token não recebido.");
      }
    } catch (err: any) {
      setMsg(err.message || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9b793]"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Senha"
        value={form.password}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9b793]"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className={`bg-[#FA8232] text-white font-semibold py-2 rounded-md hover:bg-[#e67329] transition-all text-sm ${loading && "opacity-70 cursor-not-allowed"}`}
      >
        {loading ? "Entrando..." : "Entrar na conta"}
      </button>
      {msg && (
        <div className={`text-xs text-center mt-2 ${msg.includes('sucesso') ? "text-green-600" : "text-red-600"}`}>
          {msg}
        </div>
      )}
    </form>
  );
}

export default LoginForms;