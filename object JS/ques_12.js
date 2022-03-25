var dict = {

    'Alex': ['subj1', 'subj2', 'subj3'],
    
    'David': ['subj1', 'subj2']
    
    }
count=0
for (i in dict){
    for(a in dict[i]){
        count++

    }
   
}
console.log(count)

