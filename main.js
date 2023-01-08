let quizAssets = [
    {
        q:"What country has the highest life expectancy?",
        a1:"India",
        a2:"China",
        a3:"Japan",
        a4:"Hong Kong",
        a:"Hong Kong"
    },
    {
        q:"Which language has the most native speakers?",
        a1:"English",
        a2:"Mandarin",
        a3:"Spanish",
        a4:"Hindi",
        a:"Mandarin"
    },{
        q:"What is the most common surname in the United States?",
        a1:"White",
        a2:"Smith",
        a3:"James",
        a4:"Darwin",
        a:"Smith"
    },{
        q:"Who was the Ancient Greek God of the Sun?",
        a1:"Athena",
        a2:"Zeus",
        a3:"Apollo",
        a4:"Thor",
        a:"Apollo"
    },
    {
        q:"What year was the United Nations established?",
        a1:"1947",
        a2:"1938",
        a3:"1945",
        a4:"1918",
        a:"1945"
    },
    {
        q:"What artist has the most streams on Spotify?",
        a1:"Lil Nas X",
        a2:"Drake",
        a3:"Lil Wayne",
        a4:"Dua Lipa",
        a:"Drake"
    },{
        q:"How many minutes are in a full week?",
        a1:"60",
        a2:"3600",
        a3:"1080",
        a4:"10080",
        a:"10080"
    },{
        q:"What car manufacturer had the highest revenue in 2020?",
        a1:"Volkswagen",
        a2:"BMW",
        a3:"Honda",
        a4:"Toyota",
        a:"Volkswagen"
    },{
        q:"How many elements are in the periodic table?",
        a1:"100",
        a2:"96",
        a3:"118",
        a4:"150",
        a:"118"
    },{
        q:"What country drinks the most coffee per capita?",
        a1:"USA",
        a2:"Finland",
        a3:"Brazil",
        a4:"France",
        a:"Finland"
    },{
        q:"Kratos is the main character of what video game series?",
        a1:"God of War",
        a2:"Tomb raider",
        a3:"CSGO",
        a4:"Spiderman",
        a:"God of War"
    }
]

// {
//     q:"",
//     a1:"",
//     a2:"",
//     a3:"",
//     a4:"",
//     a:""
// }
let containerEl = document.querySelector(".container")
let submitBtn = document.getElementById("submit")
let score = 0
let attended = false

for(let i = 0; i<quizAssets.length; i++){
    containerEl.innerHTML += `
                        <p class="question">${i+1}) ${quizAssets[i]["q"]}</p>
                        <label for="ans[${i}]a1">${quizAssets[i]["a1"]}<input type="radio" value="${quizAssets[i]["a1"]}" class=ans${i} name="ans${i}" id="ans[${i}]a1"></label>
                        <label for="ans[${i}]a2">${quizAssets[i]["a2"]}<input type="radio" value="${quizAssets[i]["a2"]}" class=ans${i} name="ans${i}" id="ans[${i}]a2"></label>
                        <label for="ans[${i}]a3">${quizAssets[i]["a3"]}<input type="radio" value="${quizAssets[i]["a3"]}" class=ans${i} name="ans${i}" id="ans[${i}]a3"></label>
                        <label for="ans[${i}]a4">${quizAssets[i]["a4"]}<input type="radio" value="${quizAssets[i]["a4"]}" class=ans${i} name="ans${i}" id="ans[${i}]a4"></label>
                            `
}

submitBtn.addEventListener("click", ()=>{
    checkAns()
    if (attended){
        showAns()
    }else{
        alert("Attend all the questions!!")
    }
})
function checkAns(){
    for(let j= 0; j<quizAssets.length; j++){
        let ans = document.querySelector(`.ans${j}:checked`)
        if(ans){
            if(ans.value ===quizAssets[j]["a"]){
                score++
            }
            attended = true
        }else{
            attended = false
            return
        }
    }
}

function showAns(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
    let resultEl = document.createElement("div")
    document.body.appendChild(resultEl)
    resultEl.classList.add("result")
    resultEl.innerHTML = `<p>Your Total Score is: ${score}/${quizAssets.length}</p>
    <button id="replay">Replay</button>`
    document.getElementById("replay").addEventListener("click", ()=>{
            resultEl.remove()
            location.reload()
        })
}