import { supabase } from "@/lib/supabase";


export async function loginUser(
email:string,
password:string
){


const {data,error}=await supabase

.from("users")

.select("*")

.eq("email",email)

.eq("password",password)

.single();




if(error){

return {
success:false,
message:"Email atau password salah"
};

}




return {

success:true,

user:data

};


}// Service authentication
