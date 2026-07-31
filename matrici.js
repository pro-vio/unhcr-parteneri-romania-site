// generat de _lucru/site_matrici.py din calibrare/pilot/matrici_pilot.json
var MATRICI = {
 "volum": {
  "titlu": "Postări extrase, pe organizație și an",
  "unitate": "postarea",
  "nota": "Cifra mare e postarea extrasă; cea mică, postarea codabilă. Diferența sunt postările fără text: se extrag, au engagement, nu se pot coda.",
  "randuri": [
   {
    "k": "Help Ukrainians",
    "lbl": "Help Ukrainians",
    "sub": "Galați"
   },
   {
    "k": "CNRR",
    "lbl": "CNRR",
    "sub": "București"
   },
   {
    "k": "Novapolis",
    "lbl": "Novapolis",
    "sub": "Constanța"
   },
   {
    "k": "Association Malva",
    "lbl": "Association Malva",
    "sub": "București"
   },
   {
    "k": "EDNAE",
    "lbl": "EDNAE",
    "sub": "Suceava"
   },
   {
    "k": "MIC Brasov",
    "lbl": "MIC Brașov",
    "sub": "Brașov"
   }
  ],
  "coloane": [
   {
    "k": "2022",
    "lbl": "2022",
    "n": 52
   },
   {
    "k": "2023",
    "lbl": "2023",
    "n": 71
   },
   {
    "k": "2024",
    "lbl": "2024",
    "n": 49
   },
   {
    "k": "2025",
    "lbl": "2025",
    "n": 51
   },
   {
    "k": "2026",
    "lbl": "2026",
    "n": 51
   }
  ],
  "celule": {
   "Help Ukrainians|2022": {
    "v": 0,
    "v2": 0
   },
   "Help Ukrainians|2023": {
    "v": 28,
    "v2": 27
   },
   "Help Ukrainians|2024": {
    "v": 35,
    "v2": 27
   },
   "Help Ukrainians|2025": {
    "v": 26,
    "v2": 20
   },
   "Help Ukrainians|2026": {
    "v": 18,
    "v2": 13
   },
   "CNRR|2022": {
    "v": 27,
    "v2": 26
   },
   "CNRR|2023": {
    "v": 11,
    "v2": 11
   },
   "CNRR|2024": {
    "v": 9,
    "v2": 9
   },
   "CNRR|2025": {
    "v": 3,
    "v2": 3
   },
   "CNRR|2026": {
    "v": 2,
    "v2": 2
   },
   "Novapolis|2022": {
    "v": 18,
    "v2": 14
   },
   "Novapolis|2023": {
    "v": 9,
    "v2": 5
   },
   "Novapolis|2024": {
    "v": 0,
    "v2": 0
   },
   "Novapolis|2025": {
    "v": 4,
    "v2": 4
   },
   "Novapolis|2026": {
    "v": 19,
    "v2": 16
   },
   "Association Malva|2022": {
    "v": 0,
    "v2": 0
   },
   "Association Malva|2023": {
    "v": 18,
    "v2": 14
   },
   "Association Malva|2024": {
    "v": 4,
    "v2": 3
   },
   "Association Malva|2025": {
    "v": 4,
    "v2": 2
   },
   "Association Malva|2026": {
    "v": 1,
    "v2": 1
   },
   "EDNAE|2022": {
    "v": 0,
    "v2": 0
   },
   "EDNAE|2023": {
    "v": 0,
    "v2": 0
   },
   "EDNAE|2024": {
    "v": 0,
    "v2": 0
   },
   "EDNAE|2025": {
    "v": 13,
    "v2": 12
   },
   "EDNAE|2026": {
    "v": 10,
    "v2": 8
   },
   "MIC Brasov|2022": {
    "v": 7,
    "v2": 6
   },
   "MIC Brasov|2023": {
    "v": 5,
    "v2": 5
   },
   "MIC Brasov|2024": {
    "v": 1,
    "v2": 1
   },
   "MIC Brasov|2025": {
    "v": 1,
    "v2": 1
   },
   "MIC Brasov|2026": {
    "v": 1,
    "v2": 1
   }
  }
 },
 "cod_an": {
  "titlu": "Coduri de activitate, pe an",
  "unitate": "codul",
  "nota": "Unitatea e codul, nu postarea: o postare poate primi mai multe. Numitorul de pe capul coloanei e numărul de postări codate în anul acela.",
  "randuri": [
   {
    "k": "edu_nonformal",
    "lbl": "educație non-formală",
    "sub": "edu_nonformal"
   },
   {
    "k": "com_recreativ",
    "lbl": "recreativ*",
    "sub": "com_recreativ"
   },
   {
    "k": "prot_informare",
    "lbl": "informare și drepturi",
    "sub": "prot_informare"
   },
   {
    "k": "com_mobilizare",
    "lbl": "mobilizare*",
    "sub": "com_mobilizare"
   },
   {
    "k": "edu_personal",
    "lbl": "formare profesioniști",
    "sub": "edu_personal"
   },
   {
    "k": "san_mhpss",
    "lbl": "consiliere psihologică",
    "sub": "san_mhpss"
   },
   {
    "k": "liv_limba",
    "lbl": "cursuri de limbă",
    "sub": "liv_limba"
   },
   {
    "k": "prot_coeziune",
    "lbl": "evenimente cu gazda",
    "sub": "prot_coeziune"
   },
   {
    "k": "baz_hrana",
    "lbl": "hrană",
    "sub": "baz_hrana"
   },
   {
    "k": "liv_antreprenoriat",
    "lbl": "antreprenoriat",
    "sub": "liv_antreprenoriat"
   },
   {
    "k": "san_acces",
    "lbl": "acces la sănătate",
    "sub": "san_acces"
   },
   {
    "k": "prot_juridic",
    "lbl": "asistență juridică",
    "sub": "prot_juridic"
   },
   {
    "k": "liv_ocupare",
    "lbl": "ocupare",
    "sub": "liv_ocupare"
   },
   {
    "k": "baz_nfi",
    "lbl": "bunuri de bază",
    "sub": "baz_nfi"
   },
   {
    "k": "prot_copii",
    "lbl": "protecția copiilor",
    "sub": "prot_copii"
   },
   {
    "k": "liv_tvet",
    "lbl": "calificare profesională",
    "sub": "liv_tvet"
   },
   {
    "k": "prot_trafic",
    "lbl": "trafic de persoane",
    "sub": "prot_trafic"
   },
   {
    "k": "baz_cash",
    "lbl": "bani și tichete",
    "sub": "baz_cash"
   }
  ],
  "coloane": [
   {
    "k": "2022",
    "lbl": "2022",
    "n": 46
   },
   {
    "k": "2023",
    "lbl": "2023",
    "n": 62
   },
   {
    "k": "2024",
    "lbl": "2024",
    "n": 40
   },
   {
    "k": "2025",
    "lbl": "2025",
    "n": 42
   },
   {
    "k": "2026",
    "lbl": "2026",
    "n": 41
   }
  ],
  "celule": {
   "edu_nonformal|2022": {
    "v": 0
   },
   "edu_nonformal|2023": {
    "v": 19
   },
   "edu_nonformal|2024": {
    "v": 17
   },
   "edu_nonformal|2025": {
    "v": 13
   },
   "edu_nonformal|2026": {
    "v": 9
   },
   "com_recreativ|2022": {
    "v": 0
   },
   "com_recreativ|2023": {
    "v": 17
   },
   "com_recreativ|2024": {
    "v": 10
   },
   "com_recreativ|2025": {
    "v": 15
   },
   "com_recreativ|2026": {
    "v": 5
   },
   "prot_informare|2022": {
    "v": 25
   },
   "prot_informare|2023": {
    "v": 2
   },
   "prot_informare|2024": {
    "v": 1
   },
   "prot_informare|2025": {
    "v": 1
   },
   "prot_informare|2026": {
    "v": 1
   },
   "com_mobilizare|2022": {
    "v": 7
   },
   "com_mobilizare|2023": {
    "v": 1
   },
   "com_mobilizare|2024": {
    "v": 1
   },
   "com_mobilizare|2025": {
    "v": 0
   },
   "com_mobilizare|2026": {
    "v": 9
   },
   "edu_personal|2022": {
    "v": 2
   },
   "edu_personal|2023": {
    "v": 3
   },
   "edu_personal|2024": {
    "v": 2
   },
   "edu_personal|2025": {
    "v": 5
   },
   "edu_personal|2026": {
    "v": 5
   },
   "san_mhpss|2022": {
    "v": 0
   },
   "san_mhpss|2023": {
    "v": 5
   },
   "san_mhpss|2024": {
    "v": 1
   },
   "san_mhpss|2025": {
    "v": 0
   },
   "san_mhpss|2026": {
    "v": 1
   },
   "liv_limba|2022": {
    "v": 0
   },
   "liv_limba|2023": {
    "v": 4
   },
   "liv_limba|2024": {
    "v": 0
   },
   "liv_limba|2025": {
    "v": 1
   },
   "liv_limba|2026": {
    "v": 2
   },
   "prot_coeziune|2022": {
    "v": 0
   },
   "prot_coeziune|2023": {
    "v": 4
   },
   "prot_coeziune|2024": {
    "v": 1
   },
   "prot_coeziune|2025": {
    "v": 0
   },
   "prot_coeziune|2026": {
    "v": 1
   },
   "baz_hrana|2022": {
    "v": 0
   },
   "baz_hrana|2023": {
    "v": 1
   },
   "baz_hrana|2024": {
    "v": 1
   },
   "baz_hrana|2025": {
    "v": 0
   },
   "baz_hrana|2026": {
    "v": 1
   },
   "liv_antreprenoriat|2022": {
    "v": 0
   },
   "liv_antreprenoriat|2023": {
    "v": 0
   },
   "liv_antreprenoriat|2024": {
    "v": 0
   },
   "liv_antreprenoriat|2025": {
    "v": 1
   },
   "liv_antreprenoriat|2026": {
    "v": 2
   },
   "san_acces|2022": {
    "v": 0
   },
   "san_acces|2023": {
    "v": 1
   },
   "san_acces|2024": {
    "v": 0
   },
   "san_acces|2025": {
    "v": 1
   },
   "san_acces|2026": {
    "v": 0
   },
   "prot_juridic|2022": {
    "v": 2
   },
   "prot_juridic|2023": {
    "v": 0
   },
   "prot_juridic|2024": {
    "v": 0
   },
   "prot_juridic|2025": {
    "v": 0
   },
   "prot_juridic|2026": {
    "v": 0
   },
   "liv_ocupare|2022": {
    "v": 1
   },
   "liv_ocupare|2023": {
    "v": 1
   },
   "liv_ocupare|2024": {
    "v": 0
   },
   "liv_ocupare|2025": {
    "v": 0
   },
   "liv_ocupare|2026": {
    "v": 0
   },
   "baz_nfi|2022": {
    "v": 0
   },
   "baz_nfi|2023": {
    "v": 1
   },
   "baz_nfi|2024": {
    "v": 0
   },
   "baz_nfi|2025": {
    "v": 0
   },
   "baz_nfi|2026": {
    "v": 0
   },
   "prot_copii|2022": {
    "v": 0
   },
   "prot_copii|2023": {
    "v": 0
   },
   "prot_copii|2024": {
    "v": 1
   },
   "prot_copii|2025": {
    "v": 0
   },
   "prot_copii|2026": {
    "v": 0
   },
   "liv_tvet|2022": {
    "v": 0
   },
   "liv_tvet|2023": {
    "v": 0
   },
   "liv_tvet|2024": {
    "v": 1
   },
   "liv_tvet|2025": {
    "v": 0
   },
   "liv_tvet|2026": {
    "v": 0
   },
   "prot_trafic|2022": {
    "v": 0
   },
   "prot_trafic|2023": {
    "v": 1
   },
   "prot_trafic|2024": {
    "v": 0
   },
   "prot_trafic|2025": {
    "v": 0
   },
   "prot_trafic|2026": {
    "v": 0
   },
   "baz_cash|2022": {
    "v": 1
   },
   "baz_cash|2023": {
    "v": 0
   },
   "baz_cash|2024": {
    "v": 0
   },
   "baz_cash|2025": {
    "v": 0
   },
   "baz_cash|2026": {
    "v": 0
   }
  }
 },
 "cod_org": {
  "titlu": "Coduri de activitate, pe organizație",
  "unitate": "codul",
  "nota": "Aceleași coduri, tăiate pe organizație. Anul și organizația nu sunt independente în pilot: cine lipsește dintr-un an lipsește și din coloana lui.",
  "randuri": [
   {
    "k": "edu_nonformal",
    "lbl": "educație non-formală",
    "sub": "edu_nonformal"
   },
   {
    "k": "com_recreativ",
    "lbl": "recreativ*",
    "sub": "com_recreativ"
   },
   {
    "k": "prot_informare",
    "lbl": "informare și drepturi",
    "sub": "prot_informare"
   },
   {
    "k": "com_mobilizare",
    "lbl": "mobilizare*",
    "sub": "com_mobilizare"
   },
   {
    "k": "edu_personal",
    "lbl": "formare profesioniști",
    "sub": "edu_personal"
   },
   {
    "k": "san_mhpss",
    "lbl": "consiliere psihologică",
    "sub": "san_mhpss"
   },
   {
    "k": "liv_limba",
    "lbl": "cursuri de limbă",
    "sub": "liv_limba"
   },
   {
    "k": "prot_coeziune",
    "lbl": "evenimente cu gazda",
    "sub": "prot_coeziune"
   },
   {
    "k": "baz_hrana",
    "lbl": "hrană",
    "sub": "baz_hrana"
   },
   {
    "k": "liv_antreprenoriat",
    "lbl": "antreprenoriat",
    "sub": "liv_antreprenoriat"
   },
   {
    "k": "san_acces",
    "lbl": "acces la sănătate",
    "sub": "san_acces"
   },
   {
    "k": "prot_juridic",
    "lbl": "asistență juridică",
    "sub": "prot_juridic"
   },
   {
    "k": "liv_ocupare",
    "lbl": "ocupare",
    "sub": "liv_ocupare"
   },
   {
    "k": "baz_nfi",
    "lbl": "bunuri de bază",
    "sub": "baz_nfi"
   },
   {
    "k": "prot_copii",
    "lbl": "protecția copiilor",
    "sub": "prot_copii"
   },
   {
    "k": "liv_tvet",
    "lbl": "calificare profesională",
    "sub": "liv_tvet"
   },
   {
    "k": "prot_trafic",
    "lbl": "trafic de persoane",
    "sub": "prot_trafic"
   },
   {
    "k": "baz_cash",
    "lbl": "bani și tichete",
    "sub": "baz_cash"
   }
  ],
  "coloane": [
   {
    "k": "Help Ukrainians",
    "lbl": "Help Ukrainians",
    "n": 87
   },
   {
    "k": "CNRR",
    "lbl": "CNRR",
    "n": 51
   },
   {
    "k": "Novapolis",
    "lbl": "Novapolis",
    "n": 39
   },
   {
    "k": "Association Malva",
    "lbl": "Association Malva",
    "n": 20
   },
   {
    "k": "EDNAE",
    "lbl": "EDNAE",
    "n": 20
   },
   {
    "k": "MIC Brasov",
    "lbl": "MIC Brașov",
    "n": 14
   }
  ],
  "celule": {
   "edu_nonformal|Help Ukrainians": {
    "v": 42
   },
   "edu_nonformal|CNRR": {
    "v": 3
   },
   "edu_nonformal|Novapolis": {
    "v": 3
   },
   "edu_nonformal|Association Malva": {
    "v": 9
   },
   "edu_nonformal|EDNAE": {
    "v": 0
   },
   "edu_nonformal|MIC Brasov": {
    "v": 1
   },
   "com_recreativ|Help Ukrainians": {
    "v": 26
   },
   "com_recreativ|CNRR": {
    "v": 3
   },
   "com_recreativ|Novapolis": {
    "v": 1
   },
   "com_recreativ|Association Malva": {
    "v": 5
   },
   "com_recreativ|EDNAE": {
    "v": 6
   },
   "com_recreativ|MIC Brasov": {
    "v": 6
   },
   "prot_informare|Help Ukrainians": {
    "v": 0
   },
   "prot_informare|CNRR": {
    "v": 21
   },
   "prot_informare|Novapolis": {
    "v": 4
   },
   "prot_informare|Association Malva": {
    "v": 0
   },
   "prot_informare|EDNAE": {
    "v": 1
   },
   "prot_informare|MIC Brasov": {
    "v": 4
   },
   "com_mobilizare|Help Ukrainians": {
    "v": 2
   },
   "com_mobilizare|CNRR": {
    "v": 6
   },
   "com_mobilizare|Novapolis": {
    "v": 2
   },
   "com_mobilizare|Association Malva": {
    "v": 1
   },
   "com_mobilizare|EDNAE": {
    "v": 6
   },
   "com_mobilizare|MIC Brasov": {
    "v": 1
   },
   "edu_personal|Help Ukrainians": {
    "v": 1
   },
   "edu_personal|CNRR": {
    "v": 4
   },
   "edu_personal|Novapolis": {
    "v": 8
   },
   "edu_personal|Association Malva": {
    "v": 1
   },
   "edu_personal|EDNAE": {
    "v": 3
   },
   "edu_personal|MIC Brasov": {
    "v": 0
   },
   "san_mhpss|Help Ukrainians": {
    "v": 4
   },
   "san_mhpss|CNRR": {
    "v": 2
   },
   "san_mhpss|Novapolis": {
    "v": 0
   },
   "san_mhpss|Association Malva": {
    "v": 0
   },
   "san_mhpss|EDNAE": {
    "v": 0
   },
   "san_mhpss|MIC Brasov": {
    "v": 1
   },
   "liv_limba|Help Ukrainians": {
    "v": 6
   },
   "liv_limba|CNRR": {
    "v": 0
   },
   "liv_limba|Novapolis": {
    "v": 0
   },
   "liv_limba|Association Malva": {
    "v": 0
   },
   "liv_limba|EDNAE": {
    "v": 0
   },
   "liv_limba|MIC Brasov": {
    "v": 1
   },
   "prot_coeziune|Help Ukrainians": {
    "v": 2
   },
   "prot_coeziune|CNRR": {
    "v": 0
   },
   "prot_coeziune|Novapolis": {
    "v": 1
   },
   "prot_coeziune|Association Malva": {
    "v": 2
   },
   "prot_coeziune|EDNAE": {
    "v": 0
   },
   "prot_coeziune|MIC Brasov": {
    "v": 1
   },
   "baz_hrana|Help Ukrainians": {
    "v": 2
   },
   "baz_hrana|CNRR": {
    "v": 0
   },
   "baz_hrana|Novapolis": {
    "v": 0
   },
   "baz_hrana|Association Malva": {
    "v": 1
   },
   "baz_hrana|EDNAE": {
    "v": 0
   },
   "baz_hrana|MIC Brasov": {
    "v": 0
   },
   "liv_antreprenoriat|Help Ukrainians": {
    "v": 0
   },
   "liv_antreprenoriat|CNRR": {
    "v": 0
   },
   "liv_antreprenoriat|Novapolis": {
    "v": 3
   },
   "liv_antreprenoriat|Association Malva": {
    "v": 0
   },
   "liv_antreprenoriat|EDNAE": {
    "v": 0
   },
   "liv_antreprenoriat|MIC Brasov": {
    "v": 0
   },
   "san_acces|Help Ukrainians": {
    "v": 2
   },
   "san_acces|CNRR": {
    "v": 0
   },
   "san_acces|Novapolis": {
    "v": 0
   },
   "san_acces|Association Malva": {
    "v": 0
   },
   "san_acces|EDNAE": {
    "v": 0
   },
   "san_acces|MIC Brasov": {
    "v": 0
   },
   "prot_juridic|Help Ukrainians": {
    "v": 0
   },
   "prot_juridic|CNRR": {
    "v": 2
   },
   "prot_juridic|Novapolis": {
    "v": 0
   },
   "prot_juridic|Association Malva": {
    "v": 0
   },
   "prot_juridic|EDNAE": {
    "v": 0
   },
   "prot_juridic|MIC Brasov": {
    "v": 0
   },
   "liv_ocupare|Help Ukrainians": {
    "v": 0
   },
   "liv_ocupare|CNRR": {
    "v": 1
   },
   "liv_ocupare|Novapolis": {
    "v": 0
   },
   "liv_ocupare|Association Malva": {
    "v": 1
   },
   "liv_ocupare|EDNAE": {
    "v": 0
   },
   "liv_ocupare|MIC Brasov": {
    "v": 0
   },
   "baz_nfi|Help Ukrainians": {
    "v": 0
   },
   "baz_nfi|CNRR": {
    "v": 0
   },
   "baz_nfi|Novapolis": {
    "v": 0
   },
   "baz_nfi|Association Malva": {
    "v": 1
   },
   "baz_nfi|EDNAE": {
    "v": 0
   },
   "baz_nfi|MIC Brasov": {
    "v": 0
   },
   "prot_copii|Help Ukrainians": {
    "v": 0
   },
   "prot_copii|CNRR": {
    "v": 1
   },
   "prot_copii|Novapolis": {
    "v": 0
   },
   "prot_copii|Association Malva": {
    "v": 0
   },
   "prot_copii|EDNAE": {
    "v": 0
   },
   "prot_copii|MIC Brasov": {
    "v": 0
   },
   "liv_tvet|Help Ukrainians": {
    "v": 0
   },
   "liv_tvet|CNRR": {
    "v": 1
   },
   "liv_tvet|Novapolis": {
    "v": 0
   },
   "liv_tvet|Association Malva": {
    "v": 0
   },
   "liv_tvet|EDNAE": {
    "v": 0
   },
   "liv_tvet|MIC Brasov": {
    "v": 0
   },
   "prot_trafic|Help Ukrainians": {
    "v": 0
   },
   "prot_trafic|CNRR": {
    "v": 0
   },
   "prot_trafic|Novapolis": {
    "v": 1
   },
   "prot_trafic|Association Malva": {
    "v": 0
   },
   "prot_trafic|EDNAE": {
    "v": 0
   },
   "prot_trafic|MIC Brasov": {
    "v": 0
   },
   "baz_cash|Help Ukrainians": {
    "v": 0
   },
   "baz_cash|CNRR": {
    "v": 0
   },
   "baz_cash|Novapolis": {
    "v": 0
   },
   "baz_cash|Association Malva": {
    "v": 0
   },
   "baz_cash|EDNAE": {
    "v": 0
   },
   "baz_cash|MIC Brasov": {
    "v": 1
   }
  }
 },
 "fara_cod": {
  "titlu": "Postări fără niciun cod de activitate",
  "unitate": "postarea",
  "nota": "Nu se adună cu harta de deasupra și nu descrie același lucru: acolo se numără coduri, aici postări. Primele cinci coloane sunt anii, ultimele șase organizațiile.",
  "randuri": [
   {
    "k": "fara_cod",
    "lbl": "fără cod de activitate"
   }
  ],
  "coloane": [
   {
    "k": "2022",
    "lbl": "2022",
    "n": 46
   },
   {
    "k": "2023",
    "lbl": "2023",
    "n": 62
   },
   {
    "k": "2024",
    "lbl": "2024",
    "n": 40
   },
   {
    "k": "2025",
    "lbl": "2025",
    "n": 42
   },
   {
    "k": "2026",
    "lbl": "2026",
    "n": 41
   },
   {
    "k": "Help Ukrainians",
    "lbl": "Help Ukrainians",
    "n": 87
   },
   {
    "k": "CNRR",
    "lbl": "CNRR",
    "n": 51
   },
   {
    "k": "Novapolis",
    "lbl": "Novapolis",
    "n": 39
   },
   {
    "k": "Association Malva",
    "lbl": "Association Malva",
    "n": 20
   },
   {
    "k": "EDNAE",
    "lbl": "EDNAE",
    "n": 20
   },
   {
    "k": "MIC Brasov",
    "lbl": "MIC Brașov",
    "n": 14
   }
  ],
  "celule": {
   "fara_cod|2022": {
    "v": 18
   },
   "fara_cod|2023": {
    "v": 16
   },
   "fara_cod|2024": {
    "v": 8
   },
   "fara_cod|2025": {
    "v": 7
   },
   "fara_cod|2026": {
    "v": 10
   },
   "fara_cod|Help Ukrainians": {
    "v": 13
   },
   "fara_cod|CNRR": {
    "v": 16
   },
   "fara_cod|Novapolis": {
    "v": 20
   },
   "fara_cod|Association Malva": {
    "v": 1
   },
   "fara_cod|EDNAE": {
    "v": 5
   },
   "fara_cod|MIC Brasov": {
    "v": 4
   }
  }
 }
};
