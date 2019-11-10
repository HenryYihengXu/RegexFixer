import React, { Component } from "react";
import pe from "../positive_examples.png";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { CardHeader } from "@material-ui/core";
import { blue, grey, red } from "@material-ui/core/colors";

class ExpressionCard extends Component {
  // handleChange = ({ currentTarget: input }) => {
  //   this.props.handleChange(input.textContent);
  // };
  handleChange = ({ currentTarget: input }) => {
    this.props.handleChange(input.value);
  };
  render() {
    return (
      <div>
        <Card style={{ maxWidth: 1205 }}>
          <CardContent
            style={{
              backgroundColor: this.props.color[this.props.darkness],
              height: 50
            }}
          >
            <h6 style={{ color: grey[50] }}>{this.props.name}</h6>
          </CardContent>
          <CardActions>
            {/* <div
              style="border:1px solid black;"
              contenteditable="true"
              style={{
                width: 1195,
                textAlign: "left",
                border: "1px solid lightblue"
              }}
              onInput={this.handleChange}
            >
              {this.props.regex}
            </div> */}

            <input
              style={{
                width: 700
              }}
              id={"regex"}
              type="text"
              name={"regex"}
              placeholder={this.props.name}
              onChange={this.handleChange}
              value={this.props.value}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default ExpressionCard;