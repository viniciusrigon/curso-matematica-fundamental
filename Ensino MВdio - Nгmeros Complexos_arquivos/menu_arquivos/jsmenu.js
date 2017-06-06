// Inicio dos detalhes
linka='';                  // Aparece em todos os links
thisPage='menu.htm';       // menu do frame esquerdo
imgPath='img/';            // Pasta das imagens das categorias
lev1img='yes';             // Quer imagens nas categorias?
lev1OpName='open.gif';     // nome da imagem aberta
lev1OpHeight='10';         // altura da imagem
lev1OpWidth='10';          // comprimento da imagem
lev1ClosName='closed.gif'; // nome da imagem fechada
lev1ClosHeight='10';       // image height
lev1ClosWidth='10';        // image width
lev2img='yes';             // Quer imagens nas sub-categorias?
lev2Name='base4.png';      // image name
// lev2Name='bullet.gif';  // image name
lev2Height='9';            // image height
lev2Width='10';            // image width
lev2Char='no';             // Caracter de texto nas sub-categorias?
bullet = '&#155; ';        // bullet character for level 2
base = 'dir';              // frame de saída
// Final dos detalhes

// Toma a variavel 'page' fora de URL
var x = 0
page = location.search.substr(1).split("?")
for (x=0;x<=page.length;x++) {eval(page)}
page = escape(page);
page = page.slice(7);

// nao alterar este bit
function subMenu(name,linkb) 
{
this.name = name;
this.linkb = linkb;
}
document.write('<BASE target="' + base + '">');

// menu com os dados
if (page=='matweb') {thisMenu = new Array();
thisMenu[0] = new subMenu('Detalhes do Projeto','matweb/projeto.htm');
thisMenu[1] = new subMenu('Roteiro dos links','matweb/roteiro.htm');
}
if (page=='alegria') {thisMenu = new Array();
thisMenu[0] = new subMenu('Raiz quadrada','alegria/raizquad/raizquad.htm');
thisMenu[1] = new subMenu('Aplic. da Matem&aacute;tica','alegria/aplic/aplicac.htm');
thisMenu[2] = new subMenu('Harmonia matem&aacute;tica','alegria/harm/harmonia.htm');
thisMenu[3] = new subMenu('Seq.Fibonacci: Propr.','alegria/fibon/seqfib1.htm');
thisMenu[4] = new subMenu('Seq.Fibonacci: Aplic.','alegria/fibon/seqfib2.htm');
thisMenu[5] = new subMenu('Jogos criativos','alegria/probl/pcriativ.htm');
thisMenu[6] = new subMenu('C&aacute;lculos r&aacute;pidos','alegria/probl/crapidos.htm');
thisMenu[7] = new subMenu('Plotador gr&aacute;fico','alegria/graf/graficos.htm');
thisMenu[8] = new subMenu('Problema do Burro','alegria/burro/burro.htm');
}
if (page=='finan') {thisMenu = new Array();
thisMenu[0] = new subMenu('Sistema alem&atilde;o','matfin/alemao.htm');
thisMenu[1] = new subMenu('Sistemas de amortiza&ccedil;&atilde;o','matfin/amortiza.htm');
thisMenu[2] = new subMenu('An&aacute;lise investimentos','matfin/analise.htm');
thisMenu[3] = new subMenu('Taxa Interna de Retorno','matfin/irr0.htm');
thisMenu[4] = new subMenu('Presta&ccedil;&atilde;o com car&ecirc;ncia','matfin/prestac2.htm');
thisMenu[5] = new subMenu('Fluxo de caixa','matfin/flcaixa.htm');
thisMenu[6] = new subMenu('Curso Mat. Financeira','matfin/matfina.htm');
thisMenu[7] = new subMenu('Taxa juros (Price)','matfin/taxafina.htm');
thisMenu[8] = new subMenu('Presta&ccedil;&atilde;o (Price)','matfin/prestac.htm');
}
if (page=='superior_g') {thisMenu = new Array();
thisMenu[0] = new subMenu('N&uacute;meros Reais','superior/nreais/nreais.htm');
thisMenu[1] = new subMenu('Consist&ecirc;ncia linear','superior/alglin/consist.htm');
thisMenu[2] = new subMenu('Somas Especiais','superior/somapot/somapot.htm');
thisMenu[3] = new subMenu('Regress&atilde;o Linear','superior/mmq/mmq.htm');
thisMenu[4] = new subMenu('Algebra Linear: gloss&aacute;rio','superior/alglin/glossario.htm');
}
if (page=='superior_c') {thisMenu = new Array();
thisMenu[0] = new subMenu('Limites de fun&ccedil;&otilde;es','superior/limites/limites.htm');
thisMenu[1] = new subMenu('Zero elevado a zero?','superior/zerozero/zero.htm');
thisMenu[2] = new subMenu('Continuidade','superior/continua/continua.htm');
thisMenu[3] = new subMenu('Derivadas (I)','superior/derivada/derivada1.htm');
thisMenu[4] = new subMenu('Derivadas (II)','superior/derivada/derivada2.htm');
thisMenu[5] = new subMenu('Integrais de fun&ccedil;&otilde;es','superior/integral/integral.htm');
thisMenu[6] = new subMenu('Aplic: Compr. de arco','superior/integral/integral1.htm');
thisMenu[7] = new subMenu('Aplic: Momento estático','superior/integral/integral2.htm');
thisMenu[8] = new subMenu('Aplic: Momento inércia','superior/integral/integral3.htm');
thisMenu[9] = new subMenu('Aplic: Área sup.revolucao','superior/integral/integral4.htm');
thisMenu[10] = new subMenu('Aplic: Volume solido rev.','superior/integral/integral5.htm');
thisMenu[11] = new subMenu('M&eacute;todo Frac. Parciais','superior/edo/fracparc.htm');
thisMenu[12] = new subMenu('Cilindro deitado','superior/cilide/cilide00.htm');
thisMenu[13] = new subMenu('Trigon. hiperb&oacute;lica','superior/trighip/trighip.htm');
}
if (page=='superior_m') {thisMenu = new Array();
thisMenu[0] = new subMenu('MaxMin: Roteiro geral','superior/maxmin/mm00.htm');
thisMenu[1] = new subMenu('MaxMin: Conceitos','superior/maxmin/mm01.htm');
thisMenu[2] = new subMenu('MaxMin: 1a.derivada','superior/maxmin/mm02.htm');
thisMenu[3] = new subMenu('MaxMin: 2a.derivada','superior/maxmin/mm03.htm');
thisMenu[4] = new subMenu('MaxMin: M&eacute;dias','superior/maxmin/mm04.htm');
thisMenu[5] = new subMenu('MaxMin: Apl.num&eacute;ricas','superior/maxmin/mm05.htm');
thisMenu[6] = new subMenu('MaxMin: Apl.geom&eacute;tricas','superior/maxmin/mm06.htm');
thisMenu[7] = new subMenu('MaxMin: Apl.pr&aacute;ticas','superior/maxmin/mm07.htm');
thisMenu[8] = new subMenu('MaxMin: Der.Impl&iacute;cita','superior/maxmin/mm08.htm');
}
if (page=='superior_e') {thisMenu = new Array();
thisMenu[0] = new subMenu('EDO: Fundamentos','superior/edo/edogeral.htm');
thisMenu[1] = new subMenu('EDO: primeira ordem','superior/edo/edo1ord.htm');
thisMenu[2] = new subMenu('EDO: segunda ordem','superior/edo/edo2ord.htm');
thisMenu[3] = new subMenu('EDO: Aplica&ccedil;&otilde;es','superior/edo/edoaplic.htm');
thisMenu[4] = new subMenu('EDO: Met. dAlembert','superior/edo/edodalam.htm');
thisMenu[5] = new subMenu('EDO: Eq.de Euler','superior/edo/edoeuler.htm');
thisMenu[6] = new subMenu('EDO: Redu&ccedil;&atilde;o ordem','superior/edo/edorord.htm');
thisMenu[7] = new subMenu('Transf. Laplace','superior/edo/laplace.htm');
thisMenu[8] = new subMenu('Edo (pdf)','superior/fourier/edo.pdf');
thisMenu[9] = new subMenu('Edp (pdf)','superior/fourier/edp.pdf');
thisMenu[10] = new subMenu('Exp_Matriz (pdf)','superior/fourier/expa.pdf');
thisMenu[11] = new subMenu('Transf. Laplace (pdf)','superior/fourier/laplace.pdf');
thisMenu[12] = new subMenu('S&eacute;ries Fourier (pdf)','superior/fourier/sfourier.pdf');
thisMenu[13] = new subMenu('Transf. Fourier (pdf)','superior/fourier/tfourier.pdf');
}
if (page=='medio') {thisMenu = new Array();
thisMenu[0] = new subMenu('Teoria de conjuntos','medio/201/conjunto.htm');
thisMenu[1] = new subMenu('Rela&ccedil;&otilde;es e fun&ccedil;&otilde;es','medio/202/mod202.htm');
thisMenu[2] = new subMenu('Exponenciais','medio/203/exponenc.htm');
thisMenu[3] = new subMenu('Exponenciais:Exerc.','medio/203/exponenca.htm');
thisMenu[4] = new subMenu('Logaritmos','medio/203/logaritm.htm');
thisMenu[5] = new subMenu('Logaritmos:Exerc.','medio/203/logaritma.htm');
thisMenu[6] = new subMenu('Sequ&ecirc;ncias Reais','medio/204/sequenc.htm');
thisMenu[7] = new subMenu('An&aacute;lise Combinat&oacute;ria','medio/205/combinat.htm');
thisMenu[8] = new subMenu('Combinat&oacute;ria:Exerc.','medio/205/combinata.htm');
thisMenu[9] = new subMenu('Matrizes','medio/206/matrizes.htm');
thisMenu[10] = new subMenu('Matriz 3x3','medio/206/matriz3x3.htm');
thisMenu[11] = new subMenu('Determinantes','medio/206/determinantes.htm');
thisMenu[12] = new subMenu('Sistemas Lineares','medio/206/sistemas.htm');
thisMenu[13] = new subMenu('Sistema 2x2','medio/206/sistema2x2.htm');
thisMenu[14] = new subMenu('Sistema 3x3','medio/206/sistema3x3.htm');
thisMenu[15] = new subMenu('N&uacute;meros Complexos','medio/213/ncomplex.htm');
thisMenu[16] = new subMenu('Produtos Not&aacute;veis','medio/215/prodnot.htm');
thisMenu[17] = new subMenu('Ra&iacute;zes equa&ccedil;.3o.grau','medio/215/raizes3g.htm');
thisMenu[18] = new subMenu('Equa&ccedil;&atilde;o do 3o. grau','medio/215/tartagli.htm');
thisMenu[19] = new subMenu('Ra&iacute;zes equa&ccedil;.2o.grau','medio/215/raizes2g.htm');
thisMenu[20] = new subMenu('Polin&ocirc;mios/Equa&ccedil;&otilde;es','medio/215/polinom.htm');
}
if (page=='gplana') {thisMenu = new Array();
thisMenu[0] = new subMenu('Geometria Plana','gplana/207/geometr.htm');
thisMenu[1] = new subMenu('Vetores no Plano','gplana/vetor2d/vetor2d.htm');
thisMenu[2] = new subMenu('Um tri&acirc;ngulo is&oacute;sceles','gplana/207/triso00.htm');
thisMenu[3] = new subMenu('Um tri&acirc;ngulo equil&aacute;tero','gplana/207/triequi.htm');
thisMenu[4] = new subMenu('C&iacute;rculos e arcos','gplana/208/mod208.htm');
thisMenu[5] = new subMenu('&Aacute;reas poligonais','gplana/209/mod209a.htm');
thisMenu[6] = new subMenu('Poligonais: Exerc.','gplana/209/exe209a.htm');
thisMenu[7] = new subMenu('&Aacute;reas circulares','gplana/209/mod209b.htm');
thisMenu[8] = new subMenu('Círculos: Exerc.','gplana/209/exe209b.htm');
thisMenu[9] = new subMenu('F&oacute;rmula de Heron','gplana/heron/heron.htm');
thisMenu[10] = new subMenu('Geometria anal&iacute;tica','gplana/214/ganalit.htm');
}
if (page=='gespac') {thisMenu = new Array();
thisMenu[0] = new subMenu('Vetores no Espa&ccedil;o R3','gespac/vetor3d.htm');
thisMenu[1] = new subMenu('Geometria Espacial','gespac/element.htm');
thisMenu[2] = new subMenu('No&ccedil;&atilde;o de Espa&ccedil;o','gespac/espaco.htm');
thisMenu[3] = new subMenu('Cilindros','gespac/cilindro.htm');
thisMenu[4] = new subMenu('Prismas','gespac/prisma.htm');
thisMenu[5] = new subMenu('Poliedros','gespac/poliedro.htm');
thisMenu[6] = new subMenu('Pir&acirc;mides','gespac/piramide.htm');
thisMenu[7] = new subMenu('Esferas','gespac/esfera.htm');
thisMenu[8] = new subMenu('Cones','gespac/cone.htm');
}
if (page=='fundam') {thisMenu = new Array();
thisMenu[0] = new subMenu('Sistemas numera&ccedil;&atilde;o','fundam/101/mod101.htm');
thisMenu[1] = new subMenu('N&uacute;meros naturais (I)','fundam/102/mod102.htm');
thisMenu[2] = new subMenu('N&uacute;meros naturais (II)','fundam/103/mod103a.htm');
thisMenu[3] = new subMenu('Nos.Naturais: Exerc.','fundam/103/exe103a.htm');
thisMenu[4] = new subMenu('Divisibilidade: crit&eacute;rios','fundam/103/mod103b.htm');
thisMenu[5] = new subMenu('Fra&ccedil;&otilde;es','fundam/104/mod104.htm');
thisMenu[6] = new subMenu('N&uacute;meros inteiros','fundam/105/mod105.htm');
thisMenu[7] = new subMenu('Fra&ccedil;&otilde;es decimais','fundam/106/mod106a.htm');
thisMenu[8] = new subMenu('Frac.decimais:Exerc.','fundam/106/exe106.htm');
thisMenu[9] = new subMenu('N&uacute;meros racionais','fundam/106/mod106b.htm');
thisMenu[10] = new subMenu('Equa&ccedil;&otilde;es: 1o. grau','fundam/107/mod107.htm');
thisMenu[11] = new subMenu('Raz&otilde;es e propor&ccedil;&otilde;es','fundam/108/mod108a.htm');
thisMenu[12] = new subMenu('Propor&ccedil;&otilde;es: Aplic.','fundam/108/mod108b.htm');
thisMenu[13] = new subMenu('Divis&atilde;o proporcional','fundam/108/mod108c.htm');
thisMenu[14] = new subMenu('Express. alg&eacute;bricas','fundam/109/mod109.htm');
thisMenu[15] = new subMenu('Equa&ccedil;&otilde;es: 2o. grau','fundam/111/mod111a.htm');
thisMenu[16] = new subMenu('Fun&ccedil;&atilde;o quadr&aacute;tica','fundam/111/mod111b.htm');
thisMenu[17] = new subMenu('Geometria elementar','fundam/112/mod112a.htm');
thisMenu[18] = new subMenu('Geometria: &Acirc;ngulos','fundam/112/mod112b.htm');
thisMenu[19] = new subMenu('Pol&iacute;gonos/Tri&acirc;ngulos','fundam/113/mod113.htm');
thisMenu[20] = new subMenu('Trigonometria usual','fundam/114/mod114.htm');
}
if (page=='conline') {thisMenu = new Array();
thisMenu[0] = new subMenu('Volume Elipsoidal','conline/elipsoid.htm');
thisMenu[1] = new subMenu('Volume cil&iacute;ndrico','conline/cilindro.htm');
thisMenu[2] = new subMenu('&Aacute;rea quadrilateral','conline/quadconv.htm');
thisMenu[3] = new subMenu('&Aacute;rea el&iacute;ptica','conline/elipse.htm');
thisMenu[4] = new subMenu('&Aacute;rea trapezoidal','conline/trapezio.htm');
thisMenu[5] = new subMenu('&Aacute;rea de Trapez&oacute;ide','conline/trapzoid.htm');
thisMenu[6] = new subMenu('Dias entre duas datas','conline/ddias.htm');
thisMenu[7] = new subMenu('Fatorial de n&uacute;mero','conline/fatorial.htm');
thisMenu[8] = new subMenu('N&uacute;mero perfeito','conline/perfeito.htm');
thisMenu[9] = new subMenu('Posi&ccedil;&atilde;o no. primo','conline/primos.htm');
thisMenu[10] = new subMenu('Restos de divis&otilde;es','conline/restos.htm');
thisMenu[11] = new subMenu('N&uacute;meros romanos','conline/romanos.htm');
}
if (page=='outros') {thisMenu = new Array();
thisMenu[0] = new subMenu('Calculadora b&aacute;sica','outros/calculad.htm');
thisMenu[1] = new subMenu('Livros matem&aacute;ticos','outros/bibliot.htm');
thisMenu[2] = new subMenu('Enviar e-mail','mailto:ulysses@sercomtel.com.br?subject=Matematica_Essencial');
}
