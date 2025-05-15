import CadastroForm from '../components/forms/CadastroForms';

function Cadastro() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f9f9f9] px-4">
      <div className="bg-white rounded-md shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-[#151B3F] mb-6 text-center">Criar Conta</h1>
        <CadastroForm />
      </div>
    </div>
  );
}

export default Cadastro;