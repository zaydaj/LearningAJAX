async function getRandomDog() {
    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log(res.data);
    const img = document.querySelector("#dog");
    img.src = res.data.message;
}