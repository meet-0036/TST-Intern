
// var learnController = (function () {
    //     var x = 25
    
    //     var add = function (a){   // private function
    //         return x + a
    //     }
    //     return {
        //          publicTest: function(b){  // public function also access of private(add() ,x) element : closure
        //             return add(b);
        //         }
        //     }
        
        // })(); // IIFI function
        
        // console.log(budgetController.publicTest(5));  // 30 : public 
        // console.log(budgetController.add);   // undefined  : private 
        // console.log(budgetController.x);     // undefined  : private 
        
// 3 modules with private/individual implementations

var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var allExpenses = [];
    var allIncome = [];
    var totalExpenses = 0;

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {

        addItem: function (type , des , val) {  // destination
            
        var newItem, ID;

        //ID = Last ID + 1  (New ID)
        if (data.allItems[type].length > 0) {
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;    
        }

        // Create new item based on 'inc' or 'exp' type
        if (type === 'exp') {
            newItem = new Expense(ID , des , val);        
        } else {
            newItem = new Income(ID , des , val);        
        }

        // Push it into our data structure
        data.allItems[type].push(newItem);

        //return the new item
        return newItem;
        }

    };

})();


var UIController = (function () {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addbtn: '.add__btn--1'
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'

    };

    return {

        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value,  // will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        addListItem: function () {
            var html, newHtml, element;

            // Create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix">
                        <div class="item__value>%value%</div><div class="item__delete"><button class="item__delete--btn">
                        <img src="images/cancel-icon.png" alt="cancel"></button></div></div></div>';

            } else if (type === 'exp') {

                element = DOMStrings.expenseContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix">
                        <div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete">
                        <button class="item__delete--btn"><img src="images/cancel-icon.png" alt="cancel"></button></div></div></div>';
            
            }

            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            //Insert the HTML into the DOM
            document.querySelector()
        },

        getDOMStrings: function(){
            return DOMStrings;
        }
    };

})();


var controller = (function (budgetControl , UIControl) {  // get copy valu so original can't be overwritten
    
    var setupEventListener = function(){

        var DOM = UIControl.getDOMStrings();

        document.querySelector(DOM.addbtn).addEventListener("click", ctrlAddItem);

        document.addEventListener('keypress', function (event) {
    
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };



    var ctrlAddItem = function (){

        var input, newItem;

        // 1. get the field input data 
        var input = UIControl.getInput();
    
        // 2. Add the item to the budget controller 
        var newItem =  budgetControl.addItem(input.type, input.description input.value);

        // 3. Add the item to the UI
        UIControl.addListItem(newItem, input.type);

        // 4. calculate the budget


        // 5. Display the updated budget on the UI

    };

    return {

        init: function(){

            console.log('Application has started.');
            setupEventListener();
        }
    };

})(budgetController , UIController);

// Start the Application
controller.init();
