# 🚀 Página de Proposta - Primeira Dobra

Uma página de proposta moderna e interativa construída com **Next.js 15**, **TypeScript**, **Tailwind CSS**, **shadcn/ui** e **Spline 3D**.

## ✨ Características

- 🎨 **Design Moderno**: Interface escura com gradientes e efeitos visuais
- 🌟 **Efeito Spotlight**: Animação de foco visual dinâmica
- 🎯 **Cena 3D Interativa**: Integração com Spline para objetos 3D
- 📱 **Responsivo**: Funciona perfeitamente em desktop e mobile
- ⚡ **Performance**: Lazy loading dos componentes 3D
- 🎭 **Animações Suaves**: Transições e efeitos visuais elegantes

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **shadcn/ui** - Componentes UI reutilizáveis
- **Spline** - Modelagem e renderização 3D
- **Framer Motion** - Animações avançadas

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Estilos globais e animações
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── components/
│   └── ui/
│       ├── card.tsx         # Componente Card (shadcn)
│       ├── demo.tsx         # Componente principal da primeira dobra
│       ├── splite.tsx       # Wrapper para Spline 3D
│       └── spotlight.tsx    # Efeito de spotlight animado
└── lib/
    └── utils.ts             # Utilitários (cn function)
```

## 🚀 Como Usar

### 1. Instalar Dependências
```bash
npm install
```

### 2. Executar em Desenvolvimento
```bash
npm run dev
```

### 3. Acessar a Aplicação
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🎨 Componentes Principais

### SplineSceneBasic (`demo.tsx`)
- Componente principal da primeira dobra
- Combina texto promocional com cena 3D
- Layout responsivo com duas colunas

### SplineScene (`splite.tsx`)
- Wrapper para componentes Spline 3D
- Lazy loading para melhor performance
- Fallback com loader animado

### Spotlight (`spotlight.tsx`)
- Efeito visual de foco/spotlight
- Animação CSS personalizada
- SVG otimizado

## 🎯 Customização

### Alterar a Cena 3D
Edite o arquivo `src/components/ui/demo.tsx` e substitua a URL da cena:

```tsx
<SplineScene 
  scene="SUA_URL_DO_SPLINE_AQUI"
  className="w-full h-full"
/>
```

### Personalizar Cores e Textos
- **Textos**: Edite diretamente no componente `demo.tsx`
- **Cores**: Modificar no `globals.css` ou usar classes Tailwind
- **Animações**: Ajustar no `globals.css`

## 📱 Responsividade

O projeto é totalmente responsivo com:
- Layout flexível para diferentes tamanhos de tela
- Texto adaptativo (text-4xl md:text-5xl)
- Componentes que se ajustam automaticamente

## 🔧 Comandos Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
```

## 📝 Próximos Passos

1. ✅ **Primeira Dobra Completa** - Implementada!
2. 🔄 **Adicionar mais seções** - Expandir a página
3. 🎨 **Customizar conteúdo** - Adaptar textos e cores
4. 📊 **Adicionar métricas** - Analytics e tracking
5. 🚀 **Deploy** - Publicar em produção

---

**Desenvolvido com ❤️ usando as melhores práticas de desenvolvimento web moderno.**
