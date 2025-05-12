import { Card, Col, Row, Rate } from 'antd';

const reviews = [
  { name: 'Sarah J.', review: 'I love my new terrarium! The plants are thriving, and the design is stunning.' },
  { name: 'Michael C.', review: 'The membership benefits are amazing. The app helps me keep my plants healthy!' },
  { name: 'Emily D.', review: 'Great customer service and fast delivery. My terrarium is perfect!' },
];

const CustomerReviews: React.FC = () => {
  return (
    <div className="py-12 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Đánh Giá Của Khách Hàng</h2>
      <Row gutter={[16, 16]}>
        {reviews.map((review, index) => (
          <Col xs={24} md={8} key={index}>
            <Card>
              <Rate disabled defaultValue={5} />
              <p className="mt-4">{review.review}</p>
              <p className="mt-2 font-semibold">{review.name}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CustomerReviews;