import { useState } from "react";
import { cadastrarUsuario } from "../../services/cadastro";

function CadastroForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: ""
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);

    if (form.senha !== form.confirmarSenha) {
      setMsg("As senhas não coincidem!");
      return;
    }
    setLoading(true);
    try {
      await cadastrarUsuario({
        name: form.nome,
        email: form.email,
        password: form.senha,
      });
      setMsg("Usuário cadastrado com sucesso! ✅");
      setForm({ nome: "", email: "", senha: "", confirmarSenha: "" });
    } catch (err: any) {
      setMsg(err.message || "Erro ao cadastrar usuário");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        name="nome"
        type="text"
        placeholder="Nome completo"
        value={form.nome}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9b793]"
        required
      />
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
        name="senha"
        type="password"
        placeholder="Senha"
        value={form.senha}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9b793]"
        required
      />
      <input
        name="confirmarSenha"
        type="password"
        placeholder="Confirmar senha"
        value={form.confirmarSenha}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9b793]"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className={`bg-[#FA8232] text-white font-semibold py-2 rounded-md hover:bg-[#e67329] transition-all text-base ${loading && "opacity-70 cursor-not-allowed"}`}
      >
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>
      {msg && (
        <div className={`text-sm text-center mt-2 ${msg.includes('sucesso') ? "text-green-600" : "text-red-600"}`}>
          {msg}
        </div>
      )}
    </form>
  );
}

export default CadastroForm;