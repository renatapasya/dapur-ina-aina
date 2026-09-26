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


  console.log("MENU RESULT:", data);
  console.log("MENU ERROR:", error);


  if(error){
    return [];
  }


  return data;

}