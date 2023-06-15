import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";

export default class EditarDataDeNascimento extends Processo {
  private cliente: Cliente;

  constructor(cliente: Cliente) {
    super();
    this.cliente = cliente;
  }
  processar() {
    let dataDeNascimento = this.entrada.receberData("Digite a nova data: ");
    this.cliente.DataNascimento = dataDeNascimento;
  }
}
