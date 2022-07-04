## `TypeScript Notes`
      sudo apt install TypeScript -> for Debian distribution

      yarn install Typescript
      
      tsc init -> initialized typeScripts configurations for better workflow.

Typscripts is what we call a Superset of javascript becuase it extends teh functionality of Vanilla javascripts, strongly typed and compiled down to javascript which is much error free or bug free.

### Access Modifiers in TypeScript:

    example: of access Modifiers in Typscripts.

    class person {
        readOnly name: String,
        pricate socialSecNo: Number
        public homeAddress: String
    }

- Public : **Meaning we can change and read the value in or outside the class**
- private: **Meaning only allows changing only inside the class**
- ReadOnly: **Meaning we can read and access the properties inside and outide the class but can't change the value**.

### TypeScript Interfaces

An interface allows us to inforce certain structure of a class or an object.

#### Interface Semantics in Typscripts includes:

    Interface <interFace Name>{
        // specify what type of properties and methods
        the interface should have or be ans return
    }

    Interface isStudent{
        name: String
        age: Number

        //methods
        talk(a:String):void;
        results(a:number): number
    }

This means that any class or or object that implements the isStudent interface must follow or have thesame structure.

#### Implementation of Interfaces - Objects

    const level1Students: isStudent{
        name: "cedrick,
        age: 30,

        speak(txt:String){
            console.log(`hello ${txt}`)
        }

        spend(amt:number){
            console.log('i spent ',amt);
            return amt,
        }
            // interfaces can also be passed as params to functions

        let anotherStudents = (Student: isStudent) => {
           console.log('hello', Student.name)
        }
    // this means that a function can perform  diff task within it's body but
    follow thesame structure as the interface.

    anotherStudents(level1Students) // hello cedrick

    }

#### Implementation of Interfaces - Classes

         class <ClassName> Implements <interfaceName>{
            ... code
         }

#### Generics in Typscripts

In simple terms generics in typeScripts enables us to create reusable blocks o code that can be used with different types. in a nutshell generics are used when the type of data to be return is not know or is subject to change.

##### See example:

    // no generics

    const createUser = (obj: object){
        userId = Math.floor(Math.random * 100)
        return {...obj , userId}
    }
     let user1 = createUser({ name:'bonio', age:34, color: "black" })

      console.log(user1.name) // output would give an error because 
      the createUser doesn't recognized the Object types.
To fix this we can use a Generic.    

       const createUser = <T> (obj: T){
        userId = Math.floor(Math.random * 100)
        return {...obj , userId}
    }
     let user1 = createUser({ name:'bonio', age: 34, color: "black" })
      console.log(user1.name) // this now would work since we just 
      accept the the Obj passed without specifying the type of the object.
we can spcify the types of the object by using the extends keywords

         const createUser = <T extend object> (obj: T){ //args must be of type Object
        userId = Math.floor(Math.random * 100)
        return {...obj , userId}
    }
we can even go deeper by specifying what each objects elements should have

    const createUser = <T extend {name: string}> (obj: T){ //args every obj must have a name property and of type string
        userId = Math.floor(Math.random * 100)
        return {...obj , userId}
    }
     let user1 = createUser({ name: 234, age: 34, color: "black" }) ❌
     let user1 = createUser({ name: "Bonio" , age: 34, color: "black" }) ✅
#### Generics with Interfaces

     interface Resources <T>{
        id: number,
        resourceType: String
        data: T // generic value
     }
#### Enums in Typscript

    template
    enum <nameOfEnum> = { coma separated values }
enums helps us to store a certain type of constants or key words and associate them with a key value pair.

#### Tuples in Typscript
Tuples in Typscripts are comma separated values with an unchangeable type when define.

          
           let user: [string, number, bolean] = ["cedrick", 32, true]  ✅
 but we can't change the type at possition[0] to a number like:

           user[0] = 50 ❌
 but we can change the type at possition[0] to a different value of thesame type:

           user[0] = "Junior " ✅