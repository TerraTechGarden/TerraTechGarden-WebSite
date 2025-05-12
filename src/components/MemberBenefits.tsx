import { Card, Col, Row } from 'antd';

const benefits = [
  { title: '24/7 Plant Care Assistant', description: 'Get instant answers to your plant care queries.' },
  { title: 'Design Your Perfect Setup', description: 'Create custom terrarium layouts with our app.' },
  { title: 'Smart Plant Health Tracking', description: 'Monitor your terrarium’s conditions and get alerts.' },
];

const MemberBenefits: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Quyền Lợi Thành Viên</h2>
      <div className="container mx-auto">
        <Row gutter={[16, 16]}>
          {benefits.map((benefit, index) => (
            <Col xs={24} md={8} key={index}>
              <Card>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2">{benefit.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MemberBenefits;