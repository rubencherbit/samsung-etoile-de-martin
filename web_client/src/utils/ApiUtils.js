var ApiUtils = {
    checkStatus: function (response) {
        if (response.ok) {
            return response;
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }
};

export default ApiUtils;