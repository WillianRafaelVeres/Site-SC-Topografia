# SC Topografia e Operações Florestais

Site institucional moderno, ultrarrápido e responsivo da **SC Topografia e Planejamento**, com sede em **Rio Negrinho – SC**.

Desenvolvido com foco em alta performance (PageSpeed 100/100), didática acessível para o produtor rural e posicionamento estratégico nos **dois grandes pilares do negócio**:

1. **Topografia & Agrimensura:** Medição e divisão de terrenos, regularização fundiária (usucapião e retificação de áreas), georreferenciamento INCRA (SIGEF), CAR e topografia para engenharia/obras. Método exclusivo *"Do Campo ao Cartório"*.
2. **Operações Florestais & Madeira:** Comercialização de lotes próprios de Pinus em tora (desdobro, laminação, celulose) e gestão completa de corte/colheita florestal terceirizada com diferencial do traçado topográfico de estradas e cubagem rigorosa.

---

## 🚀 Tecnologias Utilizadas

- **[Astro](https://astro.build/) (v4+)**: Framework web moderno focado em páginas estáticas (SSG) com geração de HTML puro e zero JavaScript desnecessário.
- **[Tailwind CSS](https://tailwindcss.com/)**: Estilização utilitária de alta performance com design tokens customizados da marca SC Topografia (`brand.primary: #1E7E34`, `brand.dark: #0B2912`, etc.).
- **[Lucide Icons](https://lucide.dev/) (`lucide-astro`)**: Ícones vetoriais modernos e leves.
- **SEO & Metadados Estruturados**: Marcação JSON-LD `ProfessionalService` compatível com Schema.org e Google Meu Negócio.

---

## 📁 Estrutura de Arquivos

```plaintext
Site SC Topografia/
├── public/
│   ├── favicon.png
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── videos/
│   │   └── hero-drone.mp4           # Vídeo aéreo opcional para o topo
│   └── images/
│       ├── logo.png                 # Logomarca oficial da SC Topografia
│       ├── logo-square.png
│       ├── hero-fallback.webp       # Imagem de fundo de alta resolução
│       ├── parceiros/               # SVGs das marcas e indústrias parceiras
│       └── ...
├── src/
│   ├── components/
│   │   ├── TopBar.astro             # Faixa superior de contatos e horário
│   │   ├── Navbar.astro             # Menu fixo translúcido (Sticky Header)
│   │   ├── Hero.astro               # Seção de entrada com vídeo, headline e CTA
│   │   ├── PartnersCarousel.astro   # Carrossel contínuo de parceiros
│   │   ├── Pillars.astro            # Destaque dos 2 grandes pilares da empresa
│   │   ├── Differential.astro       # Método "Do Campo ao Cartório" (3 passos)
│   │   ├── ServicesGrid.astro       # Cards didáticos de serviços
│   │   ├── GoogleReviews.astro      # Depoimentos e nota 5.0 do Google
│   │   ├── WhatsAppFloating.astro   # Botão flutuante com pulsar
│   │   └── Footer.astro             # Rodapé completo com mapa e dados CREA-SC
│   ├── layouts/
│   │   └── Layout.astro             # Template base com meta tags, OpenGraph e JSON-LD
│   └── pages/
│       ├── index.astro              # Página Inicial
│       ├── topografia.astro         # Página de Topografia & Agrimensura
│       ├── florestal.astro          # Página de Operações Florestais & Madeira
│       ├── sobre.astro              # Página Sobre Nós (Sócios e Trajetória)
│       └── contato.astro            # Página de Contato, Localização na BR-280 e Mapa
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

---

## 💻 Como Rodar Localmente

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:4321` no navegador.

3. **Gerar build de produção estático:**
   ```bash
   npm run build
   ```
   Os arquivos finais 100% estáticos são gerados na pasta `dist/`.

4. **Visualizar o build localmente:**
   ```bash
   npm run preview
   ```

---

## 🌐 Publicação na Web (Cloudflare Pages)

1. Conecte este repositório do GitHub ao painel da **Cloudflare Pages** (ou **Vercel**).
2. Configure as opções de Build:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
3. No painel do **Registro.br**, aponte os servidores DNS (Nameservers) para os fornecidos pela Cloudflare para ativar o domínio personalizado `sctopografia.com.br` com certificado SSL/HTTPS automático gratuito.
