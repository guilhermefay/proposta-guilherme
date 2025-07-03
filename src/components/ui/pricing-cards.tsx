import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Pricing() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Modelos de Investimento</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Preços transparentes e flexíveis
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Escolha o modelo que melhor se adapta ao seu negócio e objetivos.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            
            {/* Projeto Fechado */}
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Projeto Fechado
                  </span>
                </CardTitle>
                <CardDescription>
                  Desenvolvimento completo com escopo definido e entrega garantida.
                  Ideal para projetos com requisitos claros.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">R$ 20.000</span>
                    <span className="text-sm text-muted-foreground">
                      app completo
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Aplicativo completo</p>
                        <p className="text-muted-foreground text-sm">
                          iOS, Android e versão web inclusos.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Publicação nas lojas</p>
                        <p className="text-muted-foreground text-sm">
                          App Store e Google Play configurados.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Backend e sistema completo</p>
                        <p className="text-muted-foreground text-sm">
                          Banco de dados, painel admin e APIs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4" asChild>
                    <a href="https://wa.me/5534991533667?text=Guilherme%2C%20tenho%20interesse%20no%20projeto%20fechado" target="_blank" rel="noopener noreferrer">
                      Iniciar projeto <MoveRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Fixo Mensal - Destacado */}
            <Card className="w-full shadow-2xl rounded-md border-primary">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    O que posso oferecer como desenvolvedor na sua equipe?
                    <Badge className="ml-2">Recomendado</Badge>
                  </span>
                </CardTitle>
                <CardDescription>
                  A criatividade é o limite. Consigo dar vida às suas ideias e transformá-las em dinheiro no seu bolso. Vamos juntos?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p className="font-semibold">Aplicação avançada de soluções com Inteligência Artificial</p>
                        <p className="text-muted-foreground text-sm">
                          Desenvolvimento de novos produtos digitais (SaaS, apps, sistemas) — criação rápida de softwares sob medida para expandir portfólio, elevar faturamento e aumentar LTV.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p className="font-semibold">Vendas automáticas guiadas por IA</p>
                        <p className="text-muted-foreground text-sm">
                          Sequências inteligentes que segmentam leads, oferecem o produto certo no momento ideal e recuperam carrinhos sem intervenção humana.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p className="font-semibold">Disparos via API oficial do WhatsApp</p>
                        <p className="text-muted-foreground text-sm">
                          Mensagens transacionais ou promocionais enviadas com segurança, reduzindo risco de banimento e reforçando a reputação da marca.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p className="font-semibold">Funis interativos de alta conversão</p>
                        <p className="text-muted-foreground text-sm">
                          Experiências dinâmicas (quizzes, recomendações e upsells) que diferenciam o funil e maximizam a taxa de compra.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p className="font-semibold">Suporte automatizado 24/7</p>
                        <p className="text-muted-foreground text-sm">
                          Chatbot treinado no seu conteúdo, pronto para atender clientes, resolver dúvidas e liberar o time humano para tarefas estratégicas.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p className="font-semibold">Automação de processos</p>
                        <p className="text-muted-foreground text-sm">
                          Fluxos integrados que eliminam tarefas manuais, reduzem custos internos e aumentam a efetividade operacional.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">R$ 9.000</span>
                    <span className="text-sm text-muted-foreground">
                      / mês
                    </span>
                  </p>
                  <Button className="gap-4" asChild>
                    <a href="https://wa.me/5534991533667?text=Guilherme%2C%20tenho%20interesse%20em%20ter%20voc%C3%AA%20na%20minha%20equipe!" target="_blank" rel="noopener noreferrer">
                      Começar agora <MoveRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Fixo + Participação */}
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    O que posso oferecer como desenvolvedor na sua equipe?
                  </span>
                </CardTitle>
                <CardDescription>
                  A criatividade é o limite. Consigo dar vida às suas ideias e transformá-las em dinheiro no seu bolso. Vamos juntos?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p className="font-semibold">Aplicação avançada de soluções com Inteligência Artificial</p>
                        <p className="text-muted-foreground text-sm">
                          Desenvolvimento de novos produtos digitais (SaaS, apps, sistemas) — criação rápida de softwares sob medida para expandir portfólio, elevar faturamento e aumentar LTV.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p className="font-semibold">Vendas automáticas guiadas por IA</p>
                        <p className="text-muted-foreground text-sm">
                          Sequências inteligentes que segmentam leads, oferecem o produto certo no momento ideal e recuperam carrinhos sem intervenção humana.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p className="font-semibold">Disparos via API oficial do WhatsApp</p>
                        <p className="text-muted-foreground text-sm">
                          Mensagens transacionais ou promocionais enviadas com segurança, reduzindo risco de banimento e reforçando a reputação da marca.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p className="font-semibold">Funis interativos de alta conversão</p>
                        <p className="text-muted-foreground text-sm">
                          Experiências dinâmicas (quizzes, recomendações e upsells) que diferenciam o funil e maximizam a taxa de compra.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p className="font-semibold">Suporte automatizado 24/7</p>
                        <p className="text-muted-foreground text-sm">
                          Chatbot treinado no seu conteúdo, pronto para atender clientes, resolver dúvidas e liberar o time humano para tarefas estratégicas.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p className="font-semibold">Automação de processos</p>
                        <p className="text-muted-foreground text-sm">
                          Fluxos integrados que eliminam tarefas manuais, reduzem custos internos e aumentam a efetividade operacional.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">R$ 5.000</span>
                    <span className="text-sm text-muted-foreground">
                      / mês + 5% sobre lucro líquido
                    </span>
                  </p>
                  <Button variant="outline" className="gap-4" asChild>
                    <a href="https://wa.me/5534991533667?text=Guilherme%2C%20tenho%20interesse%20em%20ter%20voc%C3%AA%20como%20parceiro!" target="_blank" rel="noopener noreferrer">
                      Conversar sobre parceria <PhoneCall className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing }; 