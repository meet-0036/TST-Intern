// 4. Closures : Even after a function returns,and execution context is gone,the variable object is still there.It's not gone.
           // It still sits here in memory and it can be accessed.
           

           function retirement(retirement) {
    
            let a = ' year left until retirement';
            return function(yearOfBirth) {
                let age = 2023 - yearOfBirth;
                console.log((retirement - age) + a);  // An Inner() has always can access to the var & para of a outer(), even after the outer() has returned.
            }      
        }
        
        
        retirement(70)(1998);  // India
        
        var retirementUS = retirement(66);
        var retirementGermany = retirement(65);
        var retirementIceland = retirement(67);
        
        retirementUS(1998);
        retirementGermany(1998);
        retirementIceland(1998);
        
        
        function interviewQuestion1(job) {
        
            return function(name) {
            if (job === 'designer') 
            {
                console.log(name , ', can you explain what UX design is ?');
            }

            else if(job === 'teacher')
            {
                console.log('What subject do you teach, ' + name + '?');
            }
            
            else {
            
                console.log('Hello '+ name + ', what do you do?');
            }
            }
        }
        
        interviewQuestion1('teacher')('Jonas');
        
        
        
        
        
        // 5. Bind, Call, Apply methods.
        
        var july = {
            name: 'July',
            age: 18,
            job: 'student',
            presentation: function(style,timeOfDay) {
                
                if (style === 'formal') {
                    
                    console.log('Good ' + timeOfDay + ', Ladies and Gentalman! I\'m '
                                + this.name + ', I\'m a ' + this.job + ', and I\'m ' 
                                + this.age + ' years old.');                      // \" In Js string is not complete. 
                }
                else if (style === 'friendly') {
                                
                    console.log('Good ' + timeOfDay + ', Ladies and Gentalman! I\'m '
                                + this.name + ', I\'m a ' + this.job + ', and I\'m ' 
                                + this.age + ' years old. Have a nice '+ timeOfDay +'.');
                }
            }
        };
        
        var emily = {
            name: 'Emily',
            age: 35,
            job: 'designer',
        };
        
        july.presentation('formal','morning');
        
        july.presentation.call(emily, 'friendly' , 'afternoon');  // borrowed method from John Object : call()
        
        // july.presentation.apply(emily, ['friendly' , 'afternoon']);  // this not works.(because our method cant't take array)
       // apply() : similar as  call() but accept arguments as an array. 
        
        // create Function and set some parameters(preset) : creates a new julyfriendly() that is a copy of the presentation() of july
        var julyfriendly = july.presentation.bind(july, 'friendly');
        
        // Set required parameters(left parameter)
        julyfriendly('morning');
        
        var julyfriendly = july.presentation.bind(emily, 'friendly');
        julyfriendly('evening');
        
        
        var years = [1992, 1998, 2000, 2004, 2008, 2012];
        
        function arrayCalc(array , func) {
            
            var arrayResult = [];
            for (let i = 0; i < array.length; i++) {
                arrayResult.push(func(array[i]));  
            }
            return arrayResult;
        }
        
        function calculateAge(element) {
            return 2023 - element;
        }
        
        function isfullAge(limit,element) {
            return element >= limit;
        }

        var ages = arrayCalc(years, calculateAge);
        var fullJapan = arrayCalc(ages, isfullAge.bind(this, 20));//  bind method is used to preset the limit
        console.log(ages, fullJapan);
        
        

        // call() allows to set this variable her in first argument,
        // and generate a copy of this function.
        // mathod Borrowing : borrowed the method from july.to use it here to Emily Object.
        
        // bind() : It allows us to set this variable explicitly.     
        // Carrying technique : we create a function based on another function,but with some preset parameters.
        