<template>
    <div>
      <h1>Quiz</h1>
        <div v-if="questions.length === 0">No questions available.</div>
        <div v-else>
          <Question v-for="(question, index) in questions" :key="index" :question="question" />
          <button @click="submitAnswers">Submit answers</button>

        </div>
      </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Question from '@/components/Question.vue';
  
  export default {
      components: {
          Question
      },
      data() {
          return {
              questions: []
          }
      },
      mounted() {
          this.$root.$on('login', (token) => {
              const url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple' + '&token=' + token
              console.log(url)
              axios.get(url)
                  .then(response => {
                      this.questions = response.data.results.map(result => ({
                          id: result.question,
                          question: result.question,
                          answers: [...result.incorrect_answers, result.correct_answer].sort(() => Math.random() - 0.5),
                          correctAnswer: result.correct_answer
                      }));

                  })
                  .catch(error => {
                      console.log(error);
                  });
          });
      },
      methods: {
          submitAnswers() {
              const numCorrect = this.questions.filter(question => question.correctAnswer === question.selectedAnswer).length;
              alert(`You got ${numCorrect} out of ${this.questions.length} questions correct.`);
          }
      }
  }
  </script>