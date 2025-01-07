
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
    
    Question.prototype.checkAnswer = function(answer , callback) {

        var currentScore;
        if (answer === this.current) {

            console.log('Correct answer!!!');
            currentScore = callback(true);

        } else {

            console.log('Wrong Answer,Please try again.');
            currentScore = callback(false);
        }
        this.displayScore(currentScore);
    };
    

    var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes','No'], 0);
    var q2 = new Question('What is the name of this course\'s Learner?', ['Ram','Lakhan','Jay','kamal','Meet'], 4);
    var q3 = new Question('What does best describe coding?', ['Boring','Fun','Hard','Tediuos','Complex'], 1);
    var q4 = new Question('In which direction does the SUN is rise?', ['North','East','South','West'], 1);
    // var q5 = new Question('?', ['','','',''], );
    // var q6 = new Question('?', ['','','',''], );
    // var q7 = new Question('?', ['','','',''], );
    // var q8 = new Question('?', ['','','',''], );
    // var q9 = new Question('?', ['','','',''], );
    // var q10 = new Question('?', ['','','',''], );
    

    var questions = [q1, q2, q3, q4];
    

    function score() {

        var currentScore = 0;
        return function(correct){

            if (correct) {
                return currentScore++;
            } 
        return currentScore;
        }
    };
    var keepScore = score();


    Question.prototype.displayScore = function(score){

        console.log('Your current score is : ' + score)
        console.log('------------------------------------------------------------------------------------');
    }
    

    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer.\n( Write in number)');

        if (answer !== 'exit') {
            
            questions[n].checkAnswer(parseInt(answer) , keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
    
})();
