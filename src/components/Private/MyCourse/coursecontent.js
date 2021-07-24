import Card from 'react-bootstrap/Card';
import './coursecontent.css';

function CourseContent() {
    return (
        <div className="coursecontent">
            <Card style={{ width: '50rem', maxheight: '100rem' }}>
                <Card.Header as="h3">MongoDb</Card.Header>
                <Card.Body>
                    <Card.Text>
                        MongoDB is one of the most popular open-source NoSQL database written in C++.
                        As of February 2015, MongoDB is the fourth most popular database management system.
                        It was developed by a company 10gen which is now known as MongoDB Inc.
                        MongoDB is a document-oriented database which stores data in JSON-like documents with dynamic schema.
                        It means you can store your records without worrying about the data structure such as the number of fields or types of fields to store values.
                        MongoDB documents are similar to JSON objects.
                        As you know, RDMS stores data in tables format and uses structured query language (SQL) to query database. RDBMS also has pre-defined database schema based on the requirements and a set of rules to define the relationships between fields in tables.
                        But MongoDB stores data in documents in-spite of tables. You can change the structure of records (which is called as documents in MongoDB) simply by adding new fields or deleting existing ones.
                        This ability of MongoDB help you to represent hierarchical relationships, to store arrays, and other more complex structures easily.
                        MongoDB provides high performance, high availability, easy scalability and out-of-the-box replication and auto-sharding.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CourseContent; 