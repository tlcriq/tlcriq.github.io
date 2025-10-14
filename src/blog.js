var blogs = [
    {
        title: "Initial entry",
        date: "October 10th, 2025",
        description: "This is my blog. This is an example post, so here's a picture of how the site looked a couple days ago.",
        image: "this_website.png",
        imageAlt: "Just the html here",
        slug: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: "Initial entry pt. 2",
        date: "October 10th, 2025",
        description: "I am currently creating a typescript function for this to eventually be used. Here's my current headshot.",
        image: "Tate2.jpeg",
        imageAlt: "Gorgeous Guy",
        slug: "https://tlcriq.github.io/"
    }
];
var blogEntries = document.getElementById('blog-entries');
blogs.forEach(function (blog) {
    var entry = document.createElement('div');
    var image = document.createElement("img");
    var title = document.createElement('h1');
    var description = document.createElement('p');
    image.src = blog.image;
    image.alt = blog.imageAlt;
    title.textContent = blog.title;
    description.textContent = blog.description;
    entry.appendChild(title);
    entry.appendChild(image);
    entry.appendChild(description);
    blogEntries === null || blogEntries === void 0 ? void 0 : blogEntries.appendChild(entry);
    var innterhtml = entry.innerHTML = "yo";
    console.log(entry);
});
