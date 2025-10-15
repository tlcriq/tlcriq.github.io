/*
* Defines the new type Blog to represent one  entry on the Blog page.
* Each entry can include a title, date, description, image, imageAlt, & slug
*/
type Blog = {
    title: string
    date: string
    description: string
    image: string
    imageAlt: string
    slug: string
}

const blogs: Blog[] = [
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
]


const blogEntries = document.getElementById('blog-entries')

blogs.forEach((blog) => {

    const entry = document.createElement('div');
    const image = document.createElement("img");
    const title = document.createElement('h1');
    const description = document.createElement('p');
    const link = document.createElement('a');

    entry.className = "rounded"

    image.src = blog.image;
    image.alt = blog.imageAlt;
    image.className = "blog-image"

    title.textContent = blog.title;
    description.textContent = blog.description
    link.href = "blogs/" + blog.slug + ".html"
    link.text = "See more"

    entry.appendChild(title)
    entry.appendChild(image)
    entry.appendChild(description)
    entry.appendChild(link)
    blogEntries?.appendChild(entry)
})