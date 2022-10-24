import React, { useEffect, useState } from "react";
import { Container, Grid, Paper, TextField } from '@mui/material'

import './register.css'

const Cadastro = () => {

    const paperStyle = window.innerWidth <= 760 ?
        { padding: 10, height: '70vh', margin: "10px auto", width: "80%" } :
        { padding: 10, height: '70vh', margin: "10px auto", width: "500px" }

    return (
        <div className="cadastro--page">
            <Grid continer spacing={2}>
                <Grid item>
                    <Paper elevation={3} style={paperStyle}>
                        <Grid item>
                            <h2><strong><i style={{ color: "red" }}>Cadastre-se</i></strong> e se torne um especialista em pinturas com as tintas Luztol</h2>
                        </Grid>

                        <Grid item>
                            <TextField label='Nome Completo' placeholder='Nome Completo' variant="outlined" fullWidth required />
                        </Grid>

                        <Grid item>
                            <TextField label='E-Mail' placeholder='especialista@email.com' variant="outlined" fullWidth required />
                        </Grid>

                        <Grid item>
                            <TextField label="Whats'app" placeholder='(DD) 91234-1234' variant="outlined" fullWidth required />
                        </Grid>

                    </Paper>
                </Grid>
            </Grid>
        </div>
    )

}

export default Cadastro