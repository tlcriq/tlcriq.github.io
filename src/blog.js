var blogs = [
    {
        title: "Initial testing entry",
        date: "October 10th, 2025",
        description: "This is my blog. This is an example post, so here's a picture of how the site looked a couple days ago.",
        image: "this_website.png",
        imageAlt: "Just the html here",
        slug: "first-entry"
    },
    {
        title: "Second testing entry",
        date: "October 10th, 2025",
        description: "I am creating a typescript function to make these interactable. Here's how the site looks now.",
        image: "website_1.1.png",
        imageAlt: "second page version",
        slug: "second-entry"
    }
];
var blogEntries = document.getElementById('blog-entries');
blogs.forEach(function (blog) {
    var entry = document.createElement('div');
    var image = document.createElement("img");
    var title = document.createElement('h1');
    var description = document.createElement('p');
    var link = document.createElement('a');
    entry.className = "rounded";
    image.src = blog.image;
    image.alt = blog.imageAlt;
    image.className = "blog-image";
    title.textContent = blog.title;
    description.textContent = blog.description;
    link.href = "blogs/" + blog.slug + ".html";
    link.text = "See more";
    entry.appendChild(title);
    entry.appendChild(image);
    entry.appendChild(description);
    entry.appendChild(link);
    blogEntries === null || blogEntries === void 0 ? void 0 : blogEntries.appendChild(entry);
});
