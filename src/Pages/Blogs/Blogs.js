import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useBlogs from '../../hooks/useBlogs';
import BlogCard from './BlogCard/BlogCard';

const Blogs = () => {
    const [blogs, setBlogs] = useBlogs();
    return (
        <Container className='py-5'>
            <div>
                <h2 className='text-primary'>Blogs</h2>
            </div>
            <Row sm={1} md={2} lg={3}>
                {
                    blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }

            </Row>
        </Container>
    );
};

export default Blogs;