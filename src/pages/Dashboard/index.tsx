import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit"> Pesquisar </button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/26815672?s=460&u=4523985fe51eda4eebc170221cb99aa0ae713c8a&v=4"
            alt="Vagner"
          />
          <div>
            <strong>vagnerwentz/github-explorer</strong>
            <p>Easy way to find repositories.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/26815672?s=460&u=4523985fe51eda4eebc170221cb99aa0ae713c8a&v=4"
            alt="Vagner"
          />
          <div>
            <strong>vagnerwentz/github-explorer</strong>
            <p>Easy way to find repositories.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/26815672?s=460&u=4523985fe51eda4eebc170221cb99aa0ae713c8a&v=4"
            alt="Vagner"
          />
          <div>
            <strong>vagnerwentz/github-explorer</strong>
            <p>Easy way to find repositories.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
