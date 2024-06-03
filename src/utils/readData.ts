import {API_URL} from "./constant";

export const loadJsonFile = (fileName: string) => {
    return fetch(`${API_URL}/data/${fileName}.json`
        ,{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
        .then((res) => res.json())
        .then(function(resultJson) {
            return resultJson
        }).catch((err) => {
            console.log(err);
        }) ;
};

export const loadTextFile = (pathFile: string) => {
    return fetch(`${API_URL}/uploads/${pathFile}`)
        .then((res) => res.text())
        .then(function(result) {
            return result
        }).catch((err) => {
            console.log(err);
        }) ;
};