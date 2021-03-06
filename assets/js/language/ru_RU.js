(function($) {
    /**
     * Russian language package
     * Translated by @ftroitsky
     */
    $.fn.bootstrapValidator.i18n = $.extend(true, $.fn.bootstrapValidator.i18n, {
        base64: {
            'default': 'Введите данные кодированные в base 64'
        },
        between: {
            'default': 'Введите значение между %s и %s',
            notInclusive: 'Введите значение между %s и %s включительно'
        },
        callback: {
            'default': 'Введите корректное значение'
        },
        choice: {
            'default': 'Введите корректное значение',
            less: 'Минимальное количество опций — %s',
            more: 'Максимальное количество опций — %s',
            between: 'Выберите количество опций от %s до %s'
        },
        creditCard: {
            'default': 'Введите корректный номер карты'
        },
        cusip: {
            'default': 'Введите корректный номер CUSIP'
        },
        cvv: {
            'default': 'Введите корректный номер CVV'
        },
        date: {
            'default': 'Введите корректную дату'
        },
        different: {
            'default': 'Введите другое значение'
        },
        digits: {
             'default': 'Введите только цифры'
        },
        ean: {
            'default': 'Введите корректный номер EAN'
        },
        emailAddress: {
            'default': 'Введите корректный адрес email'
        },
        file: {
            'default': 'Выберите файл'
        },
        greaterThan: {
            'default': 'Введите значение больше или равное %s',
            notInclusive: 'Введите значение больше %s'
        },
        grid: {
            'default': 'Введите корректный номер GRId'
        },
        hex: {
            'default': 'Введите номер в шестнадцатеричной системе счисления'
        },
        hexColor: {
            'default': 'Введите шестнадцатеричный код цвета'
        },
        iban: {
            'default': 'Введите корректный номер IBAN',
            countryNotSupported: 'The country code %s is not supported',
            country: 'Please enter a valid IBAN number in %s',
            countries: {
                AD: 'Андорра',
                AE: 'ОАЭ',
                AL: 'Албания',
                AO: 'Ангола',
                AT: 'Австрия',
                AZ: 'Азербайджан',
                BA: 'Босния и Герцоговина',
                BE: 'Бельгия',
                BF: 'Буркина Фасо',
                BG: 'Болгария',
                BH: 'Бахрейн',
                BI: 'Burundi',
                BJ: 'Benin',
                BR: 'Бразилия',
                CH: 'Switzerland',
                CI: 'Ivory Coast',
                CM: 'Cameroon',
                CR: 'Costa Rica',
                CV: 'Cape Verde',
                CY: 'Cyprus',
                CZ: 'Czech Republic',
                DE: 'Germany',
                DK: 'Denmark',
                DO: 'Dominican Republic',
                DZ: 'Algeria',
                EE: 'Estonia',
                ES: 'Испания',
                FI: 'Finland',
                FO: 'Faroe Islands',
                FR: 'Франция',
                GB: 'United Kingdom',
                GE: 'Georgia',
                GI: 'Gibraltar',
                GL: 'Greenland',
                GR: 'Greece',
                GT: 'Guatemala',
                HR: 'Croatia',
                HU: 'Hungary',
                IE: 'Ireland',
                IL: 'Israel',
                IR: 'Iran',
                IS: 'Iceland',
                IT: 'Italy',
                JO: 'Jordan',
                KW: 'Kuwait',
                KZ: 'Kazakhstan',
                LB: 'Lebanon',
                LI: 'Liechtenstein',
                LT: 'Lithuania',
                LU: 'Luxembourg',
                LV: 'Latvia',
                MC: 'Monaco',
                MD: 'Moldova',
                ME: 'Montenegro',
                MG: 'Madagascar',
                MK: 'Macedonia',
                ML: 'Mali',
                MR: 'Mauritania',
                MT: 'Malta',
                MU: 'Mauritius',
                MZ: 'Mozambique',
                NL: 'Netherlands',
                NO: 'Norway',
                PK: 'Pakistan',
                PL: 'Poland',
                PS: 'Palestinian',
                PT: 'Portugal',
                QA: 'Qatar',
                RO: 'Romania',
                RS: 'Serbia',
                SA: 'Saudi Arabia',
                SE: 'Sweden',
                SI: 'Slovenia',
                SK: 'Slovakia',
                SM: 'San Marino',
                SN: 'Senegal',
                TN: 'Тунис',
                TR: 'Турция',
                VG: 'Virgin Islands, British'
            }
        },
        id: {
            'default': 'Введите корректный номер id',
            countryNotSupported: 'The country code %s is not supported',
            country: 'Please enter a valid %s identification number',
            countries: {
                BA: 'Bosnia and Herzegovina',
                BG: 'Bulgarian',
                BR: 'Бразилияian',
                CH: 'Swiss',
                CL: 'Chilean',
                CZ: 'Czech',
                DK: 'Danish',
                EE: 'Estonian',
                ES: 'Spanish',
                FI: 'Finnish',
                HR: 'Croatian',
                IE: 'Irish',
                IS: 'Iceland',
                LT: 'Lithuanian',
                LV: 'Latvian',
                ME: 'Montenegro',
                MK: 'Macedonian',
                NL: 'Dutch',
                RO: 'Romanian',
                RS: 'Serbian',
                SE: 'Swedish',
                SI: 'Slovenian',
                SK: 'Slovak',
                SM: 'San Marino',
                ZA: 'South African'
            }
        },
        identical: {
            'default': 'Введите идентичное значение'
        },
        imei: {
            'default': 'Введите корректный номер IMEI'
        },
        imo: {
            'default': 'Введите корректный номер IMO'
        },
        integer: {
            'default': 'Введите корректный номер'
        },
        ip: {
            'default': 'Введите корректный IP адрес',
            ipv4: 'Введите корректный IPv4 адрес',
            ipv6: 'Введите корректный IPv6 адрес'
        },
        isbn: {
            'default': 'Введите корректный номер ISBN'
        },
        isin: {
            'default': 'Введите корректный номер ISIN'
        },
        ismn: {
            'default': 'Введите корректный номер ISMN'
        },
        issn: {
            'default': 'Введите корректный номер ISSN'
        },
        lessThan: {
            'default': 'Введите значение меньше или равное %s',
            notInclusive: 'Введите значение меньше %s'
        },
        mac: {
            'default': 'Введите корректный MAC адрес'
        },
        meid: {
            'default': 'Введите корректный номер MEID'
        },
        notEmpty: {
            'default': 'Введите значение'
        },
        numeric: {
            'default': 'Введите число с плавающей точкой'
        },
        phone: {
            'default': 'Введите номер телефона',
            countryNotSupported: 'Код страны %s не поддерживается',
            country: 'Введите корректрый номер телефона для страны %s',
            countries: {
                BR: 'Бразилия',
                ES: 'Испания',
                FR: 'Франция',
                GB: 'Великобритания',
                MA: 'Морокко',
                PK: 'Пакистан',
                US: 'США'
            }
        },
        regexp: {
            'default': 'Введите значение соответсвующее формату'
        },
        remote: {
            'default': 'Введите корректное значение'
        },
        rtn: {
            'default': 'Введите корректный номер RTN'
        },
        sedol: {
            'default': 'Введите корректный номер SEDOL'
        },
        siren: {
            'default': 'Введите корректный номер SIREN'
        },
        siret: {
            'default': 'Введите корректный номер SIRET'
        },
        step: {
            'default': 'Ведите шаг %s'
        },
        stringCase: {
            'default': 'Используйте только строчные буквы',
            upper: 'Используйте только заглавные буквы'
        },
        stringLength: {
            'default': 'Please enter a value with valid length',
            less: 'Please enter less than %s characters',
            more: 'Please enter more than %s characters',
            between: 'Please enter value between %s and %s characters long'
        },
        uri: {
            'default': 'Введите корректный URI'
        },
        uuid: {
            'default': 'Please enter a valid UUID number',
            version: 'Please enter a valid UUID version %s number'
        },
        vat: {
            'default': 'Please enter a valid VAT number',
            countryNotSupported: 'The country code %s is not supported',
            country: 'Please enter a valid %s VAT number',
            countries: {
                AT: 'Австрии',
                BE: 'Бельгии',
                BG: 'Болгарии',
                BR: 'Бразилии',
                CH: 'Швейцарии',
                CY: 'Кипре',
                CZ: 'Czech',
                DE: 'German',
                DK: 'Danish',
                EE: 'Estonian',
                ES: 'Spanish',
                FI: 'Finnish',
                FR: 'French',
                GB: 'United Kingdom',
                GR: 'Greek',
                EL: 'Greek',
                HU: 'Hungarian',
                HR: 'Croatian',
                IE: 'Irish',
                IS: 'Iceland',
                IT: 'Italian',
                LT: 'Lithuanian',
                LU: 'Luxembourg',
                LV: 'Latvian',
                MT: 'Maltese',
                NL: 'Dutch',
                NO: 'Norwegian',
                PL: 'Polish',
                PT: 'Portuguese',
                RO: 'Romanian',
                RU: 'России',
                RS: 'Сербии',
                SE: 'Швеции',
                SI: 'Slovenian',
                SK: 'Slovak',
                VE: 'Venezuelan',
                ZA: 'South African'
            }
        },
        vin: {
            'default': 'Please enter a valid VIN number'
        },
        zipCode: {
            'default': 'Please enter a valid zip code',
            countryNotSupported: 'The country code %s is not supported',
            country: 'Please enter a valid %s',
            countries: {
                BR: 'Почтовый индекс Бразилии',
                CA: 'Почтовый индекс Канады',
                DK: 'Почтовый индекс Дании',
                GB: 'Почтовый индекс Великобритании',
                IT: 'Почтовый индекс Италии',
                MA: 'Почтовый индекс Морокко',
                NL: 'Почтовый индекс Дании',
                SE: 'Почтовый индекс Швейцарии',
                SG: 'Почтовый индекс Сингапура',
                US: 'Почтовый индекс США'
            }
        }
    });
}(window.jQuery));
