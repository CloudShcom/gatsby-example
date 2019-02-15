import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class Searchpage extends React.Component {
  componentDidMount() {
    const conf = {
      token: "CLOUDSH_TOKEN",
      formId: "#cloudsh",
      resultsId: "#results"
    };

    const load_cloudsh = () => {
      window.cloudsh.inject(conf.formId, conf);
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => load_cloudsh());
    } else {
      load_cloudsh();
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Search" />
        <h1>Search</h1>
        <Link to="/">Go back to the homepage</Link>

        <div>
          <form id="cloudsh" className="search form-inline">
            <div className="form-group">
              <input
                className="form-control"
                id="q"
                placeholder="search"
                type="text"
              />
              <button className="btn btn-primary">Search</button>{" "}
            </div>
          </form>
        </div>

        <div id="results" />
      </Layout>
    );
  }
}
