# ⚡ Quick Start - Venda HR

## 🎯 3 Minutos para o Deploy!

### Opção Mais Rápida: GitHub + Netlify

```bash
# 1️⃣ Criar repositório no GitHub (via interface web)
# Vá para github.com e crie um novo repositório chamado "vendahr"

# 2️⃣ No terminal, na pasta do projeto:
git init
git add .
git commit -m "🚀 Site pronto para produção"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/vendahr.git
git push -u origin main

# 3️⃣ No Netlify (app.netlify.com):
# - Clique em "Add new site"
# - "Import an existing project"
# - Selecione GitHub
# - Escolha o repositório "vendahr"
# - Clique em "Deploy site" (configurações são automáticas!)

# 4️⃣ Configurar domínio:
# - Após deploy, vá em "Site settings"
# - "Domain management" → "Options" → "Edit site name"
# - Mude para: vendahr
# - Pronto! https://vendahr.netlify.app/ 🎉
```

---

## ✅ O Que Foi Feito

### Configurações de Deploy
- ✅ `netlify.toml` configurado
- ✅ `vite.config.ts` otimizado
- ✅ Build scripts atualizados
- ✅ Node.js 22 configurado

### SEO & Performance
- ✅ Meta tags completas (Facebook, Twitter)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Manifest PWA
- ✅ Headers de segurança
- ✅ Cache otimizado

### Acessibilidade
- ✅ ARIA labels
- ✅ Roles semânticos
- ✅ Alt text em imagens
- ✅ Contraste otimizado

### Documentação
- ✅ README.md completo
- ✅ DEPLOY.md detalhado
- ✅ PROJECT_SUMMARY.md
- ✅ Este Quick Start

---

## 🧪 Testar Localmente

```bash
# Instalar dependências
pnpm install

# Iniciar dev server
pnpm dev
# Abrir: http://localhost:3000

# Build de produção
pnpm build

# Testar build
pnpm preview
```

---

## 📋 Arquivos Importantes

| Arquivo | Descrição |
|---------|-----------|
| `netlify.toml` | Configuração do Netlify |
| `client/index.html` | HTML com meta tags SEO |
| `client/public/_redirects` | Redirects SPA |
| `client/public/_headers` | Headers de segurança |
| `client/public/robots.txt` | SEO para crawlers |
| `client/public/sitemap.xml` | Mapa do site |
| `client/src/pages/Home.tsx` | Página principal |
| `README.md` | Documentação completa |
| `DEPLOY.md` | Guia de deploy |

---

## 🎨 Estrutura Visual do Site

```
┌─────────────────────────────────────┐
│ HEADER (sticky)                     │
│ Hyundai HR 2018 | R$ 110.900       │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ GALERIA DE FOTOS                    │
│ [Foto principal + miniaturas]       │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ BOTÕES DE CONTATO                   │
│ [WhatsApp] [Telefone]               │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ ESPECIFICAÇÕES TÉCNICAS             │
│ Ano | KM | Combustível | etc.       │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ CARACTERÍSTICAS                     │
│ ✓ Motor diesel econômico            │
│ ✓ Documentação em dia               │
│ ✓ Veículo quitado                   │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ SOBRE O VEÍCULO                     │
│ [Descrição detalhada]               │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ CTA FINAL                           │
│ Interessado? Entre em contato!      │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ FOOTER                              │
│ Contatos e Copyright                │
└─────────────────────────────────────┘
```

---

## 🔧 Personalização Rápida

### Mudar Preço

Edite `client/src/pages/Home.tsx`:

```tsx
// Linha 59
<p className="text-3xl md:text-4xl font-bold">R$ 110.900</p>
```

### Mudar WhatsApp

```tsx
// Linha 40-42
const handleWhatsApp = () => {
  window.open("https://wa.me/5586995550422?text=Olá! Tenho interesse no Hyundai HR 2018.", "_blank");
};
```

### Mudar Telefone

```tsx
// Linha 44-46
const handleCall = () => {
  window.location.href = "tel:+558632253639";
};
```

### Adicionar/Remover Fotos

```tsx
// Linha 10-18
const images = [
  "/images/HRQRO.jpeg",
  "/images/QRO1.jpg",
  // ... adicionar mais aqui
];
```

---

## 🌐 URLs Úteis

- **Netlify Dashboard**: https://app.netlify.com/
- **Netlify Drop** (drag & drop): https://app.netlify.com/drop
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **Google PageSpeed**: https://pagespeed.web.dev/

---

## 📱 Contatos do Veículo

- **WhatsApp**: (86) 99555-0422
- **Telefone**: (86) 3225-3639
- **Modelo**: Hyundai HR 2.5 TCI Diesel 2018
- **Valor**: R$ 110.900,00

---

## ❓ Troubleshooting Rápido

### Build falha?
```bash
# Limpar tudo e reinstalar
rm -rf node_modules dist
pnpm install
pnpm build
```

### Imagens não aparecem?
- Confirme que estão em `client/public/images/`
- Caminhos devem começar com `/images/` (não `./`)

### Netlify não encontra comando?
- Verifique se `netlify.toml` está na raiz
- Node version deve ser 22 (já configurado)

---

## 🎉 Pronto!

Agora você tem um site profissional para vender o Hyundai HR 2018!

**Próximos passos:**
1. ✅ Revisar informações do veículo
2. ✅ Testar localmente (`pnpm dev`)
3. ✅ Fazer push para GitHub
4. ✅ Conectar no Netlify
5. ✅ Deploy automático!
6. ✅ Compartilhar o link

**Boa venda! 🚗💨**

---

*Para mais detalhes, veja: README.md, DEPLOY.md e PROJECT_SUMMARY.md*

