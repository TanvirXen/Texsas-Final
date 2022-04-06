import Head from "next/head";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import sanity from "../../lib/sanity";
const blog = '*[_type=="brand"]';
function Brands(props){
console.log(props.data)
    return(
        <div>

        </div>
    )
}


export async function getStaticProps(context) {
    const id = context.params.slug
    const karma = `*[_type=="brand" && name=="${id}"]`
    const blogs = await sanity.fetch(karma);
	return {
		props: { data: blogs[0] },
		revalidate: 1000, // In seconds
	};
}
export async function getStaticPaths() {
    const blogs = await sanity.fetch(blog);
	const paths = blogs.map((post) => ({ params: { slug: post.name}}));

	return { paths, fallback: "blocking" };
}

export default Brands;
