function Fetch(props) {
    // console.log(props.ward);
    // console.log(props.lang);
    const url = 'https://google-api31.p.rapidapi.com/translate';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': 'af277767f3msh989911cf5208f00p136707jsn8d48f60452f6',
            'x-rapidapi-host': 'google-api31.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: props.ward,
            to: props.lang,
            from_lang: ''
        })
    };

    try {
        const dj = async () => {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result[0].translated);
            return await result[0].translated;
        }
        dj();
    } catch (error) {
        console.error(error);
    }
}

export default Fetch
