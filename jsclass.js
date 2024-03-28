class TamTech{
    constructor(name,size,timeOFBegin,prolanguage){
        this.name=name;
        this.mebersize=size;
        this.formation=timeOFBegin;
        this.prolanguage=prolanguage;
    }
   display(){
    console.log( `Tam Tech is a native company formed in ${this.formation} with ${this.mebersize} 
    members in first installation`)
   }

    WebDevelopment(language){
        console.log(`TamTech is web development campany with
         the prominent member of ${this.name}`)
        console.log(`we use ${language} for web development`)
    }
    static WhayNotAccessed(){  // static class that are not accessed by object
        console.log("Becuase objects can't access it")
    }
} 
class Programing extends TamTech{
    constructor(ProgramingType,name,mebersize,timeOFBegin,prolanguage){
        super(name,mebersize,timeOFBegin,prolanguage)
        this.ProgramingType=ProgramingType;
    }
    teach(){
        console.log(`we teach ${this.prolanguage} in our TamTech`)
    }
    display(){
        super.display()
        console.log(`this display is in Programing class : it has properties like
        ${this.name}   ${this.ProgramingType} ${this.mebersize}  ${ this.formation} ${this.prolanguage}`)
    }
}

TamTech.prototype.announs=function(){
    console.log("This is method add to prototype by using prototye method")
}
const firstBegn=new TamTech(["Temesgen " ," Markos " ,"Abraham "],2,2014,)
console.log(firstBegn)
console.log(firstBegn.display())
const call1=firstBegn.WebDevelopment(["html","css","bootstrap","javascript","react"])
console.log(call1)
console.log(`/////////////////////////////this is inhertance////////////////////`)
const programing1=new Programing("web Development",["Temesgen " ," Markos " ,"Abraham "],3,2024,"MERN")
console.log(programing1.display())
console.log(programing1.WebDevelopment(["phyton","mongdbs","node-js"]))
console.log(programing1.formation)
console.log(programing1.teach())
console.log(programing1.display())
programing1.announs();
TamTech.WhayNotAccessed()
// programing1.WhayNotAccessed() // no result since it is instance method object can't access it


const obj={
    _:"abraham",
    $:32,
    "-":"MArk",
    get Dollar(){ // both of this set and get are not as method but treated as function
        console.log(`I have $ ${this.$}`)
    },
    set ChangeKey(key){
        this["-"]=key
    },
  
}


console.log(obj.$)
console.log(obj["-"])
const changed=obj.ChangeKey="Minus"
console.log(changed)
console.log(obj)
// obj.Dollar()
//  Object.create method for prototypical inhertance object

const createObj={
    sum(num1,num2){
        return `awesome  sum of  ${num1} + ${num2} is ${num1+num2}`
    }
}
const newObj=Object.create(createObj)
console.log(newObj)
let sumResult=newObj.sum(21,12)
console.log(sumResult)
console.log(Object.create(createObj) === newObj.__proto__)
console.log( newObj.__proto__)






