var blogs = [
    {
        title: "Initial testing entry",
        date: "October 10th, 2025",
        description: "This is my blog. This is an example post, so here's a picture of how the site looked a couple days ago.",
        image: "this_website.png",
        imageAlt: "Just the html here",
        slug: "blog-1"
    },
    {
        title: "Second testing entry",
        date: "October 10th, 2025",
        description: "I am creating a typescript function to make these interactable. I also need a picture for this, so here's my current headshot.",
        image: "Tate2.jpeg",
        imageAlt: "Gorgeous Guy",
        slug: "blog-2"
    }
];
var blogEntries = document.getElementById('blog-entries');
blogs.forEach(function (blog) {
    var link = document.createElement('a');
    var entry = document.createElement('div');
    var image = document.createElement("img");
    var title = document.createElement('h1');
    var description = document.createElement('p');
    link.href = blog.slug;
    entry.className = "rounded";
    image.src = blog.image;
    image.alt = blog.imageAlt;
    image.className = "blog-image";
    title.textContent = blog.title;
    description.textContent = blog.description;
    entry.appendChild(title);
    entry.appendChild(image);
    entry.appendChild(description);
    link.appendChild(entry);
    blogEntries === null || blogEntries === void 0 ? void 0 : blogEntries.appendChild(link);
});
