//1: 2s student roll number
//2: 2s 2nd name and age batana chahiye.
//3:2s gender 

const getRollNo = () =>{
    //1: 2s student roll number
    setTimeout(() => {
        console.log('API getting roll number')
        let roll_number=[1,2,3,4,5]
        console.log(roll_number)

        setTimeout((rollNUmber) =>{
            //2: 2s 2nd name and age batana chahiye.
            const bioData={name:"sangeeta",age:21}
            console.log(`My roll number ${rollNUmber} my name is ${bioData.name} I am ${bioData.age} year old`)
            
            setTimeout((name) =>{
                //3:2s gender.
                bioData.gender="female"
                console.log(`My roll number ${rollNUmber} my name is ${bioData.name} I am ${bioData.age} year old and i am ${bioData.gender}`)

                

            },2000,bioData.name)

        },2000,roll_number[1])

    },2000)
}
getRollNo()