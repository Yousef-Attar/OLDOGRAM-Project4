const mainDiv= document.getElementById("postsContents")
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        commented: "vincey1853",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLike: false,
        id:1
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        commented: "jd1753",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLike: false,
        id:2
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        commented: "guest123",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLike: false,
        id:3
    }
]
function addLike(id) {
    posts.forEach(post => {
        if (post.id === id) {
            post.isLike = !post.isLike;
            post.likes += post.isLike ? 1 : -1;
        }
    });
    renderedHTML();
}
function renderedHTML(){
let rendered = ""
mainDiv.innerHTML=""
posts.forEach(post => {
    rendered+=
    `
            <div class="user-info">
                    <img src="${post.avatar}" 
                    alt="the profile of the user">
                    <div class="user-text">
                        <h1>${post.username}</h1>
                        <h2>${post.location}</h2>
                    </div>
                </div>
                <img src="${post.post}" class="post-image" alt="vangogh picture.">
                <div class="post-body">
                    <div class="icons">
                        <button onclick="addLike(${post.id})">
                            <img src=${!post.isLike? "images/icon-heart.png":"images/heart.png"} alt="the icon to like the post">
                        </button>
                        <button><img src="images/icon-comment.png" alt="the icon to share the post"></button>
                        <button><img src="images/icon-dm.png" alt="the icon to comment the post"></button>                   </div>
                    <p>${post.likes} likes</p>
                    <p>${post.commented} <span>${post.comment}</span></p>
            </div>
    `
})
mainDiv.innerHTML+=rendered
}
renderedHTML();