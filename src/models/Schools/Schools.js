import { mockedSchools } from "../../data/branchs/data";
import School from "./School";

class SchoolsList {
  constructor() {
    this.schools = [];
  }

  getAll() {
    return this.schools;
  }

  get(id) {
    return this.schools.find((school) => school.id == id);
  }

  add(school) {
    this.schools.push(school);
  }

  delete(id) {
    this.schools = this.schools.filter((school) => school.id !== id);
  }

  Update(id, nome, fundacao, corPrimaria, corSecundaria, qntdFuncionarios, qntddAlunos, qntddTurmas, bairro, cidade, cep, telefone, email, nomeDoResponsavel, cargoDoResponsavel) {

    const school = this.get(id);

    if (school) {
      school.id = id;
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
}

const schoolsRepository = new SchoolsList();
mockedSchools.map((school) => {
  const newSchool = new School(school.nome, school.fundacao, school.corPrimaria, school.corSecundaria,
    school.qntdFuncionarios, school.qntddAlunos, school.qntddTurmas, school.bairro, school.cidade,
    school.cep, school.telefone, school.email, school.nomeDoResponsavel, school.cargoDoResponsavel || 0);

  schoolsRepository.add(newSchool);
})
export default schoolsRepository;