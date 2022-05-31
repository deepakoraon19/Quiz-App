let Questions;
let questionDiv = document.querySelector(".questions")
let optionDiv = document.querySelector(".options")
let answerList=[];
let correct=true;

let getQuestions = async()=>{
     let apiCall = await fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=easy");
     let dataa;
     let res = apiCall.json()     
     await res.then((data)=>{
       
        dataa=data.results;
     })
   return dataa;
     
}

let loadQuestions = (Questions,i)=>{
    console.log(Questions.length)
    
    
        let ques = document.createElement("h2")
        ques.textContent = Questions[i]["question"];
        questionDiv.appendChild(ques)

        for(let j=0;j<3;j++)
        {
            let option = document.createElement("div")
            option.innerHTML = Questions[i]["incorrect_answers"][j]
            option.classList.add("option")
            optionDiv.appendChild(option)
        }
        let option = document.createElement("div")
            option.innerHTML = Questions[i]["correct_answer"]
            option.classList.add("option")
            optionDiv.appendChild(option)       
    


}

// loadQuestions();

let run = async()=>{
    Questions = await getQuestions(); 
    let i=0 
    while(i<Questions.length){        
        if(correct){

            loadQuestions(Questions,i);

            let op = document.querySelectorAll(".option")
            for(let i=0;i<op.length;i++)
            {
                op[i].addEventListener('click',()=>{
                    if(op.textContent!=Questions[i][correct_answer]){
                        correct=false;
                    }
                })
            }
                }
                i++;
            }
}

run();