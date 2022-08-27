import '../../style/Login.css'
import {useForm} from "react-hook-form";
import httpAgent from "../../api/httpAgent";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const {register,handleSubmit,formState:{}} = useForm({});

    async function submitForm(data) {
        try {
            httpAgent.Account.login(data).then((res)=>{
                if (res.loginResponseDto.resultCode>=0){
                    toast.success(`Login is successfully!`);
                }
                else{
                    toast.error(`${res.loginResponseDto.resultMessage} `)
                }
                console.log(res.loginResponseDto.resultCode)
            })
        }catch (error){
            console.log(error)
        }

    }

    return (
        <div className="container-fluid h-custom"  style={{marginTop:'150px'}}>
            <ToastContainer/>
            <div className="row d-flex justify-content-center align-items-center h-100">
                <h1 className='login-title'>Login</h1>
                <div className="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                         className="img-fluid" alt="Sample image"/>
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form onSubmit={handleSubmit(submitForm)} method='post'>
                        <div className="form-outline mb-4">
                            <input {...register('username',{required:'Email is required'})} name='username' type="email" id="form3Example3" className="form-control form-control-lg"
                                   placeholder="Please enter your username"/>
                            <label className="form-label" htmlFor="form3Example3">Username</label>
                        </div>
                        <div className="form-outline mb-3">
                            <input {...register('password',{required:'Password is required'})}  type="password" id="form3Example4" className="form-control form-control-lg"
                                   placeholder="Please enter your passsword"/>
                            <label className="form-label" htmlFor="form3Example4">Password</label>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="form-check mb-0">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3"/>
                                <label className="form-check-label" htmlFor="form2Example3">
                                   Remember me
                                </label>
                            </div>
                            <a href="#!" className="text-body">Forgot password?</a>
                        </div>

                        <div className="text-center text-lg-start mt-4 pt-2">
                            <button type="submit" className="btn btn-primary btn-lg login-button">
                                Submit
                            </button>
                            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!" className="link-danger">Sign up</a>
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;