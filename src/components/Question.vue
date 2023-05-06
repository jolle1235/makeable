<template>
    <div>
      <h2>{{ question.question }}</h2>
      <ul>
        <li v-for="(answer, index) in question.answers" :key="index">
          <label>
            <input type="radio" :name="question.id" :value="answer" v-model="selectedAnswer">
            {{ answer }}
          </label>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      question: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        selectedAnswer: ''
      }
    }
  }
  </script>
  