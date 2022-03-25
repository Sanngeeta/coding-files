const button=document.querySelector("#btn")
const output=document.querySelector("#output")

const array=[
    {task:"eat lunch",
    completed:true },

    {task:"play game",
    completed:false },

    {task:"doing study",
    completed:true },

    {task:"sleeping",
    completed:false },


    {task:"eat lunch",
    completed:true },
]


button.addEventListener('click',()=>{
    for (i=0;i<array.length;i++){
        if (array[i].completed)
            
        {
            output.innerHTML+=`<p>${(array[i].task)}</p>`
        }
           
    }
})