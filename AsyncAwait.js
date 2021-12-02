console.log('Person1: Shows ticket');
console.log('Person2: Shows ticket');

//------------------With Promises--------------------

const promiseWifeBringingTicks = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('ticket');
    },3000)
});

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log(`wife: i have the tics`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve, reject) => resolve(`${t} popcorn`));

});

const getButter = getPopcorn.then((t) => {
    console.log('husband: I got some popcorn')
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');
    return new Promise((resolve, reject) => resolve(`${t} butter`));

})

const getColddrinks = getButter.then((t) =>{
    console.log('husband: Brining butter and also cold drink for you')
    console.log('wife: Ohh thank you so much :)')
    return new Promise((resolve, reject) => resolve(`${t} cold drink`))
})

getColddrinks.then((t) => console.log(t))

console.log('person4: shows ticket');
console.log('person5: shows ticket');


//---------------------With Async and Await-------------------

const preMovie = async () => {



    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000)
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`))

    const addButter = new Promise((resolve, reject) => resolve(`butter`))

    const getColddrinks = new Promise((resolve, reject) => resolve(`cold drinks`))

    let ticket = await promiseWifeBringingTicks;
    
    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: I got some ${popcorn}`)
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    let butter = await addButter;

    console.log(`husband: I got some ${butter} on popcorn`);
    console.log(`husband: Anything else?`)
    console.log(`wife: Cold Drink Also xD`)

    let coldDrink = await getColddrinks;

    console.log(`husband: Now I got the ${coldDrink} also my dear`)
    console.log(`wife: Oh Thank you so much :)`)


    return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`))

console.log('person4: shows ticket');
console.log('person5: shows ticket');


//-------------------CreatePost and DeletePost with Async and Await


function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} : ${post.body}</li>`
        });
        //console.log(output)
        document.body.innerHTML = output;
    }, 1000);
}


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            resolve();

        }, 1000)

    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            while (posts.length != 0) {
                posts.pop()
                let lastPost = document.querySelector('body').lastChild;
                lastPost.parentNode.removeChild(lastPost)
            }

        }, 3000);
    })
}

async function create() {

    await createPost({ title: 'Post Three', body: 'This is post three' });

    getPosts();

}

create();

async function delPost() {
    await deletePost();
    getPosts();
}

delPost();
