Landing Page GIP
Este projeto é a implementação da landing page do GIP – Gestão do Investimento Público do Piauí, desenvolvida como um teste de vaga para Front-end.

Pré-requisitos
Certifique-se de ter o Node.js (versão 18.x ou superior) e o npm (ou Yarn) instalados em sua máquina.

Instalação
1 - Clone o repositório para sua máquina local:
  git clone [URL_DO_SEU_REPOSITORIO]

2- Navegue até o diretório do projeto:
  cd nome-do-seu-projeto

3 - Instale as dependências:
 npm install

  ou

  yarn

Rodando o Projeto
Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

npm run dev

ou

yarn dev

A aplicação estará disponível em http://localhost:3000.

Tecnologias
Next.js: Framework para React, utilizado para renderização do lado do servidor (SSR) e roteamento, garantindo uma aplicação rápida e otimizada.

Mantine UI: Biblioteca de componentes React que acelera o desenvolvimento com um sistema de design robusto e personalizável.

Tailwind CSS v4: Framework CSS que permite construir designs complexos e responsivos de forma rápida, usando classes utilitárias.

TypeScript: Linguagem de programação que adiciona tipagem estática, tornando o código mais seguro e escalável.

Estrutura do Projeto
O projeto segue uma arquitetura modular baseada em componentes, garantindo código limpo e reutilizável.

/src/app: Contém a lógica de roteamento do Next.js. O layout.tsx centraliza os provedores de tema e o cabeçalho, enquanto o page.tsx gerencia a composição das seções da página.

/src/components: Contém todos os componentes reutilizáveis, como o cabeçalho (Header), a barra de cores (ColorBar), e as seções da página (Hero, About, Timeline, Governance).

/src/components/TimelineItem: Componente específico para cada etapa da linha do tempo, evitando repetição de código.

/src/theme.ts: Arquivo que centraliza a definição do tema do Mantine, incluindo cores, tipografia e espaçamentos, conforme o guia de estilo.

Responsividade
Em processo de adaptação dos breakpoints definidos no guia de estilo.

Mobile (xs, sm): Layout em uma única coluna com espaçamentos otimizados para telas menores.

Desktop (md, lg, xl): Layout de duas colunas em seções como "O que é o GIP?" e "Governância", com ajustes de tamanho de fonte e espaçamento para uma melhor experiência em telas maiores.

Considerações Finais
O projeto foi um desafio interessante, principalmente por combinar Next.js, Mantine e a nova versão do Tailwind. O processo de modularização e a atenção aos detalhes do guia de estilo foram cruciais para a implementação. Apesar do tempo limitado, atrelado ao fato de estar incompleto, estou confiante de que o resultado até aqui demonstra minha capacidade de aprender e aplicar novas tecnologias de forma eficiente.
