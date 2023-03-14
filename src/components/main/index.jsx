import React from 'react'
import BotaoAcesso from '../botaoAcesso';
import style from './main.module.scss'
import travesseiro from '../../assets/img/travesseiro.png'
import conjuntoAlmofada from '../../assets/img/conjunto-de-almofadas.png'
import travesseiroRoupa from '../../assets/img/travesseiros-roupa.png'
import travesseiroSize from '../../assets/img/travesseiro-size.png'
import roupaDeCAma from '../../assets/img/roupa de cama.png'
import bannerSecundario from '../../assets/img/cama-banner-secundario.png'

export default function Main() {

  const categorias = ['travesseiros', 'cama', 'roupa de cama'];
  const produtos = [
    {
      nome: 'Travesseiro basico',
      img: travesseiro,
      valor: 200,
    },
    {
      nome: 'Conjunto de almofadas',
      img: conjuntoAlmofada,
      valor: 300,
    },
    {
      nome: 'Conjunto: travesseiro + roupa de cama',
      img: travesseiroRoupa,
      valor: 450,
    },
    {
      nome: 'Travesseiro confort',
      img: travesseiroSize,
      valor: 250,
    },
    {
      nome: 'Roupa de cama',
      img: roupaDeCAma,
      valor: 220,
    },
    {
      nome: 'Cama box king size',
      img: bannerSecundario,
      valor: 3500,
    },
  ]

  return (
    <main>
        <section className={style.banner__principal}>
            <h1>Modelos feitos especialmente para obter a escolha de um sono perfeito</h1>
        </section>
        <section className={style.produtos__container}>
          <p>Filtrar por:</p>
          <ul className={style.produtos__container_filter}>
            <BotaoAcesso titulo='todos'></BotaoAcesso>
            {categorias.map(categoria => <BotaoAcesso titulo={categoria} key={categoria}></BotaoAcesso>)}
          </ul>
          <section>
            <ul className={style.products_list}>
              {produtos.map(produto => {
                return (
                <li className={style.item}>
                  <img src={produto.img} alt={produto.nome}/>
                  <p>{produto.nome}</p>
                  <p className={style.item_valor}>{produto.valor.toString() +'R$'}</p>
                </li>
                )
              })}
            </ul>
          </section>
        </section>
        <section className={style.banner__secundario}>
          <div className={style.banner__secundario_titulo_container}>
              <h2 className={style.banner__secundario_titulo}>O que vendemos?</h2>
              <p className={style.banner__secundario_texto}>Vendemos aquilo que vai além de qualquer produto, vendemos conforto e qualidade para <span>você</span></p>
          </div>
          <img className={style.banner__secundario_imagem} src={bannerSecundario} alt="banner secundario"></img>
        </section>
    </main>
  )
}
