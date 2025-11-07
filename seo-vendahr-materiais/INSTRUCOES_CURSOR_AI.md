# Instruções para Cursor AI - Otimização SEO VendaHR

## 🤖 Prompt para o Cursor AI

Copie e cole este prompt no Cursor AI junto com os arquivos deste pacote:

```
Preciso otimizar meu site de venda de veículo (Hyundai HR 2018) para SEO. 
O objetivo é fazer o site aparecer no Google quando pesquisarem "venda de veículo HR".

Tarefas a realizar:

1. Atualizar a seção <head> do HTML com as otimizações do arquivo "codigo-head-completo.html"
2. Adicionar o script de dados estruturados do arquivo "schema-veiculo.json" antes do </head>
3. Atualizar o título H1 da página conforme o arquivo "textos-otimizados.md"
4. Otimizar os textos da seção "Sobre o Veículo" com as sugestões do arquivo "textos-otimizados.md"
5. Adicionar atributos alt otimizados em todas as tags <img>

Por favor, faça essas alterações mantendo a estrutura e design atual do site.
```

## 📝 Alterações Detalhadas

### Alteração 1: Seção `<head>` do HTML

**Arquivo de referência:** `codigo-head-completo.html`

**O que fazer:**
- Substituir as tags `<title>` e `<meta name="description">` existentes
- Adicionar as novas meta tags de palavras-chave otimizadas
- Manter todas as outras meta tags (Open Graph, Twitter Cards, etc.)

### Alteração 2: Dados Estruturados (Schema.org)

**Arquivo de referência:** `schema-veiculo.json`

**O que fazer:**
- Copiar todo o conteúdo do arquivo
- Envolver em uma tag `<script type="application/ld+json">`
- Inserir logo antes do fechamento `</head>`
- **IMPORTANTE:** Atualizar os campos de endereço com informações reais

### Alteração 3: Título Principal (H1)

**Arquivo de referência:** `textos-otimizados.md` (seção "Título H1")

**O que fazer:**
- Localizar a tag `<h1>` na página
- Substituir o texto atual pelo texto otimizado

### Alteração 4: Textos da Página

**Arquivo de referência:** `textos-otimizados.md` (seção "Textos do Corpo")

**O que fazer:**
- Atualizar o texto da seção "Sobre o Veículo"
- Incluir as palavras-chave de forma natural
- Manter o tom e estilo do texto original

### Alteração 5: Otimização de Imagens

**Arquivo de referência:** `textos-otimizados.md` (seção "Atributos Alt")

**O que fazer:**
- Localizar todas as tags `<img>` no código
- Adicionar ou atualizar o atributo `alt` com descrições otimizadas
- Seguir o padrão: `alt="Venda de veículo HR Hyundai 2018 [descrição específica]"`

## ✅ Validação das Alterações

Após implementar, verifique:

1. **Validar HTML:** Use https://validator.w3.org/
2. **Testar Dados Estruturados:** Use https://search.google.com/test/rich-results
3. **Verificar Responsividade:** Teste em mobile e desktop
4. **Conferir Carregamento:** Certifique-se de que o site ainda carrega normalmente

## 🔧 Comandos Úteis no Cursor AI

Se o Cursor AI pedir mais contexto, você pode usar estes comandos:

- `@workspace` - Para analisar todo o projeto
- `@file` - Para referenciar um arquivo específico
- `/edit` - Para fazer edições diretas no código
- `/fix` - Para corrigir erros

## 📊 Exemplo de Conversa com Cursor AI

**Você:**
```
@workspace Preciso otimizar o SEO do meu site. Tenho os arquivos com as alterações necessárias. 
Vou compartilhar os arquivos: codigo-head-completo.html, schema-veiculo.json e textos-otimizados.md.
Por favor, aplique essas otimizações no código mantendo a estrutura atual.
```

**Cursor AI responderá com:**
- Análise dos arquivos
- Sugestões de implementação
- Código modificado

## ⚠️ Atenções Importantes

1. **Backup:** Faça backup do código original antes de aplicar as alterações
2. **Endereço:** Lembre-se de atualizar o endereço no arquivo `schema-veiculo.json`
3. **Teste:** Sempre teste o site após as alterações
4. **Gradual:** Se preferir, implemente uma alteração por vez

## 🆘 Resolução de Problemas

### Problema: Site não carrega após alterações
**Solução:** Verifique se não há erros de sintaxe no HTML (tags não fechadas, aspas faltando)

### Problema: Dados estruturados não validam
**Solução:** Use o teste do Google (link acima) e corrija os campos indicados como erro

### Problema: Cursor AI não entende o que fazer
**Solução:** Seja mais específico, referencie os arquivos com @file e peça para fazer uma alteração por vez

---

**Dúvidas?** Consulte o arquivo `plano-seo-completo.md` para mais detalhes sobre cada otimização.
