# 🚀 Guia Rápido de Deploy - Venda HR

## Deploy Imediato no Netlify

### Método 1: Via Interface Web (Mais Rápido)

1. **Acesse o Netlify**
   - Vá para: https://app.netlify.com/
   - Faça login ou crie uma conta gratuita

2. **Importe o Projeto**
   - Clique em **"Add new site"** → **"Import an existing project"**
   - Escolha **"Deploy with GitHub"** (ou GitLab/Bitbucket)
   - Autorize o Netlify a acessar seus repositórios
   - Selecione o repositório `vendahr`

3. **Configurações Automáticas**
   - O Netlify detectará automaticamente:
     - Build command: `pnpm install && pnpm run build`
     - Publish directory: `dist/public`
     - Node version: `22`
   - **Clique em "Deploy site"**

4. **Configurar Nome do Site**
   - Após o primeiro deploy, vá em **Site settings**
   - **Domain management** → **Options** → **Edit site name**
   - Mude para: `vendahr`
   - URL final: https://vendahr.netlify.app/

### Método 2: Via Netlify CLI

```bash
# 1. Instalar Netlify CLI
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Inicializar o site (primeira vez)
netlify init

# 4. Build local
pnpm install
pnpm build

# 5. Deploy de produção
netlify deploy --prod --dir=dist/public
```

### Método 3: Drag & Drop (Sem Git)

```bash
# 1. Build local
pnpm install
pnpm build

# 2. Upload
# Vá para: https://app.netlify.com/drop
# Arraste a pasta 'dist/public' para o navegador
```

## ✅ Checklist Pré-Deploy

Antes de fazer o deploy, verifique:

- [ ] **Node.js 22** instalado localmente para testes
- [ ] **pnpm** instalado (`npm install -g pnpm`)
- [ ] Todas as dependências instaladas (`pnpm install`)
- [ ] Build local funciona (`pnpm build`)
- [ ] Preview funciona (`pnpm preview`)
- [ ] Todas as imagens estão em `client/public/images/`
- [ ] Arquivo `_redirects` existe em `client/public/`
- [ ] Arquivo `netlify.toml` está na raiz do projeto
- [ ] Git está inicializado (`git init`)
- [ ] Código commitado (`git add . && git commit -m "Initial commit"`)

## 🔧 Configurações do Netlify

### Build Settings (Já Configurado)

```toml
[build]
  command = "pnpm install && pnpm run build"
  publish = "dist/public"

[build.environment]
  NODE_VERSION = "22"
```

### Redirects (Para SPA)

```
/* /index.html 200
```

### Headers de Segurança

Configurados no arquivo `client/public/_headers`:
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Cache-Control para assets estáticos

## 🐛 Troubleshooting

### Build Falha

**Erro**: `pnpm: command not found`

**Solução**: Adicione nas configurações do Netlify:
```bash
Build command: npm install -g pnpm && pnpm install && pnpm run build
```

---

**Erro**: `Node version mismatch`

**Solução**: Verifique o `netlify.toml`:
```toml
[build.environment]
  NODE_VERSION = "22"
```

---

**Erro**: `Cannot find module`

**Solução**: 
- Limpe o cache do Netlify: **Deploys** → **Trigger deploy** → **Clear cache and retry**
- Verifique se `pnpm-lock.yaml` está commitado

### Deploy OK mas Site Não Funciona

**Problema**: Página 404 ao acessar

**Solução**: Verifique se existe:
- `client/public/_redirects` com conteúdo: `/* /index.html 200`
- Ou no `netlify.toml`:
  ```toml
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```

---

**Problema**: Imagens não aparecem

**Solução**: 
- Confirme que as imagens estão em `client/public/images/`
- Caminhos devem começar com `/images/` (não `./images/`)
- Limpe o cache e faça rebuild

### Performance

**Problema**: Site lento para carregar

**Soluções**:
- Otimize imagens (use WebP, comprima JPEG)
- Habilite HTTP/2 (automático no Netlify)
- Configure cache headers (já configurado)
- Use Lazy Loading para imagens (já implementado)

## 🎯 Pós-Deploy

### 1. Testar Tudo

- [ ] Site carrega corretamente
- [ ] Imagens aparecem
- [ ] Galeria funciona
- [ ] Botões de contato funcionam
- [ ] WhatsApp abre corretamente
- [ ] Link de telefone funciona
- [ ] Responsivo em mobile/tablet/desktop

### 2. SEO e Compartilhamento

- [ ] Teste compartilhamento no Facebook: https://developers.facebook.com/tools/debug/
- [ ] Teste compartilhamento no Twitter: https://cards-dev.twitter.com/validator
- [ ] Verifique Google Search Console
- [ ] Adicione ao Google Analytics (opcional)

### 3. Monitoramento

- [ ] Configure notificações de deploy no Netlify
- [ ] Monitore analytics de acesso
- [ ] Verifique erros no console do Netlify

## 📊 Métricas Esperadas

Após o deploy, o site deve ter:

- **Lighthouse Performance**: 90+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Total Size**: < 1 MB
- **Requests**: < 20

## 🔗 Links Úteis

- **Site de Produção**: https://vendahr.netlify.app/
- **Painel Netlify**: https://app.netlify.com/
- **Documentação Netlify**: https://docs.netlify.com/
- **Status do Netlify**: https://www.netlifystatus.com/

## 🆘 Suporte

Se precisar de ajuda:

1. **Verifique os logs do Netlify**: Painel → Deploys → Ver log completo
2. **Teste localmente primeiro**: `pnpm build && pnpm preview`
3. **Consulte o README.md**: Documentação completa do projeto

---

**Última atualização**: Novembro 2025
**Versão**: 1.0.0

