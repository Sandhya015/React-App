import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';



function Signin(){
    return (
        <div>
            <center>
                <div style={{
                   paddingTop:150,marginBottom:10,padding:15,
                }}>
                   <h2> Welcome to To-Do-App, Signin below</h2>
                </div>
            </center>
            <center>
               <Card variant={'outlined'} style={{width:500,padding:20}}>
                <div style={{
                    width: 400,
                    padding:20,
                    // border:"2px solid black",
                    marginTop:10,
                    marginBottom:10,
                   
                }}>
                   
                 <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                 <br /> <br />
                 <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" type={"password"}/>
                    <br/> <br />
                    <Button size ={"large"}variant="contained">Signin</Button>
                </div>
                </Card>
            </center>
        </div>
    );
}

export default Signin;