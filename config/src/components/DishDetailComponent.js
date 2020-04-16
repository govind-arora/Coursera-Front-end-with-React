import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <Card className="col-12 col-md-5 m-1">
          <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
          <CardBody>
            <CardTitle>{this.props.dish.name}</CardTitle>
            <CardText>{this.props.dish.description}</CardText>
          </CardBody>
        </Card>
        <Card className="col-12 col-md-5 m-1">
          <CardBody>
            <CardTitle>Comments</CardTitle>
            <CardText>
              {this.props.dish.comments.map(com => {
                return (
                  <div>
                    <p>{com.comment}</p>
                    <p>
                      -- {com.author}, {com.date}
                    </p>
                  </div>
                );
              })}
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default DishDetail;
