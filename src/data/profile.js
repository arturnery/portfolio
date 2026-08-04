/*
  Dados pessoais e links de contato — edite aqui.
  Usados no Hero, Header, Contato e Footer.
*/

export const profile = {
  name: 'Artur Matoso Nery',
  email: 'arturnery1997@gmail.com',

  // Foto de perfil exibida no canto superior esquerdo (no lugar das iniciais).
  // Coloque o arquivo em public/images/ e aponte o caminho aqui.
  // Se o arquivo não existir, o cabeçalho mostra as iniciais automaticamente.
  avatar: '/images/profile.png', // foto em public/images/profile.png

  // Caminho do CV dentro de /public. Coloque o PDF em public/cv/.
  cvUrl: '/cv/Artur-Matoso-Nery-CV.pdf', // <-- salve o PDF com ESTE nome em public/cv/

  // Links sociais. Deixe '' (string vazia) para esconder um link.
  links: {
    github: 'https://github.com/arturnery?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/artur-matoso-nery-84a4971a9/',
  },
}
