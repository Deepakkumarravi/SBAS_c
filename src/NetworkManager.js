import axios from 'axios'

export const BASE_DB_URL = 'https://bannari-amman-silks-backend.herokuapp.com/'

export const catchErrorMessage = (msg) => {
    alert(msg)
}

const onCatchError = (error) => {
    return error
}

const requestBodyResponse = (response) => {
    if( response.request.status ) {
        return {status: 'success',responseValue: response}
    }
    else {
        return {status: 'failed',message: JSON.stringify(response)}
    }
    
}

const request = {
    get: (path) => axios.get(`${BASE_DB_URL}${path}`).then(requestBodyResponse).catch(onCatchError),
    post: (path, body = null, header = null) => axios.post(`${BASE_DB_URL}${path}`, body, header).then(requestBodyResponse).catch(onCatchError)
}


const networkManager = {
    getUploadCollections: () => {
        const path = 'uploadsaree/'
        return request.get(path)
    },
    getSareeType: () => {
        const path = 'sareetype/'
        return request.get(path)
    },
    amazonS3_getUploadCollections: () => {
        const path = 'amazonupload/'
        return request.get(path)
    },
    getTrendingCollection: () => {
        const path = 'trending/'
        return request.get(path)
    }
}

export default networkManager

// axios.post('https://bannari-amman-silks-backend.herokuapp.com/pricing/update/' + this.state.updateId , user)