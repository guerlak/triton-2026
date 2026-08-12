# Triton Web - Diretrizes e Padrões de Responsividade Mobile

Sempre aplique as diretrizes de design e responsividade mobile abaixo ao criar ou modificar componentes e páginas neste projeto:

## 1. Escala de Tipografia Responsiva
- **Títulos Principais (h1):** `text-3xl sm:text-5xl md:text-7xl font-black uppercase leading-tight tracking-tight break-words`
- **Subtítulos de Seção (h2 / h3):** `text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-tight`
- **Sub-cabeçalhos / Badges:** `text-xs sm:text-sm font-bold tracking-widest uppercase text-triton-red`
- **Parágrafos / Textos:** `text-xs sm:text-base md:text-lg text-gray-400` (nunca usar `text-lg` estático no mobile).

## 2. Alinhamento e Hierarquia no Mobile
- Em telas pequenas (`< 768px`), utilize alinhamento responsivo (`text-left md:text-right` ou `items-start md:items-end`). Evitar alinhar parágrafos à direita no mobile sob títulos alinhados à esquerda.
- Garantir alto contraste em fundos escuros (`text-white/60` ou superior).

## 3. Espaçamentos (Paddings & Margens)
- **Padding Vertical de Seções:** `py-8 sm:py-12 md:py-20` (nunca `py-20` ou `py-32` fixos que geram grandes lacunas em celulares).
- **Margens entre Blocos:** `mb-6 sm:mb-10 md:mb-12` e `space-y-4 sm:space-y-6 md:space-y-8`.
- **Padding Interno de Cards:** `p-4 sm:p-6 md:p-8` (para evitar desperdício de espaço no mobile).
- **Margem de Botões CTA:** `mt-8 sm:mt-12 md:mt-20`.

## 4. Elementos Interativos e Tabelas
- **Cards e Links no Mobile:** Elementos interativos devem ter os botões/links visíveis no mobile sem depender de hover (`opacity-100 sm:opacity-0 sm:group-hover:opacity-100`).
- **Tabelas Responsivas:** Usar `overflow-x-auto`, padding de células reduzido (`px-2.5 sm:px-4 py-2.5 sm:py-3`), fontes numéricas `font-mono` (`text-xs sm:text-sm`) e `whitespace-nowrap`.
- **Cronômetros / Grids de 4 Colunas:** Garantir largura mínima segura em caixas (`min-w-[64px] sm:min-w-[80px]`) para não quebrar em telas de 320px/375px.
