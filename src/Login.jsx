import React from "react"
function Login(props) {


    return (
        <div>
            <div class="row">
                <div class="col-md-4"></div>
                
                <div class="col-md-4"style={{border:"3px solid black ",margin:"10px"}}>
                    <br></br>
                    <center>
                    <h1>Login Page</h1>
                    </center>
                    <br></br>
                    <input type="text" class="form-control border-dark w-400" name="" placeholder="Enter name"></input>
                    <br></br>

                    <input type="text" class="form-control border-dark" name="" placeholder="Enter email"></input>
                    <br></br>

                    <input type="password" class="form-control border-dark" name="" placeholder="Enter password"></input>
                    <br></br>

                    <input type="button" class="btn btn-success w-100" value="Login" name="" ></input>
                    <br></br><br></br>
                     <a href="#create Account">Create Account</a>
                    
                    <div class="col-md-4"></div>
                    <br></br>
                    
                   
                    
                </div>
            </div>
            </div>
            




        
    )
}
export default Login;

