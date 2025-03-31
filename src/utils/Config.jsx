const BASE_URL = "http://localhost:8080";

const API_ENDPOINTS = {
    QUIZ: {
        ADD: `${BASE_URL}/quiz/admin/addQuiz`,
        GET_ALL: `${BASE_URL}/quiz/admin/getAllQuiz`,
        GET_BY_ID: (quizId) => `${BASE_URL}/quiz/${quizId}`,
    },
    QUESTION: {
        ADD: `${BASE_URL}/question/admin/addQuestion`,
        GET_BY_QUIZ: (quizId) => `${BASE_URL}/question/admin/getQuestions/${quizId}`,
    },
};

export { BASE_URL, API_ENDPOINTS };