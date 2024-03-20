export default class School {
  constructor(nome, fundacao, corPrimaria, corSecundaria, qntdFuncionarios, qntddAlunos, qntddTurmas, bairro, cidade, cep, telefone, email, nomeDoResponsavel, cargoDoResponsavel) {

    this.nome = nome,
      this.id = this.generateId(),
      this.fundacao = fundacao,
      this.corPrimaria = corPrimaria,
      this.corSecundaria = corSecundaria,
      this.qntdFuncionarios = qntdFuncionarios,
      this.qntddAlunos = qntddAlunos,
      this.qntddTurmas = qntddTurmas,
      this.bairro = bairro,
      this.cidade = cidade,
      this.cep = cep,
      this.telefone = telefone,
      this.email = email,
      this.nomeDoResponsavel = nomeDoResponsavel,
      this.cargoDoResponsavel = cargoDoResponsavel

  }

  generateId() {
    return Math.floor(Math.random() * 1000)
  }
}