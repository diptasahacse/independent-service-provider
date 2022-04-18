import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { id, name, description } = blog;
    const navigate = useNavigate();

    const blogReadMoreHandler = () =>{
        navigate(`/blogs/${id}`)

    }
    return (
        <Col>
            <Card className='h-100 shadow border-0'>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {
                            description.length > 100 ? description.slice(0, 100)+"..." : description
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='border-0 bg-white'>
                    <Button onClick={blogReadMoreHandler} className='btn btn-primary btn-sm'>Read more</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default BlogCard;