export class BranchsList {
  constructor() {
    this.branchs = [];
  }

  createBranchs(branch) {
    this.branchs.push(branch);
  }

  getAllBranchs(data) {
    const { nome } = data;

    if (nome) {
      return this.getBranchByName(nome);
    }

    return this.branchs;
  }

  getBranchByName(nome) {
    if (nome) {
      nome = nome.toLowerCase();
    }

    const branchFilter = this.branchs.filter((branch) => {
      const branchName = nome == undefined || branch.nome.toLowerCase().includes(nome);

      return branchName;
    })

    return branchFilter;
  }

  getBranchById(id) {
    return this.branchs.find((branch) => branch.id == id);
  }

  UpdateBranch(nome, fundacao, corPrimaria, corSecundaria, qntdFuncionarios, qntddAlunos, qntddTurmas, bairro, cidade, cep, telefone, email, nomeDoResponsavel, cargoDoResponsavel) {

    const branch = this.getBranchById(id);

    if (branch) {
      branch.nome = nome;
      branch.fundacao = fundacao;
      branch.corPrimaria = corPrimaria;
      branch.corSecundaria = corSecundaria;
      branch.qntdFuncionarios = qntdFuncionarios;
      branch.qntddAlunos = qntddAlunos;
      branch.qntddTurmas = qntddTurmas;
      branch.bairro = bairro;
      branch.cidade = cidade;
      branch.cep = cep;
      branch.telefone = telefone;
      branch.email = email;
      branch.nomeDoResponsavel = nomeDoResponsavel;
      branch.cargoDoResponsavel = cargoDoResponsavel;
    }

    return branch;
  }

  deleteBranch(id) {
    return this.branchs = this.branchs.filter((branch) => branch.id !== id);
  }
}