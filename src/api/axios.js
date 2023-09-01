import axios from "axios";
// axios 모듈 설정
const instance = axios.create({
    baseURL: "your_api_base_url_here",
});

// 요청 인터셉터
instance.interceptors.request.use(
    (config) => {
        // 세션 ID를 체크하고 추가할 수 있는 로직을 여기에 구현하세요
        // 예를 들어, 세션 ID를 HTTP 헤더에 추가하는 방법
        // config.headers.Authorization = `Bearer ${yourSessionId}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터
instance.interceptors.response.use(
    (response) => {
        // 세션 ID를 체크하거나 응답을 가공할 수 있는 로직을 여기에 구현하세요
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export const callAPI = (method, param, url) => {
    switch (method) {
        case 'get' : {
            axios.get(url, param).then((response) => {
                console.log('success:::', response)
            }).catch((error) => {
                console.log('error:::', error)
            }).finally(() => {
                console.log()
            })
            const result = '';
            return result
        }
        case 'post' : {
            axios.post('')
            const result = '';
            return result
        }
    }
}