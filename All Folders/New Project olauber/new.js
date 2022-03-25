const fs = require('fs')
    function driveSearch() {
        let open = fs.readFileSync("file8.json")
        var read1 = JSON.parse(open)
        var i = 0
        while (i < read1.length) {
            console.log(read1[i])
            i++
        }
        
    }
driveSearch()


// key=["name","designation","age","salary"]
// emp1={} 
// emp2={} 
// emp3={}
// emp4={}

// dict1={"emp1":emp1,"emp2":emp2,"emp3":emp3,"emp4":emp4}

// for a in range(len(list1)):
//     emp1.update({key[a]:list1[a]})
//     for b in range(len(list2)):
//         emp2.update({key[b]:list2[b]})