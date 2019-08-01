


export default {


    /**
     * ajax //cb promise es7 async await
     * @param url
     * @param cb
     */
    get(url,cb){
        fetch(url)
            .then(response=>{
                response.json().then(data=>{
                    cb(data)
                })
            })
    }
}
