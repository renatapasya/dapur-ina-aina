type MenuProps = {
  nama_menu: string;
  harga: number;
  stok: number;
};

export default function MenuCard({
  nama_menu,
  harga,
  stok,
}: MenuProps) {

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition">

      <div className="h-48 bg-orange-100 flex items-center justify-center text-6xl">
        🍽️
      </div>


      <div className="p-6">

        <h3 className="text-xl font-bold text-gray-800">
          {nama_menu}
        </h3>


        <p className="text-orange-600 font-bold text-lg mt-2">
          Rp {harga.toLocaleString("id-ID")}
        </p>


        <p className="text-gray-500 mt-1">
          Stok tersedia: {stok}
        </p>


        <button className="mt-5 w-full bg-orange-600 text-white py-3 rounded-xl hover:bg-orange-700">
          Pesan Sekarang
        </button>

      </div>

    </div>
  );
}