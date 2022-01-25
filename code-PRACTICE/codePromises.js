const userleft = false
const userWatchingCatMeme = false

function watchTutorialCallback(callback, errorCallback){

    if (userLeft){
        errorCallback({
        name: 'User Left',
        message: ':('
        }) 
    } else if (userWatchingCatMeme) {
        errorCallback({
name: 'User Watching Cat Mene',
message: 'WebDevSimplified ‹ Cat'
    })
    } else {
        callback ("Thumbs up and Subscribe")
    }}

    watchTutorialCallback((message) => {
        console.log('Success: ' + message)
        }, (error) => {
            console.log(error.name + ' ' + error,message)
        })



const recordvideoOne = new Promise((resolve, reject) => {
resolve('Video 1 Recorded') })
const recordvideoTwo = new Promise((resolve, reject) => {
resolve('video 2 Recorded') })
const recordvideoThree = new Promise((resolve, reject) => {
resolve('Video 3 Recorded') })

Promise.race([ recordvideOone, recordvideoTwo, recordvideoThree 
]).then((message) => { console.log(message) })