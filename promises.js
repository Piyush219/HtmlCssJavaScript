const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
]

function getPosts() {
    setTimeout(() => {
        let output = '';

        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`

        });

        document.body.innerHTML = output;
    }, 1000)

}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve()

        }, 2000)

    });

}

createPost({ title: 'Post three', body: 'This is post three' }).then(getPosts)


// Deleting Post

/* function deletePost(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            posts.pop();
           resolve()
        })
        console.log(posts)
    })
}  */

function deletePost() {
    return new Promise((resolve, reject) => {
        if (posts.length > 0) {
            setTimeout(() => {
                resolve();
            }, 1000)
        }
        else {
            reject('Error: Array is empty');

        }
    })
}


// Deleting All array posts

/* function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            while (posts.length != 0) {
                posts.pop()
            }
            const len = posts.length;
            if (len != 0) {
                console.log("Checking")
                resolve();
            }
            else {
                console.log('Error Checking')
                reject('Error: Array is empty')
            }

        }, 3000);
    })
} */

function updateLastActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (var i = 0; i < posts.length; i++) {
                console.log(posts[i].title)
            }
            var today = new Date()
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            console.log(time)
            resolve()
        })
    })
}




//deletePost().then(getPosts).catch(err => console.log(err))

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'Goodbye')

);

Promise.all([promise1, promise2, promise3]).then(values => console.log(values))  // will take the time to show depends on the longest time promise

const timerId = setInterval(() => {
    //console.log('check')
    deletePost().then(() => {
        posts.pop();
        //console.log(posts)
        let lastPost = document.querySelector('body').lastChild;
        lastPost.parentNode.removeChild(lastPost)
    }).catch(err => {
        console.log(err);
        clearInterval(timerId)
    })
}, 2000);

