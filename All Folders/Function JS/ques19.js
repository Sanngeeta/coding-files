function multiplesOfNumber(num){
    var sum=0
    for (i=0;i<=num;i++){
        if (i%3===0){
            sum+=i
        }
        if (i%5==0){
            sum+=i
        }
    }
        // console.log(i)
        console.log(sum)


        
    }

multiplesOfNumber(10)
