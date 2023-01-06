const generalText = [
  "https://youtu.be/5lRoJblcGTQ?t=12",
  "Áno.",
  "Nie.",
  "Možno.",
  "Nie je šanca.",
  "Iba na Vianoce.",
  "Podľa kalkulácií a výpočtov svetových fyzikov by si sa na to mal vyjebať.",
  "Zhor.",
  "Neviem ti to takto z hlavy povedať.",
  "Áno, je to tutovka.",
  "Až keď <@503252604038414353>ovi narastú dospelé zuby.",
  "Keď @Roman spraví maturitu.",
  "Jebni si hlavu aj o stôl a stále ti to nepomôže",
  "Ok",
  "NENI ŠANCA",
  "⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣤⣤⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⢰⡿⠋⠁⠀⠀⠈⠉⠙⠻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⢀⣿⠇⠀⢀⣴⣶⡾⠿⠿⠿⢿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⣀⣀⣸⡿⠀⠀⢸⣿⣇⠀⠀⠀⠀⠀⠀⠙⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⣾⡟⠛⣿⡇⠀⠀⢸⣿⣿⣷⣤⣤⣤⣤⣶⣶⣿⠇⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀\n" +
    "⢀⣿⠀⢀⣿⡇⠀⠀⠀⠻⢿⣿⣿⣿⣿⣿⠿⣿⡏⠀⠀⠀⠀⢴⣶⣶⣿⣿⣿⣆\n" +
    "⢸⣿⠀⢸⣿⡇⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⣿⡇⣀⣠⣴⣾⣮⣝⠿⠿⠿⣻⡟\n" +
    "⢸⣿⠀⠘⣿⡇⠀⠀⠀⠀⠀⠀⠀⣠⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠉⠀\n" +
    "⠸⣿⠀⠀⣿⡇⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠉⠀⠀⠀⠀\n" +
    "⠀⠻⣷⣶⣿⣇⠀⠀⠀⢠⣼⣿⣿⣿⣿⣿⣿⣿⣛⣛⣻⠉⠁⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⢸⣿⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⢸⣿⣀⣀⣀⣼⡿⢿⣿⣿⣿⣿⣿⡿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠙⠛⠛⠛⠋⠁⠀⠙⠻⠿⠟⠋⠑⠛⠋⠀",
  "Aj tak tu všetci zomrieme",
  "Evelyn nemá tanier ale iba koryto",
  "Nemám ani peniaze, nie to ešte pravidelný sex",
  "Skús nabudúce niečo iné a možno ti odpoviem ty stará rášpľa",
  "Skús lano a strom",
  "Jebäť ich HeHe",
  "Spokojný a čo ty?",
  "Kto je tam? Tu je Jetotak. Jaký Jetotak? Zedol si mi kokot Jetotak",
  "Napíš to gramaticky správne a potom sa budeme baviť ty naničhodná kopa hovien",
  "Ak sa na to pozriem z tej zlej strany, tak nie",
  "Povedal by som že áno",
  "Podľa môjho zlého názoru by som povedal že nie",
  "Ťažko povedať, ale povedal by som že nie",
  "Yez.",
  "Choď radšej mame pomôcť v kuchyni",
  "Fuu asi nie <:KEKW:712261187253043261>",
  "Mamka videla čo tu píšeš?",
  "Prosím nie <:nikkyziadnetricky:729090921496576030>",
  "Pre tvoje vlastné zdravie áno",
  "Áno.. A určite budú so mnou viaceri súhlasiť",
  "Nemyslím si",
  "Tvoja mamka mi poradila, že áno",
  "Myslím že toto sa už niekto pýtal, každopádne hej",
  "Potom čo som si hodil mincou, tak mi vyšlo že áno",
  "Stavil by som môjho stvoriteľa na to, že áno",
  "To by som si nedovolil",
  "Čo by na takéto otázky povedala tvoj ocko",
  "Áno, znie to dobre",
  "Mám povedať že nie",
  "Na stopidžu nie",
  "Nie. Sorry not sorry",
  "Za euríčko áno",
  "Nie a dúfam vám to nebudem musieť opakovať",
  "Keď Zdenka Studenková zomrie tak poviem áno. Zatiaľ stále nie.",
  "Po značnej dávke drog áno.",
];

module.exports = generalText;
