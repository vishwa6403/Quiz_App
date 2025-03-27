import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        quizzes: [],
        questions: [],
        users: [],
        results: [],
    },
    reducers: {
        // Add a new quiz
        addQuiz: (state, action) => {
            state.quizzes.push(action.payload);
            // state.questions[action.payload.id] = []; // Initialize empty questions list
        },
        // Remove a quiz
        removeQuiz: (state, action) => {
            const quizId = action.payload;
            state.quizzes = state.quizzes.filter((quiz) => quiz.id !== quizId);
            // delete state.questions[quizId]; // Remove related questions
        },
        // Add a question to a specific quiz
        addQuestion: (state, action) => {
            // console.log("🚀 ~ action.payload:", action.payload);
            state.questions.push(action.payload);
        },
        // Remove a question from a specific quiz
        removeQuestion: (state, action) => {
            const { quizId, questionIndex } = action.payload;
            state.questions[quizId] = state.questions[quizId].filter(
                (_, index) => index !== questionIndex
            );
        },
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        storeResult: (state, action) => {
            state.results = action.payload; // Store submitted answers
        },
    }
});

export const { addQuiz, removeQuiz, addQuestion, removeQuestion, storeResult } = adminSlice.actions;

export default adminSlice.reducer;