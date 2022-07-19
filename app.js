async function getRandomDog() {
    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log(res.data);
    const img = document.querySelector("#dog");
    img.src = res.data.message;
}

async function getDogByBreed(breed) { 
try {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`
    const res = await axios.get(url);
    const img = document.querySelector("#dog");
    img.src = res.data.message;
} catch (e) {
    alert('breed not found')
}
}

const form = document.querySelector("#searchform");
const input = document.querySelector("#search")
form.addEventListener("submit", function(e){
    e.preventDefault();
    // console.log('submit')
    // console.log(input.value)
getDogByBreed(input.value);
input.value = '';
})
