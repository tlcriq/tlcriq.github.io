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
        description: "I am currently creating a typescript function for tis to eventually be used. Here's my current headshot.",
        image: "Tate2.jpeg",
        imageAlt: "Gorgeous Guy",
        slug: "https://tlcriq.github.io/"
    }
]

const blogEntries = document.getElementById('blog-entries')

blogs.forEach((blog) => {

    const entry = document.createElement('div');
    const image = document.createElement("img");
    const title = document.createElement('h1');
    const description = document.createElement('p');

    image.src = blog.image;
    image.alt = blog.imageAlt;

    title.textContent = blog.title;


    entry.appendChild(title)
    entry.appendChild(image)
    entry.appendChild(description)
    blogEntries?.appendChild(entry)

    const innterhtml = entry.innerHTML = "yo";
    console.log(entry)
})