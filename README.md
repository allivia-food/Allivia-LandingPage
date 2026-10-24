# Allivia

Landing page estática em HTML, CSS e JavaScript, baseada no protótipo em `designLanding/Lading Page - Allivia.png`.

## Abrir a página

Abra `index.html` no navegador. Não é necessário instalar dependências ou compilar o projeto. Também é possível servir a pasta com um servidor HTTP estático de sua preferência.

## Conteúdo

- `index.html`: apresentação, funcionalidades, favoritos, equipe e rodapé.
- `styles.css`: fontes locais, paleta, composição e adaptações para tablet e celular.
- `script.js`: menu móvel e indicação da seção atual na navegação.
- `designLanding/`: protótipo e recursos visuais originais.

Os dois botões “Baixar” permanecem desabilitados, com opacidade de 40%, e exibem “Disponivel em breve” logo abaixo em Nunito SemiBold de 10,2px. Os contatos no rodapé abrem o e-mail e o Instagram. O texto de termos e privacidade não tem link, pois ainda não foi fornecido um documento.

As imagens originais permanecem em PNG. O ícone de menu e a seta do botão são SVG. A página não depende de fontes, bibliotecas ou serviços externos para renderizar.

## Publicação

Use uma hospedagem de arquivos estáticos, sem comando de build. A pasta publicada deve conter `index.html`, `styles.css`, `script.js` e as subpastas `designLanding/icones`, `designLanding/fonts` e `designLanding/paletaLogo`, mantendo os nomes e a estrutura. Os caminhos relativos permitem publicar na raiz de um domínio ou em uma subpasta.

Não é necessário enviar o protótipo `designLanding/Lading Page - Allivia.png`, o arquivo `instructions.txt`, este README ou a pasta `.git` para a hospedagem.

## Verificação antes de publicar

- Verifique a sintaxe do JavaScript com `node --check script.js`, se o Node.js estiver instalado.
- Confira o layout em desktop, tablet e celular, principalmente próximo aos limites de 900px e 560px.
- No celular, confirme os dois tópicos por linha na seção de funcionalidades, o terceiro centralizado e o botão da seção de favoritos centralizado.
- Teste o menu por teclado: abrir, navegar, fechar com Escape e seguir os links. A navegação também deve estar disponível com JavaScript desabilitado.
- Confira o carregamento das imagens e fontes e os links de e-mail e Instagram após a publicação.
