import './App.css';
import { BsPinMap } from "react-icons/bs";
import { AiFillLinkedin,  AiFillYoutube, AiOutlineTwitter, AiOutlineMenu, AiOutlineUser, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import Logo1 from './Img/logoBlack.webp'
import Logo2 from './Img/logo2.webp'
import moto1 from './Img/img2.webp'
import moto2 from './Img/img3.webp'
import moto3 from './Img/img4.webp'
import moto4 from './Img/img5.webp'
import bannermoto1 from './Img/img7.webp'
import bannermoto2 from './Img/img8.jpg'
import serviço1 from './Img/img9.webp'
import serviço2 from './Img/img10.webp'
import serviço3 from './Img/img11.webp'
import logojapones from './Img/logojapones.webp'
import bannerpeças from './Img/lojabanner.webp'
import shop1 from './Img/loja1.webp'
import shop2 from './Img/loja2.webp'
import shop3 from './Img/loja3.webp'
import shop4 from './Img/loja4.webp'
import shop5 from './Img/loja5.webp'
import shop6 from './Img/loja6.webp'
import shop7 from './Img/loja7.webp'
import shop8 from './Img/loja8.webp'
import shop9 from './Img/loja9.webp'
import shop10 from './Img/loja10.webp'
import shop11 from './Img/loja11.webp'
import shop12 from './Img/loja12.webp'
import bannerserviço from './Img/img14.jpg'
import mecanico from './Img/img15.webp'
import pç from './Img/img16.webp'
import cor from './Img/img17.webp'
import yamahaprice from './Img/img19.webp'
import revisaopreco from './Img/img18.webp'
import qr from './Img/qrcode.png'
import app1 from './Img/img20.webp'
import app2 from './Img/img21.webp'
import r3 from './Img/r3abs.jpg'
import r3abs from './Img/bannerr3.png'
import r3abs1 from './Img/r31.webp'
import tec1 from './Img/tec1.webp'
import tec2 from './Img/tec2.webp'
import tec3 from './Img/tec3.webp'
import r3roxa from './Img/r3roxa.png'
import r3azul from './Img/r3azul.png'
import oi from './Img/oi.jpg'
import mt1 from './Img/mt-03/img1.webp'
import mt2 from './Img/mt-03/img2.webp'
import mt3 from './Img/mt-03/img3.webp'
import mt4 from './Img/mt-03/img4.webp'
import mt5 from './Img/mt-03/img5.webp'
import mt6 from './Img/mt-03/img6.webp'
import mt7 from './Img/mt-03/img7.webp'
import mt8 from './Img/mt-03/img8.webp'
import mt9 from './Img/mt-03/img9.webp'
import mt10 from './Img/mt-03/img10.webp'
import mtcor1 from './Img/mt-03/mtcor1.png'
import mtcor2 from './Img/mt-03/mtcor2.png'
import mtcor3 from './Img/mt-03/mtcor3.png'
import R31 from './Img/r3-60/img1.webp'
import R32 from './Img/r3-60/img2.webp'
import R33 from './Img/r3-60/img3.webp'
import R34 from './Img/r3-60/img4.webp'
import R35 from './Img/r3-60/img5.webp'
import R36 from './Img/r3-60/img6.webp'
import R37 from './Img/r3-60/img7.webp'
import R38 from './Img/r3-60/img8.webp'
import r3cor from './Img/r3-60/r3cor.png'
import mt71 from './Img/mt-07/img1.webp'
import mt72 from './Img/mt-07/img2.webp'
import mt73 from './Img/mt-07/img3.webp'
import mt74 from './Img/mt-07/img4.webp'
import mt75 from './Img/mt-07/img5.webp'
import mt76 from './Img/mt-07/img6.webp'
import mt77 from './Img/mt-07/img7.webp'
import mt7cor1 from './Img/mt-07/imgcor1.png'
import mt7cor2 from './Img/mt-07/imgcor2.png'
import mt7cor3 from './Img/mt-07/imgcor3.png'
import localbanner from './Img/concesionaria.jpg'



function color() {
  const color = document.getElementById('menu-bar')
  color.style.background = "white"
}

function colorOut() {
  closeAllTitle()
  const color = document.getElementById('menu-bar')
  color.style.background = "rgba(255, 255, 255, 0.007)"
}

function closeAll(){
  const close1 = document.getElementById('Main')
  close1.style.display = 'none'
  const close2 = document.getElementById('Shop')
  close2.style.display = 'none'
  const close3 = document.getElementById('Serviço')
  close3.style.display = 'none'
  const close4 = document.getElementById('R3abs')
  close4.style.display = 'none'
  const close5 = document.getElementById('Mt-03')
  close5.style.display = 'none'
  const close6 = document.getElementById('R3-60')
  close6.style.display = 'none'
  const close7 = document.getElementById('Local')
  close7.style.display = 'none'
  const close8 = document.getElementById('Mt-07')
  close8.style.display = 'none'
}

function closeAllTitle(){
  const close1 = document.getElementById('yamaha')
  close1.style.display = 'none'
  const close2 = document.getElementById('motos')
  close2.style.display = 'none'
}

function openServiço(){
  closeAll()
  const open = document.getElementById('Serviço')
  open.style.display = "block"
}

function openShop(){
  closeAll()
  const open = document.getElementById('Shop')
  open.style.display = "block"
}

function openMap(){
  closeAll()
  const open = document.getElementById('Local')
  open.style.display = "block"
}

function openYamaha(){
  closeAll()
  const open = document.getElementById('Main')
  open.style.display = "block"
}

function openR3(){
  closeAll()
  const open = document.getElementById('R3abs')
  open.style.display = "block"
}

function openR360(){
  closeAll()
  const open = document.getElementById('R3-60')
  open.style.display = "block"
}

function openmt3(){
  closeAll()
  const open = document.getElementById('Mt-03')
  open.style.display = "block"
}

function openmt7(){
  closeAll()
  const open = document.getElementById('Mt-07')
  open.style.display = "block"
}

function open1(){
  closeAllTitle()
  const close = document.getElementById('motos')
  close.style.display = "block"
}

function open2(){
  closeAllTitle()
  const close1 = document.getElementById('serviços')
  close1.style.display = "block"
}

function open3(){
  closeAllTitle()
  const close1 = document.getElementById('yamaha')
  close1.style.display = "block"
}

function colorMoto1() {
  var img = document.getElementById("img-moto-cor");
  img.src = r3roxa
}

function colorMoto2() {
  var img = document.getElementById("img-moto-cor");
  img.src = r3azul
}

function colormt71() {
  var img = document.getElementById("img-moto-cor-mt7");
  img.src = mt7cor2

}

function colormt72() {
  var img = document.getElementById("img-moto-cor-mt7");
  img.src = mt7cor3

}

function colormt73() {
  var img = document.getElementById("img-moto-cor-mt7");
  img.src = mt7cor1

}

function colormt1() {
  var img = document.getElementById("img-moto-cor-mt-3");
  img.src = mtcor1

}

function colormt2() {
  var img = document.getElementById("img-moto-cor-mt-3");
  img.src = mtcor2

}

function colormt3() {
  var img = document.getElementById("img-moto-cor-mt-3");
  img.src = mtcor3

}

const MenuBar = () =>
  <section className='menu-top' onMouseLeave={colorOut} onMouseOut={color}>
    <section className='menu-bar' id='menu-bar' >
      <div className='icon-logo' onClick={openYamaha}>{false ? <img src={Logo1}></img> : <img src={Logo2}></img>}</div>
      <div className='seçao-all-button'>
        <button className='seçoes-btn' onClick={openYamaha} onMouseMove={open1}>MOTOS</button>
        <button className='seçoes-btn' onClick={openShop}>PEÇAS</button>
        <button className='seçoes-btn' onClick={openServiço} >SERVIÇOS</button>
        <button className='seçoes-btn' onClick={openMap}>CONCESSIONÁRIAS</button>
        <button className='seçoes-btn' onClick={openYamaha}>YAMAHA</button>
      </div>
      <div className='menu-end'>
        
      </div>
    </section>
    <section id='motos'>
      <section className='motos-barra-menu'>
        <ul className='seçao-menu'>
          <div className='title-model'>SUPER SPORT</div>
          <li className='name-model' onClick={openR3} >R3 ABS</li>
          <li className='name-model' onClick={openR360}>R3 60TH ANNIVERSARY</li>
        </ul>
        <div className='bar-menu'></div>
        <ul className='seçao-menu'>
          <div className='title-model'>MT S</div>
          <li className='name-model' onClick={openmt3}>MT-03 ABS</li>
          <li className='name-model' onClick={openmt7}>MT-07 ABS</li>
        </ul>
        <div className='bar-menu'></div>
        <ul className='seçao-menu'>
          <div className='title-model' onClick={openmt7}>SPORT TOURING</div>
          <li className='name-model' onClick={openmt7}>TRACER 900 GT ABS</li>
          <li className='name-model' onClick={openmt7}>NMAX 160 ABS STAR WARS</li>
          <li className='name-model' onClick={openmt7}>LANDER 250 CAPITÃO AMÉRICA</li>
        </ul>
      </section>
    </section>
    <section id='yamaha'>
      <section className='menu-serviços-yamaha'>
        <ul className='ul-menu'>
          <li className='li-menu'>HISTÓRIA</li>
          <div className='bar-serviços'></div>
          <li className='li-menu'>RÉPLICA RED DRAGONFLY</li>
          <div className='bar-serviços'></div>
          <li className='li-menu'>IMPRENSAL</li>
          <div className='bar-serviços'></div>
          <li className='li-menu'>YRA - YAMAHA RIDING ACADEMY</li>
          <div className='bar-serviços'></div>
          <li className='li-menu'>RACING</li>
        </ul>
      </section>
    </section>
  </section>

const Btncompra = () =>
  <div className='btn-compra-confimar'>
    <div className='btn-icon'></div>
    <div className='btn-text'>COMPRE ONLINE</div>
  </div>

const Motos = () =>
  <section className='motos' >
    <Btncompra />
  </section>

const FirstPage = () =>
  <section id='Main' className='first-page' >
    <Motos />
    <div className='banner'>
      <div className='banner-title'>ESCOLHA A SUA YAMAHA</div>
      <div className='banner-comments'>Existe uma para cada atitude</div>
    </div>
    <div className='menu-moto'>
      <div className='card-moto' onClick={openR3} >
        <img className='img-card-moto' src={moto1}></img>
        <div className='type-moto'>SUPERSPORT</div>
        <div className='name-moto'>R3 ABS</div>
      </div>
      <div className='card-moto'onClick={openR360} >
        <img className='img-card-moto' src={moto2}></img>
        <div className='type-moto'>SUPERSPORT</div>
        <div className='name-moto'>R3 ABS 60TH</div>
      </div>
      <div className='card-moto' onClick={openmt3} >
        <img className='img-card-moto' src={moto3}></img>
        <div className='type-moto'>MT SERIES</div>
        <div className='name-moto'>MT-03 ABS</div>
      </div>
      <div className='card-moto' onClick={openmt7} >
        <img className='img-card-moto' src={moto4}></img>
        <div className='type-moto'>MT SERIES</div>
        <div className='name-moto'>MT-07 ABS</div>
      </div>
    </div>
    <div className='banner-moto-serviços'>
      <div className='banners'>
        <img className='banner-moto' src={bannermoto1}></img>
        <img className='banner-moto' src={bannermoto2}></img>
      </div>
      <div className='banner-title'>PARA CUIDAR DA SUA YAMAHA</div>
      <div className='section-serviços'>
        <div className='card-serviços'>
          <img className='img-serviço' src={serviço1}></img>
          <div className='text-serviços-title'>SERVIÇOS YAMAHA</div>
          <div className='text-serviços-comments'>Escolha o plano de manutenção que cabe no seu orçamento e agende seu serviço on-line.</div>
        </div>
        <div className='card-serviços'>
          <img className='img-serviço' src={serviço2}></img>
          <div className='text-serviços-title'>PEÇAS GENUÍNAS</div>
          <div className='text-serviços-comments'>Escolha peças genuínas Yamaha e mantenha o DNA da sua motocicleta 100% original.</div>
        </div>
        <div className='card-serviços'>
          <img className='img-serviço' src={serviço3}></img>
          <div className='text-serviços-title'>YAMALUBE</div>
          <div className='text-serviços-comments'>Conheça o lubrificante genuíno Yamaha, excelente para todas as marcas de moto.</div>
        </div>
      </div>
      <div className='banner-seçoes'>
        <div className='banner-card-1'>
          <div className='banner-text-compra'>BLU COLLECTION</div>
          <div className='banner-text-comments'>FRETE GRÁTIS PARA TODO BRASIL</div>
        </div>
        <div className='banner-card-2'>
          <div className='banner-text-compra'>YAMAHA RACING BRASIL</div>
          <div className='banner-text-comments'>A competição faz parte do nosso DNA</div>
        </div>
      </div>
    </div>
    <div className='banner-japones'>
      <img className='logo-japones' src={logojapones}></img>
      <div className='text-japones'>Kando é uma palavra em japonês que descreve os sentimentos simultâneos de profunda satisfação e intenso entusiasmo que experimentamos quando encontramos algo de valor excepcional.</div>
    </div>
  </section>

const Footer = () =>
  <section className='footer'  >
    <div className='logo-yamaha'>YAMAHA MOTOR DO BRASIL</div>
    <div className='social-icons'>
      <div className='socias-icons'><AiFillFacebook className='socias-icons' /></div>
      <div className='socias-icons'><AiOutlineInstagram className='socias-icons' /></div>
      <div className='socias-icons'><AiOutlineTwitter className='socias-icons' /></div>
      <div className='socias-icons' ><AiFillYoutube className='socias-icons' /></div>
      <div className='socias-icons'><AiFillLinkedin className='socias-icons' /></div>
    </div>
    <div className='page-link'>
      <ul>
        <li>Serviços Financeiros</li>
        <li>Concessionárias</li>
        <li>Ética e Normas</li>
        <li>Nossa História</li>
        <li>Trabalhe Conosco</li>
        <li>Manuais e Catálogos</li>
      </ul>
      <div className='line'></div>
      <ul>
        <li>Termos de Uso</li>
        <li>Aviso de Privacidade</li>
        <li>Política de Privacidade para Candidatos</li>
        <li>Política de Segurança Cibernética</li>
        <li>Política de Qualidade Ambiental</li>
        <li>Canal de Denúncia</li>
        <li>Recall</li>
        <li>Contato</li>
      </ul>
      <div className='line'></div>
      <ul className='link-small'>
        <li>YAMAHA NAÚTICA</li>
        <li>YAMAHA MUSICAL</li>
        <li>RED DRAGONFLY</li>
      </ul>
    </div>
    <div className='sub-title'>Essa paguina é uma copia do site da Yamaha, desenvolvido para fins de educacionais.</div>
  </section>

const Shop = () =>
  <section className='shop' id='Shop'>
    <img className='banner-shop' src={bannerpeças}></img>
    <div className='shop-pc'>
      <div className='title-shop'>CONHEÇA NOSSA LINHA DE PRODUTOS</div>
      <div className='line-card'>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop1}></img>
          <div className='descrição-iten-shop'>Óleo lubrificante Yamalube</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 46,00</div>
          <di className='shop-apartir'>4 X DE 12,00 COM JUROS</di>
        </div>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop3}></img>
          <div className='descrição-iten-shop'>Junta de cabeçote</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 182,00</div>
          <di className='shop-apartir'>12 X DE 17,90 COM JUROS</di>
        </div>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop4}></img>
          <div className='descrição-iten-shop'>Suporte de placa</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 80,00</div>
          <di className='shop-apartir'>8 X DE 10,00 COM JUROS</di>
        </div>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop5}></img>
          <div className='descrição-iten-shop'>Pedal de freio</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 252,79</div>
          <di className='shop-apartir'>12 X DE 24,83 COM JUROS</di>
        </div>
      </div>
      <div className='line-card'>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop6}></img>
          <div className='descrição-iten-shop'>Pisca traseira direito</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 95,16</div>
          <di className='shop-apartir'>11 X DE 10,03 COM JUROS</di>
        </div>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop7}></img>
          <div className='descrição-iten-shop'>Jogo de anéis do pistão</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 271,46</div>
          <di className='shop-apartir'>12 X DE 26,66 COM JUROS</di>
        </div>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop8}></img>
          <div className='descrição-iten-shop'>Radiador</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 1.740,13,00</div>
          <di className='shop-apartir'>12 X DE 170,91 COM JUROS</di>
        </div>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop9}></img>
          <div className='descrição-iten-shop'>Paralama diantero</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 339,86</div>
          <di className='shop-apartir'>12 X DE 33,38 COM JUROS</di>
        </div>
      </div>
      <div className='line-card'>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop10}></img>
          <div className='descrição-iten-shop'>Tampa superios do tanque</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 112,06</div>
          <di className='shop-apartir'>12 X DE 11,01 COM JUROS</di>
        </div>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop11}></img>
          <div className='descrição-iten-shop'>Protetor do escapamento</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 155,72</div>
          <di className='shop-apartir'>11 X DE 10,03 COM JUROS</di>
        </div>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop12}></img>
          <div className='descrição-iten-shop'>Farol completo</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 1.116,46</div>
          <di className='shop-apartir'>12 X DE 109,66 COM JUROS</di>
        </div>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop2}></img>
          <div className='descrição-iten-shop'>Óleo lubrificante Yamalube</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 46,00</div>
          <di className='shop-apartir'>4 X DE 12,00 COM JUROS</di>
        </div>
      </div>
    </div>
    <div className='text-atençao'>AVISO DE FRAUDE</div>
    <div className='text-atençao-description'>A Yamaha informa que os seus produtos são comercializados por meio das concessionárias autorizadas da marca e/ou através do seu e-commerce oficial, não sendo realizadas vendas para o consumidor final por telefone, funcionários ou quaisquer outros tipos de parceiros e/ou representantes comerciais, bem como outros sites da internet.</div>
  </section>

const Serviço = () =>
  <section className='erviço' id='Serviço'>
    <img className='banner-serviço' src={bannerserviço}></img>
    <div className='sinops-banner'>
      <div className='text-title-serviço'>YAMAHA SERVIÇOS</div>
      <div className='text-title-serviços-coments'>Oferece todo o cuidado necessário para a sua motocicleta, através de mecânicos certificados pela Academia Técnica Yamaha - YTA, das peças genuínas e do melhor lubrificante de motor, o YAMALUBE. Tudo isso para assegurar o máximo em desempenho, durabilidade e economia a longo prazo, além de manter a Garantia e favorecer a qualificação e valorização no Programa de Seminovas, GO! Yamaha. Assim construímos a nossa missão corporativa, assegurando experiências KANDO para todos os nossos clientes.</div>
    </div>
    <div className='banner-card-serviçe'>
      <div className='card-serviçe'>
        <img className='card-img-serviçe' src={mecanico}></img>
        <div className='text-card-serviçe'>MECÂNICOS CERTIFICADOS YTA</div>
        <div className='text-card-coments-serviçe'>O programa Yamaha Technical Academy assegura a capacitação dos mecânicos das concessionárias autorizadas Yamaha.</div>
      </div>
      <div className='card-serviçe'>
        <img className='card-img-serviçe' src={pç}></img>
        <div className='text-card-serviçe'>PEÇAS GENUÍNAS YAMAHA</div>
        <div className='text-card-coments-serviçe'>Atendem a rígidos padrões de qualidade, desde a concepção do projeto até a fabricação, para manter o melhor desempenho da sua Yamaha.</div>
      </div>
      <div className='card-serviçe'>
        <img className='card-img-serviçe' src={cor}></img>
        <div className='text-card-serviçe'>YAMALUBE</div>
        <div className='text-card-coments-serviçe'>O lubrificante que é projetado pelos nossos engenheiros de motores para extrair o máximo de desempenho da sua Yamaha.</div>
      </div>
    </div>

    <div className='line-revisao'></div>
    <div className='banner-revisao-serviçe'>
      <div className='text-banner-revisao-serviçe'>
        <img className='img-revisao' src={yamahaprice}></img>
        <div className='text-comments-revisao'>A revisão periódica é fundamental para o cuidado da sua Yamaha, e com a Revisão Preço Fixo você sabe quanto vai pagar da 1ª até a 7ª revisão.
          Esse é o Cuidado Especializado Yamaha.</div>
      </div>
      <img className='banner-img-resisão' src={revisaopreco}>
      </img>
    </div>
    <div className='line-revisao'></div>
    <div className='text-agenda-revisao'>BAIXE O APP BLU CLUB E AGENDE SUA REVISÃO!</div>
    <div className='banner-qr-code'>
      <img className='img-code' src={qr} ></img>
      <div>
        <div className='text-code'>Aponte a câmera de seu smartphone para o QRcode ou clique abaixo para fazer o download do app!</div>
        <div className='app-banner'>
          <img className='app-img' src={app1}></img>
          <img className='app-img' src={app2}></img>
        </div>
      </div>

    </div>
    <div className='text-atençao'>AVISO DE FRAUDE</div>
    <div className='text-atençao-description'>A Yamaha informa que os seus produtos são comercializados por meio das concessionárias autorizadas da marca e/ou através do seu e-commerce oficial, não sendo realizadas vendas para o consumidor final por telefone, funcionários ou quaisquer outros tipos de parceiros e/ou representantes comerciais, bem como outros sites da internet.</div>

  </section>

const R3ABS = () =>
  <section id='R3abs' >
    <div className='r3abs'>
      <div className='text-r3'>R3 ABS</div>
      <div className='text-descriçao-r3'>A MOTO SUPERSPORT PARA TODOS OS DIAS</div>
    </div>
    <div className='flex banner-r3 '>
      <div className='banner-text-performace'>
        <div className='banner-perfomace'>PERFORMANCE</div>
        <div className='motor-bi'>MOTOR BICILÍNDRICO</div>
        <div className='banner-coments-performace'>A performance esportiva que você sempre buscou. Com 321 cc, desenvolve 42 cv e 3,0 kgf.m de torque. Conta com a exclusiva tecnologia DiASil que contribui para menor vibração, melhor dissipação de calor e ganho de performance.</div>
      </div>
      <iframe width="1090" height="500" src="https://www.youtube.com/embed/yaNEa4YRkIg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <img className='img-banner-tecnology' src={r3abs}></img>
    <div className='flex'>
      <div className='box-tecnology-1'>
        <div className='text-tecnology'>"TECNOLOGIA</div>
        <div className='text-comments-tecnology'>PAINEL 100% DIGITAL COM SHIFT LIGHT</div>
      </div>
      <div className='box-tecnology-2'>
        Projetado para auxiliar sua performance, o painel da R3 é o único da categoria que possui a luz indicativa Shift Light personalizável, que indica o melhor momento para a troca de marchas.
      </div>
    </div>
    <div className='flex img-banner-tec'>
      <img className='img-tec' src={tec1}></img>
      <img className='img-tec' src={tec2}></img>
      <img className='img-tec' src={tec3}></img>
    </div>
    <div className='flex'>
      <div className='box-tecnology-1'>
        <div className='text-tecnology'> "CONFORTO</div>
        <div className='text-comments-tecnology'>PILOTE TODOS OS DIAS</div>
      </div>
      <div className='box-tecnology-2'>
        Sua posição de pilotagem esportiva é complementada pela nova suspensão dianteira invertida e amortecedor traseiro, com 7 regulagens na pré-carga da mola, proporcionando equilíbrio perfeito entre performance, agilidade e conforto.
      </div>
    </div>
    <img className='img-banner-tecnology' src={r3abs1}></img>
    <div className='flex'>
      <div className='box-tecnology-1'>
        <div className='text-tecnology'> "DESIGN</div>
        <div className='text-comments-tecnology'>AERODINÂMICA SUPERESPORTIVA</div>
      </div>
      <div className='box-tecnology-2'>
        Seu visual traz o DNA da R series Yamaha. O novo para-brisa, entrada de ar frontal e carenagens laterais reduziram a resistência e turbulência do vento, fazendo a Nova R3 atingir até 8km/h a mais de velocidade final que o modelo anterior.
      </div>
    </div  >
    <div className='frame'>
      <iframe width="1060" height="615" src="https://www.youtube.com/embed/NABIP1_uwFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div className='flex'>
      <img className='img-premiaçao' src={r3}></img>
      <div className='banner-text-performace banner-text-performace-2 '>
        <div className='banner-perfomace'>RECONHECIMENTO</div>
        <div className='motor-bi'>PREMIAÇÕES</div>
        <div className='banner-coments-performace'>A R3 foi eleita pela quarta vez como a Melhor Esportiva de 250 a 500 cc do Brasil na premiação, concedida em 2022 pela Revista MotoPremium. A opinião de consumidores e jornalistas especializados se somam para definir os ganhadores de cada categoria.</div>
      </div>
    </div>
    <div className='moto-color flex'>
      <div className='select-moto'>
        <div className='title-select'>OLHE MAIS DE PERTO
        </div>
        <div className='coments-select'>Escolha a versão que mais combina com você.
        </div>
        <div className='btn-cor roxo' onClick={colorMoto1}></div>
        <div className='mots'><span>PHANTON PURPLE</span><br />
          Roxo Metálico</div>
        <div className='btn-cor azul' onClick={colorMoto2}></div>
        <div className='mots'><span>RACING BLUE</span><br /> Azul Metálico</div>
      </div>
      <img id='img-moto-cor' src={r3roxa} ></img>
    </div>
    <img className='r3-sale' src={oi}></img>
    <div className='r3-sale-text'>
      <div className='text-sale-1'>R3 ABS</div>
      <div className='line-sales'></div>
      <div className='flex'>
        <div>
          <div className='text-sale-2'>A PARTIR DE</div>
          <div className='text-sale-2'>R$</div>
        </div>
        <div className='text-sale-3'>32.890,00</div>
      </div>
      <div className='line-sales'></div>
      <div className='text-sale-4'>FRETE DE ACORDO COM A REGIÃO</div>
    </div>
    <div className='r3-seles'></div>
    <div className='tabela-financiamento'>
      <div className='financia'>FINANCIAMENTO</div>
      <div className='flex tabela-1'>
        <div className='text-finan-1'>ENTRADA</div>
        <div className='text-finan-2'>R$  10.241, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>SALDO</div>
        <div className='text-finan-2'>12x de</div>
        <div className='text-finan-2'>R$  2.071, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>TAXA</div>
        <div className='text-finan-2'>ZERO</div>
      </div>
      <div className='line-tabela'></div>
      <div className='flex tabela-1'>
        <div className='text-finan-1'>ENTRADA</div>
        <div className='text-finan-2'>R$  10.241, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>SALDO</div>
        <div className='text-finan-2'>36x de</div>
        <div className='text-finan-2'>R$  824, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>TAXA</div>
        <div className='text-finan-2'>0,99% a.m.</div>
      </div>
      <div className='simule-financiamento'>SIMULE O SEU FINANCIAMENTO</div>
    </div>
    <div className='text-modelo'>
      "Modelo YZF-R3 modelo 2024. Preço Público Sugerido: R$ 32.890,00 à vista, sem frete. Preço de Venda R$ 34.135,00 à vista (base ICMS 12%) com frete incluso no valor de R$ 1.245,00, ou financiamento na modalidade de CDC em 12 meses: Entrada de R$ 10.241,00 (30%) e parcelas mensais fixas e sucessivas de R$ 2.071,00. Taxa de juros de 0% a.m. e 0% a.a. Custo efetivo total (CET). Ou em 36 meses: Entrada de R$ 10.241,00 (30%) e parcelas mensais fixas e sucessivas de R$ 824,00. Taxa de juros de 0,99% a.m. e 13% a.a. Custo efetivo total (CET) 15,65% a.a., IOF no valor de R$ 94,08. Valor total a ser financiado R$ 24.851,08 e valor final total (com encargos de financiamento) de R$ 39.905,00. Para o cálculo da CET foi considerada a tarifa de cadastro de R$ 600,00, valor de IOF informado em cada condição e valor médio de registro de contrato de R$ 263,00. O valor da taxa de registro de contrato praticado em cada Estado altera o valor da parcela de financiamento divulgada. Confira o valor da taxa de registro de contrato vigente e ICMS no Estado de emplacamento da motocicleta no ato da compra. Em caso de inadimplência, é permitida a cobrança de: Multa moratória de 2% mais juro de mora de 1% + taxa de juros remuneratórios pactuados no contrato ao mês (resolução 4558 do Banco Central). Conforme Art.52, § 2º da Lei Fed. 8.078/90, do Código de Defesa do Consumidor fica assegurado ao consumidor à liquidação antecipada do débito total ou parcialmente, mediante redução proporcional dos juros e demais acréscimos. As Condições gerais da Cédula de Crédito Bancário Operações de Financiamento de Bens está disponível no site do Banco Yamaha. Carência de 30 dias para pagamento da primeira parcela de financiamento. Condições válidas exclusivamente para financiamentos realizados pelo Banco Yamaha Motor do Brasil S.A. (https://www.yamahaservicosfinanceiros.com.br/banco.De 01/05/2023 a 31/05/2023, limitados a 50 unidades de cada modelo (independente do plano de financiamento). Crédito sujeito à aprovação. Apenas nas concessionárias participantes. As motocicletas Yamaha estão em conformidade com o los e Veículos Similares). BANCO YAMAHA MOTOR DO BRASIL S.A. Rod. Pres. Dutra, Km 214 - Guarulhos - SP - Brasil – CEP 07178-580 -SAC Produtos: (11) 2431-6500 - sac@yamaha-motor.com.br. Central de Relacionamento com o Cliente Banco: (11) 2088-7700 – SAC Banco: 0800-774-8283 - sac.banco@yamaha-motor.com.br. SAC - Atendimento ao Deficiente Auditivo ou de Fala: 0800-774-1415. Ouvidoria: 0800-774-9000 - ouvidoria@yamaha-motor.com.br. NO TRÂNSITO, SUA RESPONSABILIDADE SALVA VIDAS "
    </div>
    <div className='text-atençao m-0'>AVISO DE FRAUDE</div>
    <div className='text-atençao-description'>A Yamaha informa que os seus produtos são comercializados por meio das concessionárias autorizadas da marca e/ou através do seu e-commerce oficial, não sendo realizadas vendas para o consumidor final por telefone, funcionários ou quaisquer outros tipos de parceiros e/ou representantes comerciais, bem como outros sites da internet.</div>

  </section>

const Mt03 = () =>
  <section id='Mt-03' >
    <div className='mt-03'>
      <div className='text-r3'>MT-03</div>
      <div className='text-descriçao-r3'>A MOTO MASTER OF TORQUE</div>
    </div>
    <div className='flex banner-r3 '>
      <div className='banner-text-performace'>
        <div className='banner-perfomace'>PERFORMANCE</div>
        <div className='motor-bi'>MOTOR BICILÍNDRICO</div>
        <div className='banner-coments-performace'>A performance esportiva que você sempre buscou. Com 321 cc, desenvolve 42 cv e 3,0 kgf.m de torque. Conta com a exclusiva tecnologia DiASil que contribui para menor vibração, melhor dissipação de calor e ganho de performance.</div>
      </div>
      <iframe width="1090" height="500" src="https://www.youtube.com/embed/PvgKzui3YIk?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <img className='img-banner-tecnology' src={mt2}></img>
    <div className='flex'>
      <div className='box-tecnology-1'>
        <div className='text-tecnology'>"TECNOLOGIA</div>
        <div className='text-comments-tecnology'>PAINEL 100% DIGITAL COM SHIFT LIGHT</div>
      </div>
      <div className='box-tecnology-2'>
        Projetado para auxiliar sua performance, o painel da R3 é o único da categoria que possui a luz indicativa Shift Light personalizável, que indica o melhor momento para a troca de marchas.
      </div>
    </div>
    <div className='flex img-banner-tec'>
      <img className='img-tec' src={mt3}></img>
      <img className='img-tec' src={mt4}></img>
      <img className='img-tec' src={mt5}></img>
    </div>
    <div className='flex'>
      <div className='box-tecnology-1'>
        <div className='text-tecnology'> "CONFORTO</div>
        <div className='text-comments-tecnology'>PILOTE TODOS OS DIAS</div>
      </div>
      <div className='box-tecnology-2'>
        Sua posição de pilotagem esportiva é complementada pela nova suspensão dianteira invertida e amortecedor traseiro, com 7 regulagens na pré-carga da mola, proporcionando equilíbrio perfeito entre performance, agilidade e conforto.
      </div>
    </div>
    <div className='flex img-banner-tec'>
      <img className='img-tec' src={mt6}></img>
      <img className='img-tec' src={mt7}></img>
      <img className='img-tec' src={mt8}></img>
    </div>
    <div className='flex'>
      <div className='box-tecnology-1'>
        <div className='text-tecnology'> "DESIGN</div>
        <div className='text-comments-tecnology'>AERODINÂMICA SUPERESPORTIVA</div>
      </div>
      <div className='box-tecnology-2'>
        Seu visual traz o DNA da R series Yamaha. O novo para-brisa, entrada de ar frontal e carenagens laterais reduziram a resistência e turbulência do vento, fazendo a Nova R3 atingir até 8km/h a mais de velocidade final que o modelo anterior.
      </div>
    </div  >
    <div className='frame'>
      <iframe width="1060" height="615" src="https://www.youtube.com/embed/NABIP1_uwFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <img className='img-banner-tecnology' src={mt9}></img>
    <div className='moto-color flex'>
      <div className='select-moto'>
        <div className='title-select'>OLHE MAIS DE PERTO
        </div>
        <div className='coments-select'>Escolha a versão que mais combina com você.
        </div>
        <div className='btn-cor cinza' onClick={colormt1}></div>
        <div className='mots'><span>STORM FLUO</span><br />
          Cinza Sólido</div>
        <div className='btn-cor x-black' onClick={colormt2}></div>
        <div className='mots'><span>X-BLACK</span><br />Preto Fosco</div>
        <div className='btn-cor blue' onClick={colormt3}></div>
        <div className='mots'><span>RACING BLUE</span><br /> Azul Metálico</div>
      </div>
      <img id='img-moto-cor-mt-3' src={mtcor1} ></img>
    </div>
    <img className='r3-sale' src={mt10}></img>
    <div className='r3-sale-text'>
      <div className='text-sale-1'>MT - 03</div>
      <div className='line-sales'></div>
      <div className='flex'>
        <div>
          <div className='text-sale-2'>A PARTIR DE</div>
          <div className='text-sale-2'>R$</div>
        </div>
        <div className='text-sale-3'>32.890,00</div>
      </div>
      <div className='line-sales'></div>
      <div className='text-sale-4'>FRETE DE ACORDO COM A REGIÃO</div>
    </div>
    <div className='r3-seles'></div>
    <div className='tabela-financiamento'>
      <div className='financia'>FINANCIAMENTO</div>
      <div className='flex tabela-1'>
        <div className='text-finan-1'>ENTRADA</div>
        <div className='text-finan-2'>R$  10.241, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>SALDO</div>
        <div className='text-finan-2'>12x de</div>
        <div className='text-finan-2'>R$  2.071, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>TAXA</div>
        <div className='text-finan-2'>ZERO</div>
      </div>
      <div className='line-tabela'></div>
      <div className='flex tabela-1'>
        <div className='text-finan-1'>ENTRADA</div>
        <div className='text-finan-2'>R$  10.241, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>SALDO</div>
        <div className='text-finan-2'>36x de</div>
        <div className='text-finan-2'>R$  824, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>TAXA</div>
        <div className='text-finan-2'>0,99% a.m.</div>
      </div>
      <div className='simule-financiamento'>SIMULE O SEU FINANCIAMENTO</div>
    </div>
    <div className='text-modelo'>
      "Modelo YZF-R3 modelo 2024. Preço Público Sugerido: R$ 32.890,00 à vista, sem frete. Preço de Venda R$ 34.135,00 à vista (base ICMS 12%) com frete incluso no valor de R$ 1.245,00, ou financiamento na modalidade de CDC em 12 meses: Entrada de R$ 10.241,00 (30%) e parcelas mensais fixas e sucessivas de R$ 2.071,00. Taxa de juros de 0% a.m. e 0% a.a. Custo efetivo total (CET). Ou em 36 meses: Entrada de R$ 10.241,00 (30%) e parcelas mensais fixas e sucessivas de R$ 824,00. Taxa de juros de 0,99% a.m. e 13% a.a. Custo efetivo total (CET) 15,65% a.a., IOF no valor de R$ 94,08. Valor total a ser financiado R$ 24.851,08 e valor final total (com encargos de financiamento) de R$ 39.905,00. Para o cálculo da CET foi considerada a tarifa de cadastro de R$ 600,00, valor de IOF informado em cada condição e valor médio de registro de contrato de R$ 263,00. O valor da taxa de registro de contrato praticado em cada Estado altera o valor da parcela de financiamento divulgada. Confira o valor da taxa de registro de contrato vigente e ICMS no Estado de emplacamento da motocicleta no ato da compra. Em caso de inadimplência, é permitida a cobrança de: Multa moratória de 2% mais juro de mora de 1% + taxa de juros remuneratórios pactuados no contrato ao mês (resolução 4558 do Banco Central). Conforme Art.52, § 2º da Lei Fed. 8.078/90, do Código de Defesa do Consumidor fica assegurado ao consumidor à liquidação antecipada do débito total ou parcialmente, mediante redução proporcional dos juros e demais acréscimos. As Condições gerais da Cédula de Crédito Bancário Operações de Financiamento de Bens está disponível no site do Banco Yamaha. Carência de 30 dias para pagamento da primeira parcela de financiamento. Condições válidas exclusivamente para financiamentos realizados pelo Banco Yamaha Motor do Brasil S.A. (https://www.yamahaservicosfinanceiros.com.br/banco.De 01/05/2023 a 31/05/2023, limitados a 50 unidades de cada modelo (independente do plano de financiamento). Crédito sujeito à aprovação. Apenas nas concessionárias participantes. As motocicletas Yamaha estão em conformidade com o los e Veículos Similares). BANCO YAMAHA MOTOR DO BRASIL S.A. Rod. Pres. Dutra, Km 214 - Guarulhos - SP - Brasil – CEP 07178-580 -SAC Produtos: (11) 2431-6500 - sac@yamaha-motor.com.br. Central de Relacionamento com o Cliente Banco: (11) 2088-7700 – SAC Banco: 0800-774-8283 - sac.banco@yamaha-motor.com.br. SAC - Atendimento ao Deficiente Auditivo ou de Fala: 0800-774-1415. Ouvidoria: 0800-774-9000 - ouvidoria@yamaha-motor.com.br. NO TRÂNSITO, SUA RESPONSABILIDADE SALVA VIDAS "
    </div>
    <div className='text-atençao m-0'>AVISO DE FRAUDE</div>
    <div className='text-atençao-description'>A Yamaha informa que os seus produtos são comercializados por meio das concessionárias autorizadas da marca e/ou através do seu e-commerce oficial, não sendo realizadas vendas para o consumidor final por telefone, funcionários ou quaisquer outros tipos de parceiros e/ou representantes comerciais, bem como outros sites da internet.</div>

  </section>

const R360 = () =>
  <section id='R3-60' >
    <div className='R3-60'>
      <div className='text-r3'>R3 ABS 60TH</div>
      <div className='text-descriçao-r3'>A MOTO PARA VOCÊ PILOTAR A PRÓPRIA HISTÓRIA</div>
    </div>
    <div className='flex banner-r3 '>
      <div className='banner-text-performace'>
        <div className='banner-perfomace'>PERFORMANCE</div>
        <div className='motor-bi'>MOTOR BICILÍNDRICO</div>
        <div className='banner-coments-performace'>A performance esportiva que você sempre buscou. Com 321 cc, desenvolve 42 cv e 3,0 kgf.m de torque. Conta com a exclusiva tecnologia DiASil que contribui para menor vibração, melhor dissipação de calor e ganho de performance.</div>
      </div>
      <iframe width="1090" height="500" src="https://www.youtube.com/embed/NABIP1_uwFU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <img className='img-banner-tecnology' src={R32}></img>
    <div className='flex'>
      <div className='box-tecnology-1'>
        <div className='text-tecnology'>"TECNOLOGIA</div>
        <div className='text-comments-tecnology'>PAINEL 100% DIGITAL COM SHIFT LIGHT</div>
      </div>
      <div className='box-tecnology-2'>
        Projetado para auxiliar sua performance, o painel da R3 é o único da categoria que possui a luz indicativa Shift Light personalizável, que indica o melhor momento para a troca de marchas.
      </div>
    </div>
    <div className='flex img-banner-tec'>
      <img className='img-tec-R3' src={R33}></img>
     
    </div>
    <div className='flex'>
      <div className='box-tecnology-1'>
        <div className='text-tecnology'> "CONFORTO</div>
        <div className='text-comments-tecnology'>PILOTE TODOS OS DIAS</div>
      </div>
      <div className='box-tecnology-2'>
        Sua posição de pilotagem esportiva é complementada pela nova suspensão dianteira invertida e amortecedor traseiro, com 7 regulagens na pré-carga da mola, proporcionando equilíbrio perfeito entre performance, agilidade e conforto.
      </div>
    </div>
    <div className='flex img-banner-tec'>
      <img className='img-tec' src={mt6}></img>
      <img className='img-tec' src={mt7}></img>
      <img className='img-tec' src={mt8}></img>
    </div>
    <div className='flex'>
      <div className='box-tecnology-1'>
        <div className='text-tecnology'> "DESIGN</div>
        <div className='text-comments-tecnology'>AERODINÂMICA SUPERESPORTIVA</div>
      </div>
      <div className='box-tecnology-2'>
        Seu visual traz o DNA da R series Yamaha. O novo para-brisa, entrada de ar frontal e carenagens laterais reduziram a resistência e turbulência do vento, fazendo a Nova R3 atingir até 8km/h a mais de velocidade final que o modelo anterior.
      </div>
    </div  >
    
    <img className='img-banner-tecnology' src={R37}></img>
    <div className='moto-color flex'>
      <div className='select-moto'>
        <div className='title-select'>OLHE MAIS DE PERTO
        </div>
        <div className='coments-select'>Escolha a versão que mais combina com você.
        </div>
        <div className='btn-cor branco' onClick={colormt1}></div>
        <div className='mots'><span>WORLD GP 60H ANNIVERSARY EDITION</span><br />
        Branco Metálico</div>
        
      </div>
      <img id='img-moto-cor-mt' src={r3cor} ></img>
    </div>
    <img className='r3-sale' src={R38}></img>
    <div className='r3-sale-text'>
      <div className='text-sale-1'>R3 60th </div>
      <div className='line-sales'></div>
      <div className='flex'>
        <div>
          <div className='text-sale-2'>A PARTIR DE</div>
          <div className='text-sale-2'>R$</div>
        </div>
        <div className='text-sale-3'>32.890,00</div>
      </div>
      <div className='line-sales'></div>
      <div className='text-sale-4'>FRETE DE ACORDO COM A REGIÃO</div>
    </div>
    <div className='r3-seles'></div>
    <div className='tabela-financiamento'>
      <div className='financia'>FINANCIAMENTO</div>
      <div className='flex tabela-1'>
        <div className='text-finan-1'>ENTRADA</div>
        <div className='text-finan-2'>R$  10.241, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>SALDO</div>
        <div className='text-finan-2'>12x de</div>
        <div className='text-finan-2'>R$  2.071, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>TAXA</div>
        <div className='text-finan-2'>ZERO</div>
      </div>
      <div className='line-tabela'></div>
      <div className='flex tabela-1'>
        <div className='text-finan-1'>ENTRADA</div>
        <div className='text-finan-2'>R$  10.241, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>SALDO</div>
        <div className='text-finan-2'>36x de</div>
        <div className='text-finan-2'>R$  824, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>TAXA</div>
        <div className='text-finan-2'>0,99% a.m.</div>
      </div>
      <div className='simule-financiamento'>SIMULE O SEU FINANCIAMENTO</div>
    </div>
    <div className='text-modelo'>
      "Modelo YZF-R3 modelo 2024. Preço Público Sugerido: R$ 32.890,00 à vista, sem frete. Preço de Venda R$ 34.135,00 à vista (base ICMS 12%) com frete incluso no valor de R$ 1.245,00, ou financiamento na modalidade de CDC em 12 meses: Entrada de R$ 10.241,00 (30%) e parcelas mensais fixas e sucessivas de R$ 2.071,00. Taxa de juros de 0% a.m. e 0% a.a. Custo efetivo total (CET). Ou em 36 meses: Entrada de R$ 10.241,00 (30%) e parcelas mensais fixas e sucessivas de R$ 824,00. Taxa de juros de 0,99% a.m. e 13% a.a. Custo efetivo total (CET) 15,65% a.a., IOF no valor de R$ 94,08. Valor total a ser financiado R$ 24.851,08 e valor final total (com encargos de financiamento) de R$ 39.905,00. Para o cálculo da CET foi considerada a tarifa de cadastro de R$ 600,00, valor de IOF informado em cada condição e valor médio de registro de contrato de R$ 263,00. O valor da taxa de registro de contrato praticado em cada Estado altera o valor da parcela de financiamento divulgada. Confira o valor da taxa de registro de contrato vigente e ICMS no Estado de emplacamento da motocicleta no ato da compra. Em caso de inadimplência, é permitida a cobrança de: Multa moratória de 2% mais juro de mora de 1% + taxa de juros remuneratórios pactuados no contrato ao mês (resolução 4558 do Banco Central). Conforme Art.52, § 2º da Lei Fed. 8.078/90, do Código de Defesa do Consumidor fica assegurado ao consumidor à liquidação antecipada do débito total ou parcialmente, mediante redução proporcional dos juros e demais acréscimos. As Condições gerais da Cédula de Crédito Bancário Operações de Financiamento de Bens está disponível no site do Banco Yamaha. Carência de 30 dias para pagamento da primeira parcela de financiamento. Condições válidas exclusivamente para financiamentos realizados pelo Banco Yamaha Motor do Brasil S.A. (https://www.yamahaservicosfinanceiros.com.br/banco.De 01/05/2023 a 31/05/2023, limitados a 50 unidades de cada modelo (independente do plano de financiamento). Crédito sujeito à aprovação. Apenas nas concessionárias participantes. As motocicletas Yamaha estão em conformidade com o los e Veículos Similares). BANCO YAMAHA MOTOR DO BRASIL S.A. Rod. Pres. Dutra, Km 214 - Guarulhos - SP - Brasil – CEP 07178-580 -SAC Produtos: (11) 2431-6500 - sac@yamaha-motor.com.br. Central de Relacionamento com o Cliente Banco: (11) 2088-7700 – SAC Banco: 0800-774-8283 - sac.banco@yamaha-motor.com.br. SAC - Atendimento ao Deficiente Auditivo ou de Fala: 0800-774-1415. Ouvidoria: 0800-774-9000 - ouvidoria@yamaha-motor.com.br. NO TRÂNSITO, SUA RESPONSABILIDADE SALVA VIDAS "
    </div>
    <div className='text-atençao m-0'>AVISO DE FRAUDE</div>
    <div className='text-atençao-description'>A Yamaha informa que os seus produtos são comercializados por meio das concessionárias autorizadas da marca e/ou através do seu e-commerce oficial, não sendo realizadas vendas para o consumidor final por telefone, funcionários ou quaisquer outros tipos de parceiros e/ou representantes comerciais, bem como outros sites da internet.</div>

  </section>

const Mt07 = () =>
  <section id='Mt-07' >
    <div className='mt-07'>
      <div className='text-r3'>MT-07</div>
      <div className='text-descriçao-r3'>A MOTO MASTER OF TORQUE</div>
    </div>
    <div className='flex banner-r3 '>
      <div className='banner-text-performace'>
        <div className='banner-perfomace'>PERFORMANCE</div>
        <div className='motor-bi'>MOTOR BICILÍNDRICO</div>
        <div className='banner-coments-performace'>A performance esportiva que você sempre buscou. Com 321 cc, desenvolve 42 cv e 3,0 kgf.m de torque. Conta com a exclusiva tecnologia DiASil que contribui para menor vibração, melhor dissipação de calor e ganho de performance.</div>
      </div>
      <iframe width="1090" height="500" src="https://www.youtube.com/embed/leEPMqryoQw?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <img className='img-banner-tecnology' src={mt72}></img>
    <div className='flex'>
      <div className='box-tecnology-1'>
        <div className='text-tecnology'>"TECNOLOGIA</div>
        <div className='text-comments-tecnology'>PAINEL 100% DIGITAL COM SHIFT LIGHT</div>
      </div>
      <div className='box-tecnology-2'>
        Projetado para auxiliar sua performance, o painel da R3 é o único da categoria que possui a luz indicativa Shift Light personalizável, que indica o melhor momento para a troca de marchas.
      </div>
    </div>
    <div className='flex img-banner mt7'>
      <img className='img-tec' src={mt73}></img>
      <img className='img-tec' src={mt74}></img>
      <img className='img-tec' src={mt75}></img>
    </div>
    <div className='flex'>
      <div className='box-tecnology-1'>
        <div className='text-tecnology'> "CONFORTO</div>
        <div className='text-comments-tecnology'>PILOTE TODOS OS DIAS</div>
      </div>
      <div className='box-tecnology-2'>
        Sua posição de pilotagem esportiva é complementada pela nova suspensão dianteira invertida e amortecedor traseiro, com 7 regulagens na pré-carga da mola, proporcionando equilíbrio perfeito entre performance, agilidade e conforto.
      </div>
    </div>
   
    <img className='img-banner-tecnology' src={mt76}></img>
    <div className='moto-color flex'>
      <div className='select-moto'>
        <div className='title-select'>OLHE MAIS DE PERTO
        </div>
        <div className='coments-select'>Escolha a versão que mais combina com você.
        </div>
        <div className='btn-cor cinza' onClick={colormt71}></div>
        <div className='mots'><span>STORM FLUO</span><br />
          Cinza Sólido</div>
        <div className='btn-cor x-black' onClick={colormt72}></div>
        <div className='mots'><span>X-BLACK</span><br />Preto Fosco</div>
        <div className='btn-cor blue' onClick={colormt73}></div>
        <div className='mots'><span>RACING BLUE</span><br /> Azul Metálico</div>
      </div>
      <img id='img-moto-cor-mt7' src={mt7cor1} ></img>
    </div>
    <img className='r3-sale' src={mt77}></img>
    <div className='r3-sale-text'>
      <div className='text-sale-1'>MT-07</div>
      <div className='line-sales'></div>
      <div className='flex'>
        <div>
          <div className='text-sale-2'>A PARTIR DE</div>
          <div className='text-sale-2'>R$</div>
        </div>
        <div className='text-sale-3'>32.890,00</div>
      </div>
      <div className='line-sales'></div>
      <div className='text-sale-4'>FRETE DE ACORDO COM A REGIÃO</div>
    </div>
    <div className='r3-seles'></div>
    <div className='tabela-financiamento'>
      <div className='financia'>FINANCIAMENTO</div>
      <div className='flex tabela-1'>
        <div className='text-finan-1'>ENTRADA</div>
        <div className='text-finan-2'>R$  10.241, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>SALDO</div>
        <div className='text-finan-2'>12x de</div>
        <div className='text-finan-2'>R$  2.071, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>TAXA</div>
        <div className='text-finan-2'>ZERO</div>
      </div>
      <div className='line-tabela'></div>
      <div className='flex tabela-1'>
        <div className='text-finan-1'>ENTRADA</div>
        <div className='text-finan-2'>R$  10.241, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>SALDO</div>
        <div className='text-finan-2'>36x de</div>
        <div className='text-finan-2'>R$  824, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>TAXA</div>
        <div className='text-finan-2'>0,99% a.m.</div>
      </div>
      <div className='simule-financiamento'>SIMULE O SEU FINANCIAMENTO</div>
    </div>
    <div className='text-modelo'>
      "Modelo YZF-R3 modelo 2024. Preço Público Sugerido: R$ 32.890,00 à vista, sem frete. Preço de Venda R$ 34.135,00 à vista (base ICMS 12%) com frete incluso no valor de R$ 1.245,00, ou financiamento na modalidade de CDC em 12 meses: Entrada de R$ 10.241,00 (30%) e parcelas mensais fixas e sucessivas de R$ 2.071,00. Taxa de juros de 0% a.m. e 0% a.a. Custo efetivo total (CET). Ou em 36 meses: Entrada de R$ 10.241,00 (30%) e parcelas mensais fixas e sucessivas de R$ 824,00. Taxa de juros de 0,99% a.m. e 13% a.a. Custo efetivo total (CET) 15,65% a.a., IOF no valor de R$ 94,08. Valor total a ser financiado R$ 24.851,08 e valor final total (com encargos de financiamento) de R$ 39.905,00. Para o cálculo da CET foi considerada a tarifa de cadastro de R$ 600,00, valor de IOF informado em cada condição e valor médio de registro de contrato de R$ 263,00. O valor da taxa de registro de contrato praticado em cada Estado altera o valor da parcela de financiamento divulgada. Confira o valor da taxa de registro de contrato vigente e ICMS no Estado de emplacamento da motocicleta no ato da compra. Em caso de inadimplência, é permitida a cobrança de: Multa moratória de 2% mais juro de mora de 1% + taxa de juros remuneratórios pactuados no contrato ao mês (resolução 4558 do Banco Central). Conforme Art.52, § 2º da Lei Fed. 8.078/90, do Código de Defesa do Consumidor fica assegurado ao consumidor à liquidação antecipada do débito total ou parcialmente, mediante redução proporcional dos juros e demais acréscimos. As Condições gerais da Cédula de Crédito Bancário Operações de Financiamento de Bens está disponível no site do Banco Yamaha. Carência de 30 dias para pagamento da primeira parcela de financiamento. Condições válidas exclusivamente para financiamentos realizados pelo Banco Yamaha Motor do Brasil S.A. (https://www.yamahaservicosfinanceiros.com.br/banco.De 01/05/2023 a 31/05/2023, limitados a 50 unidades de cada modelo (independente do plano de financiamento). Crédito sujeito à aprovação. Apenas nas concessionárias participantes. As motocicletas Yamaha estão em conformidade com o los e Veículos Similares). BANCO YAMAHA MOTOR DO BRASIL S.A. Rod. Pres. Dutra, Km 214 - Guarulhos - SP - Brasil – CEP 07178-580 -SAC Produtos: (11) 2431-6500 - sac@yamaha-motor.com.br. Central de Relacionamento com o Cliente Banco: (11) 2088-7700 – SAC Banco: 0800-774-8283 - sac.banco@yamaha-motor.com.br. SAC - Atendimento ao Deficiente Auditivo ou de Fala: 0800-774-1415. Ouvidoria: 0800-774-9000 - ouvidoria@yamaha-motor.com.br. NO TRÂNSITO, SUA RESPONSABILIDADE SALVA VIDAS "
    </div>
    <div className='text-atençao m-0'>AVISO DE FRAUDE</div>
    <div className='text-atençao-description'>A Yamaha informa que os seus produtos são comercializados por meio das concessionárias autorizadas da marca e/ou através do seu e-commerce oficial, não sendo realizadas vendas para o consumidor final por telefone, funcionários ou quaisquer outros tipos de parceiros e/ou representantes comerciais, bem como outros sites da internet.</div>

  </section>

const Local =() =>
  <section id='Local'>
    <img className='img-banner-tecnology  mt' src={localbanner}></img>
    <div className='flex container-local'>
      <div className='dados-local'>
            <div className='local-text1'>ENCONTRE A UNIDADE MAIS PRÓXIMA</div>
            <div className='local-text2'> Localização</div>
            <div className='local-text3'>RESULDADOS ENCONTRADOS</div>
            <div className='flex just'>
              <BsPinMap className='icons-map'/>
              <div >
                <div className='local-text4'>São Leopoldo</div>
                <div className='local-text5'>centro - 93950-000</div>
                <div className='local-text6'>(051) 3624-3884</div>
              </div>

            </div>
      </div>
      <div>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55413.493742196086!2d-51.22940385136716!3d-29.767711599999977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519684481dc7d3d%3A0xf4022a37a09c5d30!2sYamaha%20Motor%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1684278201687!5m2!1spt-BR!2sbr" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>

function App() {
  return (
    <div className="App">
      <Local/>
      <Mt07 />
      <R360 />
      <Mt03 />
      <MenuBar />
      <FirstPage />
      <Shop />
      <Serviço />
      <R3ABS />
      <Footer />
    </div>
  );
}

export default App;
