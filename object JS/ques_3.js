// Output :

// {1: 10, 2: 60, 3: 30, 5: 50, 6: 60}

var dic1={1:10, 2:20}

var dic2={3:30,2:40}

var dic3={5:50,6:60}


for(i in dic1){
for (a in dic2){
    if (i==a){
        dic3[i]=dic1[i]+dic2[a]
        break
n
    }else{
        dic3[i]=dic1[i]
        dic3[a]=dic2[a]

    }
}
}
console.log(dic3)

