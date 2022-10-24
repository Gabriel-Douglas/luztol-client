import React, { useEffect, useState } from "react";
import { Grid, Paper, Button } from '@mui/material'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import './sala_aula.css'
import Header from '../../components/header'


const Sala = () => {

    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setBlackHeader(true)
            } else {
                setBlackHeader(false)
            }
        }

        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }

    }, [])

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const paperStyle = { padding: 10, width: "100%", height: "100%" }

    return (
        <div className='saladeaula'>
            <Header black={blackHeader} />
            <div className="resumo--curso">
                <Grid container
                    justify="flex-end"
                    alignItems="center"
                    spacing={2}>
                    <Grid item>
                        <img src={`/images/Curso Básico de Pintura.png`} alt="Curso Básico de Pintura.png" />
                    </Grid>
                    <Grid item xs={11}>
                        <h2>Curso Básico de Pintura</h2>
                        <Grid item>
                            <h3>
                                Qualificação Profissional, onde o aluno aprenderá os conhecimentos básicos da profissão de pintor; função e composição das tintas; os tipos mais comuns de tintas; ferramentas e equipamentos necessários; áreas externas – preparação de superfícies; o que é a tinta para exteriores; aplicação da tinta para exteriores; detectando defeitos na pintura externa; o que são tintas para interiores; propriedades e demais características das tintas para interiores; tintas para interiores e os tipos de acabamento; os fundos preparadores e seladores;solventes e diluentes usados nas tintas; vernizes, onde e como aplicar; ferramentas e técnicas de pintura; preparando e pintando madeira; cuidados com a segurança ao pintar; cuidados especiais com produtos químicos; dicas para cálculo do orçamento; dicionário do pintor.
                            </h3>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

            <div className="main">
                <Grid container spacing={2}>

                    {/* INDEX DO CURSO */}
                    <Grid item xs={3}>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    Comece por aqui
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>Introdução</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Assista a primeira aula do curso básico de pintura que nós preparamos par você.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>Passo 2</Typography>
                                <Typography sx={{ color: 'text.secondary' }}>Vamos continuar!</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Assista a segunda aula do curso básico de pintura que nós preparamos par você.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>Passo 3</Typography>
                                <Typography sx={{ color: 'text.secondary' }}>Não desista!</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Assista a terceira aula do curso básico de pintura que nós preparamos par você.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                    {/* VIDEO DO CURSO */}
                    <Grid item xs={9} justifyItems="center">
                        <Paper elevation={3} style={paperStyle}>
                            <div className="cabecalhoVideo">
                                <h1>Comece por aqui! - Introdução</h1>
                                <Button variant="contained" disabled>
                                    Acessar Forum
                                </Button>
                            </div>
                            <video controls className="videoaula">
                                <source src='/videos/Meu Vídeo.mp4' type="video/mp4" />
                            </video>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

            <footer>
                Feito com <span role='img' aria-label="coração">❤️</span> pela Luztol Tintas
            </footer>

        </div>
    )

}

export default Sala