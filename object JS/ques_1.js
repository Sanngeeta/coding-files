
// d1 = {'a': 100, 'b': 200, 'c':300}

// d2 = {'a': 300, 'b': 200, 'c':400}
// d3={}

// for (i in d1){
//     if(i in d1){
//         d1[i]=d1[i]+d2[i]

//     }else{
//         d1[i]=d2[i]
//     }
// }

// console.log(d1)

var my_dict = { 'a':50, 'b':58, 'c':56, 'd':40, 'e':100, 'f':20 }
arr=[]
k=[0]
for(i in my_dict){
    for(x in my_dict){
        my_dict[i]<k[x]
        k=my_dict[i]
    }

}
    console.log(k)