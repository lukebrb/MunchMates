import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/andrew.jpg'
import pic03 from '../assets/images/david.jpg'
import pic04 from '../assets/images/hayden.jpg'
import luke from '../assets/images/Lukas.jpg'
import pic06 from '../assets/images/kirubel.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic10 from '../assets/images/pic10.jpg'
import prototypeGif from '../assets/images/full-walkthrough.gif'
import prototypeVideo from '../assets/images/Full-walkthrough.mp4'
import prototype from '../assets/images/prototype.jpg'

const Index = props => (
  <Layout>
    <Helmet>
      <title>Munchmates</title>
      <meta name="description" content="Munchmates | Landing" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>The Social Setting</h2>
          </header>
          <p>
            Within the UCSD campus, we noticed that a large number of students
            ate by themselves while taking up entire tables meant to seat 4 or
            more people. While eating, students do not socialize with anyone
            unless they see a passerby they are familiar with. However, a
            majority of the time these students tend to eat in isolation. They
            eat quietly to themselves while studying for their classes or
            scrolling through their mobile phones. We realized that these
            students must have their own reasons for eating alone whether it be
            because they are in a hurry, they couldn’t find someone to dine
            with, or they simply didn’t feel like socializing. However, there
            does exist a demographic that wants to share meals with others, but
            does not have an avenue through which to create connections that
            would allow for shared meal experiences, creating an isolating
            feeling that deserved a solution.
          </p>
        </div>
      </section>
      <section className="tiles">
        <article style={{ backgroundImage: `url(${pic01})` }}>
          <header className="major">
            <h3>Collaborators</h3>
          </header>
        </article>
        <article style={{ backgroundImage: `url(${pic02})` }}>
          <header className="major">
            <h3>Andrew</h3>
            <p>
              For the research phase, Andrew created and shared a survey asking
              people questions about their eating habits as well as about how
              they socialized while eating. He also conducted direct observation
              by going to UCSD’s Price Center and taking recordings of students,
              staff, and faculty and the ways they engaged with one another over
              meals if at all. During the prototyping session, Andrew was
              responsible for organizing the prototyping session and played a
              role in automating some of the spreadsheets as well as providing
              the snacks for the eating portion of the session. After the
              prototyping session, he created some of the initial Figma mockups
              for the prototype shown in the presentation and on this site as
              well as some of the iterated mockup pages. He also documented the
              prototyping process for both the final presentation as well as for
              this stage.
            </p>
          </header>
        </article>
        <article style={{ backgroundImage: `url(${pic03})` }}>
          <header className="major">
            <h3>David</h3>
            <p>
              David provided his own research through interviews and contextual
              inquiries. A majority of the time, he was to provide support while
              learning the ups and downs of how to use front end software like
              Figma. For the initial prototype, he created the pre-questionnaire
              that was to be used to sort the users during the prototyping
              session and created an excel sheet to total up the “Creators” and
              “Joiners” scores. Additionally, he was tasked with creating logos
              for “Munchmates” through Figma and created multiple iterations
              ranging from abstract, pictorial, and word marks.{' '}
            </p>
          </header>
        </article>
        <article style={{ backgroundImage: `url(${pic04})` }}>
          <header className="major">
            <h3>Hayden</h3>
            <p>
              Hayden helped with some of the initial ideations and provided a
              literature review and interview when conducting research.
              Additionally he helped provide ideas for the initial and final
              prototypes, along with doing some basic project management during
              the feedback evaluation and final prototype generation phase.
              Finally he helped write the document script used for the portfolio
              production, in addition to fleshing out the pitch, prototype, and
              final presentation slides.
            </p>
          </header>
        </article>
        <article style={{ backgroundImage: `url(${luke})` }}>
          <header className="major">
            <h3>Luke</h3>
            <p>
              Luke spearheaded the development of a web backend for our
              prototype. While the backend did not see the light of day during
              the presentation, we hope to use it for future iterations on the
              project beyond this class. He helped assist in the
              re-conceptualization of the project after the waves of feedback
              came in. Post-prototype-phase, he handled the creation of the
              portfolio site, managed hosting, and dealt with domain providers
              to get our portfolio site online. This site you’re reading right
              now is coded by him, and is available on Github.{' '}
            </p>
          </header>
        </article>
        <article style={{ backgroundImage: `url(${pic06})` }}>
          <header className="major">
            <h3>Kirubel</h3>
            <p>
              Kirubel contributed by gathering user research through user
              interviews. Prior to the prototype session, he created relevant
              tags for each group spreadsheet. He also assisted in the
              post-prototype feature ideation session and constructed low
              fidelity wireframes to be used as assets for the portfolio landing
              page.
            </p>
          </header>
        </article>
      </section>
      <section id="two" className="spotlights">
        <section>
          <img src={pic08} alt="" />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Our Motivation</h3>
              </header>
              <p>
                While eating alone is something that everyone has experienced at
                least once in their lives, we believe that creating social
                eating experiences around dining tables can help foster positive
                interactions with others, and even promote better mental health
                and well-being. This leads us to asking how we can get
                individuals involved in an experience where they might not know
                anyone else participating, and how we can promote the formation
                of connection between those users? The answer and motivation
                behind our application is that food is an experience everyone
                enjoys sharing, and being both disarming and satisfying, is
                something almost anyone could bond over. Therefore, the creation
                of an application that functions as a meal meetup platform for
                creating group eating experiences, could help solve the
                isolating effects of solitary eating or at the very least
                provide people who don’t eat alone by choice a viable
                alternative.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="inner">
            <header className="major">
              <h1>Our Prototyping Process</h1>
            </header>

            <h2 id="content">Exploration</h2>
            <p>
              We began this exploration first by collecting information on our
              setting and demographics in order to fully understand the process
              we wished to solve. This process began with an extensive research
              phase where the bulk of our initial data was gathered. Through our
              research, we surveyed and interviewed individuals about their
              experiences with both social eating, and dining in isolation, in
              addition to how open they would be to using technology to find
              social eating experiences. We also engaged in observational
              studies in which we went to food hubs on the UCSD campus in order
              to see if/how people engaged with one another over a meal. To
              further strengthen our claims, we conducted academic research into
              how eating in solitary and eating with others can impact an
              individual, and what benefits the more social option can present.
              Armed with this knowledge we set out to find a way to combat this
              social isolation, in such a way that would create more dining
              experiences that could foster new relationships between
              individuals. Additionally, we wanted to capitalize on social
              eating as a way to reduce the stress and chaos that plagues the
              everyday lives of the modern citizen. Finally, we wanted to use
              dining as a way to open new doors between individuals through
              unique dining experiences that could create memorable moments that
              could evolve into friendships.
            </p>
            <h2 id="content">The Prototype</h2>
            <p>
              For our prototype, we used Google Sheets in order to simulate our
              app features. At the start of the session, we selected 8
              volunteers to act as what we called “Creators”. Prior to our
              session, we had the Creators move into a seperate room from the
              class. After having the Creators complete a short quiz, we asked
              them to create a meetup session for the rest of the class to join
              once the session began. The creators did this by copying a
              pre-templated sheet from a list of templates (created based on a
              list of on-campus restaurants) onto a single spreadsheet document
              which we called our “Master Sheet”. Once their templates were
              filled out, the main page of the Master Sheet would automatically
              populate with their inputted details for other users to see. Once
              all of the parties were completed we went to the whole class and
              asked the rest of the students to complete the quiz the Creators
              had taken earlier. This quiz was intended to act as a
              pseudo-algorithm which would help students find Creators’ groups
              based on how similar they were in terms of social engagement and
              food preferences. Once the class completed the quiz we had them
              join the Creators’ groups, capping each group off at 5 party
              members. We wanted students to consider their quiz scores but also
              the other factors of the party as well, such as dietary
              preferences, restaurant choice, or even the Creator’s favorite
              snack based off of a predefined list. After groups had been made,
              we served each of the groups the snacks that the Creators had
              chosen and had them attempt to make conversation with one another.
              After this, we had students complete a feedback survey based on
              their role and gave them the option to fill out another survey if
              they decided to eat together after the class had ended.
            </p>
            <img
              src={prototype}
              style={{ width: '100%', height: 'auto' }}
            ></img>
            <div className="grid-wrapper">
              <div className="col-6">
                <h3>Evaulation and Key Takeaways</h3>
                <p>
                  In order to get information that could be useful from our
                  prototype demonstration, we conducted two surveys geared at
                  those who created events, and those who joined events, with a
                  third survey being provided for any groups who actually went
                  out to eat after class. The feedback we received was mixed,
                  with many joiners seeing a variety of uses between meeting new
                  friends, creating study groups for classes, or even going out
                  to eat with friends. While the process of creating an event in
                  the prototype confused some, what also confused creators was
                  what details they needed to put in order to draw others to
                  their groups. Surprisingly, joiners provided us with feedback
                  that indicated that they did not look for any key features
                  when joining a group, for example, they did not look at who
                  was already in a group before joining because we only provided
                  a name for identification. This led to the question of whether
                  or not providing more information about users in a particular
                  group could help influence others to join or if it would make
                  groups less diverse and reduce interactions between strangers
                  as a consequence.
                </p>
              </div>
              <div className="col-6">
                <h3>From a Prototype, to a Product</h3>
                <p>
                  After our initial prototype and feedback analysis, we used the
                  information gathered to pivot our focus onto a narrower
                  demographic and niche that better met a market need. Instead
                  of focusing on a larger group of users ranging between
                  friends, students, coworkers, etc, we instead chose to narrow
                  our focus onto working young adults in the age range of 23-34.
                  These individuals are somewhere in the stage of life where
                  they are out of school and growing within their professional
                  environments. What we found is that many people within this
                  group had lost the friends and contacts that they had made at
                  school, and instead were left in isolation grinding out time
                  at their jobs. To capitalize on this, we chose to incorporate
                  occupation and a short bio into our idea, where individuals
                  could learn more about others that were attending events, in
                  hopes of recreating or creating new, meaningful friendships
                  that they had lost since leaving school. This combined with
                  the backdrop of a social eating experience in a group setting,
                  would give those that do not often have chances to meet new
                  people, the chance to connect and make new friends with either
                  strangers, or possibly those they work with on a daily basis.
                  With added incentives such as group discounts, getting
                  involved with the app would have a higher value and could make
                  it easier for our app to reach critical mass.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Link to="/" className="image">
            <video
              src={prototypeVideo}
              autoPlay={true}
              loop
              muted={true}
              style={{ height: '100%', width: 'auto' }}
            ></video>
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>The Final Prototype</h3>
                <Link
                  to={
                    'https://www.figma.com/file/IyH6GNtjFm3pnaEq1hYCaV/MunchMates-Prototype?node-id=20%3A136'
                  }
                >
                  View on Figma
                </Link>
              </header>
              <p>
                For our final prototype, we developed a high fidelity mockup on
                Figma with the primary functions being explorable. Users are met
                with a questionnaire once opening the app for the first time
                where they will be able to fill out their profiles while also
                providing our backend information based on their answers. The
                purpose of this questionnaire is to provide meetup events
                created by the user with pre-populated information as well as
                give users a way to find groups hosted by individuals with
                similar/different backgrounds to their own. After completing the
                questionnaire, users are then sent to a page with a variety of
                hosts who they may or may not know and work with initially
                sorted by their likeness score which is influenced by variables
                such as their work department. Users are still, of course, able
                to sort based on different categories and are free to choose
                whichever parties they feel most comfortable with.
                Alternatively, users are also given the option of creating their
                own events while showcasing their profile with a few short
                descriptions about themselves. The host can then choose a
                restaurant near their location, what time they want to meet up,
                and write any additional comments they want joiners to read. The
                host is then able to see who joins their session and is able to
                view the users profiles as well as see a list of recommended
                food items at the bottom of the page. As an added bonus to help
                incentivize both creating and joining events, creators are given
                badges on their profiles as they host more and more meetups and
                groups are able to receive discounts from partnered restaurants
                once their group reaches a certain threshold size.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="inner">
            <div className="grid-wrapper">
              <div className="col-6">
                <h3>Reflections</h3>
                <p>
                  Overall we were able to learn a great deal through trial and
                  error during these past few weeks of prototyping. We realize
                  that instructions must be clear and that we needed to think in
                  terms of the users and not as the ones who created the
                  prototype. We learned that we need to show through actions and
                  not words as walls of texts may lead to increased confusion.
                  The design iteration went through various overhauls and we
                  were eventually able to streamline our main focus after
                  receiving constructive feedback from our peers. We also
                  realized that our main goal with the platform is to primarily
                  focus on the users within a set age demographic of 23 - 34 as
                  these people have a much harder time socializing and balancing
                  their jobs. In the end, collaborative work is extremely
                  difficult if group members are not on the same page. However,
                  we believe that we were able to persevere and complete the
                  final iteration of our prototype without much difficulty.
                </p>
              </div>
              <div className="col-6">
                <h3>What We Learned</h3>
                <p>
                  Throughout the MunchMates creation process our team has
                  learned several valuable lessons about both the world of
                  social eating experiences, in addition to project creation.
                  The first and most obvious lesson was how important social
                  experiences are, as shown through both our academic research,
                  and personal data collection. Using this as a pillar for our
                  project highlighted a shared love of culinary experiences
                  amongst many people. In terms of project development, learning
                  to set timelines and pivot when needed become a critical
                  aspect of our development cycle, as we decided after our first
                  prototype to switch our demographic and narrow our focus.
                  Through feedback, we learned that social eating experiences
                  can be hard to foster organically, and that most people need
                  an additional incentive before joining something similar to
                  what our app offers. Additionally, we learned that not
                  everyone is looking to make new connections, but those who are
                  often are nervous about taking the first steps to seek out
                  others, an avenue on which our platform would ideally thrive
                  on. Food is something that creates a bonding experience
                  between two individuals, and providing a route for those
                  seeking social connections, and a shared eating experience can
                  help create new relationships that many often desperately
                  need.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Final Remarks</h3>
              </header>
              <p>
                While the MunchMates app primarily focuses on eating
                experiences, we hope that with the right growth, the app could
                expand to include other group activities in order to expand the
                number and type of connections individuals using the app could
                make. While one of our biggest barriers to entry are the social
                obligations that come along with eating out socially, the
                incentives we added, along with the added focus on demographics
                that do not get as many social opportunities would ideally
                increase our user base which would then lead to promotion by
                word of mouth. We hope to expand and improve MunchMates so that
                it can continue to foster social connections both at, and away
                from the dinner table.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Index
