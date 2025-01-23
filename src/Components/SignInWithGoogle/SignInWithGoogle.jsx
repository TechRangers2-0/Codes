import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import google from '../../assets/google.png';
import { auth } from "../Firebase/Firebase";
// import { toast } from "react-toastify";

const SignInWithGoogle=()=> {
  function GoogleLogin(){
    const provider=new GoogleAuthProvider();
    signInWithPopup(auth,provider).then(async(result)=>{
      console.log(result);
      if(result.user){
        window.location.href="/Profile";
      }
    });
  }
  return (
    <div>
      <p className="text-xs text-gray-400 font-semibold mt-4 text-center">
        --Or continue with--
      </p>
      <div onClick={GoogleLogin} className="cursor-pointer flex justify-center items-center mt-4 z-50">
        <img src={google} alt="Sign in with Google" className="w-3/5 z-50" />
      </div>
    </div>
  );
};

export default SignInWithGoogle;
