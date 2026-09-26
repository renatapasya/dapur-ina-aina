import { supabase } from "@/lib/supabase";


export async function getMenus() {

  const { data, error } = await supabase
    .from("menu")
    .select("*");


  if(error){

    console.log(error);

    return [];

  }


  return data;

}