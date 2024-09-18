import React, { useRef, useState } from 'react'
// import '../css/Translate.css'



function Translate() {
    // const [lang, setLang] = useState('');
    // const [ward, setWard] =useState('');
    const [wardLang, setWardLang] = useState({
        ward: 'hello world',
        lang: 'or',
        fromLang: 'en'
    });
    const [arror, setError] = useState(null);

    let langObj = {
        af: 'Afrikaans',
        am: 'Amharic',
        ar: 'Arabic',
        as: 'Assamese',
        az: 'Azerbaijani',
        bg: 'Bulgarian',
        bn: 'Bangla',
        bs: 'Bosnian',
        ca: 'Catalan',
        cs: 'Czech',
        cy: 'Welsh',
        da: 'Danish',
        de: 'German',
        el: 'Greek',
        en: 'English',
        es: 'Spanish',
        et: 'Estonian',
        fa: 'Persian',
        fi: 'Finnish',
        fil: 'Filipino',
        fj: 'Fijian',
        fr: 'French',
        'fr-CA': 'French (Canada)',
        ga: 'Irish',
        gu: 'Gujarati',
        he: 'Hebrew',
        hi: 'Hindi',
        hr: 'Croatian',
        ht: 'Haitian Creole',
        hu: 'Hungarian',
        hy: 'Armenian',
        id: 'Indonesian',
        is: 'Icelandic',
        it: 'Italian',
        iu: 'Inuktitut',
        ja: 'Japanese',
        kk: 'Kazakh',
        km: 'Khmer',
        kmr: 'Kurdish(Northern)',
        kn: 'Kannada',
        ko: 'Korean',
        ku: 'Kurdish(Central)',
        lo: 'Lao',
        lt: 'Lithuanian',
        lv: 'Latvian',
        mg: 'Malagasy',
        mi: 'Maori',
        ml: 'Malayalam',
        mr: 'Marathi',
        ms: 'Malay',
        mt: 'Maltese',
        mww: 'Hmong Daw',
        my: 'Myanmar(Burmese)',
        nb: 'Norwegian',
        ne: 'Nepali',
        nl: 'Dutch',
        or: 'Odia',
        otq: 'Querétaro Otomi',
        pa: 'Punjabi',
        pl: 'Polish',
        prs: 'Dari',
        ps: 'Pashto',
        pt: 'Portuguese(Brazil)',
        'pt-PT': 'Portuguese(Portugal)',
        ro: 'Romanian',
        ru: 'Russian',
        sk: 'Slovak',
        sl: 'Slovenian',
        sm: 'Samoan',
        sq: 'Albanian',
        'sr-Cyrl': 'Serbian(Cyrillic)',
        'sr-Latn': 'Serbian(Latin)',
        sv: 'Swedish',
        sw: 'Swahili',
        ta: 'Tamil',
        te: 'Telugu',
        th: 'Thai',
        ti: 'Tigrinya',
        'tlh-Latn': 'Klingon',
        to: 'Tongan',
        tr: 'Turkish',
        ty: 'Tahitian',
        uk: 'Ukrainian',
        ur: 'Urdu',
        vi: 'Vietnamese',
        yua: 'Yucatec Maya',
        yue: 'Cantonese(Traditional)',
        'zh-Hans': 'Chinese Simplified',
        'zh-Hant': 'Chinese Traditional',
    }


    const textAreaRef = useRef();

    const langHandleOnChnage = (e) => {
        // setLang(e.target.value);
        setWardLang({
            ...wardLang,
            lang: e.target.value,
        })
    }

    const wardHandleOnChange = (e) => {
        setWardLang({
            ...wardLang,
            ward: e.target.value,
        })
    }

    const fromLangOnChange = (e) => {
        setWardLang({
            ...wardLang,
            fromLang: e.target.value
        })
    }



    const handleTranslate = async () => {
        // const url = 'https://google-api31.p.rapidapi.com/translate';
        // const options = {
        //     method: 'POST',
        //     headers: {
        //         'x-rapidapi-key': 'af277767f3msh989911cf5208f00p136707jsn8d48f60452f6',
        //         'x-rapidapi-host': 'google-api31.p.rapidapi.com',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         text: wardLang.ward,
        //         to: wardLang.lang,
        //         from_lang: wardLang.fromLang
        //     })
        // };

        // try {
        //     const dj = async () => {
        //         const response = await fetch(url, options);
        //         const result = await response.json().then((value) => {
        //             textAreaRef.current.value = value[0].translated;
        //         });
        //         console.log(result);
        //     }
        //     dj();
        // } catch (error) {
        //     // console.error(error);
        //     setError(`some error occured ${error}`);
        //     textAreaRef.current.value = arror;
        // }



        const url = 'https://text-translator2.p.rapidapi.com/translate';
        const data = new FormData();
        data.append('source_language', wardLang.fromLang);
        data.append('target_language', wardLang.lang);
        data.append('text', wardLang.ward);

        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': 'af277767f3msh989911cf5208f00p136707jsn8d48f60452f6',
                'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
            },
            body: data
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            textAreaRef.current.value = result.data.translatedText
            console.log(result.data.translatedText);
        } catch (error) {
            console.error(error);
            setError(`some error occured ${error}`);
            textAreaRef.current.value = arror;
        }
    }
w

    return (
        <>
            <main className='w-100 bg-black d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                <section className='w-100 container'>
                    <div className='row w-100 m-auto'>
                        <div className='col-12 col-sm-6'>
                            <div className="mb-3">
                                <select onChange={fromLangOnChange} className="form-select bg-dark text-white" aria-label="Default select example">
                                    <option value='en' selected>Open this select menu</option>
                                    {
                                        Object.entries(langObj).map(([key, value]) => {
                                            return <option value={key}>{value}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">Example textarea</label>
                                <textarea onChange={wardHandleOnChange} placeholder='Enter Text Here' className="form-control bg-dark text-white" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className="mb-3">
                                <select onChange={langHandleOnChnage} className="form-select" aria-label="Default select example">
                                    <option value='or' selected>Open this select menu</option>
                                    {
                                        Object.entries(langObj).map(([key, value]) => {
                                            return <option value={key}>{value}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">Example textarea</label>
                                <textarea ref={textAreaRef} className="form-control bg-body" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleTranslate} className='d-block m-auto btn btn-primary' type="button">Translate</button>
                </section>
            </main>
        </>
    )
}

export default Translate
