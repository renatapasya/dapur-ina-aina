import { supabase } from "@/lib/supabase";


export async function getMenus() {

  const { data, error } = await supabase
    .from("menu")
    .select(`
      *,
      kategori (
        nama_kategori
      )
    `);


  if(error){

    console.log(error);

    return [];

  }


  return data;

}