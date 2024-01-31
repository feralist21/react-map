import { useEffect, useState } from "react";
import { geocode } from "@/http/geocodeApi.js";

// const asd = [
//     {
//         GeoObject: {
//             metaDataProperty: {
//                 GeocoderMetaData: {
//                     precision: "street",
//                     text: "Россия, Иркутск, Байкальская улица",
//                     kind: "street",
//                     Address: {
//                         country_code: "RU",
//                         formatted: "Россия, Иркутск, Байкальская улица",
//                         Components: [
//                             {
//                                 kind: "country",
//                                 name: "Россия",
//                             },
//                             {
//                                 kind: "province",
//                                 name: "Сибирский федеральный округ",
//                             },
//                             {
//                                 kind: "province",
//                                 name: "Иркутская область",
//                             },
//                             {
//                                 kind: "area",
//                                 name: "муниципальное образование Иркутск",
//                             },
//                             {
//                                 kind: "locality",
//                                 name: "Иркутск",
//                             },
//                             {
//                                 kind: "street",
//                                 name: "Байкальская улица",
//                             },
//                         ],
//                     },
//                     AddressDetails: {
//                         Country: {
//                             AddressLine: "Россия, Иркутск, Байкальская улица",
//                             CountryNameCode: "RU",
//                             CountryName: "Россия",
//                             AdministrativeArea: {
//                                 AdministrativeAreaName: "Иркутская область",
//                                 SubAdministrativeArea: {
//                                     SubAdministrativeAreaName:
//                                         "муниципальное образование Иркутск",
//                                     Locality: {
//                                         LocalityName: "Иркутск",
//                                         Thoroughfare: {
//                                             ThoroughfareName: "Байкальская улица",
//                                         },
//                                     },
//                                 },
//                             },
//                         },
//                     },
//                 },
//             },
//             name: "Байкальская улица",
//             description: "Иркутск, Россия",
//             boundedBy: {
//                 Envelope: {
//                     lowerCorner: "104.295662 52.252979",
//                     upperCorner: "104.387901 52.281159",
//                 },
//             },
//             uri: "ymapsbm1://geo?data=CgoxNjA2NjcyMjA5Ej_QoNC-0YHRgdC40Y8sINCY0YDQutGD0YLRgdC6LCDQkdCw0LnQutCw0LvRjNGB0LrQsNGPINGD0LvQuNGG0LAiCg29rNBCFd0EUUI,",
//             Point: {
//                 pos: "104.33738 52.254749",
//             },
//         },
//     },
//     {
//         GeoObject: {
//             metaDataProperty: {
//                 GeocoderMetaData: {
//                     precision: "street",
//                     text: "Россия, Москва, Байкальская улица",
//                     kind: "street",
//                     Address: {
//                         country_code: "RU",
//                         formatted: "Россия, Москва, Байкальская улица",
//                         Components: [
//                             {
//                                 kind: "country",
//                                 name: "Россия",
//                             },
//                             {
//                                 kind: "province",
//                                 name: "Центральный федеральный округ",
//                             },
//                             {
//                                 kind: "province",
//                                 name: "Москва",
//                             },
//                             {
//                                 kind: "locality",
//                                 name: "Москва",
//                             },
//                             {
//                                 kind: "street",
//                                 name: "Байкальская улица",
//                             },
//                         ],
//                     },
//                     AddressDetails: {
//                         Country: {
//                             AddressLine: "Россия, Москва, Байкальская улица",
//                             CountryNameCode: "RU",
//                             CountryName: "Россия",
//                             AdministrativeArea: {
//                                 AdministrativeAreaName: "Москва",
//                                 Locality: {
//                                     LocalityName: "Москва",
//                                     Thoroughfare: {
//                                         ThoroughfareName: "Байкальская улица",
//                                     },
//                                 },
//                             },
//                         },
//                     },
//                 },
//             },
//             name: "Байкальская улица",
//             description: "Москва, Россия",
//             boundedBy: {
//                 Envelope: {
//                     lowerCorner: "37.778443 55.816642",
//                     upperCorner: "37.827131 55.817547",
//                 },
//             },
//             uri: "ymapsbm1://geo?data=CggxMDA0OTE5MBI90KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCR0LDQudC60LDQu9GM0YHQutCw0Y8g0YPQu9C40YbQsCIKDRA2F0IVhkRfQg,,",
//             Point: {
//                 pos: "37.802796 55.81692",
//             },
//         },
//     },
//     {
//         GeoObject: {
//             metaDataProperty: {
//                 GeocoderMetaData: {
//                     precision: "street",
//                     text: "Беларусь, Минск, Байкальская улица",
//                     kind: "street",
//                     Address: {
//                         country_code: "BY",
//                         formatted: "Беларусь, Минск, Байкальская улица",
//                         Components: [
//                             {
//                                 kind: "country",
//                                 name: "Беларусь",
//                             },
//                             {
//                                 kind: "province",
//                                 name: "Минск",
//                             },
//                             {
//                                 kind: "locality",
//                                 name: "Минск",
//                             },
//                             {
//                                 kind: "street",
//                                 name: "Байкальская улица",
//                             },
//                         ],
//                     },
//                     AddressDetails: {
//                         Country: {
//                             AddressLine: "Беларусь, Минск, Байкальская улица",
//                             CountryNameCode: "BY",
//                             CountryName: "Беларусь",
//                             AdministrativeArea: {
//                                 AdministrativeAreaName: "Минск",
//                                 Locality: {
//                                     LocalityName: "Минск",
//                                     Thoroughfare: {
//                                         ThoroughfareName: "Байкальская улица",
//                                     },
//                                 },
//                             },
//                         },
//                     },
//                 },
//             },
//             name: "Байкальская улица",
//             description: "Минск, Беларусь",
//             boundedBy: {
//                 Envelope: {
//                     lowerCorner: "27.670806 53.861325",
//                     upperCorner: "27.690407 53.873208",
//                 },
//             },
//             uri: "ymapsbm1://geo?data=CggzMTMyNTM1NRJB0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiwg0JHQsNC50LrQsNC70YzRgdC60LDRjyDQstGD0LvRltGG0LAiCg2Vc91BFXB7V0I,",
//             Point: {
//                 pos: "27.681433 53.870543",
//             },
//         },
//     },
//     {
//         GeoObject: {
//             metaDataProperty: {
//                 GeocoderMetaData: {
//                     precision: "street",
//                     text: "Украина, Днепр, Байкальская улица",
//                     kind: "street",
//                     Address: {
//                         country_code: "UA",
//                         formatted: "Украина, Днепр, Байкальская улица",
//                         Components: [
//                             {
//                                 kind: "country",
//                                 name: "Украина",
//                             },
//                             {
//                                 kind: "province",
//                                 name: "Днепропетровская область",
//                             },
//                             {
//                                 kind: "area",
//                                 name: "Днепровский район",
//                             },
//                             {
//                                 kind: "area",
//                                 name: "Днепровская городская община",
//                             },
//                             {
//                                 kind: "locality",
//                                 name: "Днепр",
//                             },
//                             {
//                                 kind: "street",
//                                 name: "Байкальская улица",
//                             },
//                         ],
//                     },
//                     AddressDetails: {
//                         Country: {
//                             AddressLine: "Украина, Днепр, Байкальская улица",
//                             CountryNameCode: "UA",
//                             CountryName: "Украина",
//                             AdministrativeArea: {
//                                 AdministrativeAreaName: "Днепропетровская область",
//                                 SubAdministrativeArea: {
//                                     SubAdministrativeAreaName: "Днепровский район",
//                                     Locality: {
//                                         LocalityName: "Днепр",
//                                         Thoroughfare: {
//                                             ThoroughfareName: "Байкальская улица",
//                                         },
//                                     },
//                                 },
//                             },
//                         },
//                     },
//                 },
//             },
//             name: "Байкальская улица",
//             description: "Днепр, Украина",
//             boundedBy: {
//                 Envelope: {
//                     lowerCorner: "35.037296 48.508005",
//                     upperCorner: "35.116564 48.527204",
//                 },
//             },
//             uri: "ymapsbm1://geo?data=CgoxNDQ0NTk3NjE0EkHQo9C60YDQsNGX0L3QsCwg0JTQvdGW0L_RgNC-LCDQkdCw0LnQutCw0LvRjNGB0YzQutCwINCy0YPQu9C40YbRjyIKDSJPDEIVARRCQg,,",
//             Point: {
//                 pos: "35.07728 48.519536",
//             },
//         },
//     },
//     {
//         GeoObject: {
//             metaDataProperty: {
//                 GeocoderMetaData: {
//                     precision: "street",
//                     text: "Россия, Тюмень, улица 50 лет Октября",
//                     kind: "street",
//                     Address: {
//                         country_code: "RU",
//                         formatted: "Россия, Тюмень, улица 50 лет Октября",
//                         Components: [
//                             {
//                                 kind: "country",
//                                 name: "Россия",
//                             },
//                             {
//                                 kind: "province",
//                                 name: "Уральский федеральный округ",
//                             },
//                             {
//                                 kind: "province",
//                                 name: "Тюменская область",
//                             },
//                             {
//                                 kind: "area",
//                                 name: "городской округ Тюмень",
//                             },
//                             {
//                                 kind: "locality",
//                                 name: "Тюмень",
//                             },
//                             {
//                                 kind: "street",
//                                 name: "улица 50 лет Октября",
//                             },
//                         ],
//                     },
//                     AddressDetails: {
//                         Country: {
//                             AddressLine: "Россия, Тюмень, улица 50 лет Октября",
//                             CountryNameCode: "RU",
//                             CountryName: "Россия",
//                             AdministrativeArea: {
//                                 AdministrativeAreaName: "Тюменская область",
//                                 SubAdministrativeArea: {
//                                     SubAdministrativeAreaName: "городской округ Тюмень",
//                                     Locality: {
//                                         LocalityName: "Тюмень",
//                                         Thoroughfare: {
//                                             ThoroughfareName: "улица 50 лет Октября",
//                                         },
//                                     },
//                                 },
//                             },
//                         },
//                     },
//                 },
//             },
//             name: "улица 50 лет Октября",
//             description: "Тюмень, Россия",
//             boundedBy: {
//                 Envelope: {
//                     lowerCorner: "65.561879 57.10529",
//                     upperCorner: "65.659203 57.155352",
//                 },
//             },
//             uri: "ymapsbm1://geo?data=Cgc4MDM5MjU1Ej_QoNC-0YHRgdC40Y8sINCi0Y7QvNC10L3RjCwg0YPQu9C40YbQsCA1MCDQu9C10YIg0J7QutGC0Y_QsdGA0Y8iCg2XOINCFWuFZEI,",
//             Point: {
//                 pos: "65.610523 57.130291",
//             },
//         },
//     },
// ];

function InputAddress() {
    const [geoData, setGeoData] = useState(null);
    const [inputAddress, setInputAddress] = useState("");

    useEffect(() => {
        console.log("Делаю запрос");

        async function geocoderGet() {
            try {
                const geoData = await geocode.getAddress("байкальская");
                console.log(geoData.response.GeoObjectCollection.featureMember);
                setGeoData(geoData);
            } catch (e) {
                console.log(e);
            }
        }

        // geocoderGet();
    }, []);

    function handlerInput(event) {
        setInputAddress(event.target.value);
    }

    return (
        <div className="relative">
            <form className="block">
                <input
                    className="block w-full outline-0 p-3 border-2 border-slate-500"
                    type="text"
                    placeholder="Введите адрес"
                    onChange={handlerInput}
                />
            </form>
            {Boolean(inputAddress) && (
                <div className="absolute top-full mt-2 left-0 w-full h-auto bg-slate-500 z-10 text-white p-3 flex flex-col gap-y-4 shadow-xl">
                    <p className="text-base">adasd</p>
                </div>
            )}
        </div>
    );
}

export default InputAddress;
