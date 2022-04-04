import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678912);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Ricardo", 5000, 12345678998);
gerente.cadastrarSenha("123")

const cliente = new Cliente("Lais", 78945612332, "456")
const gerenteEstalogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");


const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456")

console.log(gerenteEstalogado, diretorEstaLogado, clienteEstaLogado);