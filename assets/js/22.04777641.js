(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{446:function(t,a,e){"use strict";e.r(a);var r=e(48),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("em",[t._v("Updated: 12th October 2021")])]),t._v(" "),e("h1",{attrs:{id:"methodology"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methodology"}},[t._v("#")]),t._v(" Methodology")]),t._v(" "),e("p",[t._v("This methodology outlines the steps that have been undertaken to get IATI data into a format that is useful for partner country governments. It identifies how data is retrieved, reprocessed and harmonised, and finally output. The steps broadly align with the steps undertaken in the previous work outlined in "),e("RouterLink",{attrs:{to:"/introduction/#_1-3-previous-work-to-make-data-available-in-excel-format"}},[t._v("subsection 1.3")]),t._v(". This methodology will be further refined and updated during the course of this work, in agreement with the IATI Secretariat.")],1),t._v(" "),e("h2",{attrs:{id:"_2-1-retrieval-of-iati-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-retrieval-of-iati-data"}},[t._v("#")]),t._v(" 2.1 Retrieval of IATI data")]),t._v(" "),e("p",[t._v("After initial experiments with various APIs, the agreed approach is to download all data and then process it without using the IATI Datastore or another API. This approach is preferable given that this exercise downloads substantially all IATI data anyway. There are significant increases in performance that can be achieved through this approach.")]),t._v(" "),e("p",[t._v("Downloading data from "),e("a",{attrs:{href:"https://iati-data-dump.codeforiati.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IATI Data Dump"),e("OutboundLink")],1),t._v(" takes 53 seconds for a zipped file of 537 MB (9GB unzipped), which contains all IATI data.")]),t._v(" "),e("p",[t._v("The data is retrieved once per day.")]),t._v(" "),e("h2",{attrs:{id:"_2-2-selection-of-activities"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-selection-of-activities"}},[t._v("#")]),t._v(" 2.2 Selection of activities")]),t._v(" "),e("p",[t._v("All activities in IATI version 2.01 or above are included. 94% of files currently published on the IATI Registry use version 2.01 or above. Limiting processing to these files reduces the cost of maintenance of the software going forward, and is likely to exclude a very small amount of out of date or poor-quality data.")]),t._v(" "),e("p",[t._v("The data is not subjected to any validation processes. That is, we use both valid and invalid data. Where data quality issues arise, these will generally be raised with the relevant publisher, rather than attempting to implement technical workarounds.")]),t._v(" "),e("h2",{attrs:{id:"_2-3-extract-relevant-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-extract-relevant-data"}},[t._v("#")]),t._v(" 2.3 Extract relevant data")]),t._v(" "),e("p",[t._v("Each file is processed to extract a number of fields from each transaction or budget. In some cases, we fall back to data provided at the activity level where it is not provided in the transaction or budget.")]),t._v(" "),e("h3",{attrs:{id:"_2-3-1-extract-data-from-activity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-extract-data-from-activity"}},[t._v("#")]),t._v(" 2.3.1 Extract data from activity")]),t._v(" "),e("p",[t._v("The IATI Identifier and the reporting organisation are extracted from the activity in all cases.")]),t._v(" "),e("h4",{attrs:{id:"iati-identifier"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iati-identifier"}},[t._v("#")]),t._v(" IATI Identifier")]),t._v(" "),e("p",[t._v("The unique identifier for the activity:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("iati-activity/iati-identifier/text()\n")])])]),e("h4",{attrs:{id:"title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" Title")]),t._v(" "),e("p",[t._v("The title of the activity. NB where this is in multiple languages, we have attempted to get just the English language version:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("iati-activity/title/narrative[not(@xml:lang) or @xml:lang='en']/text()\n")])])]),e("h4",{attrs:{id:"reporting-organisation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reporting-organisation"}},[t._v("#")]),t._v(" Reporting organisation")]),t._v(" "),e("p",[t._v("The name of the organisation publishing this IATI data:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("iati-activity/reporting-org/text()\n")])])]),e("h4",{attrs:{id:"reporting-organisation-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reporting-organisation-type"}},[t._v("#")]),t._v(" Reporting organisation type")]),t._v(" "),e("p",[t._v("The type of the reporting organisation publishing this IATI data:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("iati-activity/reporting-org/@type\n")])])]),e("h3",{attrs:{id:"_2-3-2-extract-data-from-transaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-extract-data-from-transaction"}},[t._v("#")]),t._v(" 2.3.2 Extract data from transaction")]),t._v(" "),e("p",[t._v("The following fields are extracted from each transaction. Where these four fields do not exist, the transaction is not processed.")]),t._v(" "),e("h4",{attrs:{id:"value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#value"}},[t._v("#")]),t._v(" Value")]),t._v(" "),e("p",[t._v("The transaction value in the published currency:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("transaction/value/text()\n")])])]),e("h4",{attrs:{id:"transaction-date"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transaction-date"}},[t._v("#")]),t._v(" Transaction date")]),t._v(" "),e("p",[t._v("The date of the transaction (which is used to aggregate transactions and in the output):")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("transaction/transaction-date/@iso-date\n")])])]),e("h4",{attrs:{id:"transaction-value-date"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transaction-value-date"}},[t._v("#")]),t._v(" Transaction value date"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn1",id:"fnref1"}},[t._v("[1]")])])]),t._v(" "),e("p",[t._v("The transaction value date in the published currency (which is used as the date for currency conversion):")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("transaction/value/@value-date\n")])])]),e("h4",{attrs:{id:"transaction-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transaction-type"}},[t._v("#")]),t._v(" Transaction type")]),t._v(" "),e("p",[t._v("The transaction type (e.g. commitment, disbursement, expenditure):")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("transaction/transaction-type/@code\n")])])]),e("p",[t._v("Note: initially, transactions other than incoming funds, commitments, disbursements and expenditure have been discarded. This decision could be revised subsequently depending on demand and subject to the need to keep the processing time at a reasonable level.")]),t._v(" "),e("h3",{attrs:{id:"_2-3-3-extract-data-from-transaction-or-from-activity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-extract-data-from-transaction-or-from-activity"}},[t._v("#")]),t._v(" 2.3.3 Extract data from transaction or from activity")]),t._v(" "),e("p",[t._v("For some fields, the data comes from either the transaction or the activity, depending on the publisher’s data.")]),t._v(" "),e("h4",{attrs:{id:"currency"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#currency"}},[t._v("#")]),t._v(" Currency")]),t._v(" "),e("p",[t._v("The transaction currency, or the activity default currency:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("transaction/@currency or iati-activity/@default-currency\n")])])]),e("h4",{attrs:{id:"aid-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aid-type"}},[t._v("#")]),t._v(" Aid type")]),t._v(" "),e("p",[t._v("The transaction aid type, or the activity default aid type (only DAC aid types are included):")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("transaction/aid-type[not(@vocabulary) or @vocabulary='1'] /@code or iati-activity/default-aid-type[not(@vocabulary) or @vocabulary='1'] /@code\n")])])]),e("h4",{attrs:{id:"finance-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#finance-type"}},[t._v("#")]),t._v(" Finance type")]),t._v(" "),e("p",[t._v("The transaction finance type, or the activity default finance type:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("transaction/finance-type/@code or iati-activity/default-finance-type/@code\n")])])]),e("h4",{attrs:{id:"flow-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flow-type"}},[t._v("#")]),t._v(" Flow type")]),t._v(" "),e("p",[t._v("The transaction flow type, or the activity default flow type:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("transaction/flow-type/@code or iati-activity/default-flow-type/@code\n")])])]),e("h4",{attrs:{id:"provider-organisation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#provider-organisation"}},[t._v("#")]),t._v(" Provider organisation")]),t._v(" "),e("p",[t._v("The transaction provider organisation, or the activity reporting organisation:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("transaction/provider-org/text()\n")])])]),e("h4",{attrs:{id:"receiver-organisation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#receiver-organisation"}},[t._v("#")]),t._v(" Receiver organisation")]),t._v(" "),e("p",[t._v("The transaction receiver organisation, or the activity implementing organisation(s):")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("transaction/provider-org/text()\n")])])]),e("h4",{attrs:{id:"activity-level-fallbacks-for-provider-and-receiver-organisations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#activity-level-fallbacks-for-provider-and-receiver-organisations"}},[t._v("#")]),t._v(" Activity-level fallbacks for provider and receiver organisations")]),t._v(" "),e("p",[t._v("Where there is no transaction-level provider or receiver organisation, we use an organisation from another part of the activity. We use different fallbacks depending on which transaction type we are processing:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Transaction Type")]),t._v(" "),e("th",[t._v("Provider org")]),t._v(" "),e("th",[t._v("Receiver org")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1 - Incoming Funds")]),t._v(" "),e("td",[t._v("Funding Org")]),t._v(" "),e("td",[t._v("Reporting Org")])]),t._v(" "),e("tr",[e("td",[t._v("2 - Outgoing Commitment")]),t._v(" "),e("td",[t._v("Reporting Org")]),t._v(" "),e("td",[t._v("Implementing Org")])]),t._v(" "),e("tr",[e("td",[t._v("3 - Disbursement")]),t._v(" "),e("td",[t._v("Reporting Org")]),t._v(" "),e("td",[t._v("Implementing Org")])]),t._v(" "),e("tr",[e("td",[t._v("4 - Expenditure")]),t._v(" "),e("td",[t._v("Reporting Org")]),t._v(" "),e("td",[t._v("Implementing Org")])])])]),t._v(" "),e("p",[t._v("Where there are multiple funding or implementing organisations, these are concatenated (joined) together with commas.")]),t._v(" "),e("p",[t._v("For reporting organisation, we use:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("iati-activity/reporting-org/text()\n")])])]),e("p",[t._v("For funding organisation:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("iati-activity/participating-org[@role='1']/text()\n")])])]),e("p",[t._v("For implementing organisation:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("iati-activity/participating-org[@role='4']/text()\n")])])]),e("h3",{attrs:{id:"_2-3-4-extract-data-from-transaction-or-from-activity-with-potentially-multiple-values"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-4-extract-data-from-transaction-or-from-activity-with-potentially-multiple-values"}},[t._v("#")]),t._v(" 2.3.4 Extract data from transaction or from activity, with potentially multiple values")]),t._v(" "),e("p",[t._v("Finally, two fields (recipient country/region and sector) are extracted either from the transaction or activity. At the activity level, these can be published multiple times with percentage splits. The methodology for handling multiple values is described in the following section.")]),t._v(" "),e("h4",{attrs:{id:"recipient-country-or-region"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#recipient-country-or-region"}},[t._v("#")]),t._v(" Recipient Country or Region")]),t._v(" "),e("p",[t._v("The transaction recipient country, or the list of activity recipient countries (where there are multiple countries, a column has been added to indicate that the transaction is part of a multi-country project):")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("transaction/recipient-country/@code or iati-activity/recipient-country/@code\n")])])]),e("p",[t._v("Alternatively, if there are no recipient countries, we look for DAC regions:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("transaction/recipient-rergion[not(@vocabulary) or @vocabulary='1']/@code or iati-activity/recipient-region[not(@vocabulary) or @vocabulary='1']/@code\n")])])]),e("h4",{attrs:{id:"sector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sector"}},[t._v("#")]),t._v(" Sector")]),t._v(" "),e("p",[t._v("The transaction sector, or the list of activity sectors (NB only DAC sectors are included):")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("transaction/sector[not(@vocabulary) or @vocabulary='1']/@code or iati-activity/ sector[not(@vocabulary) or @vocabulary='1']/@code\n")])])]),e("h4",{attrs:{id:"humanitarian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#humanitarian"}},[t._v("#")]),t._v(" Humanitarian")]),t._v(" "),e("p",[t._v("The transaction humanitarian flag, or the activity humanitarian flag:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("transaction/@humanitarian or iati-activity/@humanitarian\n")])])]),e("ul",[e("li",[t._v("If the transaction has a humanitarian flag ("),e("code",[t._v("1")]),t._v(") then "),e("code",[t._v("humanitarian")]),t._v(" will be marked as "),e("code",[t._v("1")]),t._v(".")]),t._v(" "),e("li",[t._v("If the transaction has a non-humanitarian flag ("),e("code",[t._v("0")]),t._v(") then "),e("code",[t._v("humanitarian")]),t._v(" will be marked as "),e("code",[t._v("0")]),t._v(".")])]),t._v(" "),e("p",[t._v("If there are no transaction-level flags:")]),t._v(" "),e("ul",[e("li",[t._v("If the activity has a humantarian flag ("),e("code",[t._v("1")]),t._v(") then "),e("code",[t._v("humanitarian")]),t._v(" will be marked as "),e("code",[t._v("1")]),t._v(".")]),t._v(" "),e("li",[t._v("If the activity has a non-humanitarian flag ("),e("code",[t._v("0")]),t._v(") then "),e("code",[t._v("humanitarian")]),t._v(" will be marked as "),e("code",[t._v("0")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"_2-4-splitting-transactions-for-multiple-sectors-and-countries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-splitting-transactions-for-multiple-sectors-and-countries"}},[t._v("#")]),t._v(" 2.4 Splitting transactions for multiple sectors and countries")]),t._v(" "),e("p",[t._v("As described in the previous section, individual transactions may map to multiple countries and sectors. In each case, the transaction is therefore split with the value proportionate to the percentage to this transaction for this country for this sector. (NB: Where there are no countries or DAC regions, the transaction is discarded. Where there are no sectors, the sector is output as blank - depending on which approach is clearer.)")]),t._v(" "),e("p",[t._v("In some cases, the published percentages may also not be correct. For example, they may not add up to 100, or there may be multiple sectors with no percentage specified. In these cases, the percentages have been adjusted and rebased so that the percentages add up to 100%. For example:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Sector")]),t._v(" "),e("th",[t._v("Percentage (published)")]),t._v(" "),e("th",[t._v("Percentage (corrected)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("12220 Basic health care")]),t._v(" "),e("td",[t._v("100%")]),t._v(" "),e("td",[t._v("50%")])]),t._v(" "),e("tr",[e("td",[t._v("11220 Primary education")]),t._v(" "),e("td",[t._v("100%")]),t._v(" "),e("td",[t._v("50%")])])])]),t._v(" "),e("p",[t._v("A single transaction of USD 100 would then be split into two rows: one row for USD 50 for basic health care and a second row of USD 50 for primary education. If the same activity were classified with two recipient countries, it would be split again, now into four rows.")]),t._v(" "),e("p",[t._v("Care needs to be taken when correcting percentages for countries. The IATI Guidance has been interpreted differently by different organisations. Some have interpreted the Guidance as stating that all countries plus all regions must add up to 100%, whereas others have understood that countries must add up to 100% and regions must (separately) add up to 100%. The following logic is used:")]),t._v(" "),e("ul",[e("li",[t._v("A. If recipient-country and recipient-region exist, and recipient-country have no percentages: take only recipient-country;\n"),e("ul",[e("li",[t._v("e.g.:")])]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("recipient-country")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("code")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("LR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("recipient-region")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("code")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("298"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("ul",[e("li",[t._v("Apply 100% of the transaction value to Liberia (LR).")])])]),t._v(" "),e("li",[t._v("B. If recipient-country and recipient-region both have percentages, but recipient-country percentages or recipient-region percentages adds up to around 100%: take only recipient-country;\n"),e("ul",[e("li",[t._v("e.g.:")])]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("recipient-country")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("code")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("TD"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("percentage")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("70"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("recipient-country")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("code")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("LR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("percentage")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("30"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("recipient-region")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("code")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("298"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("percentage")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("ul",[e("li",[t._v("Apply 70% of the transaction value to Chad (TD) and 30% of the transaction value to Liberia (LR).")])])]),t._v(" "),e("li",[t._v("C. Otherwise, take recipient-country and recipient-region.\n"),e("ul",[e("li",[t._v("e.g.:")])]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("recipient-country")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("code")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("TD"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("percentage")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("50"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("recipient-region")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("code")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("298"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("percentage")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("50"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("ul",[e("li",[t._v("Apply 50% of the transaction value to Chad (TD) and 50% of the transaction value to Africa, South of Sahara (298).")])])])]),t._v(" "),e("h2",{attrs:{id:"_2-5-currency-conversion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-currency-conversion"}},[t._v("#")]),t._v(" 2.5 Currency conversion")]),t._v(" "),e("p",[t._v("As data is published in different currencies (depending on the publisher), individual transactions need to be converted to USD, Euro, and local currencies using the closest exchange rate date to the transaction value-date. Monthly exchange rates for 169 currencies are sourced from the IMF's International Financial Statistics"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn2",id:"fnref2"}},[t._v("[2]")])]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"_2-6-handling-budgets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-handling-budgets"}},[t._v("#")]),t._v(" 2.6 Handling budgets")]),t._v(" "),e("p",[t._v("Forward spending data is also important to capture. It is more challenging, as unlike transactions, budgets are not classified by sector or country – so it is not possible to specifically state the proportion of a budget that is going to a particular country or sector. In order to make this assessment, certain data from the transaction or activity level needs to be applied to the budget data. For example, where there are no activity-level sectors, the proportion of the value of commitment transactions to different sectors is used to apply sector splits to budgets in a similar way as described in section 2.3, above.")]),t._v(" "),e("p",[t._v("This process of calculating the proportion of commitments is used for:")]),t._v(" "),e("ul",[e("li",[t._v("Aid Type")]),t._v(" "),e("li",[t._v("Finance Type")]),t._v(" "),e("li",[t._v("Flow Type")]),t._v(" "),e("li",[t._v("Sector")]),t._v(" "),e("li",[t._v("Recipient Country or Region")])]),t._v(" "),e("p",[t._v("For the Provider Organisation field, the activity reporting organisation is used. For the Receiver Organisation field, the activity implementing organisation(s) is used.")]),t._v(" "),e("p",[t._v("Where budgets span more than one quarter, they are split into multiple rows that map to exactly one quarter. The value is split proportionately"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn3",id:"fnref3"}},[t._v("[3]")])]),t._v(". This is necessary in order to maintain comparability between transactions (which are marked with a single date) and budgets (which span a period, and which may not align with the government’s fiscal year).")]),t._v(" "),e("p",[t._v("Where revised and original budgets are both published for the same period, revised budgets are used instead of original budgets.")]),t._v(" "),e("h2",{attrs:{id:"_2-7-rolling-up-transactions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-rolling-up-transactions"}},[t._v("#")]),t._v(" 2.7 Rolling up transactions")]),t._v(" "),e("p",[t._v("Transactions are aggregated up into one row per quarter, where the following other fields are all identical:")]),t._v(" "),e("ul",[e("li",[t._v("IATI Identifier")]),t._v(" "),e("li",[t._v("Reporting Organisation")]),t._v(" "),e("li",[t._v("Reporting Organisation Type")]),t._v(" "),e("li",[t._v("Transaction Type")]),t._v(" "),e("li",[t._v("Aid Type")]),t._v(" "),e("li",[t._v("Finance Type")]),t._v(" "),e("li",[t._v("Flow Type")]),t._v(" "),e("li",[t._v("Provider Organisation")]),t._v(" "),e("li",[t._v("Receiver Organisation")]),t._v(" "),e("li",[t._v("Sector")]),t._v(" "),e("li",[t._v("Recipient Country or Region")])]),t._v(" "),e("p",[t._v("The transaction date is set to the last day of the quarter.")]),t._v(" "),e("h2",{attrs:{id:"_2-8-conversion-to-target-currency-and-fiscal-period"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-conversion-to-target-currency-and-fiscal-period"}},[t._v("#")]),t._v(" 2.8 Conversion to target currency and fiscal period")]),t._v(" "),e("p",[t._v("The target currencies are set as USD and Euro for all countries. An additional local currency (e.g. Kenyan shillings for the Kenya output) is also included. The exchange rate date is the last day of the quarter.")]),t._v(" "),e("h2",{attrs:{id:"_2-9-language"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-language"}},[t._v("#")]),t._v(" 2.9 Language")]),t._v(" "),e("p",[t._v("The data is available in English and French. All available Titles in these languages are pulled into the outputs along with all codes. Some Titles and Provider and Recipient Organisations are only available in English.")]),t._v(" "),e("h2",{attrs:{id:"_2-10-processing-of-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-processing-of-data"}},[t._v("#")]),t._v(" 2.10 Processing of data")]),t._v(" "),e("p",[t._v("The data is processed on Github Actions, which is a free service as long as the processing time is less than six hours. This runs every 3 hours. The resulting data files are published on Github Pages. This is also a free service, as long as no file is larger than 100MB and the total repository size is not larger than 1GB.")]),t._v(" "),e("p",[t._v("Given these limits, it is important to keep file size and processing times low. Ensuring that the entire workflow can be delivered through free tools also significantly improves the sustainability of the tools.")]),t._v(" "),e("h2",{attrs:{id:"_2-11-licensing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-licensing"}},[t._v("#")]),t._v(" 2.11 Licensing")]),t._v(" "),e("p",[t._v("All outputs are published on Github and are openly licensed according to the GNU Affero General Public License (AGPL) v3.0"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn4",id:"fnref4"}},[t._v("[4]")])]),t._v(".")]),t._v(" "),e("hr",{staticClass:"footnotes-sep"}),t._v(" "),e("section",{staticClass:"footnotes"},[e("ol",{staticClass:"footnotes-list"},[e("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[e("p",[t._v("NB: it appears that some publishers are using the last day they updated their data as the transaction value date. In these cases, we have continued to use the value date, and flag this as an issue to be raised with the publishers by IATI Support. "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])]),t._v(" "),e("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[e("p",[e("a",{attrs:{href:"https://data.imf.org/?sk=4C514D48-B6BA-49ED-8AB9-52B0C1A0179B",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://data.imf.org/?sk=4C514D48-B6BA-49ED-8AB9-52B0C1A0179B"),e("OutboundLink")],1),t._v(" (opens new window) "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[t._v("↩︎")])])]),t._v(" "),e("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[e("p",[t._v("If a budget does not perfectly span quarters, but instead spans part-quarters, the number of days in that part-quarter arrer used to calculate the proportion of value to be attributed to each quarter. "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[t._v("↩︎")])])]),t._v(" "),e("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[e("p",[e("a",{attrs:{href:"https://www.gnu.org/licenses/agpl-3.0.en.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.gnu.org/licenses/agpl-3.0.en.html"),e("OutboundLink")],1),t._v(" (opens new window) "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[t._v("↩︎")])])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);