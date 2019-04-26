import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/resume.css"
import Obfuscate from "react-obfuscate"
import Avatar from "../images/avatar.jpg"
import Helmet from "react-helmet"
import navairIcon from "../images/NAVAIR.jpg"

const ResumePage = () => (
  <Layout>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css"
      />
      <script src="https://unpkg.com/bulma-modal-fx/dist/js/modal-fx.min.js" />
    </Helmet>
    <SEO title="Resume" />
    <div className="container cv pad-t-40 no-pad-lr">
      {/* Left Column  */}
      <div className="col-md-4 matchHeight no-pad-lr gray">
        <div className="col-md-12 avatar">
          <img src={Avatar} />
        </div>
        <div className="col-md-12 bio pad-b-20">
          <div className="center">
            <h1 className="name">Darin Levesque</h1>
            <hr />
            <h2>Test Resource Manager</h2>
          </div>
          <div className="about m-t-50">
            <h3>About</h3>
            <div className="pad-l-30">
              <p>
                Currently providing robust business intelligence with Qlik Sense
                which enables real-time, data-driven decision making capability
                enterprise-wide. Very technically oriented and able to adapt to
                fast-paced environments. Holds an active secret clearance, is
                Defense Acquisition University Level III certified in Program
                Management. A military veteran with ten years of Marine Corps
                aviation service.
              </p>
              <p>
                Looking to grow further into the technological field and utilize
                entrepreneurial ideologies to spark rapid innovation.{" "}
              </p>
            </div>
          </div>
          <div className="contact m-t-30">
            <h3>Contact</h3>
            <div className="pad-l-30">
              <p>
                <span
                  className="glyphicon glyphicon-earphone circle"
                  aria-hidden="true"
                />{" "}
                <Obfuscate tel="603-326-8667" />
              </p>

              <p className="m-t-20">
                <span
                  className="glyphicon glyphicon-envelope circle"
                  aria-hidden="true"
                />{" "}
                <Obfuscate email="darin@darinlevesque.com" />
              </p>

              <p className="m-t-20">
                <span
                  className="glyphicon glyphicon-link circle"
                  aria-hidden="true"
                />{" "}
                https://darinlevesque.com
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Left Column  */}

      {/* Right Column  */}
      <div className="col-md-8 matchHeight no-pad-r">
        {/* Start Experience  */}
        <div className="col-md-12 m-t-20">
          <div className="experience">
            <p>
              <span className="glyphicon glyphicon-briefcase" />
              <span className="h3"> EXPERIENCE</span>
            </p>
            <hr />
            {/* Row 1  */}
            <div className="row m-b-10">
              <div className="col-md-4">
                <p className="date">
                  <b>NAVAIR</b> <br />
                  <i>Sep 2015 - Present</i>
                </p>
              </div>
              <div className="col-md-7 col-md-offset-1">
                <p className="title">Test Resource Manager</p>
                <p>
                  Uses Qlik Sense to build enterprise data visualizations which
                  are used to make data-driven decisions, predict future
                  performance and accurately depict historical data.
                </p>
                <span
                  className="button is-link modal-button"
                  data-target="modal-card"
                >
                  More...
                </span>
              </div>
            </div>
            {/* Row 2  */}
            <div className="row m-b-10">
              <div className="col-md-4">
                <p className="date">
                  <b>Jahn Corporation</b> <br />
                  <i>Feb 2014 - Nov 2017</i>
                </p>
              </div>
              <div className="col-md-7 col-md-offset-1">
                <p className="title">CH-53K Flight Scheduler Lead</p>
                <p>
                  Manage Integrated Test Team’s aircrew currency and proficiency
                  for proper scheduling. Ensure all documentation required to
                  safely and effectively test is available to the flight test
                  engineers and pilots. Plan, coordinate, monitor and report
                  test execution data weekly to populate NAVAIR standard metrics
                  deck for program schedule tracking of ground and flight test
                  activities. Coordinate with ITT Leadership to develop and
                  refine CH-53K specific metrics with a focus to the flight test
                  portion of the program. Publish weekly/monthly reports to
                  leadership for efficient planning and coordination. Complete
                  programmatic forecasting drills on test resources and
                  scheduling for ITT leadership upon request for presentation to
                  the Assistant Program Manager, Test and Evaluation
                  (APMT&amp;E) and the CH-53K Integrated Product Team.
                </p>
              </div>
            </div>
            {/* Row 3  */}
            <div className="row m-b-10">
              <div className="col-md-4">
                <p className="date">
                  <b>United States Marine Corps</b> <br />
                  <i>Jan 2004 - Feb 2014</i>
                </p>
              </div>
              <div className="col-md-7 col-md-offset-1">
                <p className="title">MV-22 Crew Chief</p>
                <p>
                  Provided flight scheduling inputs, served as project officer
                  on various aircrew and ground related tests. Participated in
                  test plan development, execution, as well as deficiency and
                  final report writing.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Experience  */}

        {/* Start Education  */}
        <div className="col-md-12">
          <div className="education">
            <p>
              <span className="glyphicon glyphicon-education" />
              <span className="h3"> EDUCATION</span>
            </p>
            <hr />
            {/* Row 1  */}
            <div className="row m-b-10">
              <div className="col-md-4">
                <p className="date">
                  <b>Technological Entrepreneurship &amp; Management</b> <br />
                  <i>2017-2020</i>
                </p>
              </div>
              <div className="col-md-7 col-md-offset-1">
                <p className="title">Arizona State University</p>
                <p>
                  The BS program in technological entrepreneurship and
                  management advances the knowledge and practice of
                  entrepreneurship and innovation. To enhance students'
                  understanding of business fundamentals, the Fulton Schools of
                  Engineering have partnered with the W. P. Carey School of
                  Business to offer a degree that is jointly conferred by both
                  colleges. The degree program prepares students to address
                  social and corporate issues to impact and change the world;
                  create, launch and improve technology-based products, services
                  and ventures; and identify and solve open-ended problems using
                  engineering and technology approaches.
                </p>
              </div>
            </div>
            {/* Row 2  */}
            <div className="row m-b-10">
              <div className="col-md-4">
                <p className="date">
                  <b>Program Management lvl III Certification</b> <br />
                  <i>2015 - 2017</i>
                </p>
              </div>
              <div className="col-md-7 col-md-offset-1">
                <p className="title">Defense Acquisition University</p>
                <p>
                  Organizes and leads DoD professional, administrative, and
                  management support service contracting as relates to
                  developing clearly stated and actionable requirements
                  packages. Oversees transformation integration, planning and
                  performance, and investment management as applies to the
                  acquisition community, program office(s), and system(s) under
                  development.
                </p>
              </div>
            </div>
            {/* Row 3  */}
            <div className="row m-b-10">
              <div className="col-md-4">
                <p className="date">
                  <b>High School</b> <br />
                  <i>1998-2002</i>
                </p>
              </div>
              <div className="col-md-7 col-md-offset-1">
                <p className="title">Brewster Academy</p>
                <p>
                  Brewster Academy's inovative approach to teaching emotional
                  intelligence in addition to the expected curriculum gives
                  students better coping skills to bring to the workforce.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Education  */}

        {/* Start Work Skills  */}
        <div className="col-md-12">
          <div className="work-skills">
            <p>
              <span
                className="glyphicon glyphicon-list-alt"
                aria-hidden="true"
              />
              <span className="h3"> Work Skills</span>
            </p>
            <hr />
            {/* Start Skills Left  */}
            <div className="col-md-6 no-pad-l">
              <dl className="skills">
                <dt>Skill 1</dt>
                <dd>90</dd>
                <dt>Skill 2</dt>
                <dd>86</dd>
              </dl>
            </div>
            {/* End Skills  */}

            {/* Start Skills Right  */}
            <div className="col-md-6 no-pad-r mobile-no-pad">
              <dl className="skills">
                <dt>Skill 3</dt>
                <dd>56</dd>
                <dt>Skill 4</dt>
                <dd>28</dd>
              </dl>
            </div>
            {/* End Skills  */}
          </div>
        </div>
        {/* End Work Skills  */}

        {/* Start Personal Skills  */}
        <div className="col-md-12 m-t-20">
          <div className="personal-skills">
            <p>
              <span className="glyphicon glyphicon-user" aria-hidden="true" />
              <span className="h3"> Personal Skills</span>
            </p>
            <hr />
            {/* Start Skills Left  */}
            <div className="col-md-6 no-pad-l">
              <dl className="skills">
                <dt>Skill 1</dt>
                <dd>75</dd>
                <dt>Skill 2</dt>
                <dd>63</dd>
              </dl>
            </div>
            {/* End Skills  */}

            {/* Start Skills Right  */}
            <div className="col-md-6 no-pad-r mobile-no-pad">
              <dl className="skills">
                <dt>Skill 3</dt>
                <dd>94</dd>
                <dt>Skill 4</dt>
                <dd>80</dd>
              </dl>
            </div>
            {/* End Skills  */}
          </div>
        </div>
        {/* End Personal Skills  */}
      </div>
      {/* End Right Column  */}
    </div>
    {/*Begin Modals */}
    <div id="modal-card" className="modal modal-fx-3dSlit">
      <div className="modal-background" />
      <div className="modal-content is-tiny">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://source.unsplash.com/6Ticnhs1AG0"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={navairIcon} alt="Naval Air Systems Command" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">Test Resource Manager</p>
                <p className="subtitle is-6">
                  Naval Air Warfare Center Aviation Division
                </p>
              </div>
            </div>
            <div className="content">
              The <span className="tooltip" data-tooltip="Naval Air Systems Command">NAVAIR</span> provides material support
              for aircraft and airborne weapon systems for the United States
              Navy. It is one of the various Navy systems commands, and was
              established in 1966 as the successor to the Navy's Bureau of Naval
              Weapons. NAVAIR is headquartered in Patuxent River, Md., with
              military and civilian personnel stationed at eight locations
              across the continental United States and one site overseas.
              NAVAIR's mission is to provide full life-cycle support of naval
              aviation aircraft, weapons and systems operated by Sailors and
              Marines. This support includes research, design, development and
              systems engineering, acquisition, test and evaluation, training
              facilities and equipment, repair and modification, and in-service
              engineering and logistics support.
              <a>@bulmaio</a>.<a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
              <time dateTime="2018-02-02">12:45 AM - 20 June 2018</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ResumePage
