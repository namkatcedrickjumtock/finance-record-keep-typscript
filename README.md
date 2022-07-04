## ` TypeScript Notes`

      sudo apt install TypeScript -> for Debian distribution

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

                    
    
