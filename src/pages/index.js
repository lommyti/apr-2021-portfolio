import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import RecentCase from "../components/recentcase"
import FeaturedCase from "../components/featuredcase"

import SEO from "../components/seo"

import "../components/custom.css"

import Atlassian from "../images/atlassian.png"
import AtlassianGif from "../images/ccmobile.gif"
import AtlassianGifOpen from "../images/ccmobile1.png"

import Titan from "../images/titan.png"
import About from "../images/emoji_emotions_white_24dp.svg"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    // Don't do this!
    this.state = {
      mousePos: null,
      drag: false,
      sheetOpen: false,
    }
  }
  mousePos = null
  drag = false
  sheetOpen = false

  componentDidMount() {
    window.addEventListener("scroll", this.toggleBodyClass)
    document
      .querySelector(".sheet-header")
      .addEventListener("mousedown", this.mouseDownHandler)
    window.addEventListener("mousemove", this.mouseMoveHandler)
    window.addEventListener("mouseup", this.mouseUpHandler)

    document
      .querySelector(".name-highlight")
      .addEventListener("mouseover", this.mouseOverHandler)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleBodyClass)
    document
      .querySelector(".sheet-header")
      .removeEventListener("mousedown", this.mouseDownHandler)
    window.removeEventListener("mousemove", this.mouseMoveHandler)
    window.removeEventListener("mouseup", this.mouseUpHandler)

    document
      .querySelector(".name-highlight")
      .removeEventListener("mouseover", this.mouseOverHandler)
  }

  mouseDownHandler = e => {
    this.mousePos = e.clientY
    this.drag = true
    e.preventDefault()
  }

  mouseUpHandler = e => {
    this.drag = false
    if (this.drag === true) e.preventDefault()
  }

  mouseMoveHandler = e => {
    if (this.drag === true && e.clientY + 8 < this.mousePos) {
      document.querySelector(".sheet").classList.add("showChildDiv")
      this.sheetOpen = true
    } else if (
      this.drag === true &&
      e.clientY > this.mousePos &&
      this.sheetOpen === true
    ) {
      document.querySelector(".sheet").classList.remove("showChildDiv")
      this.sheetOpen = false
    }
  }

  toggleBodyClass = () => {
    if (this.sheetOpen === true && window.scrollY < 0) {
    } else if (window.scrollY < 3) {
      document.querySelector(".sheet").classList.remove("showChildDiv")
      this.sheetOpen = false
    } else {
      document.querySelector(".sheet").classList.add("showChildDiv")
      this.sheetOpen = true
    }
  }

  mouseOverHandler = () => {}

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Tommy Li - Product Designer</h1>

        <div className="intro">
          <div className="name-highlight">
            <Link to="/about">
              <div class="name-box">
                <div className="name-img">
                  <StaticImage
                    src="../images/me.jpg"
                    width={48}
                    alt=""
                    style={{
                      marginRight: "10px",
                      borderRadius: "100%",
                    }}
                  />
                </div>
                Tommy
              </div>
            </Link>
          </div>
          is a product designer at Atlassian based in San Francisco.{" "}
        </div>

        <div className="sheet">
          <div className="sheet-header">
            <div className="pull-tab" />
          </div>
          <div className="sheet-body">
            <h3>Recent work</h3>
            <RecentCase
              company="Atlassian"
              start="jul 2020"
              end="present"
              description="Currently building teamwork from anywhere (yes, even the couch! 🛋)  with the Confluence Cloud mobile experience team.
"
              hero={Atlassian}
              gif={AtlassianGif}
              open={AtlassianGifOpen}
            ></RecentCase>
            <RecentCase
              company="Titan"
              start="2020"
              end="present"
              description="Titan brings managed portfolios to the masses; it’s more like Robin Hood than, well, Robinhood. "
              hero={Titan}
            ></RecentCase>
            <RecentCase
              company="Wish"
              start="JAN 2020"
              end="MAR 2020"
              description="Wish"
              hero={Titan}
            ></RecentCase>
            <h3>Prev.</h3>
            <h5>Wish / Groupon / Braintree / Northwestern University</h5>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
