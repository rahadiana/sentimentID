'use strict';
const SentimentId = function(Sentence) {

var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var IdLanguage = {
  labels:{"":null,"abadi":2,"abaian":-1,"absen":-1,"absentee":-1,"Abu-abu":-1,"acquits":2,"acuh tak acuh":-2,"adil":2,"Aduh":-2,"affectionateness":3,"agak":0,"agonises":-3,"agonizes":-3,"agresi":-2,"agresif":-2,"agung":3,"ahli":2,"aib":-2,"air mata":-2,"akal":2,"akibat":-2,"aktif":2,"aktiva":2,"alam":1,"alarm":-2,"alarmists":-2,"alasan":-1,"alergik":-2,"Allah":1,"altruistis":2,"aman":1,"amarah":-3,"amat ketakutan":-2,"ambisius":2,"ambivalen":-1,"amobil":-1,"ancaman":-2,"andal":2,"aneh":-2,"anehnya":-1,"anggun":2,"angkuh":-2,"anti":-1,"antisipasi":1,"antusias":2,"apati":-3,"apatis":-3,"api":-2,"apik":3,"apokaliptik":-2,"appeases":2,"applauds":2,"apresiasi":2,"arah yang benar":3,"arik":-2,"arsehole":-4,"asbut":-2,"aset":2,"assfucking":-4,"astounds":3,"asyik":2,"Avengers":-2,"avenges":-2,"averts":-1,"bacul":-2,"badass":-3,"Bagikan":1,"bagus":3,"bagus dilihat":3,"bahaya":-2,"baik":2,"baik-dijagokan":3,"baik fokus":2,"bailout":-2,"bajingan":-5,"bakat":2,"bakti":3,"balas dendam":-2,"bamboozled":-2,"bamboozles":-2,"bangga":2,"bangkrut":-2,"Bankster":-3,"bantahan":-2,"barbar":-2,"batas":-1,"batu permata":3,"bau":-2,"bayak":2,"beasiswa":1,"beban":-2,"bebas":1,"bedebah":-4,"bekas":-1,"bekas luka":-2,"beking":2,"belas kasihan":2,"belum dikonfirmasi":-1,"benar":2,"bencana":-4,"benci":-2,"bendung":-2,"bengal":-2,"bengkak":-1,"bentrokan":-2,"berani":3,"berarti":2,"berat":-2,"berat sebelah":-2,"berbahaya":-3,"berbentuk badan yg manis":2,"berbuat jahat":-2,"berbudi luhur":2,"bercacat":-3,"berdarah":-3,"berdaya":-2,"berdoa":1,"berdosa":-3,"berduka":-2,"berduri":-2,"bereaksi berlebihan":-2,"bereaves":-2,"bereaving":-2,"bergairah":2,"bergantung":2,"bergembira":2,"bergembira sekali":3,"berguna":2,"berhak":2,"berhantu":-2,"berharap":2,"berhasil":-2,"berhenti":-1,"berikut":3,"berinovasi":1,"berisi":2,"berisik":-1,"berisiko":-2,"berita palsu":-2,"berjangkit":-1,"berjanji":1,"berjaya":4,"berjuang":-1,"berjubah":-2,"berkah":3,"berkat":3,"berkecil hati":-2,"berkeinginan":2,"berkelanjutan":2,"berkembang dengan baik":2,"berkilau":3,"berkinerja":-2,"berkolusi":-3,"berkomitmen":1,"berlebihan":-2,"berlian":1,"berlumpur":-2,"bermanfaat":2,"bermuram":-1,"bermuram durja":-1,"bermusuhan":-2,"bernasib buruk":-2,"bernilai":2,"berongga":-1,"berpengaruh":2,"berpura-pura":-1,"berputus asa":-3,"bersaing":-1,"bersama":1,"bersandaran":1,"bersedih":-3,"bersemangat":-2,"bersemangat rusuh":-2,"bersembunyi":-1,"bersengketa":-2,"bersetubuh":-4,"bersifat membatasi":-1,"bersifat menipu":-3,"bersih":1,"bersin":-2,"bersorak":2,"bersudut":-2,"bersuka cita":4,"bersukacita":4,"bersumpah":-2,"bertabrakan":-1,"bertanggung jawab":-2,"bertekad":2,"bertentangan":-2,"bertepuk tangan":2,"berteriak":-2,"berterimakasih":3,"bertingkah":-2,"beruntung":3,"besar":3,"biadab":-2,"biasa-biasa saja":-3,"biaya":-2,"bijaksana":2,"bimbang":-2,"bingung":-2,"bla":-2,"blockbuster":3,"blok":-1,"blokade":-2,"bocor":-1,"bodoh":-2,"bohong":-3,"boikot":-2,"bom":-1,"bosan":-2,"bravura":3,"breaching":-2,"brengsek":-4,"brilliances":3,"brutal":-3,"buas":-2,"budak":-3,"bunga":1,"bunuh diri":-2,"buram":-2,"buruk":-3,"buruk sekali":-3,"busuk":-3,"buta":-1,"cacat":-3,"calo":-2,"canggung":-2,"cantik":2,"cedera":-2,"cekatan":2,"celaan":-2,"cemas":-3,"cemberut":-2,"cemburu":-2,"cemerlang":4,"cemooh":-2,"cepat":2,"cerdas":2,"cerdik":-2,"ceria":2,"cermat":2,"ceroboh":-2,"charmless":-3,"cinta":3,"cinta kasih":3,"cinta sialan":4,"ciuman":2,"Clears":1,"cocksuckers":-5,"cocok":1,"conciliates":2,"conciliating":2,"Congrats":2,"consolable":2,"contagions":-2,"contestable":-2,"corrupts":-3,"courageousness":2,"criminated":-3,"criminates":-3,"cuci hijau":-3,"cukup":-2,"cupet":-2,"cupu":-2,"curang":-4,"curiga":-3,"damai":2,"dapat \"t berdiri":-3,"dasar bajingan":-5,"daya hidup":3,"daya tahan":2,"daya tarik":2,"dedicated":2,"dedikasi":2,"defisit":-2,"defrauds":-3,"degradasi":-2,"dehumanizes":-2,"dejecting":-2,"dejects":-2,"demam":-2,"demonstrasi":-1,"demoralisasi":-2,"demoralizes":-2,"denda":-2,"dengan benar":2,"denier":-2,"deportasi":-2,"derails":-2,"derides":-2,"derita":-3,"dermawan":2,"despairs":-3,"destruktif":-3,"dewasa":2,"dgn berani":2,"dgn kasar":-2,"dgn kurang sopan":-2,"dgn menghina":-2,"dgn sangat merugikan":3,"di mana-mana":2,"diabaikan":-2,"diakses":1,"diakui":2,"diampuni":2,"diancam":-2,"dianiaya":-2,"dibatalkan":-1,"dibebankan":-3,"dibebaskan":2,"dibedakan":2,"dibenarkan":2,"diberikan":1,"dibersihkan":1,"diblokir":-1,"dibuang":-2,"dibubarkan":-2,"dicapai":1,"dicegah":-1,"dicemooh":-2,"dicintai":-2,"diculik":-2,"dicurangi":-1,"dicuri":-2,"didakwa":-2,"didamaikan":2,"dideportasi":-2,"didiskreditkan":-2,"didiskualifikasi":-2,"didorong":2,"didukung":2,"dieksploitasi":-2,"dievakuasi":-1,"digagalkan":-2,"diganggu":-2,"Diganggu":-3,"digoda":-1,"digugat":-2,"dihancurkan":2,"dihargai":2,"dihindari":-1,"dihormati":2,"dihukum":-2,"diindoktrinasi":-2,"diinginkan":2,"diinterogasi":-2,"dijamin":2,"dikalahkan":-2,"dikasihani":-1,"dikecualikan":-2,"dikenakan":-1,"dikhianati":-3,"dikucilkan":-2,"dilakukan":-2,"dilanggar":-2,"dilarang":-2,"dilecehkan":-3,"dilema":-1,"dilenyapkan":-2,"dilligence":2,"diluar jangkauan":2,"diluncurkan":1,"dilupakan":-1,"dimanipulasi":-1,"dimengerti":-2,"dimodernisasi":2,"dimonopoli":-2,"dipadatkan":2,"dipaksa":-2,"dipalsukan":-3,"dipecat":-1,"dipenjara":-2,"diperas":-3,"diperbaiki":-2,"diperburuk":-2,"dipercaya":2,"dipercayakan":2,"diperjuangkan":2,"diperkosa":-4,"diperkuat":2,"dipermalukan":-3,"diperoleh":2,"diperparah":-2,"dipertahankan":-1,"dipertanyakan":-2,"dipikirkan":-2,"dipilih sendiri":1,"dipoles":2,"dipromosikan":1,"diprovokasi":-1,"dipshit":-3,"dipuji":2,"dirangsang":1,"diratifikasi":2,"direkomendasikan":2,"diremehkan":-2,"dirugikan":-2,"dirusak":-2,"disahkan":2,"disalahgunakan":-2,"disalahpahami":-2,"disalahtafsirkan":-2,"disamarkan":-1,"disambut":1,"disayangi":2,"disconsolation":-2,"disebut-sebut":-2,"disederhanakan":-2,"diselundupkan":-2,"disempurnakan":2,"disengketakan":-2,"disensor":-2,"disetujui":2,"disimpan":2,"diskon":-1,"diskriminasi":-2,"diskriminatif":-2,"disproporsional":-2,"disuap":-3,"disumpal":-2,"ditakdirkan":-2,"ditakuti":-2,"ditangkap":-3,"ditebus":2,"ditegur":-2,"ditenangkan":3,"ditenggelamkan":-2,"diterima":1,"diteror":-3,"dithering":-2,"ditikam":-2,"ditimpakan":-2,"ditinggalkan":-2,"ditingkatkan":2,"ditipu":-3,"ditolak":-1,"dituduh":-2,"ditunda":-1,"ditunggu":-1,"dituntut":-2,"diuntungkan":2,"diusir":-2,"divalidasi":1,"dorongan":2,"dosa":-2,"Douchebag":-3,"downer":-2,"downside":-2,"dugaan":-2,"duka":-2,"Dukung":2,"dukungan":2,"dungu":-3,"dupa":-2,"durhaka":-2,"efek samping":-2,"efektif":2,"efektivitas":2,"egois":2,"egoisme":-3,"ejekan":-2,"eksklusif":2,"eksploitasi":-2,"eksplorasi":1,"ekstremis":-2,"ekstrimis":-2,"elegan":2,"emas":2,"empati":2,"Engages":1,"enraging":-2,"erangan":-2,"etis":2,"euforia":4,"evergreen":2,"evergreening":-3,"exasparate":-2,"exasperates":-2,"exhilarates":3,"exonerates":2,"exonerating":2,"exultantly":3,"fanatik":-2,"fantastis":4,"fasis":-2,"fatal":-3,"favorit":2,"favourited":2,"firdaus":3,"flagship":2,"flu":-2,"fobia":-2,"frikin":-2,"frustasi":-2,"frustrasi":-2,"ftw":3,"fuckers":-4,"fuckface":-4,"fuckhead":-4,"fucking baik":4,"fucking panas":2,"fucktard":-4,"fud":-3,"fuked":-4,"fuking":-4,"gadungan":-3,"gagah":3,"gagal":-2,"gairah":1,"game-changing":3,"ganas":-2,"gandrung":2,"gangguan":-3,"ganti rugi":-3,"garis miring":-2,"garis terdepan":1,"gatal":-2,"gelandangan":-2,"geli":3,"gelisah":-2,"gemar":2,"gembira":2,"gembira luar biasa":4,"gembira sekali":4,"gemetaran":-2,"geram":-2,"getaran":-2,"giat":1,"gigih":2,"gila":-2,"glamor":3,"glamourous":3,"goofiness":-2,"goyah":-2,"gr8":3,"greenwash":-3,"greenwasher":-3,"greenwashers":-3,"greenwashing":-3,"gugup":-2,"guncangan":-2,"Ha":2,"ha ha":3,"ha ha ha":3,"habis":-2,"hack":-1,"hadiah":2,"hahahah":3,"hal":2,"hal mudah tertipu":-2,"halangan":-2,"hambar":-2,"hambatan":-2,"hampir mati":-3,"hancur":-2,"hangat":1,"hantu":-1,"haplessness":-2,"happiest":3,"haram":-3,"haram jadah":-5,"harapan":2,"hardier":2,"harmoni":2,"harmonis":2,"harried":-2,"harta":2,"hasil karya":4,"hasutan":-2,"hati":5,"hati-hati":2,"heavyhearted":-2,"hebat":-3,"hehe":2,"henti":-1,"heran":2,"heroik":3,"hibah":1,"hiburan":3,"hidup":1,"hijau sepanjang tahun":2,"hilang":-2,"hina":-2,"hiruk-pikuk":-3,"histeri":-3,"histeris":-3,"homo":-3,"hooligan":-2,"Hore":5,"hormat":2,"hujan":-1,"hujan es":2,"hukum":1,"hukuman":-2,"hukuman penjara":-2,"humerous":3,"hutang":-2,"iba":2,"ih":-2,"ikatan cabang":-3,"ikut":1,"ilegal":-3,"imajinatif":2,"iman":1,"imbalan":2,"impedingly":-2,"impoten":-2,"impresif":3,"imun":1,"imut":2,"incensing":-2,"indah":3,"indoctrinates":-2,"indoktrinasi":-3,"inediable":-2,"infantilized":-2,"infeksi":-2,"infests":-2,"inflicts":-2,"infract":-2,"infracted":-2,"infracting":-2,"infracts":-2,"infuriates":-2,"ingin":1,"ingin tahu":1,"inovasi":1,"inovatif":2,"insomnia":-2,"inspirasi":2,"inspirasional":2,"inspiratif":3,"integritas":2,"intens":1,"interupsi":-2,"intimidasi":-2,"intransigency":-2,"intrik":1,"invasi":-1,"investigator - Penyelidik":-3,"irama":3,"irasional":-1,"ireversibel":-1,"iri":-2,"iri hati":-1,"ironi":-1,"ironis":-1,"irreproducible":-2,"Isa":1,"istimewa":2,"iya nih":1,"jahat":-3,"jalan buntu":-2,"janda":-1,"janggal":-2,"janji":1,"jas hujan":2,"jatuh":-2,"jelas":1,"jelek":-2,"jengkel":-3,"jenis":2,"jepit":-2,"jeritan":-2,"jijik":-3,"juara":2,"jujur":2,"jumplang":-1,"kacamata":-3,"kacau":-4,"kagum":3,"kalah":-3,"kalah jumlah":-2,"kalimat":-2,"kambing hitam":-2,"kanker":-1,"kapak":-1,"kapal":1,"karisma":2,"karya":4,"kasar":-3,"kasih sayang":3,"kasihan":-2,"kata-kata kasar":-3,"kaya":2,"keadaan darurat":-2,"keadilan":2,"keajaiban":4,"keamanan":1,"keandalan":2,"kearifan":2,"kebahagiaan":3,"kebaikan":2,"kebal":2,"kebangkrutan":-3,"kebebasan":2,"kebenaran":2,"kebencian":-2,"keberahian":2,"keberanian":2,"keberhasilan":2,"keberlanjutan":1,"keberuntungan":3,"kebetulan":-2,"kebiadaban":-3,"kebijaksanaan":2,"kebocoran":-1,"kebodohan":-3,"kebugaran":1,"kebutahurufan":-2,"kecabulan":-2,"kecaman":-2,"kecapaian":-2,"kecelakaan":-2,"kecemburuan":-2,"kecemerlangan":3,"kecerahan":1,"kecewa":-2,"kecupetan":-2,"kecurangan":-3,"kedermawanan":2,"kegagahan":3,"kegagalan":-2,"kegairahan":2,"kegelapan":-1,"kegelisahan":-2,"kegembiraan":4,"kegemparan":-3,"kegemukan":-1,"kegilaan":-3,"kegunaan":2,"kehancuran":-2,"kehangatan":2,"kehati-hatian":2,"kehilangan":-2,"kehormatan":2,"keindahan":3,"keinginan":1,"keintiman":2,"kejahatan":-3,"kejahatan besar":-3,"kejam":-2,"kejang":-1,"kejangkitan":-2,"kejatuhan":-1,"kejayaan":2,"kejelasan":2,"kejelekan":-3,"kejengahan":-2,"keji":-3,"kekacauan":-2,"kekalahan":-3,"kekanak-kanakan":-2,"kekayaan":3,"kekecewaan":-2,"kekejaman":-3,"kekeliruan":-2,"kekerasan":-3,"kekerasan pendirian":-2,"kekerasan terkait":-3,"kekesalan":-2,"kekhawatiran":-3,"kekosongan":-1,"kekuatan":2,"kekuatiran":2,"kekurangan":-2,"kekurangpekaan":-2,"kelabu":-1,"kelainan bentuk":-2,"kelakuan buruk":-2,"kelalaian":-1,"kelambanan":-2,"kelangkahan":-2,"kelaparan":-2,"kelebihan":-1,"keledai jantan":-4,"kelelahan":-2,"kelemahan":-2,"kelembutan":2,"kelesuan":-2,"kelezatan":3,"keliru":-2,"keluar":-2,"kelucuan":2,"keluhan":-2,"kemajuan":2,"kemakmuran":3,"kemalangan":-2,"kemampuan":2,"kemarahan":-2,"kemasukan setan":-3,"kematian":-2,"kemauan baik":3,"kemenangan":4,"kemenyan":-2,"kemewahan":2,"kemiskinan":-1,"kenangan":1,"kencing":-4,"kenyamanan":2,"keparat":-4,"kepedaran":-2,"kepemimpinan":1,"kepentingan":1,"kepercayaan":1,"kepincut":1,"kepopuleran":3,"kepuasan":2,"keputusasan":-2,"keracunan":-2,"keraguan":-2,"keramahan":2,"keranjingan":2,"keras":3,"keras kepala":-2,"kerelaan":2,"keren":3,"kerentanan":-2,"kerepotan":-2,"kerinduan":-1,"kerugian":-2,"kerusakan":-3,"kerusuhan":-2,"kesal":-3,"kesalahan":-2,"kesalahan aturan":-2,"kesalahan klasifikasi":-2,"kesayangan":2,"kesederhanaan":1,"kesedihan":-2,"kesejahteraan":2,"keselamatan":2,"kesempatan":2,"Kesempatan":2,"kesempurnaan":3,"kesenangan":3,"kesengsaraan":-2,"kesepian":-2,"keserakahan":-3,"kesesakan":-2,"kesetiaan":2,"kesopanan":2,"kesukaan":2,"kesulitan":-2,"kesuraman":-1,"ketakutan":-2,"ketat":3,"ketegangan":-1,"ketenaran":1,"keterangan yg salah":-2,"keterbatasan":-1,"ketidakadilan":-2,"ketidakbahagiaan":-2,"ketidakcukupan":-2,"ketidakefisienan":-2,"ketidakgunaan":-2,"ketidakmampuan":-2,"Ketidakmampuan":-2,"ketidakpedulian":-2,"ketidakpercayaan":-3,"ketidaksenangan":-2,"ketinggalan":-1,"ketulusan":2,"keunggulan":3,"keuntungan":2,"khawatir":-2,"khianat":-3,"kinder":2,"kinerjanya buruk":-2,"kios":-2,"kokang":-5,"komedi":1,"komik":1,"komitmen":2,"kompak":1,"kompeten":2,"kompetensi":1,"kompetitif":2,"konflik":-2,"konspirasi":-3,"kontaminan":-2,"kontaminasi":-2,"kontensius":-2,"kontol":-4,"kontradiksi-diri":-2,"kontroversi":-2,"kontroversial":-2,"konyol":-2,"korban":-3,"korban jiwa":-3,"korban kecelakaan":-2,"korup":-3,"korupsi":-3,"kosong":-1,"kotor":-2,"kotoran":-4,"kreatif":2,"krisis":-3,"kritik":-2,"kritikus":-2,"kualitas":2,"kuasa":2,"kuat":2,"kuatir":-3,"kuburan":-2,"kucam":-2,"kumandang":-2,"kumparan tali pancing":-2,"kurang":-2,"kurang baik":-2,"kurang beruntung":-2,"kurang menarik":-2,"kurang sehat":-2,"kutukan":-1,"labil":-2,"lagging":-2,"lags":-2,"lagu":3,"lalai":-2,"lalim":-2,"lamban":-2,"lancar":-2,"larangan":-2,"larutan":1,"laughting":1,"lawan":-2,"lawl":3,"layak":2,"lebam":-2,"lebih aman":2,"lebih baik":2,"lebih besar":3,"lebih buruk":-3,"lebih keras":-2,"lebih kuat":2,"lega":2,"lekuk":-2,"lela":2,"lelah":-2,"lelucon":2,"lemah":-2,"lembut":2,"lenyap":-1,"lestari":2,"lesu":-2,"letal":-2,"lethality":-2,"lezat":3,"liar":-3,"licik":2,"licin":2,"likers":2,"limbah":-1,"lincah":2,"lmao":4,"LMFAO":4,"lobi":-2,"lol":3,"lolol":4,"lololol":4,"lolololol":4,"lolos":-1,"longgar":-3,"lool":3,"loool":3,"looool":3,"looses":-3,"lovelies":3,"loyalitas":3,"luar biasa":4,"luas":1,"lucu":2,"lumpuh":-2,"lunak":1,"lupa":-1,"lupa tempat menyimpan":-2,"lurus":1,"Maaf":2,"mabuk":-2,"mabuk benar":-4,"macet":-2,"mahal":-2,"maju":1,"Makmur":3,"makna":1,"maladaption":-2,"malang":-2,"malapetaka":-2,"malas":-1,"malu":-2,"mampu":1,"manfaat":2,"manipulasi":-1,"manis":2,"manja":-2,"manusiawi":2,"mapan":2,"marah":-3,"marah-marah":-2,"martabat":2,"masalah":1,"masam":-2,"matang":-2,"mati":-3,"mati-matian":-3,"mati rasa":-1,"mawar":1,"mayat":-1,"medali":3,"megah":3,"melabur":-3,"melakukan":1,"melampaui batas":-2,"melanggar":-2,"melankolis":-2,"melarang":-2,"melarikan diri":-1,"melebih-lebihkan":-2,"melecehkan":-3,"melelahkan":-2,"melemah":-2,"melemahkan":-2,"melenyapkan":-2,"melindungi":1,"melit":2,"melobi":-2,"meluas":1,"melumpuhkan":-2,"Melumpuhkan":-2,"memaafkan":1,"memadai":1,"memajukan":1,"memaksakan":-1,"memalsukan":-3,"memalukan":-2,"memanaskan":-2,"memancing kemarahan":-2,"memangkas":-2,"memanipulasi":-1,"memarahi":-2,"memastikan":1,"mematahkan semangat":-2,"mematikan":-3,"membahayakan":-2,"membalas":-2,"membalas dendam":-2,"membalikkan":-2,"membantah":-2,"membanting":-2,"membantu":2,"membatalkan":-1,"membatasi":-2,"Membatasi":-2,"membayar":-1,"membebani":-2,"membebaskan":-1,"membedakan":-2,"membeku":2,"membelanjakan":-2,"membenarkan":2,"Membenarkan":2,"membenci":-3,"memberdayakan":2,"memberi penerangan":2,"memberitahukan":-2,"memberkati":2,"membingungkan":-2,"memboikot":-2,"memboikot dr masyarakat":-2,"membosankan":-2,"membuang":-1,"membuat kasar":-2,"membuka":-1,"membungkam":-1,"membunuh":-3,"memburuk":-3,"memecahkan":1,"memekakkan telinga":-1,"memeluk":2,"memenuhi":2,"memenuhi tuntutan":2,"memerangi":-1,"memeras":-3,"memfavoritkan":2,"memikat":3,"memilukan":-2,"meminta maaf":-1,"Meminta maaf":-1,"memodernisasi":2,"memonopoli":-2,"memoriam":-2,"memotivasi":2,"memotong":-2,"mempelopori":2,"memperbaiki":2,"memperberat":-2,"memperbudak":-2,"memperburuk":-2,"mempercantik":3,"memperdaya":-2,"memperingatkan":-2,"memperkosa":-4,"memperkuat":2,"memperlambat":-2,"memperlengkapi":-1,"memperluas":1,"mempermalukan":-2,"memperpanjang":1,"memperparah":-2,"mempertahankan":2,"mempertanyakan":-1,"mempesona":3,"mempromosikan":1,"memprotes":-2,"memprovokasi":-1,"memuja":3,"memujanya":3,"memuji":2,"memukul mundur":-1,"memulihkan":1,"memurnikan":1,"memutarbalikkan":-2,"memvalidasi":1,"menahan":-2,"menakjubkan":2,"menakutkan":-3,"menang":4,"menangguhkan":-1,"menangis":-2,"menangkap":-2,"menantang":-1,"menanti":-1,"menarik":3,"menawan":3,"mencaci":-3,"mencapai":1,"mencatut":-2,"mencegah":-1,"mencela":-2,"mencemari":-2,"mencengangkan":3,"mencengkeram":2,"mencerahkan":2,"mencerca":-3,"mencintai":3,"mencintai sialan":4,"mencuci hijau":-3,"menculik":-2,"mencuri":-2,"mencurigai":-1,"mencurigakan":-2,"mendamaikan":2,"mendapatkan":2,"mendeportasi":-2,"menderita":-3,"menderita sekali":-3,"mendesah":-2,"mendiamkannya":-1,"mendiskriminasikan":-2,"mendistorsi":-2,"mendorong":2,"menduduki":-2,"mendukung":1,"mendung":-1,"mendustakan":-2,"menegur":-3,"menekankan":-1,"menembak":-1,"menenangkan":3,"menenggelamkan":-2,"menentukan":1,"menerangi":2,"menerima":1,"meneror":-3,"mengabaikan":-1,"Mengabaikan":-1,"mengacaukan":-2,"mengacukan":-2,"mengadopsi":1,"mengagumi":3,"mengagumkan":4,"mengakui":-1,"mengalahkan":-1,"mengalihkan":-1,"mengalihkan perhatian":-2,"mengamankan":2,"mengambil":1,"mengampuni":2,"mengamuk":-3,"mengancam":-2,"menganiaya":-2,"mengarang":-1,"mengasyikkan":3,"mengecewakan":-2,"mengecualikan":-1,"mengejek":-2,"mengejuntukan":-2,"mengeksploitasi":-2,"mengekspos":-1,"mengeluarkan":-2,"mengeluh":-2,"mengembalikan":1,"mengembang":1,"mengembara":-2,"mengerang":-2,"mengeras":2,"mengerikan":-3,"mengerti":-2,"mengesahkan":1,"mengesalkan":-2,"Mengesampingkan":-2,"mengesankan":3,"mengevakuasi":-1,"menggagalkan":-2,"menggampangkan":-2,"mengganggu":-3,"menggelincirkan":-2,"menggembar-gemborkan":-2,"menggembirakan":2,"menggentari":-3,"menggertak":-2,"menggerutu":-5,"menggugat":-2,"menghadiahkan":3,"menghalangi":-2,"menghambat":-2,"menghancurkan":-3,"menghantui":1,"menghargai":2,"menghebohkan":-3,"mengherankan":3,"menghibur":2,"Menghidupkan":2,"menghidupkan kembali":2,"menghilang":-1,"menghilangkan":2,"menghina":-2,"menghindari":-2,"Menghindari":-1,"menghormat":2,"menghormati":2,"menghukum":-3,"mengikutsertakan":1,"mengilhami":2,"mengindoktrinasi":-2,"mengindoktrinasikan":-2,"menginfeksi":-2,"mengintai":-1,"mengintimidasi":-2,"mengintip":-2,"mengisap":-3,"mengizinkan":1,"mengkhawatirkan":-3,"mengkhianati":-3,"mengklarifikasi":2,"mengkritik":-2,"mengolesi":-2,"mengolok-olok":-2,"mengorbankan":-3,"mengotori":-2,"menguangkan":-2,"mengucapkan selamat":2,"mengulur":-2,"mengundang":1,"mengundurkan diri":-1,"mengungsi":-1,"mengungsikan":-1,"menguntungkan":2,"mengurangi":-1,"mengusir":-2,"mengutuk":-2,"Mengutuk":-2,"menikmati":2,"menimbulkan":-2,"meninggal":-3,"meninggalkan":-2,"meningkat":1,"meningkatkan":2,"menipu":-2,"menipu diri sendiri":-2,"menjamin":1,"menjarah":-2,"menjatuhkan":-1,"menjengkelkan":-2,"menjerit":-2,"menjijikan":-3,"menjijikkan":-2,"menjulang":-1,"menodai":-2,"menolak":-2,"menonaktifkan":-1,"menonjol":1,"mentah":-1,"mentereng":3,"menuduh":-2,"menulari":-2,"menumpuk":-1,"menunda":-1,"menunggu":-1,"menuntut":-1,"menurunkan":-2,"menusuk":-2,"menutupi":-3,"menyadari":-2,"menyakiti":-2,"menyakitkan":-2,"menyalahgunakan":-2,"menyalahkan":-2,"menyamarkan":-1,"menyambut":2,"menyangkal":-2,"menyangsikan":-2,"menyapa":1,"menyaring":1,"menyayangkan":-3,"menyayat hati":-3,"Menyebabkan":-1,"menyebalkan":-3,"menyederhanakan":-2,"menyedihkan":-2,"menyegarkan":2,"menyela":-2,"menyelamatkan":2,"menyelesaikan":2,"menyelundupkan":-2,"menyembah":3,"menyembunyikan":-1,"menyenangkan":-2,"Menyenangkan":3,"menyentakkan":-3,"menyerang":-1,"menyerbu":-2,"menyeret":-1,"menyesah":-3,"menyesali":-2,"menyesalkan":-3,"menyesatkan":-3,"menyetujui":2,"menyia-nyiakan":-2,"menyia nyiakan":-2,"menyiksa":-3,"menyimpan":2,"menyinggung":-2,"menyoroti":2,"menyuap":-3,"menyukai":2,"menyumbangkan":2,"meracuni":-2,"meradang":-2,"meragukan":-1,"merajalela":-2,"merajuk":-2,"merampas":-2,"merangkul":1,"merangsang":2,"meratapi":-2,"merayakan":3,"Merayakan":3,"merayu":3,"meredakan":2,"merekomendasikan":2,"meremehkan":-1,"meremukkan":-1,"merendahkan":1,"merenung":-2,"merepotkan":-2,"meringankan":1,"merosot":-1,"merugikan":-2,"meruntuhkan":-2,"merusak":-3,"mesin tenun":-1,"mesum":-2,"metodis":2,"meyakinkan":1,"mimpi":1,"minta maaf":-1,"mirthfully":3,"misbranding":-3,"mischiefs":-1,"misclassifies":-2,"misclassify":-2,"misconducted":-2,"misconducts":-2,"miskin":-2,"misleaded":-3,"misplaces":-2,"mispricing":-3,"misreport":-2,"misreported":-2,"misreporting":-2,"misreports":-2,"misunderstands":-2,"mitos":-1,"mode":-2,"modernisasi":2,"mongering":-2,"monopolinya":-2,"motherfucking":-5,"motivasi":1,"Mourns":-2,"muda":2,"mudah":2,"mudah tersinggung":-2,"mudah tertipu":-2,"mulia":2,"mulus":2,"munafik":-2,"mundur":-1,"muntah":-3,"muntahan":-3,"murah hati":2,"muram":-2,"murka":-3,"murni":1,"murung":-2,"musnah":-3,"musuh":-2,"mutakhir":2,"n00b":-2,"nada datar":-1,"naif":-2,"naik":1,"nakal":-2,"narsisisme":-2,"nasib":2,"negatif":-2,"nekat":-2,"neraka":-4,"ngeri":-3,"niggas":-5,"nikmat":2,"noda":-2,"non-disetujui":-2,"novel":2,"nyaman":3,"nyata":2,"objek wisata":2,"oks":2,"olahan":1,"omong kosong":-2,"ompong":-2,"oops":-2,"optimis":2,"optimisme":2,"optionless":-2,"orang bodoh":-3,"orang fanatik":-2,"orang gila":-3,"orang Negro":-5,"orang yg buruk tabiatnya":-2,"orisinal":-2,"ostracizes":-2,"outage":-2,"overreaction":-2,"overselling":-2,"oversells":-2,"oversold":-2,"overstatement":-2,"overstatements":-2,"oxymoron":-1,"padam":-2,"padat":2,"pahit":-2,"pahlawan":2,"paksaan":-2,"paling gila":-2,"paling keras":-2,"palsu":-2,"pancaran":1,"pancuran":-3,"panggilan":-2,"panik":-3,"pantat":-4,"paradoks":-1,"parah":-2,"parodi":-2,"pasif":-1,"patah hati":-2,"payudara":-2,"pecah":-1,"pecahnya":-2,"pecinta":2,"pecundang":-3,"pedas":-3,"pedih":2,"peduli":2,"pekerjaan yg membosankan":-2,"pelacur":-5,"pelaku":-2,"pelaku kejahatan":-2,"pelanggar":-2,"pelanggaran":-2,"pelemahan":-2,"pelit":-2,"pelobi":-2,"peluang":2,"pelukan":2,"pelupa":-2,"pemaaf":1,"pemadat":2,"pemakaman":-1,"pemalsu":-3,"pemalu":-1,"pembalas":-2,"pembalasan":-2,"pembangunan yang timpang":-2,"pembatas":-2,"pembayaran kembali":-3,"pembela":2,"pembenci":-3,"pemberani":2,"Pemberdayaan":2,"pemberian":1,"pemberontak":-2,"pemberontakan":-2,"pembersih":2,"pembinasaan":-2,"pemblokiran":-1,"pembohong":-3,"pembohongan":-3,"pembual":-3,"pembunuh":-2,"pembunuhan":-3,"pembunuhan orang":-3,"pembunuhan secara":-3,"pemecahan":1,"pemecatan":-3,"pemenang":4,"pemenuhan":2,"pemerasan":-3,"pemerkosa":-4,"pemogokan":-1,"pemotongan":-2,"pemujaan":3,"pemukiman":1,"penahanan":-2,"penalti":-2,"penangkapan":-2,"penarikan":-3,"pencegah":-2,"pencemar":-2,"penculikan":-2,"pencuri":-2,"pencurian":-2,"pendakwaan":-3,"pendendam":-2,"penderita":-2,"penderitaan":-2,"pendukung":1,"penembakan":-2,"penerimaan":1,"penerobosan":3,"pengabaian":-2,"Pengacau":-2,"pengakuan":2,"pengampunan":2,"penganggur":-1,"pengangguran":-2,"penganiayaan":-2,"pengap":-2,"pengasingan":-2,"pengasuhan":2,"pengecualian":-1,"pengecut":-2,"penggarongan":-2,"penggelapan":-3,"penggelisah":-2,"penggemar":3,"penghambat":-2,"penghancuran":-2,"penghargaan":3,"Penghargaan":2,"penghinaan":-2,"penghukuman":-2,"pengkhianatan":-3,"pengkritik":-2,"penglihatan":1,"pengotor":-2,"penguatan":2,"pengungsian":-1,"pengunjuk rasa":-2,"Pengunjung":-1,"pengurangan":-2,"pengusiran":-1,"penindasan":-2,"penipu":-3,"penipuan":-4,"penjahat":-3,"penjara":-2,"penolak":-2,"penolakan":-2,"penting":2,"pentingnya":2,"penuh dosa":-3,"penuh kasih":2,"penuh kebahagiaan":3,"penuh kebajikan":3,"penuh pengharapan":2,"penularan":-2,"penumpasan":-1,"penuntutan":-1,"penurunan":-1,"penyakit":-2,"penyakit jiwa":-2,"penyalahgunaan":-2,"penyalahgunaan kekuasaan":-2,"penyamaran":-1,"penyangkalan":-2,"penyederhanaan yg berlebih-lebihan":-2,"penyelamat":4,"penyelesaian":1,"penyelewengan fungsi":-2,"penyelidikan":-2,"penyelundupan":-2,"penyesalan":-2,"penyiksaan":-4,"penyitaan":-2,"perampasan":-3,"perampok":-2,"perang":-2,"perangkap":-1,"perasaan":1,"perasaan bosan":-2,"perasaan waswas":-2,"perayaan":3,"perbaikan":2,"perbuatan mengacau":-2,"perbudakan":-3,"percaya":-1,"percaya diri":2,"percikan":1,"percintaan":2,"perdamaian":2,"Perfect":2,"perhiasan":1,"periang":1,"peringatan":-3,"PERINGATAN":-3,"perjuangan":-2,"perkara hukum":-2,"perkelahian":-2,"Perkuat":2,"permata":1,"permintaan":-1,"permintaan maaf":-1,"persahabatan":2,"perselisihan":-2,"persengketaan":-2,"persetujuan":1,"pertanyaan":-1,"pertarungan":-1,"pertempuran":-1,"pertentangan":-2,"pertumbuhan":2,"perundingan":-1,"pesimisme":-2,"pesimistis":-2,"pesona":3,"petualang":2,"petualangan":2,"pidana":-3,"pintar":2,"piuh":-2,"polusi":-2,"polutan":-2,"populer":3,"posesif":-2,"positif":2,"post-traumatic":-2,"prasangka":-1,"prblm":-2,"prblms":-2,"prestasi":2,"prihatin":-2,"proaktif":2,"propaganda":-2,"proses pengadilan":-1,"prospek":1,"protes":-2,"pseudosains":-3,"psikopat":-2,"puas":2,"pujian":2,"pujian kpd Tuhan":3,"pulih":1,"puncak":2,"punggung":1,"pura-pura":-3,"pusing":-1,"putus asa":-2,"putusan":-1,"racun":-3,"rageful":-2,"ragu-ragu":-1,"rahmat":4,"ramah":2,"ramah lingkungan":2,"ramah tamah":2,"rampok":-2,"Ranters":-3,"rants":-3,"rapi":2,"rasa sakit":-2,"rasis":-3,"rasisme":-3,"relief":1,"rendahan":-2,"rentan":-2,"renungan":2,"reruntuhan":-2,"resesi":-2,"resolusi":2,"resolves":2,"responsif":2,"riang":4,"rindu":-2,"ringan":2,"rintangan":-2,"rintihan":-2,"risiko":-2,"riuh":-1,"robek":-2,"robing":-2,"rofl":4,"roflcopter":4,"roflmao":4,"romantical":2,"ROTFL":4,"rotflmfao":4,"rotflol":4,"ruam":-2,"rumah sakit":-2,"rumit":-2,"runtuh":-2,"rusak":-3,"Rusak":-3,"sabotase":-2,"sah":1,"saham":1,"sakit":-2,"sakit kepala":-2,"salah":-2,"Salah":-1,"salah informasi":-2,"salah lagi":-2,"salah membaca":-1,"salah menaruhkan":-2,"salah paham":-2,"salah pengertian":-2,"salah pilih":-2,"salam":2,"Salam pembuka":2,"salut":2,"samar":-2,"sampah":-3,"sangat":4,"sangat bagus":4,"sangat efektif":-2,"sangat imut":3,"sangat indah":3,"sangat marah":-2,"sangat menarik":3,"santai":2,"sarankan":2,"sarkastik":-2,"savange":-2,"savanges":-2,"sayang":3,"Sayang":-1,"sebaiknya":1,"secara bodoh":-2,"secara menguntungkan":2,"secara romantis":2,"secara tidak sengaja":-2,"sederhana":-2,"sedih":-3,"segan":-2,"segar":1,"sehat":2,"seimbang":1,"sejenis":0,"sekali dalam seumur hidup":3,"seksi":3,"seksis":-2,"sekutu":2,"selamat":2,"Selamat":2,"SELAMAT DATANG":2,"Selamat pagi":1,"selang":-1,"semangat":1,"sembelit":-2,"semoga":2,"sempurna":3,"semrawut":-2,"senang":5,"sendirian":-2,"sendok":3,"sengaja":2,"sengit":-3,"senjata":-1,"sensor":-2,"Senyumnya":2,"sepakat":1,"sepele":-2,"seperti":2,"seragam":-2,"serakah":-2,"seram":-2,"serangan":-1,"serasi":2,"serikat":1,"serius":-1,"sesuai":2,"sesuai bagi":2,"setia":3,"setuju":1,"sexistic":-2,"shoody":-2,"sia-sia":-2,"sial":-3,"sialan":-4,"sialan besar":4,"sialan fantastis":4,"sialan indah":4,"sialan lucu":4,"sialan menakjubkan":4,"sialan sempurna":4,"sialan terbaik":4,"siap":-2,"sifat agresif":-2,"sigap":2,"sikap tak hormat":-2,"silahkan":1,"simpati":2,"simpatik":2,"sinar matahari":2,"singleminded":-2,"sinis":-2,"sinisme":-2,"skandal":-3,"skeptis":-2,"slickest":2,"snubbing":-2,"snubs":-2,"solidaritas":2,"solusi":1,"sombong":-2,"sopan":-2,"sorak-sorai":2,"sosial":2,"Spam":-2,"spammer":-3,"spamming":-2,"spekulatif":-2,"stabil":2,"steal":-2,"stereotip":-2,"stinked":-2,"stres":-2,"stressor":-2,"striker":-2,"suap":-3,"substansial":1,"subur":2,"subversif":-2,"sueing":-2,"suka beperkara":-2,"sukacita":3,"sukses":3,"sulit":-1,"Sumbang":2,"sumbangan":2,"sumpah palsu":-3,"sundal":-4,"sungguh-sungguh":2,"super":3,"suram":-2,"surga":2,"surgawi":4,"susah":-2,"syok":-2,"tabah":2,"tabrakan":-2,"tabungan":1,"tahan lama":2,"tahanan":-2,"tahi":-4,"tajam":1,"tak ada artinya":-2,"tak baik":-2,"tak berampun":-3,"tak berarti":-2,"tak berdaya":-2,"tak bergairah":-2,"tak berguna":-2,"tak bernyawa":-1,"tak berterimakasih":-3,"tak disengaja":-2,"tak kenal ampun":-2,"tak kenal takut":2,"tak layak":-2,"tak menentu":-1,"tak terhindarkan":-3,"tak terjual":-1,"tak terkalahkan":2,"tak terpenuhi":-2,"tak tertahankan":-2,"takjub":2,"takut":-2,"tampan":3,"tanggung jawab":2,"tangisan":-2,"tanpa belas kasihan":-1,"tanpa fantasi":-2,"tanpa jaminan":-2,"tanpa kegembiraan":-2,"tantangan":-1,"tard":-2,"tarik":2,"tarnishes":-2,"tawanan":-2,"tawar":2,"tdk berdaya":-2,"tdk ilmiah":-2,"tdk masuk akal":-2,"tdk pantas menurut kedudukan":-2,"tdk puas":-2,"tdk tegas":-2,"tegang":-2,"tegas":2,"teguran":-2,"tekanan":-1,"tekun":2,"teman":1,"temanmu":2,"tempur":-1,"tenang":2,"tengara":2,"tenggelam":-2,"tenun":-1,"tepat":1,"tepuk tangan":2,"tepuk tangan sorak":2,"teramat":-2,"terancam":-2,"terang":2,"terbaik":3,"terbatas":-1,"terbebani":-2,"terbelakang":-2,"terbesar":3,"terbuang":-2,"terbujuk":-2,"terbunuh":-3,"terburuk":-3,"tercapai":1,"tercekek":-2,"tercemar":-2,"tercerahkan":2,"tercinta":3,"terdegradasi":-2,"terdorong":1,"terfokus":2,"terganggu":-2,"tergantung":-1,"tergelap":-2,"tergelincir":-1,"tergoda":2,"terhambat":-2,"terhenti":-2,"terhina":-2,"terhormat":2,"terhukum":-2,"teriakan":-2,"terima":2,"Terima kasih":2,"terinfeksi":-2,"terinfestasi":-2,"terintimidasi":-2,"terjangkau":2,"terjawab":-2,"terkejut":-2,"terkemuka":2,"terkena":-2,"terkenal":3,"terkenal jahat":-2,"terkuat":2,"terkurung":-2,"terkutuk":-4,"terlalu banyak menjual":-2,"terlalu protektif":-2,"terlambat":-1,"terlantar":-2,"terlarang":-2,"terlewatkan":-1,"terlindung":1,"terluka":-2,"terlupakan":-1,"termenung":-1,"termiskin":-2,"termotivasi":2,"termurah":-1,"ternoda":-2,"teror":-3,"teroris":-2,"terpaksa":-1,"terpecahkan":1,"terpencil":-1,"terpengaruh":-1,"terpenuhi":2,"terperangkap":-2,"terperanjat":-2,"terpercaya":2,"terperdaya":-3,"terpesona":2,"terpikat":3,"terpisah":-1,"terpukul":-2,"terputus":-2,"terputus-putus":-2,"terrifically":4,"tersangka":-1,"tersedak":-2,"terselesaikan":2,"tersenyum":2,"terserang":-1,"terserap":1,"tersiksa":-4,"tersinggung":-2,"tertahan":-1,"tertancap":-2,"tertarik":3,"tertawa":1,"tertekan":-2,"tertentu":1,"tertinggal":-2,"tertinggi":4,"terurai":1,"terusik":-2,"thwarts":-2,"tiada bandingan":1,"tiada bandingnya":2,"tidak":-2,"tidak adil":-2,"tidak aman":-2,"tidak bahagia":-2,"tidak baik":-2,"tidak bekerja":-3,"tidak benar":-2,"tidak dapat dihentikan":2,"tidak dapat diterima":-2,"tidak didukung":-2,"tidak disetujui":-2,"tidak disukai":-2,"tidak efektif":-2,"tidak efisien":-2,"tidak etis":-2,"tidak fokus":-2,"tidak higienis":-2,"tidak jujur":-2,"tidak layak dicintai":-2,"tidak lengkap":-1,"tidak mampu":-2,"tidak memadai":-2,"tidak menyenangkan":-3,"tidak menyetujui":-2,"tidak mewakili":-2,"tidak nyaman":-2,"tidak pantas":-2,"tidak peduli":-2,"tidak peka":-2,"tidak puas":-2,"tidak sabar":-2,"tidak sepertinya":-1,"tidak setuju":-2,"tidak suka":-2,"tidak terkesan":-2,"tidak termotivasi":-2,"tidak tersedia":-1,"tidak wajar":-2,"tikus":-4,"timpang":-2,"tindak pidana berat":-3,"tindakan yg bodoh":-2,"tipu":-2,"tipu daya":-2,"toleran":2,"toleransi":2,"tops":2,"totaliter":-2,"totaliterisme":-2,"tragedi":-2,"tragis":-2,"trauma":-3,"traumatis":-3,"tremor":-2,"trust":1,"tuduhan":-2,"tukang jualan":-2,"Tukang onar":-1,"tulah":-3,"tulus":2,"tumbal":-3,"tumbang":-2,"tumor":-2,"tuna wisma":-2,"Tunda":-1,"tuntutan":-1,"tuntutan hukum":-2,"tusukan":-5,"twat":-5,"Tyran":-3,"tyrannic":-3,"tyrannically":-3,"tyrans":-3,"ugal-ugalan":-2,"ulung":2,"umpatan":-2,"unappeasable":-2,"uncredited":-1,"Undang":1,"underperform":-2,"underperformed":-2,"unfitted":-2,"unfunny":-2,"ungenerous":-2,"unggul":2,"uninvolving":-2,"unparliamentary":-2,"unreleting":-2,"unresearched":-2,"untarnished":2,"untung":2,"Untunglah":3,"upeti":2,"urat":-1,"usang":-2,"utuh":2,"vagina":-5,"vested":1,"victimizes":-3,"visi":1,"visioner":3,"vitamin":1,"vonis":-1,"wabah":-2,"wajib":-1,"walkouts":-2,"wanker":-3,"waspada":-1,"wewenang":1,"winwin":3,"won":3,"woohoo":3,"wooo":4,"woow":4,"Wow":4,"WOWOW":4,"wowww":4,"wtf":-4,"wtff":-4,"wtfff":-4,"xo":3,"xoxo":3,"xoxoxo":4,"xoxoxoxo":4,"ya":1,"yakin":-1,"yang funky":2,"yang menghambat":-2,"yang tidak diinginkan":-2,"yeees":2,"yg beralamat buruk":3,"yg diperbudak":-2,"yg disakitkan hati":-2,"yg ditenangkan":2,"yg gemetar":-2,"yg ingin tahu":-2,"yg membayangkan kegembiraan hati":4,"yg memerintah":1,"yg memfitnah":-2,"yg memilukan":-2,"yg mempesonakan":3,"yg mendendam":-2,"yg menderita":-2,"yg menenangkan":2,"yg mengasyikkan":3,"yg mengeluh":-2,"yg mengganggu":-2,"yg mengharukan":3,"yg menghukum":-2,"yg menjengkelkan":-2,"yg menyenangkan":2,"yg meragukan":-1,"yg merenungkan":1,"yg tak dihargai":-2,"yg tak disukai":-2,"yg tak dpt diubah":-1,"yg tdk berlaku":-2,"yg tdk dpt dibenarkan":-3,"yg tdk dpt dipersalahkan":-2,"yg tdk menyetujui":-2,"yg tdk pantas mendapat":-2,"yg tdk percaya":-1,"yucky":-2}
};
sentiment.registerLanguage('id', IdLanguage);

let result = sentiment.analyze(Sentence, {language: 'id'});

let Score = result.score;

let message = 0 > Score
    ? 'negative'
    : 'positive';
let GetSentimen = 0 == Score
    ? 'neutral'
    : message;

const GetSentiment = {
    score: result.score,
    sentiment: GetSentimen,
    comparative: result.comparative,
    calculation: result.calculation,
    tokens: result.tokens,
    words: result.words,
    positive: result.positive,
    negative: result.negative
  };

return JSON.stringify(GetSentiment);
}

module.exports = {
SentimentId
}
