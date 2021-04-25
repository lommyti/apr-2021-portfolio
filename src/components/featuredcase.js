import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../components/tooltip.css"

import { StaticImage } from "gatsby-plugin-image"

import Mail from "../images/email_white_24dp.svg"
import Indicator from "../images/indicator.svg"
import PhoneFrame from "../images/phone frame.png"

class FeaturedCase extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mouseX: null,
      mouseY: null,
      tooltips: document.querySelectorAll(".tooltip"),
      gif: this.props.open,
      gifOpacity: 1,
    }
  }
  componentDidMount() {
    document.querySelectorAll(".tooltip").forEach((item, i) => {
      item.addEventListener("mousemove", this.mouseMoveHandler)
    })
    document.querySelectorAll(".recentcase-hero").forEach((item, i) => {
      item.addEventListener("mouseover", this.mouseOverHandler)
      item.addEventListener("mouseleave", this.mouseLeaveHandler)
    })
  }

  componentWillUnmount() {
    document.querySelectorAll(".tooltip").forEach((item, i) => {
      item.removeEventListener("mousemove", this.mouseMoveHandler)
    })
    document.querySelectorAll(".recentcase-hero").forEach((item, i) => {
      item.removeEventListener("mouseover", this.mouseOverHandler)
      item.removeEventListener("mouseleave", this.mouseLeaveHandler)
    })
  }

  mouseMoveHandler = e => {
    this.setState({
      mouseX: e.offsetX + 15,
      mouseY: e.offsetY + 15,
    })
  }

  mouseOverHandler = e => {
    this.setState({
      gif: this.props.gif,
      gifOpacity: 1,
    })
  }

  mouseLeaveHandler = e => {
    this.setState({
      gif: this.props.open,
      gifOpacity: 0,
    })
  }

  render() {
    return (
      <>
        <div
          style={{
            margin: `0 auto`,
          }}
          className="recentcase"
        >
          <div className="recentcase-text">
            <div className="time">
              {" "}
              {this.props.start}&nbsp;-&nbsp;{this.props.end}
            </div>
            <h4>{this.props.company}</h4>
            {this.props.description}

            <br />
            <div class="button">
              <a href="mailto:hello@thomast.li" className="tooltip">
                <img src={Mail} />
                Request case study
                <div
                  className="tooltiptext"
                  style={{
                    left: this.state.mouseX,
                    top: this.state.mouseY,
                  }}
                >
                  Email hello@thomast.li for access
                </div>
              </a>
            </div>
          </div>
          <div className="recentcase-hero">
            <img src={this.props.hero} className="bg" />
            <div className="hero-inside-container">
              <div
                className="gif"
                style={{
                  backgroundImage: "url(" + this.props.open + ")",
                }}
              />
              <div
                className="gif2"
                style={{
                  opacity: this.state.gifOpacity,
                  backgroundImage:
                    "url(" + this.state.gif + "?ts=" + Date.now() + ")",
                }}
              />
            </div>

            <div className="frame">
              <img src={PhoneFrame} />
            </div>

            <img src={Indicator} className="indicator" />
          </div>
        </div>
      </>
    )
  }
}

FeaturedCase.propTypes = {
  company: PropTypes.string,
}

export default FeaturedCase
