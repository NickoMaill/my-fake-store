export const getRequest = async (path: string, params?: {}, headers?: {}) => {
    let formatParams: string;

    if (params) {
        formatParams = '?';
        for (const param in params) {
            formatParams += JSON.stringify(param) + params[param];
        }
    }

    const header: HeadersInit = new Headers(headers);
    const route: string = `https://fakestoreapi.com${path}${formatParams}`;
    const response = await fetch(route, {
        method: 'GET',
        headers: header,
    });
    return response.json();
};

// class ApiManager {

//     public async postRequest(path: string, headers?: {}, params?: {}) {
//         let formatParams: string;

//         if (params) {
//             formatParams = "?"
//             for(const param in params) {
//                 formatParams += JSON.stringify(param) + params[param]
//             }
//         }

//     }

// }

// export default new ApiManager();
