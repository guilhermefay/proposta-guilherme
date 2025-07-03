import { SplineSceneBasic } from "@/components/ui/demo";
import { PricingCard } from "@/components/ui/pricing-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Primeira dobra */}
      <SplineSceneBasic />
      
      {/* Seções subsequentes - estilo Notion */}
      <main className="bg-white">
        {/* Seção: Um pouco sobre mim */}
        <section className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
          <div style={{ paddingLeft: 'clamp(1rem, 4vw, 50px)' }}>
            <div className="prose prose-lg max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Olá! eu sou o Guilherme Fay 👋
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                            Desenvolvedor experiente focado em resultados. Desenvolvo tecnologias que aumentam o lucro da sua empresa.
            Transformo suas ideias em realidade, combinando UI/UX refinada, IA aplicada e execução acelerada.
              </p>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 mt-8 md:mt-12">Sobre</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Atuo de ponta a ponta — concepção, design, código e deploy — com um único critério de sucesso: 
                impacto direto em receita e eficiência operacional. Entrego produtos digitais, aplicativos, 
                automações, softwares e funis de vendas que convertem.
              </p>
            </div>
          </div>
        </section>

        {/* Seção: Experiência */}
        <section className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 border-t border-gray-100">
          <div style={{ paddingLeft: 'clamp(1rem, 4vw, 50px)' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 md:mb-12">Experiência</h2>
              
              <div className="space-y-6 md:space-y-8">
                {/* Grupo PDC */}
                                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
        <Image
                      src="/(1) Guilherme Fay _ LinkedIn/pdc.jpg"
                      alt="Grupo PDC Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Diretor de Tecnologia</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Grupo PDC – Pediatra de Consultório</p>
                    <p className="text-gray-700 mt-2 text-sm sm:text-base leading-relaxed">
                      Soluções médicas digitais, IA aplicada à medicina, prontuário eletrônico, funis de vendas e automação
                    </p>
                  </div>
                </div>

                {/* hub xp */}
                                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
            <Image
                      src="/(1) Guilherme Fay _ LinkedIn/hubxp.jpg"
                      alt="Hub XP Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Desenvolvedor</h3>
                    <p className="text-gray-600 text-sm sm:text-base">hub xp</p>
                    <p className="text-gray-700 mt-2 text-sm sm:text-base leading-relaxed">
                      Páginas e funis de captação de leads, otimização de conversão, UI/UX
                    </p>
                  </div>
        </div>

                {/* Afya */}
                                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
          <Image
                      src="/(1) Guilherme Fay _ LinkedIn/afya.jpg"
                      alt="Afya Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Desenvolvedor Web Sênior</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Afya (NASDAQ: AFYA) • Autônomo</p>
                    <p className="text-gray-700 mt-2 text-sm sm:text-base leading-relaxed">
                      Páginas e funis de captação de leads, otimização de conversão, UI/UX
                    </p>
                  </div>
                </div>

                {/* Orygen Studio */}
                                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
          <Image
                      src="/(1) Guilherme Fay _ LinkedIn/orygen.JPG"
                      alt="Orygen Studio Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Fundador</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Orygen Studio</p>
                    <p className="text-gray-700 mt-2 text-sm sm:text-base leading-relaxed">
                      Desenvolvimento web e criação de marcas
                    </p>
                  </div>
                </div>

                {/* Além da Medicina */}
                                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
          <Image
                      src="/(1) Guilherme Fay _ LinkedIn/alemdamedicina.jpg"
                      alt="Além da Medicina Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Desenvolvedor Web</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Além da Medicina • Autônomo</p>
                    <p className="text-gray-700 mt-2 text-sm sm:text-base leading-relaxed">
                      Lançamentos, estratégia e desenvolvimento web
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Detalhes do Projeto */}
        <section className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 border-t border-gray-100">
          <div style={{ paddingLeft: 'clamp(1rem, 4vw, 50px)' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Detalhes do Projeto</h2>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 md:mb-12">
                O aplicativo será desenvolvido pensando na melhor experiência para o usuário final, incluindo acesso 
                facilitado aos conteúdos digitais (áudios, vídeos, e-books) e um sistema otimizado para venda e 
                expansão contínua de produtos digitais.
              </p>

              <div className="space-y-8 md:space-y-12">
                {/* Identidade Visual */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                    <span>🎨</span>
                    <span>Identidade Visual & Design System</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                    UI/UX com paleta de cores harmonizada (com suporte para light e dark mode), tipografia adaptada, 
                    ícones personalizados e componentes profissionais.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                    Acessibilidade WCAG 2.2 e prototipação interativa para validação rápida.
                  </p>
                  <ul className="text-sm sm:text-base text-gray-700 space-y-2 leading-relaxed">
                    <li>• Interface com layout responsivo e intuitivo, otimizando a jornada do usuário</li>
                    <li>• Plataforma completa com todos os cursos, possibilitando um uso profissional, moderno e dinâmico</li>
                    <li>• Agrega valor e diferenciação de mercado</li>
                  </ul>
                </div>

                {/* Sistema de Vendas */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                    <span>🛍️</span>
                    <span>Sistema de Vendas e Monetização</span>
                  </h3>
                  <ul className="text-sm sm:text-base text-gray-700 space-y-2 leading-relaxed">
                    <li>• Estrutura pronta para venda contínua de novos produtos digitais, como e-books, cursos e áudios adicionais</li>
                    <li>• Interface projetada estrategicamente para induzir e facilitar novas compras pelo usuário, aumentando seu lifetime value (LTV)</li>
                  </ul>
                </div>

                {/* Players Externos */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                    <span>▶️</span>
                    <span>Players Externos</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                    Integração nativa com Vturb / Panda / Vimeo / SoundCloud.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Aplicativo completo na Apple Store e Play Store, além de acesso via navegador.
                  </p>
                </div>

                {/* Backend */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                    <span>⚙️</span>
                    <span>Backend Completo</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Banco de dados, controle de usuários, painel para subir conteúdos com facilidade, criar produtos e disparar notificações.
                  </p>
                </div>

                {/* Notificações */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                    <span>🔔</span>
                    <span>Notificações Push</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Seu app sempre na tela do celular dos usuários. Mais vendas, tempo de tela.
                  </p>
                </div>

                {/* Expansão */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                    <span>🚀</span>
                    <span>Expansão & Escalabilidade</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Desenvolvimento pensado para crescer. Pronto para suportar interações e soluções IA, comunidade, 
                    novas tecnologias e inovações.
                  </p>
                </div>

                {/* Publicação */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                    <span>📌</span>
                    <span>Publicação nas Lojas de Aplicativos</span>
                  </h3>
                  <ul className="text-sm sm:text-base text-gray-700 space-y-2 leading-relaxed">
                    <li>• Configuração e publicação completa nas lojas oficiais: App Store (iOS) e Google Play (Android)</li>
                    <li>• Adequação do aplicativo às políticas de ambas as plataformas para publicação tranquila e aprovação garantida</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Prazo de Entrega */}
        <section className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 border-t border-gray-100">
          <div style={{ paddingLeft: 'clamp(1rem, 4vw, 50px)' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 md:mb-12">⏱️ Prazo de Entrega</h2>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0 mx-auto sm:mx-0"></div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">40 dias corridos</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      A partir da assinatura (e liberação do sinal) para entregar o aplicativo 100% funcional, 
                      testado e pronto para submissão.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0 mx-auto sm:mx-0"></div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Aprovação nas lojas</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      O período de revisão da Apple e do Google varia caso a caso (média de 3 – 10 dias úteis). 
                      Eventuais ajustes solicitados pelas plataformas podem estender esse prazo, mas a submissão 
                      ocorre imediatamente após nosso &quot;OK&quot; interno.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Modelos de Investimento */}
        <section className="bg-white">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
            <div style={{ paddingLeft: 'clamp(1rem, 4vw, 50px)' }}>
              <div className="max-w-6xl mx-auto mb-12 md:mb-16 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Preços transparentes e flexíveis
                </h2>
                <h3 className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4">
                  Projeto fechado ou quem sabe eu na sua equipe, potencializando resultados e aumentado seu lucro?
                </h3>
                <p className="text-base sm:text-lg text-gray-600">
                  Escolha o modelo que melhor se adapta ao seu negócio e objetivos.
                </p>
              </div>

              {/* Card: Projeto Fechado */}
              <PricingCard
                title="Projeto Fechado"
                description="Desenvolvimento completo com escopo definido e entrega garantida. Ideal para projetos com requisitos claros."
                price="R$ 20.000"
                priceLabel="pagamento: 60% na assinatura, 40% na publicação"
                features={[
                  {
                    title: "Desenvolvimento Completo",
                    items: [
                      "Aplicativo iOS e Android",
                      "Versão web responsiva",
                      "Backend e banco de dados",
                      "Painel administrativo",
                      "Publicação nas lojas oficiais",
                      "Documentação técnica"
                    ]
                  }
                ]}
                buttonText="Iniciar Projeto Fechado"
                buttonUrl="https://wa.me/5534991533667?text=Guilherme%2C%20tenho%20interesse%20no%20projeto%20fechado"
              />

              {/* Card: Fixo Mensal Completo */}
              <PricingCard
                title="Fixo Mensal Completo"
                description="Você tem um desenvolvedor focado exclusivamente no seu projeto, com todas as vantagens tecnológicas avançadas."
                price="R$ 9.000"
                priceLabel="por mês"
                features={[
                  {
                    title: "Vantagens Exclusivas",
                    items: [
                      "Aplicação avançada de IA",
                      "Vendas automáticas guiadas por IA",
                      "Disparos pelo WhatsApp oficial",
                      "Funis interativos de alta conversão",
                      "Suporte automatizado 24/7",
                      "Automação de processos"
                    ]
                  },
                  {
                    title: "Desenvolvimento Contínuo",
                    items: [
                      "Novas funcionalidades mensais",
                      "Manutenção e correções",
                      "Evolução tecnológica constante",
                      "Suporte prioritário",
                      "Consultoria estratégica",
                      "Análise de métricas e otimizações"
                    ]
                  }
                ]}
                buttonText="Quero na minha equipe"
                buttonUrl="https://wa.me/5534991533667?text=Guilherme%2C%20tenho%20interesse%20em%20ter%20voc%C3%AA%20na%20minha%20equipe!"
              />

              {/* Card: Fixo + Participação */}
              <PricingCard
                title="Fixo + Participação"
                description="Modelo de sociedade onde eu invisto no seu sucesso. Quanto mais você lucrar, mais eu ganho junto com você."
                price="R$ 5.000"
                priceLabel="por mês + % sobre lucro líquido"
                features={[
                  {
                    title: "Vantagens Exclusivas",
                    items: [
                      "Aplicação avançada de IA",
                      "Vendas automáticas guiadas por IA",
                      "Disparos pelo WhatsApp oficial",
                      "Funis interativos de alta conversão",
                      "Suporte automatizado 24/7",
                      "Automação de processos"
                    ]
                  },
                  {
                    title: "Desenvolvimento Contínuo",
                    items: [
                      "Novas funcionalidades mensais",
                      "Manutenção e correções",
                      "Evolução tecnológica constante",
                      "Suporte prioritário",
                      "Consultoria estratégica",
                      "Análise de métricas e otimizações"
                    ]
                  },
                  {
                    title: "Modelo de Parceria",
                    items: [
                      "Investimento mútuo no sucesso",
                      "Alinhamento total de objetivos",
                      "Foco em resultados e lucro",
                      "Relacionamento de longo prazo",
                      "Crescimento conjunto",
                      "Retorno proporcional ao sucesso"
                    ]
                  }
                ]}
                buttonText="Vamos ser parceiros"
                buttonUrl="https://wa.me/5534991533667?text=Guilherme%2C%20tenho%20interesse%20em%20ter%20voc%C3%AA%20como%20parceiro!"
              />
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
          <div style={{ paddingLeft: 'clamp(1rem, 4vw, 50px)' }}>
            <div className="max-w-6xl mx-auto">
              <div className="p-6 md:p-8 bg-gray-50 rounded-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Vamos transformar essa ideia em um produto lucrativo e escalável
                </h3>
                <p className="text-base sm:text-lg text-gray-700">
                  Qual modelo faz mais sentido para vocês?
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
