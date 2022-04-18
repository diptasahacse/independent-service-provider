import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const {blogID} = useParams();
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('../../blogData.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    const blogObj = blogs.find(blog => blog.id == blogID);
    return (
        <Container>
            <div className='my-5'>
                <h2>Q. {blogObj?.name}</h2>
                <p>Answer: {blogObj?.description}</p>
            </div>
        </Container>
    );
};

export default BlogDetails;