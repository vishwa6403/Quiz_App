import { API_ENDPOINTS } from "../utils/Config";

const makeApiRequest = async (url, method, body = null) => {
    const requestOptions = {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : null,
    };

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("API call error:", error);
        throw error;
    }
};

// Function to add a quiz
export const addQuizApi = async (quizName, questionLimit) => {
    const url = `${API_ENDPOINTS.QUIZ.ADD}?quizName=${quizName}&questionLimit=${questionLimit}`;
    return await makeApiRequest(url, "POST");
};

export const getAllQuizzes = async () => {
    return await makeApiRequest(API_ENDPOINTS.QUIZ.GET_ALL, "GET");
};

export const getQuizById = async (quizId) => {
    return await makeApiRequest(API_ENDPOINTS.QUIZ.GET_BY_ID(quizId), "GET");
};