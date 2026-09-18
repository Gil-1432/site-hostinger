# Guia de Publicação Estática na Hostinger — Renovasolo Climatech

Este projeto foi totalmente otimizado para execução como **aplicação estática (SPA de alta performance)** na infraestrutura da **Hostinger** (Hospedagem Web, Cloud Hosting, VPS ou Hostinger Static).

---

## 🚀 1. Como Gerar os Arquivos de Produção

No seu terminal ou ambiente de desenvolvimento, execute o comando de compilação:

```bash
npm run build
```

O comando irá criar a pasta **`dist/`** com todos os arquivos estáticos minificados, otimizados e com links relativos prontos para upload.

---

## 📁 2. Estrutura Gerada na Pasta `dist/`

Ao compilar, a pasta `dist/` conterá:

- `index.html` — Documento HTML principal com metatags SEO completas e Schema.org JSON-LD.
- `.htaccess` — Arquivo de configuração pré-configurado para servidores LiteSpeed/Apache da Hostinger (com suporte a SPA, redirecionamento HTTPS automático, compressão Gzip e cache de 1 ano para assets estáticos).
- `assets/` — Todos os arquivos JavaScript, CSS e imagens documentais com caminhos relativos (`./`), evitando qualquer erro de rota 404.
- `enviar-contato.php` — Script PHP opcional pronto para receber submissões de formulário sem necessidade de servidor Node.js ativo.
- `favicon.svg` — Ícone botânico institucional da Renovasolo Climatech.
- `robots.txt` e `sitemap.xml` — Configurados para indexação imediata no Google.

---

## 📤 3. Passo a Passo de Upload na Hostinger (hPanel)

1. Acesse o painel de controle da Hostinger (**hPanel**): `https://hpanel.hostinger.com`.
2. Vá em **Sites** e selecione o domínio da **Renovasolo Climatech**.
3. Clique em **Gerenciador de Arquivos** (File Manager).
4. Abra a pasta pública do seu site: **`public_html`**.
5. Se houver arquivos padrão antigos (como `default.php`), exclua-os ou mova-os para uma pasta temporária.
6. Faça o upload de **todo o conteúdo de dentro da pasta `dist/`** diretamente para a raiz da pasta `public_html`.
   *(Dica: você pode compactar os arquivos de `dist/` em um arquivo `.zip`, fazer o upload e clicar em **Extrair** diretamente no Gerenciador da Hostinger).*
7. Verifique se o arquivo `.htaccess` e o `index.html` estão na raiz de `public_html`.

---

## 🔒 4. Certificado SSL e HTTPS na Hostinger

1. No hPanel da Hostinger, vá na seção **Segurança** > **SSL**.
2. Garanta que o certificado SSL gratuito (Let's Encrypt) esteja ativo para o domínio e subdomínio `www`.
3. O arquivo `.htaccess` incluído já força automaticamente todo o tráfego para `https://`.

---

## 📬 5. Funcionamento do Formulário de Contato na Hostinger

O formulário já está preparado para o ambiente estático da Hostinger com tripla redundância:

1. **WhatsApp Direto (1 Clique):** Ao preencher o formulário, o visitante tem um botão dedicado para abrir a mensagem já formatada diretamente no WhatsApp oficial (+55 35 99837-6012).
2. **Cliente de E-mail:** Opção imediata de abrir o cliente de e-mail padrão do usuário pré-preenchido com assunto e dados.
3. **Script PHP Nativo (`enviar-contato.php`):** Se a sua hospedagem Hostinger for um plano Web/Cloud com PHP ativo, o formulário envia os dados automaticamente em segundo plano para `contato@renovasoloclimatech.com.br`.

---

## 🛠️ Dúvidas Frequentes

- **Os links ou imagens quebram se eu hospedar em uma subpasta?**
  Não! O `vite.config.ts` foi configurado com `base: './'`, o que significa que todos os assets utilizam caminhos relativos seguros e funcionam tanto na raiz do domínio quanto em qualquer subdiretório.

- **Preciso manter um servidor Node.js rodando na Hostinger?**
  Não. O projeto foi compilado para arquivos estáticos puros (HTML, JS, CSS e imagens), consumindo o mínimo de recursos e garantindo carregamento instantâneo.
