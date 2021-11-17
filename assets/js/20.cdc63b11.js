(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{444:function(e,t,a){"use strict";a.r(t);var s=a(48),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("em",[e._v("Date de modification: 12 octobre 2021")])]),e._v(" "),a("h1",{attrs:{id:"methodologie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methodologie"}},[e._v("#")]),e._v(" Méthodologie")]),e._v(" "),a("p",[e._v("Cette méthodologie résume les étapes suivies pour convertir les données de l’IITA en un format utile aux gouvernements des pays partenaires. Elle permet de déterminer la manière dont les données sont récupérées, retraitées et harmonisées, ainsi que le produit. En règle générale, les étapes s’alignent sur celles suivies au cours du travail précédent détaillé dans la "),a("RouterLink",{attrs:{to:"/fr/introduction/#_1-3-travaux-precedents-pour-rendre-les-donnees-disponibles-au-format-excel"}},[e._v("sous-section 1.3")]),e._v(". Cette méthodologie sera perfectionnée et mise à jour lors de ce travail, en accord avec le Secrétariat de l’IITA.")],1),e._v(" "),a("h2",{attrs:{id:"_2-1-recuperation-des-donnees-de-l-iita"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-recuperation-des-donnees-de-l-iita"}},[e._v("#")]),e._v(" 2.1 Récupération des données de l’IITA")]),e._v(" "),a("p",[e._v("À la suite des premiers essais avec diverses API, l’approche convenue est de télécharger toutes les données, puis de les traiter sans utiliser la banque de données de l’IITA ni une autre API. Cette approche est à privilégier étant donné que cet exercice consiste à télécharger l’ensemble des données de l’IITA. Il est possible d’effectuer d’importants gains de performance grâce à cette approche.")]),e._v(" "),a("p",[e._v("Le téléchargement des données depuis le "),a("a",{attrs:{href:"https://iati-data-dump.codeforiati.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data Dump de l’IITA"),a("OutboundLink")],1),e._v(" prend 53 secondes pour l’archive zip de 537 Mb (9 Gb après désarchivage) qui contient toutes les données de l’IITA.")]),e._v(" "),a("p",[e._v("Les données sont récupérées une fois par jour.")]),e._v(" "),a("h2",{attrs:{id:"_2-2-selection-des-activites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-selection-des-activites"}},[e._v("#")]),e._v(" 2.2 Sélection des activités")]),e._v(" "),a("p",[e._v("Toutes les activités des versions 2.01 ou suivantes de l’IITA sont incluses. Parmi les fichiers publiés dans le Registre de l’IITA, 94 % utilisent les versions 2.01 ou suivantes. En limitant le traitement de ces fichiers, les frais de maintenance du logiciel seront réduits. Il est également possible qu’un très petit nombre de données obsolètes ou de mauvaise qualité soit exclu.")]),e._v(" "),a("p",[e._v("Les données ne font l’objet d’aucun processus de validation. Ainsi, nous utilisons à la fois des données valides et non valides. Lorsque des problèmes liés à la qualité des données surviendront, ils seront généralement transmis à l’organisme ayant publié les données en question plutôt que d’essayer de mettre en œuvre des solutions techniques.")]),e._v(" "),a("h2",{attrs:{id:"_2-3-extraction-des-donnees-pertinentes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-extraction-des-donnees-pertinentes"}},[e._v("#")]),e._v(" 2.3 Extraction des données pertinentes")]),e._v(" "),a("p",[e._v("Chaque fichier est traité afin d’extraire un certain nombre de champs de chaque transaction ou budget. Dans certains cas, on retrouve des données fournies au niveau de l’activité alors qu’elles ne sont pas fournies dans la transaction ou le budget.")]),e._v(" "),a("h3",{attrs:{id:"_2-3-1-extraction-des-donnees-des-activites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-extraction-des-donnees-des-activites"}},[e._v("#")]),e._v(" 2.3.1 Extraction des données des activités")]),e._v(" "),a("p",[e._v("L’identifiant IITA et l’organisme déclarant sont toujours extraits de l’activité.")]),e._v(" "),a("h4",{attrs:{id:"identifiant-de-l-iita"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#identifiant-de-l-iita"}},[e._v("#")]),e._v(" Identifiant de l’IITA")]),e._v(" "),a("p",[e._v("L’identifiant unique associé à l’activité :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("iati-activity/iati-identifier/text()\n")])])]),a("h4",{attrs:{id:"titre"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titre"}},[e._v("#")]),e._v(" Titre")]),e._v(" "),a("p",[e._v("L’intitulé de l’activité. N.B. : en cas de version multilingue, nous avons essayé de n’obtenir que la version en anglais dans le produit en anglais et les versions en français, en espagnol et en portugais dans les produits suivants :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("iati-activity/title/narrative[not(@xml:lang) ou @xml:lang='en']/text()\n")])])]),a("h4",{attrs:{id:"organisme-declarant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#organisme-declarant"}},[e._v("#")]),e._v(" Organisme déclarant")]),e._v(" "),a("p",[e._v("Le nom de l’organisation qui publie ces données de l’IITA :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("iati-activity/reporting-org/text()\n")])])]),a("h4",{attrs:{id:"type-d-organisme-declarant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-d-organisme-declarant"}},[e._v("#")]),e._v(" Type d’organisme déclarant")]),e._v(" "),a("p",[e._v("Le type d’organisme déclarant qui publie ces données de l’IITA :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("iati-activity/reporting-org/@type\n")])])]),a("h3",{attrs:{id:"_2-3-2-extraction-des-donnees-des-transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-extraction-des-donnees-des-transactions"}},[e._v("#")]),e._v(" 2.3.2 Extraction des données des transactions")]),e._v(" "),a("p",[e._v("Les champs suivants sont extraits de chaque transaction. Lorsque ces quatre champs n’existent pas, la transaction n’est pas traitée.")]),e._v(" "),a("h4",{attrs:{id:"valeur"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#valeur"}},[e._v("#")]),e._v(" Valeur")]),e._v(" "),a("p",[e._v("La valeur de la transaction dans la devise publiée :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("transaction/value/text()\n")])])]),a("h4",{attrs:{id:"date-de-la-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-de-la-transaction"}},[e._v("#")]),e._v(" Date de la transaction")]),e._v(" "),a("p",[e._v("La date de la transaction (utilisée pour agréger les transactions ainsi que dans le produit) :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("transaction/transaction-date/@iso-date\n")])])]),a("h4",{attrs:{id:"date-de-la-valeur-de-la-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-de-la-valeur-de-la-transaction"}},[e._v("#")]),e._v(" Date de la valeur de la transaction"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])])]),e._v(" "),a("p",[e._v("La date de la valeur de la transaction dans la devise publiée (utilisée comme date de la conversion de la devise) :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("transaction/value/@value-date\n")])])]),a("h4",{attrs:{id:"type-de-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-de-transaction"}},[e._v("#")]),e._v(" Type de transaction")]),e._v(" "),a("p",[e._v("Le type de transaction (p. ex., engagement, décaissement, dépense) :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("transaction/transaction-type/@code\n")])])]),a("p",[e._v("Remarque : les transactions n’étant pas de type fonds entrant, engagement, décaissement ou dépense ont été initialement écartées. Cette décision pourra être révisée par la suite en fonction de la demande, tout en tenant compte de la nécessité de conserver une durée de traitement raisonnable.")]),e._v(" "),a("h3",{attrs:{id:"_2-3-3-extraction-des-donnees-d-une-transaction-ou-d-une-activite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-extraction-des-donnees-d-une-transaction-ou-d-une-activite"}},[e._v("#")]),e._v(" 2.3.3 Extraction des données d’une transaction ou d’une activité")]),e._v(" "),a("p",[e._v("Pour certains champs, les données proviennent soit de la transaction, soit de l’activité. Cela dépend de l’organisme qui a publié les données.")]),e._v(" "),a("h4",{attrs:{id:"devise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devise"}},[e._v("#")]),e._v(" Devise")]),e._v(" "),a("p",[e._v("La devise de la transaction, ou la devise par défaut de l’activité :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("transaction/@currency ou iati-activity/@default-currency\n")])])]),a("h4",{attrs:{id:"type-d-aide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-d-aide"}},[e._v("#")]),e._v(" Type d’aide")]),e._v(" "),a("p",[e._v("Le type d’aide concerné par la transaction, ou le type d’aide par défaut de l’activité (seuls les types d’aide du Comité d’aide au développement [CAD] sont inclus) :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("transaction/aid-type [not(@vocabulary) ou @vocabulary='1'] /@code ou iati-activity/default-aid-type[not(@vocabulary) ou @vocabulary='1'] /@code\n")])])]),a("h4",{attrs:{id:"type-de-financement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-de-financement"}},[e._v("#")]),e._v(" Type de financement")]),e._v(" "),a("p",[e._v("Le type de financement concerné par la transaction, ou le type de financement par défaut de l’activité :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("transaction/finance-type/@code ou iati-activity/default-finance-type/@code\n")])])]),a("h4",{attrs:{id:"type-de-flux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-de-flux"}},[e._v("#")]),e._v(" Type de flux")]),e._v(" "),a("p",[e._v("Le type de flux concerné par la transaction, ou le type de flux par défaut de l’activité :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("transaction/flow-type/@code ou iati-activity/default-flow-type/@code\n")])])]),a("h4",{attrs:{id:"organisme-prestataire"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#organisme-prestataire"}},[e._v("#")]),e._v(" Organisme prestataire")]),e._v(" "),a("p",[e._v("L’organisation émettrice de la transaction ou déclarante de l’activité :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("transaction/provider-org/text()\n")])])]),a("h4",{attrs:{id:"organisme-beneficiaire"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#organisme-beneficiaire"}},[e._v("#")]),e._v(" Organisme bénéficiaire")]),e._v(" "),a("p",[e._v("L’organisation destinataire de la transaction, ou le ou les organismes de mise en œuvre de l’activité :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("transaction/provider-org/text()\n")])])]),a("h4",{attrs:{id:"remplacement-des-organismes-prestataires-et-beneficiaires-par-d-autres-participants-a-l-activite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remplacement-des-organismes-prestataires-et-beneficiaires-par-d-autres-participants-a-l-activite"}},[e._v("#")]),e._v(" Remplacement des organismes prestataires et bénéficiaires par d’autres participants à l’activité")]),e._v(" "),a("p",[e._v("Dans les cas où il n’existe pas d’organisme prestataire ou bénéficiaire concernant la transaction, d’autres organismes participant à l’activité servent de remplacement. Les organisations utilisées en remplacement varient selon le type de transaction traité :")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Type de transaction")]),e._v(" "),a("th",[e._v("Organisme prestataire")]),e._v(" "),a("th",[e._v("Organisme bénéficiaire")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1 - Fonds entrants")]),e._v(" "),a("td",[e._v("Organisme de financement")]),e._v(" "),a("td",[e._v("Organisme déclarant")])]),e._v(" "),a("tr",[a("td",[e._v("2 - Engagement sortant")]),e._v(" "),a("td",[e._v("Organisme déclarant")]),e._v(" "),a("td",[e._v("Organisme de mise en œuvre")])]),e._v(" "),a("tr",[a("td",[e._v("3 - Décaissement")]),e._v(" "),a("td",[e._v("Organisme déclarant")]),e._v(" "),a("td",[e._v("Organisme de mise en œuvre")])]),e._v(" "),a("tr",[a("td",[e._v("4 - Dépense")]),e._v(" "),a("td",[e._v("Organisme déclarant")]),e._v(" "),a("td",[e._v("Organisme de mise en œuvre")])])])]),e._v(" "),a("p",[e._v("S’il existe plusieurs organismes de financement ou de mise en œuvre, ceux-ci sont reliés par des virgules.")]),e._v(" "),a("p",[e._v("Balisage utilisé pour les organismes déclarants :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("iati-activity/reporting-org/text()\n")])])]),a("p",[e._v("Balisage utilisé pour les organismes de financement :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("iati-activity/participating-org[@role='1']/text()\n")])])]),a("p",[e._v("Balisage utilisé pour les organismes de mise en œuvre :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("iati-activity/participating-org[@role='4']/text()\n")])])]),a("h3",{attrs:{id:"_2-3-4-extraire-des-donnees-de-valeurs-potentiellement-differentes-a-partir-d-une-transaction-ou-d-une-activite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-4-extraire-des-donnees-de-valeurs-potentiellement-differentes-a-partir-d-une-transaction-ou-d-une-activite"}},[e._v("#")]),e._v(" 2.3.4 Extraire des données de valeurs potentiellement différentes à partir d’une transaction ou d’une activité")]),e._v(" "),a("p",[e._v("Enfin, les données de deux champs (pays ou région bénéficiaires et secteur) peuvent être extraites à partir d’une transaction ou d’une activité. Concernant les activités, il est possible que ces données aient été publiées à de multiples reprises avec des répartitions par pourcentage. La section qui suit décrit la manière de gérer les données de valeurs différentes.")]),e._v(" "),a("h4",{attrs:{id:"pays-ou-region-beneficiaire"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pays-ou-region-beneficiaire"}},[e._v("#")]),e._v(" Pays ou région bénéficiaire")]),e._v(" "),a("p",[e._v("Le pays bénéficiaire de la transaction, ou la liste de pays bénéficiaires de l’activité (s’il en existe plusieurs, une colonne supplémentaire permet d’indiquer que la transaction s’inscrit dans le cadre d’un projet multipays) :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("transaction/recipient-country/@code ou iati-activity/recipient-country/@code\n")])])]),a("p",[e._v("En l’absence de pays bénéficiaires, l’analyse porte sur les régions du CAD :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("transaction/recipient-region[not(@vocabulary) ou @vocabulary='1']/@code ou iati-activity/recipient-region[not(@vocabulary) ou @vocabulary='1']/@code\n")])])]),a("h4",{attrs:{id:"secteur"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secteur"}},[e._v("#")]),e._v(" Secteur")]),e._v(" "),a("p",[e._v("Le secteur concerné par la transaction, ou la liste de secteurs de mise en œuvre de l’activité (seuls les secteurs du CAD sont inclus) :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("transaction/sector[not(@vocabulary) ou @vocabulary='1']/@code ou iati-activity/ sector[not(@vocabulary) ou @vocabulary='1']/@code\n")])])]),a("h4",{attrs:{id:"humanitaire"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#humanitaire"}},[e._v("#")]),e._v(" Humanitaire")]),e._v(" "),a("p",[e._v("Le marqueur humanitaire attribué à la transaction ou à l’activité :")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("transaction/@humanitarian ou iati-activity/@humanitarian\n")])])]),a("ul",[a("li",[e._v("Si la transaction est signalée comme relevant d’un projet humanitaire ("),a("code",[e._v("1")]),e._v("), l’élément "),a("code",[e._v("humanitaire")]),e._v(" sera égal à "),a("code",[e._v("1")]),e._v(".")]),e._v(" "),a("li",[e._v("Si la transaction est signalée comme ne relevant pas d’un projet humanitaire ("),a("code",[e._v("0")]),e._v("), l’élément "),a("code",[e._v("humanitaire")]),e._v(" sera égal à "),a("code",[e._v("0")]),e._v(".")])]),e._v(" "),a("p",[e._v("Dans les cas où aucun marqueur n’est attribué à la transaction :")]),e._v(" "),a("ul",[a("li",[e._v("Si l’activité est signalée comme s’inscrivant dans le cadre d’un projet humanitaire ("),a("code",[e._v("1")]),e._v("), l’élément "),a("code",[e._v("humanitaire")]),e._v(" sera égal à "),a("code",[e._v("1")]),e._v(".")]),e._v(" "),a("li",[e._v("Si l’activité est signalée comme ne s’inscrivant pas dans le cadre d’un projet humanitaire ("),a("code",[e._v("0")]),e._v("), l’élément "),a("code",[e._v("humanitaire")]),e._v(" sera égal à "),a("code",[e._v("0")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"_2-4-repartir-les-transactions-entre-de-multiples-secteurs-et-pays"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-repartir-les-transactions-entre-de-multiples-secteurs-et-pays"}},[e._v("#")]),e._v(" 2.4 Répartir les transactions entre de multiples secteurs et pays")]),e._v(" "),a("p",[e._v("Comme expliqué dans la section précédente, une seule transaction peut être liée à plusieurs pays et secteurs. Dans chacun de ces cas, la valeur de la transaction est répartie entre les pays ou les secteurs proportionnellement au pourcentage qu’ils ont reçu. Remarque :  selon ce qui permet le plus de clarté, les transactions qui n’impliquent pas de pays ou de régions du CAD peuvent être retirées, ou le champ « secteur » laissé vide en l’absence de secteurs.")]),e._v(" "),a("p",[e._v("Dans certains cas, les pourcentages indiqués peuvent être incorrects. Par exemple, il est possible que leur total ne soit pas égal à 100 %, ou qu’aucun pourcentage n’ait été attribué à de multiples secteurs. Les pourcentages sont alors ajustés et leur base de calcul modifiée afin de parvenir à un total égal à 100 %. Par exemple :")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Secteur")]),e._v(" "),a("th",[e._v("Pourcentage (publié)")]),e._v(" "),a("th",[e._v("Pourcentage (corrigé)")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("12220 Soins de santé de base")]),e._v(" "),a("td",[e._v("100%")]),e._v(" "),a("td",[e._v("50%")])]),e._v(" "),a("tr",[a("td",[e._v("11220 Éducation primaire")]),e._v(" "),a("td",[e._v("100%")]),e._v(" "),a("td",[e._v("50%")])])])]),e._v(" "),a("p",[e._v("Une transaction de 100 dollars US serait divisée en deux lignes : l’une pour les 50 dollars US affectés aux soins de santé de base, et l’autre pour les 50 dollars US réservés à l’éducation primaire. Si la même activité était publiée avec l’inclusion de deux pays bénéficiaires, la transaction serait de nouveau divisée, cette fois en quatre lignes.")]),e._v(" "),a("p",[e._v("Corriger les pourcentages indiqués par pays requiert de prendre des précautions. Les organisations interprètent les lignes directrices de l’IITA différemment. Certaines estiment qu’il est indiqué que le total des pourcentages attribués à tous les pays et à toutes les régions doit être égal à 100 %, tandis que d’autres considèrent que les pourcentages indiqués par pays et par région doivent séparément atteindre un total de 100 %. La logique appliquée est la suivante :")]),e._v(" "),a("ul",[a("li",[e._v("A. Si un pays ou une région bénéficiaires ont été indiqués et qu’aucun pourcentage n’est attribué au pays destinataire, seul le pays bénéficiaire est pris en compte ;\n"),a("ul",[a("li",[e._v("Exemple :")])]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("recipient-country")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("code")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("LR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("recipient-region")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("code")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("298"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n")])])]),a("ul",[a("li",[e._v("Attribuer 100 % de la valeur de la transaction au Libéria (LR).")])])]),e._v(" "),a("li",[e._v("B. Si le pays et la région bénéficiaires ont tous deux été assortis de pourcentages, mais que le total des pourcentages indiqués par pays ou région bénéficiaires est égal à environ 100 %, seul le pays bénéficiaire est pris en compte :\n"),a("ul",[a("li",[e._v("Exemple :")])]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("recipient-country")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("code")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("TD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("percentage")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("70"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("recipient-country")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("code")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("LR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("percentage")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("30"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("recipient-region")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("code")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("298"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("percentage")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n")])])]),a("ul",[a("li",[e._v("Attribuer 70 % de la valeur de la transaction au Tchad (TD), et 30 % de sa valeur au Libéria (LR).")])])]),e._v(" "),a("li",[e._v("C. Dans les autres cas, tenir compte du pays et de la région bénéficiaires.\n"),a("ul",[a("li",[e._v("Exemple :")])]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("recipient-country")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("code")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("TD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("percentage")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("50"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("recipient-region")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("code")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("298"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("percentage")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("50"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n")])])]),a("ul",[a("li",[e._v("Attribuer 50 % de la valeur de la transaction au Tchad (TD), et 50 % de sa valeur à la région africaine du sud du Sahara (298).")])])])]),e._v(" "),a("h2",{attrs:{id:"_2-5-convertir-les-devises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-convertir-les-devises"}},[e._v("#")]),e._v(" 2.5 Convertir les devises")]),e._v(" "),a("p",[e._v("La devise de publication des données varie selon les signataires. Les transactions doivent donc faire l’objet d’une conversion individuelle en dollars US, en euros et dans les devises locales sur la base du taux de change en vigueur à la date la plus proche de celle à laquelle la valeur de la transaction a été définie. Les taux de change mensuels de 169 devises sont tirés des statistiques financières internationales du FMI"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn2",id:"fnref2"}},[e._v("[2]")])]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"_2-6-gerer-les-budgets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-gerer-les-budgets"}},[e._v("#")]),e._v(" 2.6 Gérer les budgets")]),e._v(" "),a("p",[e._v("Il est également important de collecter des données sur les dépenses prévisionnelles. Ces données sont plus difficiles d’accès, car, contrairement aux transactions, les budgets ne sont pas ventilés par secteur ou par pays. Préciser la part de budget affectée à un pays ou à un secteur en particulier est donc impossible. Afin d’évaluer les dépenses prévisionnelles, certaines des données fournies au sujet d’une transaction ou d’une activité doivent être incorporées à l’analyse du budget. Par exemple, lorsqu’aucun secteur n’est indiqué pour une activité, la part de la valeur des transactions effectuées dans le cadre d’engagements affectée aux différents secteurs sert à décomposer le budget par secteur d’une manière semblable à celle décrite dans la section 2.3 ci-dessus.")]),e._v(" "),a("p",[e._v("Cette méthode de calcul de la répartition des fonds accordés au titre d’engagements est applicable aux catégories suivantes :")]),e._v(" "),a("ul",[a("li",[e._v("Type d’aide")]),e._v(" "),a("li",[e._v("Type de financement")]),e._v(" "),a("li",[e._v("Type de flux")]),e._v(" "),a("li",[e._v("Secteur")]),e._v(" "),a("li",[e._v("Pays ou région bénéficiaire")])]),e._v(" "),a("p",[e._v("Dans le champ correspondant à l’organisme prestataire, indiquer l’organisme déclarant de l’activité. Dans le champ correspondant à l’organisme bénéficiaire, inscrire le ou les organismes de mise en œuvre de l’activité.")]),e._v(" "),a("p",[e._v("Les budgets couvrant plusieurs trimestres sont divisés en plusieurs lignes coïncidant exactement avec un trimestre. La valeur est répartie de manière proportionnelle"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn3",id:"fnref3"}},[e._v("[3]")])]),e._v(". Cette répartition est nécessaire afin de conserver la possibilité de comparer les transactions (dont la date est unique) et les budgets (dont les périodes de mise en œuvre ne concordent pas forcément avec l’exercice fiscal du gouvernement).")]),e._v(" "),a("p",[e._v("En cas de publication des versions initiale et révisée d’un budget couvrant la même période, la dernière plutôt que la première version sera prise en compte.")]),e._v(" "),a("h2",{attrs:{id:"_2-7-rassembler-les-transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-rassembler-les-transactions"}},[e._v("#")]),e._v(" 2.7 Rassembler les transactions")]),e._v(" "),a("p",[e._v("Les transactions sont regroupées en une ligne par trimestre, l’ensemble des autres champs suivants demeurant identiques :")]),e._v(" "),a("ul",[a("li",[e._v("Identifiant IITA")]),e._v(" "),a("li",[e._v("Organisme déclarant")]),e._v(" "),a("li",[e._v("Type d’organisme déclarant")]),e._v(" "),a("li",[e._v("Type de transaction")]),e._v(" "),a("li",[e._v("Type d’aide")]),e._v(" "),a("li",[e._v("Type de financement")]),e._v(" "),a("li",[e._v("Type de flux")]),e._v(" "),a("li",[e._v("Organisme prestataire")]),e._v(" "),a("li",[e._v("Organisme bénéficiaire")]),e._v(" "),a("li",[e._v("Secteur")]),e._v(" "),a("li",[e._v("Pays ou région bénéficiaire")])]),e._v(" "),a("p",[e._v("La date de la transaction est fixée à celle de la fin du trimestre.")]),e._v(" "),a("h2",{attrs:{id:"_2-8-convertir-les-donnees-conformement-a-la-devise-cible-et-a-la-periode-fiscale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-convertir-les-donnees-conformement-a-la-devise-cible-et-a-la-periode-fiscale"}},[e._v("#")]),e._v(" 2.8 Convertir les données conformément à la devise cible et à la période fiscale")]),e._v(" "),a("p",[e._v("Les devises cibles sont le dollar US et l’euro pour tous les pays. L’inclusion d’une devise locale (p. ex., le shilling kényan pour l’analyse du Kenya) est également prévue. Le taux de change utilisé correspond à celui en vigueur au dernier jour du trimestre.")]),e._v(" "),a("h2",{attrs:{id:"_2-9-langue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-langue"}},[e._v("#")]),e._v(" 2.9 Langue")]),e._v(" "),a("p",[e._v("Les données sont fournies en anglais, en français, en espagnol et en portugais. Tous les intitulés disponibles dans ces langues sont inclus dans l’analyse, de même que tous les codes. Certains intitulés et organismes prestataires ou bénéficiaires ne sont indiqués qu’en anglais.")]),e._v(" "),a("h2",{attrs:{id:"_2-10-traiter-les-donnees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-traiter-les-donnees"}},[e._v("#")]),e._v(" 2.10 Traiter les données")]),e._v(" "),a("p",[e._v("Les données sont traitées au moyen de GitHub Actions, dont l’utilisation reste gratuite tant que le délai de traitement est inférieur à six heures. Le traitement s’effectue toutes les trois heures et les fichiers obtenus sont publiés sur GitHub Pages. Ce service de publication est également gratuit, à condition que la taille du fichier ne dépasse pas 100 Mb et que la taille totale du registre soit inférieure à 1 Gb.")]),e._v(" "),a("p",[e._v("En raison de ces limites, il est important de s’en tenir à des délais de traitement courts et à des tailles de fichier réduites. Employer des outils gratuits pour la totalité du processus de gestion des données permet également de grandement en améliorer le maintien à long terme.")]),e._v(" "),a("h2",{attrs:{id:"_2-11-licences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-licences"}},[e._v("#")]),e._v(" 2.11 Licences")]),e._v(" "),a("p",[e._v("Toutes les analyses sont publiées sur Github et librement exploitables dans le cadre de la version 3.0 de la licence publique générale GNU Affero (AGPL)"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn4",id:"fnref4"}},[e._v("[4]")])]),e._v(".")]),e._v(" "),a("hr",{staticClass:"footnotes-sep"}),e._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[e._v("Remarque : il semble que certains signataires utilisent la dernière date à laquelle ils ont mis leurs données à jour en tant que date de définition de la valeur de la transaction. Nous signalons alors qu’il s’agit d’un problème dont le service d’aide de l’IITA devra discuter avec les signataires concernés et continuons d’utiliser la date de définition de la valeur. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[a("p",[a("a",{attrs:{href:"https://data.imf.org/?sk=4C514D48-B6BA-49ED-8AB9-52B0C1A0179B",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://data.imf.org/?sk=4C514D48-B6BA-49ED-8AB9-52B0C1A0179B"),a("OutboundLink")],1),e._v(" (s’ouvre dans une nouvelle fenêtre) "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[a("p",[e._v("Si le budget couvre des parties de trimestre plutôt que des trimestres entiers, le nombre de jours de ces parties de trimestre sert à calculer la part de la valeur qui sera accordée chaque trimestre. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[a("p",[a("a",{attrs:{href:"https://www.gnu.org/licenses/agpl-3.0.fr.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.gnu.org/licenses/agpl-3.0.fr.html"),a("OutboundLink")],1),e._v(" (s’ouvre dans une nouvelle fenêtre) "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[e._v("↩︎")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);