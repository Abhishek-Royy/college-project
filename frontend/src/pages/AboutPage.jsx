import React from "react";
import "../stylesheets/aboutPage.css";
import Footer from "./Footer";

const AboutPage = () => {
  return (
    <>
      <main>
        <div className="about-container">
          <div className="about-text">
            <h1>Development History</h1>
            <p>
              I started college last year, and I was using OneNote to take notes
              for my CS classes. It was pretty awkward to put code examples into
              the notes. I'd have to either paste code in and just change the
              font to Consolas (which would freeze the program for like 6
              seconds) or paste in a screenshot if I wanted to get some color in
              there.
              <br />
              <br />
              <br />
              So I decided to try to make my own note-taking software to use
              that would make it easy to put code in, and make it look nice.
              <br />
              <br />
              <br />
              <br />
              At first, I decided to make the program in C# with WinForms,
              because C# is the language that I'm most familiar with and I
              assumed that winforms was cross-platform (I was very wrong).
            </p>
          </div>
          <div className="about-guid">
            <a href="https://codepen.io/pen/" target="_blank">
              <button className="btn-submit">Try Your Self</button>
            </a>
            <button className="btn-submit">Notes</button>
          </div>
          <div className="about-text">
            <p>
              <br />
              <br />
              <br />
              This is what came out of it (looks like garbage). The idea was
              that you would type your notes into the textbox on the left, and
              it would render that into an HTML page with the code highlighted
              on the right.
              <br />
              <br />
              <br />
              This version of the program would make a whole folder for each
              notebook, a subfolder for each section, and finally a text file
              for each page. That was an incredibly stupid idea, because you
              couldn't have certain characters that aren't allowed in directory
              names, and you couldn't have two of anything with the same name.
              <br />
              <br />
              <br />
              So then I rewrote the whole thing to make the
              notebooks/sections/pages into C# classes that were serialized to 1
              file, which was a lot better.
              <br />
              <br />
              This actually worked for a few weeks for taking notes in class,
              even though the two-panel design was a really stupid and ugly
              idea.
              <br />
              <br />
              <br />
              A few weeks later I decided that the program was utter trash, and
              decided to rewrite it a second time. That was when I realized that
              winforms was not cross platform at all. So I spent about 3 days
              searching the internet for a cross-platform GUI library type
              thing. I also wanted to make it a 'WYSIWYG' editor because having
              a separate panel for text and another panel for the rendered page
              is really ugly.
              <br />
              <br />I finally settled on Electron, and after a few days of
              working on the project I was already amazed at how much better it
              looks than anything that I could ever make in WinForms.
            </p>
          </div>
          <div className="others-platfrom">
            <h1>Other's Learning Platform</h1>
            <div className="p-contain">
              <div className="platform-link">
                <a href="https://www.geeksforgeeks.org/" target="_blank">
                  <img
                    src="/platfrom/gfg.png"
                    alt="gfg"
                    width="100"
                    height="80"
                  />
                </a>
                <a href="https://www.w3schools.com/" target="_blank">
                  <img
                    src="/platfrom/w3.png"
                    alt="w3"
                    width="100"
                    height="80"
                  />
                </a>
                <a href="https://leetcode.com/" target="_blank">
                  <img
                    src="/platfrom/leetcode.webp"
                    alt="leetcode"
                    width="100"
                    height="80"
                  />
                </a>
                <a href="https://stackoverflow.com/" target="_blank">
                  <img
                    src="/platfrom/stackof.png"
                    alt="stack"
                    width="100"
                    height="80"
                  />
                </a>
              </div>
              <div className="about-img">
                <img src="/images/about.jpg" alt="" height="440" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
