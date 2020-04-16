import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends React.Component {
  renderDish(dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    if (comments != null)
      return (
        <div className="col-12 col-md-5 m-1" style={{ textAlign: "left" }}>
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map(com => {
              return (
                <li key={com.id}>
                  <p>{com.comment}</p>
                  <p>
                    -- {com.author},{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit"
                    }).format(new Date(Date.parse(com.date)))}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      );
  }
  render() {
    const dish = this.props.dish;

    if (dish == null) {
      return <div></div>;
    }

    const dishItem = this.renderDish(dish);
    const commentItem = this.renderComments(dish.comments);
    return (
      <div className="row">
        {dishItem}
        {commentItem}
      </div>
    );
  }
}

export default DishDetail;
