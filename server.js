const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
const port = process.env.PORT || 5000;
const catAPI = 'https://api.thecatapi.com/v1';
const catAPIKey = 'aa06f25f-9a62-4a27-857d-bfd68bf38fb9';

const getBreeds = async () => {
    try{
        const res = await fetch(`${catAPI}/breeds`,
        {
            headers: {
                'x-api-key':catAPIKey,
            }
        });
        const breeds = await res.json();
        return breeds;
    }catch(e){
        console.log(e);
    }
}

const getBreedById = async(id) => {
    try{
        const res = await fetch(`${catAPI}/images/search?breed_ids=${id}&limit=1`, {
            headers: {
                'x-api-key':catAPIKey,
            }
        });
        const obj = await res.json();
        const breed = obj[0].breeds[0];
        return {
            name: breed.name,
            description: breed.description,
            image: obj[0].url,
            imageHeight: obj[0].height,
            imageWidth: obj[0].width,
            lifeSpan: breed.life_span,
            temperament: breed.temperament,
            wikipediaURL: breed.wikipedia_url,
            origin: breed.origin,
            weight: breed.weight.metric
        };
    }catch(e){
        console.log(e);
    }
}

app.use(cors());

app.get('/api/breeds', async (req, res) => {
    let limit = req.query.limit;
    if(limit){
        const breeds = await getBreeds();
        res.json(breeds.filter((value, index) => index < limit))
    }
    else{
        res.json(await getBreeds());
    }
});

app.get('/api/breeds/:id', async(req, res) => {
    res.json(await getBreedById(req.params.id));
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

