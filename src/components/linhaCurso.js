import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './linhaCurso.css';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const LinhaCurso = ({title,items}) => {

    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x > 0){
            x = 0
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.length * 152;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x);
    }


    return (
        <div className='linhaCurso'>
            <h2>{title}</h2>

            <div className='linhaCurso--left' onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>

            <div className='linhaCurso--right' onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>


            <div className='linhaCurso--listarea'>
                <div className='linhaCurso--list' style={{
                    marginLeft: scrollX,
                    width: items.length * 152
                }}>
                {items.map((item,key) => (
                    <div className='linhaCurso--item'>
                        <Link to="/saladeaula"><img src={`/images${item.DIR_CAPA}`} alt={item.NOME}/></Link>
                        <p>{item.NOME}</p>
                    </div>
                ))}
                </div>
            </div> 
        </div>
    )
}

export default LinhaCurso