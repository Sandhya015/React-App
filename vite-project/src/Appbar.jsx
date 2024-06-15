import { Button, Typography } from "@mui/material";

function Appbar(){
    return <div style={{
        display:"flex",
        justifyContent:"space-between",
        padding:4
    }}>
        <div style={{
           fontFamily:"monospace"
        }}>
        <Typography variant={"h5"}>To-Do-App</Typography>
        </div>
       <div style={{ 
      display:"flex"
       }}>
           <div style={{marginRight:10}}>
            <Button variant={"contained"}
            onClick={() => {
                window.location = "/signup"

            }}>Sign Up</Button>
            </div>
          <div>
            <Button variant={"contained"}
            onClick={() => {
                window.location = "/login"

            }}>Sign In</Button>
        </div>
    </div>
    </div>

}
export default Appbar;