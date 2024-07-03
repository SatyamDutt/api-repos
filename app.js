const URL = "https://cat-fact.herokuapp.com/facts";

// https://cat-fact.herokuapp.com/facts

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


// simpler codef
const getFacts = async () => {
    console.log("Getting data .....!");
    let response = await fetch(URL);
    console.log(response);//JSON format
    let data = await response.json();
    console.log(data[2].text);
    factPara.innerText = data[2].text;
};

// function getFacts() {
//     fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factPara.innerText = data[3].text;
//     });
// }



btn.addEventListener("click",getFacts);
// getFacts()



