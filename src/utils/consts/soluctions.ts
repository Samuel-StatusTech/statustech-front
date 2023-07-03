import { Soluction } from "../types/soluction"
import { Apps, Aws, Design, Landings, Smart, Systems } from "../resumedImports/icons"

const soluctions: Soluction[] = [
  {
    icon: Apps,
    name: 'Aplicativos Web e Mobile',
    description: 'Desenvolvimento de aplicativos e ferramentas que podem ser acessadas por dispositivos móveis, pela web ou por ambos.'
  },
  {
    icon: Systems,
    name: 'Sistemas de Gestão',
    description: 'Sistema de gestão de produtos, empresas, educação... Sua necessidade de um painel administrativo será atendida.'
  },
  {
    icon: Landings,
    name: 'Sites e Landing pages',
    description: 'Criação de websites completos para os mais diversos fins, seja na divulgação de empresas, produtos ou lançamentos em Landing pages.'
  },
  {
    icon: Design,
    name: 'Design e Branding',
    description: 'Criação de logotipos, identidades visuais, peças de comunicação visual e serviço completo de branding para uma nova marca ou redesign.'
  },
  {
    icon: Smart,
    name: 'Smart Things',
    description: 'Integração do seu negócio com dispositivos inteligentes, via aplicativo ou web. Controle de acessos e funcionalidades na palma da mão.'
  },
  {
    icon: Aws,
    name: 'AWS Hosting',
    description: 'Soluções de hospedagem e gerenciamento de aplicativos na nuvem AWS para garantir desempenho, escalabilidade e segurança.'
  },
]


export default soluctions