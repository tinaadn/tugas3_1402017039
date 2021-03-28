function carikerucut() {
    jari = kerucut.jari.value;
    jari = kerucut.jari.value;
    tinggi = kerucut.tinggi.value;
    garispelukis = kerucut.garispelukis.value; 


    kerucut.garispelukis.value = Math.sqrt(Math.pow(jari,2) + Math.pow(tinggi, 2));
    kerucut.luas.value = 3.14 * Math.pow(jari, 2) + 3.14 * jari * garispelukis
    kerucut.volume.value = 0.33333333 * 3.14 * jari * jari * tinggi;
}