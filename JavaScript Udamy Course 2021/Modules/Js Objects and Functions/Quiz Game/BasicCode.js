
(function() {
    function Question(question, answers, current) {
        
        this.question = question;
        this.answers = answers;
        this.current = current;
    };
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
    
        for (let i = 0; i < this.answers.length; i++) {
            console.log(i+ ' : ' + this.answers[i]);   
        }
    };
    
    Question.prototype.checkAnswer = function(answer) {
        if (answer === this.current) {
            console.log('Currect answer!!!');
        } else {
            console.log('Wrong Answer,Please try again.');
        }
    };
    
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',['Yes','No'],0);
    var q2 = new Question('What is the name of this course\'s Learner?',['Ram','Lakhan','Jay','kamal','Meet'],4);
    var q3 = new Question('What does best describe coding?',['Boring','Fun','Hard','Tediuos','Complex'],1);
    var q4 = new Question('In which direction does the SUN is rise?',['North','East','South','West'],1);
    
    var questions = [q1, q2, q3, q4];
    
    var n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    var answer = parseInt(prompt('Please select the correct answer.\n( Write in number form)'));
    
    questions[n].checkAnswer(answer);
    
})();
