import React from "react";
import Button from "./Button";


const Cadastro = () => {
    return (
      <div id="cadastrar">
        <br />
        
      <div className="Cadastro flex flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow ">
        <div className="divDeCadastro w-full h-full">
          <h1 className="flex text-white justify-center opacity-75">Cadastrar</h1>
          <div>
            <input
              className="loginInputEmail flex w-full h-8 m-2 rounded-[20px] pl-2 opacity-75 "
              type="text"
              placeholder="Digite seu Email"
            />
          </div>
  
          <div>
            <input
              className="loginInputSenha flex w-full h-8 m-2 rounded-[20px] pl-2 opacity-75"
              type="password"
              placeholder="Digite sua senha"
            />
          </div>
          <div>
            <input
              className="loginInputSenhaConfirmacao flex w-full h-8 m-2 rounded-[20px] pl-2 opacity-75"
              type="password"
              placeholder="Confirme sua senha"
            />
          </div>
          <div className="BotaoTelaCadastro flex w-full h-full m-2 rounded-[20px] justify-center opacity-75 ">
          <Button title={"Cadastrar"} className ="  " />
          </div>
          
        </div>
        
      </div>
      </div>
    );
  };
  
  export default Cadastro;