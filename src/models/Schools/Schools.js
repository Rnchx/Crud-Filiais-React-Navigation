class SchoolsList {
  constructor() {
    this.schools = [];
  }

  createSchools(school) {
    this.schools.push(school);
  }

  getAllSchools(data) {
    const { nome } = data;

    if (nome) {
      return this.getSchoolByName(nome);
    }

    return this.schools;
  }

  getSchoolByName(nome) {
    if (nome) {
      nome = nome.toLowerCase();
    }

    const schoolFilter = this.schools.filter((school) => {
      const schoolName = nome == undefined || school.nome.toLowerCase().includes(nome);

      return schoolName;
    })

    return schoolFilter;
  }

  getSchoolById(id) {
    return this.schools.find((school) => school.id == id);
  }

  UpdateSchool(nome, fundacao, corPrimaria, corSecundaria, qntdFuncionarios, qntddAlunos, qntddTurmas, bairro, cidade, cep, telefone, email, nomeDoResponsavel, cargoDoResponsavel) {

    const school = this.getSchoolById(id);

    if (school) {
      school.nome = nome;
      school.fundacao = fundacao;
      school.corPrimaria = corPrimaria;
      school.corSecundaria = corSecundaria;
      school.qntdFuncionarios = qntdFuncionarios;
      school.qntddAlunos = qntddAlunos;
      school.qntddTurmas = qntddTurmas;
      school.bairro = bairro;
      school.cidade = cidade;
      school.cep = cep;
      school.telefone = telefone;
      school.email = email;
      school.nomeDoResponsavel = nomeDoResponsavel;
      school.cargoDoResponsavel = cargoDoResponsavel;
    }

    return school;
  }

  deleteSchool(id) {
    return this.schools = this.schools.filter((school) => school.id !== id);
  }
}

export default SchoolsList;