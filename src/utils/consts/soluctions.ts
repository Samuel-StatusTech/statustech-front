import { Soluction } from "../types/soluction"
import { Apps, Aws, Design, Landings, Smart, Systems } from "../resumedImports/icons"

const soluctions: Soluction[] = [
  {
    tag: 'apps',
    icon: Apps,
    name: 'Aplicativos Web e Mobile',
    description: 'Desenvolvimento de soluções personalizadas para dispositivos móveis e web, garantindo inovação e qualidade em cada projeto.'
  },
  {
    tag: 'systems',
    icon: Systems,
    name: 'Sistemas de Gestão',
    description: `Oferecemos sistemas de gestão completos para produtos, empresas e setores variados.
    Atenda todas as suas necessidades com um painel administrativo eficiente e personalizado.
    Simplifique sua gestão conosco!`
  },
  {
    tag: 'sites',
    icon: Landings,
    name: 'Sites e Landing Pages',
    description: 'Potencialize sua presença online com nossos Websites e Landing Pages personalizadas! Criamos soluções sob medida para divulgar sua marca, produtos e serviços de forma atrativa.'
  },
  {
    tag: 'design',
    icon: Design,
    name: 'Design e Branding',
    description: 'Desenvolvemos logotipos, identidades visuais e peças de comunicação visual sob medida, oferecendo um serviço completo de branding para marcas novas ou em processo de redesign.'
  },
  {
    tag: 'smart',
    icon: Smart,
    name: 'Smart Things',
    description: 'Facilite a integração do seu negócio com dispositivos inteligentes através de nosso aplicativo ou plataforma web, colocando o controle de acessos e funcionalidades diretamente na palma da sua mão.'
  },
  {
    tag: 'aws',
    icon: Aws,
    name: 'AWS Hosting',
    description: 'Desempenho, escalabilidade e segurança garantidos. Simplifique sua infraestrutura e eleve sua empresa para o próximo nível na nuvem!'
  },
]


export default soluctions