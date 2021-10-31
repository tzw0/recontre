import './App.scss';
import Topbar from './components/topbar/Topbar';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="page strict" id="home">
        <div className="row expand">
          <div className="col m20">
            <h1 id="home">Recontre</h1>
            <a className="in-body" href="#pg5-key-user-tasks"> Browse •  Discover •  Inform ↪</a>
            <h3>UI/UX Design - Mobile Application</h3>
          </div>
          <img src="./assets/logo.png" alt="" />

          <div className="cover-img">
            <div className="overlay"></div>
          </div>
        </div>
      </div>

      <div className="page collapse" id="pg1">
        <div className="row w80 no-vert-center">
          <div className="col m40px w50">
            <h2>Background</h2>
            A survey conducted by Timeout back in 2018 titled “Timeout City Life Index” concluded that Singapore was the second most boring city out of the 32 cities being surveyed.
            <br />
            However, 95% of respondents are satisfied with the food options in Singapore, and there are plenty of attractions, parks and hiking trails in Singapore.
          </div>
          <div className="vert-sep"></div>
          <div className="col m40px w50">
            <h2>Problem</h2>
            On deeper analysis, our team recognises that the phenomenon observed is due to fragmentation and cumbersome access to information.
            <br />
            Simply, the Singapore population don’t know what they don’t know exists. Many reliable sources of reviews are also not integrated with booking platforms. In addition, too many choices may lead to confusion.
          </div>
        </div>


        <div className="row w80 no-vert-center">
          <div className="col m40px">
            <h2>Current Solutions</h2>
          </div>
        </div>

        <div className="clear"></div>
        <div className="clear"></div>

        <div className="row w80 no-vert-center">
          <div className="col m40px w50">
            <h3>Chope</h3>
            Chope is the largest dining technology platform across Asia and is integrated with many restaurants across Singapore.
            <ul><li>Does not retain any voucher codes natively in the application</li><li>Its mobile application does not have search filter based on location or cuisine</li></ul>
          </div>
          <div className="col m40px w50">
            <h3>Klook</h3>
            Klook is a platform offering tourism, lifestyle attractions and events to users.
            <ul><li>Does not contain free attractions and events in Singapore</li><li>
              Recommended attractions and events are isolated</li></ul>
          </div>
        </div>
      </div>


      <div className="page collapse" id="pg2">
        <div className="row w80 no-vert-center">
          <div className="col m40px w50">
            <h2>User Identification</h2>
          </div>
        </div>
      </div>

      <div className="page collapse" id="pg3">
        <div className="row w80 no-vert-center">
          <div className="col m40px w50">
            <h2>Contextual Inquiry</h2>
          </div>
        </div>
      </div>

      <div className="page collapse" id="pg4">

        <div className="row w80 no-vert-center">
          <div className="col m40px w100">
            <h2>Idea Selection</h2>
            From the contextual inquiry above, we grouped our findings and observations into three main categories:
            <ol>
              <li>Searching for ideas</li>
              <li>No new outing ideas</li>
              <li>External factors when deciding</li>
            </ol>

            <div className="img-affinity">
              <div className="img"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page invert collapse" id="pg5-key-user-tasks">
        <div className="row w80 no-vert-center">
          <div className="col m40px w100">
            <h2>Key User Tasks</h2>

            From the three main affinities above, we have decided on these 3 user tasks.
          </div>
        </div>

        <div className="clear"></div>

        <div className="row w80 no-vert-center">
          <div className="col m40px w100">
            <h3>
              Browse
            </h3>
            <div className="browse-img">
              <div className="img flat"></div>
            </div>
            Display a simplistic and informational list of restaurants and activities available in
            Singapore. Activities include attractions, hiking trails and parks
          </div>
          <div className="col m40px w100">
            <h3>
              Discover
            </h3>
            <div className="discover-img">
              <div className="img flat"></div>
            </div>
            Suggest activities and restaurants to users based on their preference. Preferences
            include: Cuisine, Price of activities, Nature of activities (Indoors or Outdoors). The
            current list is non-exhaustive.
          </div>
          <div className="col m40px w100">
            <h3>
              Inform
            </h3>
            <div className="inform-img">
              <div className="img flat"></div>
            </div>
            Display updated information regarding weather, crowds and COVID-19 restrictions.
          </div>
        </div>
      </div>

      <div className="page collapse" id="pg6-persona">
        <div className="row w80 no-vert-center">
          <div className="col m40px w100">
            <h2>Personas</h2>

            From the previous sections, our group constructed 2 primary personas and 1 secondary persona below.
          </div>
        </div>

        {/* 1 sentence bg, 1 sentence scenario, 1 goal */}

        <div className="clear"></div>

        <div className="row w80 no-vert-center">
          <div className="col m40px w100">
            <div className="p1-img">
              <div className="img flat"></div>
            </div>
            <h3>
              June Tan <br /> (Primary Persona 1)
            </h3>
            <p> <div className="icon"> <WorkOutlineIcon fontSize="medium" /> &nbsp; Occupation </div>
              Final Year Student at National University of Singapore.
            </p>
            <p> <div className="icon"> <HelpOutlineIcon fontSize="medium" /> &nbsp; About </div>
              Currently dating her batchmate. Busy to plan for dates and does not like to spend too much money.
            </p>
            <p> <div className="icon"> <PanoramaOutlinedIcon fontSize="medium" /> &nbsp; Scenario </div>
              She wonders if she can find an avenue where she can get inspiration to plan something special for her boyfriend's birthday within 3 days.
            </p>
            <p> <div className="icon"> <SportsScoreIcon fontSize="medium" /> &nbsp; Goal</div>
              Wants interesting, customized, uncommon date ideas and prefers cheap thrills over luxurious and expensive dining or activities.
            </p>
          </div>
          <div className="col m40px w100">
            <div className="p2-img">
              <div className="img flat"></div>
            </div>
            <h3>
              May Tay <br /> (Primary Persona 2)
            </h3>
            <p> <div className="icon"> <WorkOutlineIcon fontSize="medium" /> &nbsp; Occupation </div>
              Assistant Professor at the National University of Singapore.
            </p>
            <p> <div className="icon"> <HelpOutlineIcon fontSize="medium" /> &nbsp; About </div>
              Married for 8 years with 1 daughter aged 7. Enjoys going for outdoor activities with her family.
            </p>
            <p> <div className="icon"> <PanoramaOutlinedIcon fontSize="medium" /> &nbsp; Scenario </div>
              She wonders if there is an application that can quickly recommend her a nice quiet trail with a map of the eateries nearby.
            </p>
            <p> <div className="icon"> <SportsScoreIcon fontSize="medium" /> &nbsp; Goal</div>
              Able to see food options in a map relative to the trail or outdoor activity as well as their opening and closing time.
            </p>
          </div>
          <div className="col m40px w100">
            <div className="p3-img">
              <div className="img flat"></div>
            </div>
            <h3>
              Benjamin Yeo <br /> (Secondary Persona)
            </h3>
            <p> <div className="icon"> <WorkOutlineIcon fontSize="medium" /> &nbsp; Occupation </div>
              Final Year Student at National University of Singapore.
            </p>
            <p> <div className="icon"> <HelpOutlineIcon fontSize="medium" /> &nbsp; About </div>
              Loves to hang out with friends and enjoys planning activites for his clique of friends.
            </p>
            <p> <div className="icon"> <PanoramaOutlinedIcon fontSize="medium" /> &nbsp; Scenario </div>
              He is wondering if there is a platform that can list out all available attractions and interesting things to do in a given location in order to plan his 3 day 2 night staycation with his friends.
            </p>
            <p> <div className="icon"> <SportsScoreIcon fontSize="medium" /> &nbsp; Goal</div>
              To be able to find all activities and restaurants around a given location.
            </p>
          </div>
        </div>

        <div className="clear"></div>

        <div className="row w80 no-vert-center">
          <div className="col m40px w100">
            <div className="right">
              <a className="true" rel="noreferrer" target="_blank" href="https://app.mural.co/t/cs32408258/m/cs32408258/1631370404954/6bb580906e61de3568c6f24893ccdb06acfd83d2?sender=ub55f91d4bc706a02d2f98875">View Full Persona ↪</a>
            </div>
          </div>
          <div className="col m40px w100">
            <div className="right">
              <a className="true" rel="noreferrer" target="_blank" href="https://app.mural.co/t/cs32408258/m/cs32408258/1631433276619/9f7a76434edec674dab18da3622045923a213dbb?sender=ub55f91d4bc706a02d2f98875">View Full Persona ↪</a>
            </div>
          </div>
          <div className="col m40px w100">
            <div className="right">
              <a className="true" rel="noreferrer" target="_blank" href="https://app.mural.co/t/cs32408258/m/cs32408258/1631460677732/ef86603ba8d96f0a5c2a0c7a460445f777d3587a?sender=ub55f91d4bc706a02d2f98875">View Full Persona ↪</a>
            </div>
          </div>
        </div>
      </div>

      <div className="page collapse" id="pg7-ss">
        <div className="row w80 no-vert-center">
          <div className="col m40px w100">
            <h2>Scenarios and Storyboard</h2>

            {/* <div className="ss-img">
              <div className="img">

              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;