const html =
  "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";

function extrairInfo(texto) {
  // O nome das cidades avaliadas - as cidades estão entre os caracteres "*".
  const cidades = texto.match(new RegExp(/\*(.*?)\*/g));
  console.log("Cidades avaliadas:", cidades);

  console.log("-----------------------------------------------------");
  console.log("Conteúdo do roteiro A de cada cidade avaliada:");
  // O conteúdo do roteiro A de cada cidade avaliada - os roteiros A estão entre os caracteres "#Roteiro A" e "#"
  const roteirosA = texto.match(new RegExp(/#Roteiro A(.*?)\#/g));
  for (let i = 0; i < roteirosA.length; i++) {
    console.log(cidades[i], ":", roteirosA[i]);
  }

  console.log("-----------------------------------------------------");
  console.log("Quantos locais são citados no roteiro A de cada cidade:");
  // Quantos locais são citados no roteiro A de cada cidade - Os locais estão dentro de tags <br> e separados por ";".
  var quantidadeLocaisA = [];
  for (let i = 0; i < roteirosA.length; i++) {
    const locaisExtraidos = roteirosA[i].match(new RegExp(/<br>(.*?)\<br>/g));
    const locais = locaisExtraidos[0].split(";").length;
    quantidadeLocaisA.push(locais);
  }
  for (let i = 0; i < roteirosA.length; i++) {
    console.log(cidades[i], ":", quantidadeLocaisA[i]);
  }

  console.log("-----------------------------------------------------");
  console.log("O nome dos pontos turísticos:");
  // O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo
  // 1 - Pegar todo o texto da cidade de SP
  const saoPaulo = texto.match(new RegExp(/São Paulo(.*?)\Roteiros/g));
  // 2 - Pegar o texto do bairro centro
  const centroSP = saoPaulo[0].match(new RegExp(/Centro(.*?)\#/g));
  // 3 - Separar os locais do bairro centro
  const locaisCentroSP = centroSP[0]
    .replace("Centro<br>", "")
    .replace("<br>#", "")
    .split(";");
  console.log("Locais centro de SP:", locaisCentroSP);

  // O nome dos pontos turísticos localizados no bairro Downtown na cidade de Los Angeles.
  // 1 - Pegar todo o texto da cidade de SP
  const lasVegas = texto.match(new RegExp(/Las Vegas(.*?)\Roteiros/g));
  // 2 - Pegar o texto do bairro centro
  const centroLasVegas = lasVegas[0].match(new RegExp(/Downtown(.*?)\#/g));
  // 3 - Separar os locais do bairro centro
  const locaisCentroLasVegas = centroLasVegas[0]
    .replace("Downtown<br>;", "")
    .replace("; <br>#", "")
    .split(";");
  console.log("Locais Downtown de Las Vegas:", locaisCentroLasVegas);

  console.log("Grupo 24");
  console.log("Isabelle Rodrigues Santos (rm96065)");
  console.log("Mateus Ferreira Gaspar de Miranda (rm94853)");
  console.log("Rebeca Alves Sousa (rm96110)");
  console.log("Victor Juaci Aquino de Medeiros (rm93913)");
  console.log("Vinícius Gabriel Bernardes dos Santos (rm95220)");
}

extrairInfo(html);