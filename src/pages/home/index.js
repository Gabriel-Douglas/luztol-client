import React, {useEffect, useState } from "react";
import './home.css'

import cursos from "../../cursos";
import LinhaCurso from '../../components/linhaCurso';
import Header from '../../components/header';

const Cursos = () => {

  const [listaCursos, setMovieList] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //ler a lista de cursos
      let list = await cursos.getHomeList();
      setMovieList(list)
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll',scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  },[])

  return (
    <div className="cursos"> 
      <Header black={blackHeader}/>
      <section className="listaCursos">
        {listaCursos.map((item,key) => (
          <LinhaCurso key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        Feito com <span role='img' aria-label="coração">❤️</span> pela Luztol Tintas
      </footer>
    </div>
  );

}

export default Cursos