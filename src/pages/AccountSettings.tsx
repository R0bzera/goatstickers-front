import React, { useState } from "react";
import Header from "../components/layout/header";
import avatarUrl from "../assets/imgs/avatar.png";

export default function AccountSettings() {
  const [account, setAccount] = useState({
    displayName: "Kevin",
    username: "",
    fullName: "Kevin Gilbert",
    email: "kevin.gilbert@gmail.com",
    secondaryEmail: "kevin12345@gmail.com",
    phone: "+1-202-555-0118",
    country: "Bangladesh",
    state: "Dhaka",
    zip: "1207",
  });
  const [billing, setBilling] = useState({
    firstName: "Kevin",
    lastName: "Gilbert",
    company: "",
    address: "Road No. 13/x, House no. 1320/C, Flat No. 5D",
    country: "Bangladesh",
    region: "",
    city: "Dhaka",
    zip: "1207",
    email: "kevin12345@gmail.com",
    phone: "+1-202-555-0118",
  });
  const [shipping, setShipping] = useState({ ...billing });

  const handleAccountChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setAccount({ ...account, [e.target.name]: e.target.value });
  const handleBillingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setBilling({ ...billing, [e.target.name]: e.target.value });
  const handleShippingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setShipping({ ...shipping, [e.target.name]: e.target.value });

  const saveAccount = () => {
    console.log("Salvar conta", account);
  };
  const saveBilling = () => {
    console.log("Salvar cobrança", billing);
  };
  const saveShipping = () => {
    console.log("Salvar entrega", shipping);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-10">
        <section>
          <h2 className="text-xl font-semibold text-[#151B3F] mb-6">
            Configurações da conta
          </h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-shrink-0">
              <img
                src={avatarUrl}
                alt="Avatar"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium mb-1">Nome de exibição</span>
                <input
                  name="displayName"
                  value={account.displayName}
                  onChange={handleAccountChange}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-sm font-medium mb-1">Nome de usuário</span>
                <input
                  name="username"
                  placeholder="Nome de usuário"
                  value={account.username}
                  onChange={handleAccountChange}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium mb-1">Nome completo</span>
                <input
                  name="fullName"
                  value={account.fullName}
                  onChange={handleAccountChange}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-sm font-medium mb-1">Email</span>
                <input
                  name="email"
                  value={account.email}
                  onChange={handleAccountChange}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium mb-1">Email secundário</span>
                <input
                  name="secondaryEmail"
                  value={account.secondaryEmail}
                  onChange={handleAccountChange}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-sm font-medium mb-1">Número de telefone</span>
                <input
                  name="phone"
                  value={account.phone}
                  onChange={handleAccountChange}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium mb-1">País/Região</span>
                <select
                  name="country"
                  value={account.country}
                  onChange={handleAccountChange}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                >
                  <option>Bangladesh</option>
                  <option>USA</option>
                  <option>Brazil</option>
                </select>
              </label>
              <div className="flex gap-2">
                <label className="flex-1 flex flex-col">
                  <span className="text-sm font-medium mb-1">Estado</span>
                  <select
                    name="state"
                    value={account.state}
                    onChange={handleAccountChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                  >
                    <option>Dhaka</option>
                    <option>Chittagong</option>
                  </select>
                </label>
                <label className="flex-1 flex flex-col">
                  <span className="text-sm font-medium mb-1">CEP</span>
                  <input
                    name="zip"
                    value={account.zip}
                    onChange={handleAccountChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                  />
                </label>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="border border-[#E4E7E9] rounded-md p-6">
                <h3 className="text-lg font-semibold text-[#151B3F] mb-4">
                ENDEREÇO DE COBRANÇA
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex flex-col">
                        <span className="text-sm font-medium mb-1">Primeiro nome</span>
                        <input
                        name="firstName"
                        value={billing.firstName}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-sm font-medium mb-1">Último nome</span>
                        <input
                        name="lastName"
                        value={billing.lastName}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        />
                    </label>

                    <label className="flex flex-col md:col-span-2">
                        <span className="text-sm font-medium mb-1">Nome da empresa (Opcional)</span>
                        <input
                        name="company"
                        value={billing.company}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        />
                    </label>

                    <label className="flex flex-col md:col-span-2">
                        <span className="text-sm font-medium mb-1">Endereço</span>
                        <input
                        name="address"
                        value={billing.address}
                        onChange={handleBillingChange}
                        className="border border-gray-300rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-sm font-medium mb-1">País</span>
                        <select
                        name="country"
                        value={billing.country}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        >
                        <option>Bangladesh</option>
                        <option>USA</option>
                        <option>Brazil</option>
                        </select>
                    </label>
                    <label className="flex flex-col">
                        <span className="text-sm font-medium mb-1">Estado</span>
                        <select
                        name="region"
                        value={billing.region}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        >
                        <option>Selecione...</option>
                        <option>Dhaka</option>
                        </select>
                    </label>

                    <label className="flex flex-col">
                        <span className="text-sm font-medium mb-1">Cidade</span>
                        <select
                        name="city"
                        value={billing.city}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        >
                        <option>Dhaka</option>
                        </select>
                    </label>
                    <label className="flex flex-col">
                        <span className="text-sm font-medium mb-1">CEP</span>
                        <input
                        name="zip"
                        value={billing.zip}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        />
                    </label>

                    <label className="flex flex-col md:col-span-2">
                        <span className="text-sm font-medium mb-1">Email</span>
                        <input
                        name="email"
                        value={billing.email}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        />
                    </label>
                    <label className="flex flex-col md:col-span-2">
                        <span className="text-sm font-medium mb-1">Número de Telefone</span>
                        <input
                        name="phone"
                        value={billing.phone}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        />
                    </label>
                </div>
                <button
                    onClick={saveBilling}
                    className="mt-6 bg-[#FA8232] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#e67329] transition"
                >
                    Salvar alterações
                </button>
            </section>

             <section className="border border-[#E4E7E9] rounded-md p-6">
                <h3 className="text-lg font-semibold text-[#151B3F] mb-4">
                ENDEREÇO DE ENTREGA
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex flex-col">
                        <span className="text-sm font-medium mb-1">Primeiro nome</span>
                        <input
                        name="firstName"
                        value={billing.firstName}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-sm font-medium mb-1">Último nome</span>
                        <input
                        name="lastName"
                        value={billing.lastName}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        />
                    </label>

                    <label className="flex flex-col md:col-span-2">
                        <span className="text-sm font-medium mb-1">Nome da empresa (Opcional)</span>
                        <input
                        name="company"
                        value={billing.company}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        />
                    </label>

                    <label className="flex flex-col md:col-span-2">
                        <span className="text-sm font-medium mb-1">Endereço</span>
                        <input
                        name="address"
                        value={billing.address}
                        onChange={handleBillingChange}
                        className="border border-gray-300rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-sm font-medium mb-1">País</span>
                        <select
                        name="country"
                        value={billing.country}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        >
                        <option>Bangladesh</option>
                        <option>USA</option>
                        <option>Brazil</option>
                        </select>
                    </label>
                    <label className="flex flex-col">
                        <span className="text-sm font-medium mb-1">Estado</span>
                        <select
                        name="region"
                        value={billing.region}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        >
                        <option>Selecione...</option>
                        <option>Dhaka</option>
                        </select>
                    </label>

                    <label className="flex flex-col">
                        <span className="text-sm font-medium mb-1">Cidade</span>
                        <select
                        name="city"
                        value={billing.city}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        >
                        <option>Dhaka</option>
                        </select>
                    </label>
                    <label className="flex flex-col">
                        <span className="text-sm font-medium mb-1">CEP</span>
                        <input
                        name="zip"
                        value={billing.zip}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        />
                    </label>

                    <label className="flex flex-col md:col-span-2">
                        <span className="text-sm font-medium mb-1">Email</span>
                        <input
                        name="email"
                        value={billing.email}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        />
                    </label>
                    <label className="flex flex-col md:col-span-2">
                        <span className="text-sm font-medium mb-1">Número de Telefone</span>
                        <input
                        name="phone"
                        value={billing.phone}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]"
                        />
                    </label>
                </div>
                <button
                    onClick={saveBilling}
                    className="mt-6 bg-[#FA8232] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#e67329] transition"
                >
                    Salvar alterações
                </button>
            </section>
        </div>
      </div>
    </>
  );
}