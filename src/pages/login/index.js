import React from 'react'
import './login.css'

import { Grid, Paper, TextField, Button, Typography, Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login = () => {

  const paperStyle = { padding: 10, height: '70vh', width: '350px', margin: "10px auto"}
  const btnstyle = { margin: '8px 0' }
  return (
    <div className='login--principal'>
        <Grid container>
          <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
              <img alt="Luztol" src="/images/Luztol Logo.png" width="150px" />
              <h2>Login</h2>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField label='E-mail' placeholder='especialista@email.com' variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField label='Senha' placeholder='* * * * * * * * *' type='password' variant="outlined" fullWidth required />
              </Grid>
            </Grid>


            <FormControlLabel
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                />
              }
              label="Lembrar senha"
            />
            <Button type='submit' variant="contained" style={btnstyle} fullWidth href='/cursos'>Entrar</Button>
            <Typography >
              <Link href="#" >
                Esqueceu sua senha?
              </Link>
            </Typography>
            <Typography > Ainda não tem uma conta?
              <Link href="#">&nbsp;Cadastre-se
              </Link>
            </Typography>
          </Paper>
        </Grid>
    </div>
  )
}

export default Login