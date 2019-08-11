/* 
==============
Bilangan Prima
==============

Bilangan prima merupakan bilangan yang hanya habis dibagi oleh angka 1 dan angka itu sendiri.
Buat algoritma DAN pseudocode untuk mengecek apakah sebuah angka merupakan angka prima atau bukan.
 */


/*
Algoritma

1. Simpan "angka" dengan nilai apapun
2. Simpan "isNotPrime" dengan nilai false
3. Ulangi step 8 selama "i" lebih kecil dari "angka". 
   Jika "i" sudah lebih besar sama dengan "angka" maka lanjut ke step 9
4. Jika "angka" di sisa bagi dengan "i" sama dengan 0 maka lanjut ke step 5, jika tidak langsung ke step 9
5. Tampilkan "bukan bilangan prima"
6. "isNotPrime" sama dengan true
7. berhenti (break)
8. Tambah "i" dengan 1 agar semakin mendekati batas perulangan. kembali ke step 3
9. Jika "isNotPrime" sama dengan "false" maka lanjut ke step 10
10. Tampilkan "bilangan prima"



Pseudocode

STORE "angka" with any number
STORE "isNotPrime" with value false
FOR "i" to "angka"
    IF "angka" MOD "i" EQUALS TO 0
        DISPLAY "bukan bilangan prima"
        "isNotPrime" EQUALS TO "true"
        STOP (break)
    END ID
END FOR
IF "isNotPrime" EQUALS TO "false"
    DISPLAY "bilangan prima"
END IF


*/





