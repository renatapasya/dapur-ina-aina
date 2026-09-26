export interface Pembayaran {
  id_pembayaran: string;
  metode_pembayaran: "tunai" | "non-tunai";
  jumlah_bayar: number;
}
