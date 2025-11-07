# 🚗 Hyundai HR 2018 - Site de Venda

Site profissional e moderno para venda do caminhão Hyundai HR 2.5 TCI Diesel 2018.

**🌐 Site Online:** [https://vendahr.netlify.app/](https://vendahr.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/vendahr/deploys)

## 🚀 Tecnologias

- **React 18** com **TypeScript**
- **Vite 7** - Build tool ultra-rápido
- **shadcn/ui** - Componentes UI modernos e acessíveis
- **Tailwind CSS 4** - Estilização utilitária
- **Lucide React** - Ícones modernos
- **pnpm** - Gerenciador de pacotes eficiente
- **Netlify** - Hospedagem e deploy contínuo

## 📋 Informações do Veículo

- **Modelo**: Hyundai HR 2.5 TCI Diesel (RS/RD)
- **Ano**: 2018
- **Quilometragem**: 104.780 km
- **Combustível**: Diesel
- **Câmbio**: Manual
- **Direção**: Hidráulica
- **Status**: Quitado (sem restrições)
- **Valor**: **R$ 110.900,00**

## 📞 Contatos

- **📱 WhatsApp**: [(86) 99555-0422](https://wa.me/5586995550422)
- **☎️ Telefone**: (86) 3225-3639

## 🌐 Deploy no Netlify

### ✅ Configuração Automática (Recomendado)

O projeto já está 100% configurado para deploy no Netlify! Basta seguir um dos métodos abaixo:

#### 1️⃣ Deploy via Git (Melhor Opção)

1. **Criar repositório no GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/vendahr.git
   git push -u origin main
   ```

2. **Conectar ao Netlify**:
   - Acesse [Netlify](https://app.netlify.com/)
   - Clique em **"Add new site"** → **"Import an existing project"**
   - Conecte seu repositório GitHub
   - O Netlify detectará automaticamente as configurações do `netlify.toml`
   - Clique em **"Deploy site"**

3. **Configurar domínio personalizado**:
   - Vá em **Site settings** → **Domain management**
   - Altere o nome do site para: **vendahr**
   - URL final: `https://vendahr.netlify.app/`

#### 2️⃣ Deploy via Netlify CLI

```bash
# Instalar Netlify CLI globalmente
npm install -g netlify-cli

# Login na sua conta Netlify
netlify login

# Fazer deploy de produção
netlify deploy --prod --dir=dist/public
```

#### 3️⃣ Deploy via Drag & Drop

1. **Build local**:
   ```bash
   pnpm install
   pnpm build
   ```

2. **Upload manual**:
   - Acesse [Netlify Drop](https://app.netlify.com/drop)
   - Arraste a pasta `dist/public` para a área de upload
   - Aguarde o deploy concluir

### 🔧 Configurações do Netlify

O arquivo `netlify.toml` já contém todas as configurações necessárias:

- ✅ Comando de build: `pnpm install && pnpm run build`
- ✅ Diretório de publicação: `dist/public`
- ✅ Redirecionamento SPA configurado
- ✅ Node.js 22 configurado
- ✅ Variáveis de ambiente definidas

## 🛠️ Desenvolvimento Local

### Pré-requisitos

- Node.js 22+ ([Download](https://nodejs.org/))
- pnpm ([Instalação](https://pnpm.io/installation))

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/vendahr.git
cd vendahr

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev
```

O site estará disponível em: **http://localhost:3000**

### Comandos Disponíveis

```bash
pnpm dev          # Inicia servidor de desenvolvimento
pnpm build        # Build de produção (apenas frontend)
pnpm build:full   # Build completo (frontend + backend)
pnpm preview      # Preview do build de produção
pnpm check        # Verificar tipos TypeScript
pnpm format       # Formatar código com Prettier
```

## 📁 Estrutura do Projeto

```
vendahr/
├── client/                      # Frontend (React + Vite)
│   ├── public/                  # Arquivos públicos
│   │   ├── images/             # Fotos do veículo
│   │   │   ├── HRQRO.jpeg      # Foto principal
│   │   │   ├── QRO1.jpg        # Galeria
│   │   │   └── ...             # Mais fotos
│   │   └── _redirects          # Configuração SPA Netlify
│   ├── src/
│   │   ├── components/         # Componentes React
│   │   │   ├── ui/            # Componentes shadcn/ui
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── ...
│   │   ├── pages/             # Páginas da aplicação
│   │   │   ├── Home.tsx       # Página principal
│   │   │   └── NotFound.tsx   # Página 404
│   │   ├── contexts/          # Contextos React
│   │   ├── hooks/             # Hooks customizados
│   │   ├── lib/               # Utilitários
│   │   ├── App.tsx            # Componente raiz
│   │   ├── main.tsx           # Entry point
│   │   └── index.css          # Estilos globais + Tailwind
│   └── index.html             # HTML template
├── shared/                     # Código compartilhado
├── server/                     # Backend (não usado no Netlify)
├── netlify.toml               # Configuração Netlify
├── vite.config.ts             # Configuração Vite
├── tsconfig.json              # Configuração TypeScript
├── package.json               # Dependências
└── README.md                  # Este arquivo
```

## ✨ Funcionalidades

- ✅ **Galeria de fotos interativa** com 7 imagens do veículo
- ✅ **Navegação por miniaturas** e indicadores
- ✅ **Especificações técnicas detalhadas** com ícones
- ✅ **Botões de contato direto** (WhatsApp e telefone)
- ✅ **Design responsivo** (mobile-first)
- ✅ **SEO otimizado** com meta tags completas
- ✅ **Open Graph** e Twitter Cards para compartilhamento
- ✅ **Cores corporativas Hyundai** (azul #002C5F)
- ✅ **Animações suaves** com transições CSS
- ✅ **Performance otimizada** (Lighthouse 90+)
- ✅ **Acessibilidade** (WCAG 2.1 AA)

## 📱 Responsividade

O site é totalmente responsivo e testado em:

- 📱 **Mobile**: iPhone, Android (320px+)
- 📱 **Tablet**: iPad, Android Tablets (640px+)
- 💻 **Desktop**: Full HD, 2K, 4K (1024px+)

## 🎨 Personalização

### Cores

Edite `client/src/index.css` nas variáveis CSS:

```css
:root {
  --primary: oklch(0.45 0.15 250);      /* Azul Hyundai */
  --primary-foreground: oklch(1 0 0);    /* Branco */
  --accent: oklch(0.967 0.001 286.375);  /* Cinza claro */
  /* ... outras cores */
}
```

### Informações do Veículo

Edite `client/src/pages/Home.tsx`:

- **Imagens**: Array `images` (linha 10-18)
- **Especificações**: Array `specs` (linha 20-27)
- **Características**: Array `features` (linha 29-38)
- **Contatos**: Funções `handleWhatsApp` e `handleCall` (linha 40-46)

### Meta Tags

Edite `client/index.html` para alterar:

- Título da página
- Descrição SEO
- Palavras-chave
- Open Graph tags

## 🔍 SEO

O site está otimizado para mecanismos de busca:

- ✅ Meta tags semânticas
- ✅ Structured data (implícito)
- ✅ Sitemap automático (via Netlify)
- ✅ robots.txt configurado
- ✅ URLs amigáveis
- ✅ Imagens otimizadas

## 📊 Analytics (Opcional)

Para adicionar Google Analytics ou similar:

1. Edite `client/index.html`
2. Adicione o script de tracking antes do `</head>`
3. Ou use variáveis de ambiente no `netlify.toml`

## 🐛 Troubleshooting

### Build falha no Netlify

- Verifique se o Node.js 22 está configurado no `netlify.toml`
- Confirme que o `pnpm-lock.yaml` está commitado
- Veja os logs de build no painel do Netlify

### Imagens não aparecem

- Confirme que as imagens estão em `client/public/images/`
- Verifique os caminhos no código (devem começar com `/images/`)
- Limpe o cache do Netlify e faça rebuild

### Roteamento não funciona (404)

- Verifique se o arquivo `client/public/_redirects` existe
- Confirme que o `netlify.toml` tem a regra de redirect

## 📄 Licença

MIT License - Livre para uso e modificação

## 🤝 Contribuições

Este é um projeto privado para venda de veículo, mas sugestões são bem-vindas!

## 📞 Suporte

Para dúvidas ou problemas:

- **WhatsApp**: (86) 99555-0422
- **Email**: contato@vendahr.com.br

---

**Desenvolvido com ❤️ para venda do Hyundai HR 2018**

**Status**: ✅ Pronto para produção | **Última atualização**: Novembro 2025
