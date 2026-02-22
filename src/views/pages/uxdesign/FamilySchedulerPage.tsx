import { useEffect } from 'react';
import './FamilySchedulerPage.css';
import PageProps from '@/models/PageProps';
import { Quote, GoogleCertificateLink } from './Common';
import ItemGroup from '@/views/components/ItemGroup';
import { Table } from '@/views/components/Table';
import Tooltip from '@/views/components/Tooltip';
import anushaPersona from '@/assets/caseStudy1/Anusha_persona.jpg';
import jacobPersona from '@/assets/caseStudy1/Jacob_persona.jpg';
import competitiveAudit from '@/assets/caseStudy1/competitorAudit.pdf';
import userFlow from '@/assets/caseStudy1/userFlow.png';
import bigPictureStoryboard from '@/assets/caseStudy1/bigPictureStoryboard.jpg';
import closeupStoryboard from '@/assets/caseStudy1/closeupStoryboard.jpg';
import lofiPrototype from '@/assets/caseStudy1/lofiPrototype.png';

function FamilySchedulerPage({pageProps} : {pageProps: PageProps}) {

  useEffect(() => {
    pageProps.onPageChanged("Family Scheduler");
  })

  return (
    <div>
      <GoogleCertificateLink/>
      <Quote quote="Design a Family Schedule-management app or website to enable parents to manage 
          both their and their children's schedules."/>
      <h3>Project Overview</h3>
      <div>
        <p>
          [insert images]
          This app was designed as part of the Google UI/UX course. The Family Scheduling app was designed for viewing and managing schedules collaboratively, especially targeting families. Note that because this was a learning experience, user research was based off of a few family friends and was not conducted extensively.
        </p>

        <h4>The Problem</h4>
        <p>
          Anusha is a daughter of a busy mother who needs to send reminders to her mother because she needs her to attend important events in her life.
          Jacob is the father of a young family who needs to organize his family's schedule because he wants to find more intimate time to spend with his wife.
        </p>

        <h4>The Goal</h4>
        <p>
          Our Family Scheduling app will let users set reminders for their family members which will affect busy parents by remembering important events regarding their children. We will measure effectiveness by the number of successfully attended events.
          Our Family Scheduling app will let users organize their family schedules which will affect young families by helping them find more structure and balance in their relationships. We will measure effectiveness by the number of free vs. busy timeslots calculated per week.
        </p>

        <h4>Value Proposition</h4>
        <p>
          [todo]
          Describe all features and benefits (make a list)
          Explain the value (sort into categories)
          Connect features with user needs (persona pain points)
          Review final list (what's unique?)
        </p>
      </div>

      <h3>Understanding the User</h3>
        <div>
          <p>
            Because this project was a learning experience, user research was based off of a few family friends and was not conducted extensively.
          </p>

          <h4>Pain Points</h4>
          <ul>
            <li>Sharing and remembering multiple people's schedules.</li>
            <li>Finding shared free time in a family. To plan family trips or dates for the parents.</li>
            <li>Sharing parenting responsibilities. For example, taking the kids to school or preparing lunch.</li>
          </ul>

          <h4>Personas</h4>
          <Tooltip tooltip="Anusha">
            <img src={anushaPersona} alt="Anusha" />
          </Tooltip>
          <Tooltip tooltip="Jacob">
            <img src={jacobPersona} alt="Jacob" />
          </Tooltip>

          <h4>User Journey Maps</h4>
          <div>
            <p><b>Anusha - </b>Make a note of her recital in their shared calendar so her mother can properly prepare for the event.</p>
            <Table 
              classname='withVerticalHeader'
              headers={["Action", "Open Calendar", "Note Down the Recital Date and Time", "Correct Event Details", "Check Calendar for Events", "Get Reminder"]} 
              rows={[
                ["Task List", 
                  "Find and open app. Browse to the calendar page. Find the Monthly view", 
                  "Create a new event. Input the date and time. Add reminder",
                  "Check existing event details. Update any erroneous info",
                  "Find and open the app. Browse Calendar. Browse upcoming events",
                  "Receive reminder."],
                ["Feeling Adjective", 
                  "Impatient", 
                  "Trying to focus, Trying to remember details, Distracted", 
                  "Focused, Relief",
                  "Curious", 
                  "Realization, Satisfied"],
                ["Improvement Opportunities", 
                  "Clear interface, Easy navigation", 
                  "Have most details filled out. Eg. Have a default reminder.", 
                  "Add a notification that the event was changed by a different family member.", 
                  "Highlight important upcoming events",
                  "Provide both haptic and auditory reminders."]
              ]}
            />
            <br/>

            <p><b>Jacob - </b>Plan a date around both his and his wife's busy schedules.</p>

            <Table 
              classname='withVerticalHeader'
              headers={["Action", "Open Calendar", "Input Work Schedule", "Hire Babysitter", "Suggest date", "Agree on a date"]}
              rows={[
                [
                  "Task List",
                  "Find and open app. Browse to the calendar page. Find the Monthly view",
                  "Create new events. Input the dates and times. Mark as busy.",
                  "Check common calendar. Find their overlapping busy times on the Calendar.",
                  "Find overlapping free times on a suitable day. Create event. Add invite.",
                  "Receive invite acceptance notification."
                ],
                [
                  "Feeling Adjective",
                  "Neutral",
                  "Focused",
                  "Focused, Curious",
                  "Excited",
                  "Excited, Happy"
                ],
                [
                  "Improvement Opportunities",
                  "Clear interface; Easy navigation",
                  "Remember re-occurring events (e.g. work shift) and suggest auto fills",
                  "Simple interface; Highlight busy time slots so it is easy to distinguish busy vs. free times.",
                  "Add shortcut to find overlapping free times.",
                  "Use positive and excited language."
                ]
              ]}
            />
          </div>

        <h4>Competitive Audit</h4>
        <div>
          <p>
            See the full competitive audit here:{' '}
            <a href={competitiveAudit} target="_blank" rel="noopener noreferrer">Competitive Audit (PDF)</a>
          </p>

          <h5>Key Competitors</h5>
          <p>Our key competitors are <strong><a href='https://www.cozi.com'>Cozi Family Organizer</a></strong>, 
            an American subscription-based digital calendar, <strong><a href='https://www.familywall.com'>FamilyWall</a></strong>, 
            a French family management and communication app, and <strong><a href='https://timetreeapp.com/intl/en'>TimeTree</a></strong>, 
            a Japanese group planning app. Cozi Family Organizer and FamilyWall are direct competitors, and TimeTree is an indirect competitor.</p>

          <h5>Products</h5>
          <p>Cozi Family Organizer has a functioning app that although offers many features, such as to-do lists, digital calendars, shopping lists, and meal planning, most of them are locked behind ads or a paid-subscription account. Overall, it has a simple on-the-shelf design but no real brand identity that would set it apart from the rest.</p>
          <p>FamilyWall has the most expensive subscription but has an outstanding and unique design. Not only does it offer multiple features that can be added to your family wall based on usage, it doesn't overwhelm the users with the amount of features. Its only downside would be that it is not very accessible. It is unusable for visually-impaired users due to the unique navigation system.</p>
          <p>Finally, TimeTree has a well-designed app with prominent branding and great stylistic choice. It focuses on group planning and calendar sharing, which is limited compared to the other two competitors but it does them well. It also suffers from low accessibility. The UI can look cluttered and colours have little contrast.</p>

          <h5>Strengths</h5>
          <ItemGroup title="Cozi" color="var(--success-colour)">
            <ul>
              <li>Easy navigation and user flow</li>
              <li>Cheapest option</li>
            </ul>
          </ItemGroup>
          <ItemGroup title="Family Wall" color="var(--success-colour)">
            <ul>
              <li>Great overall app</li>
              <li>Unique and consistent tone contributing to its brand identity</li>
              <li>Visually appealing</li>
              <li>Creative Navigation</li>
            </ul>
          </ItemGroup>
          <ItemGroup title="TimeTree" color="var(--success-colour)">
            <ul>
              <li>Great brand identity</li>
              <li>Easy navigation and user flow</li>
              <li>Visually appealing</li>
            </ul>
          </ItemGroup>

          <h5>Weaknesses</h5>
          <ItemGroup title="Cozi" color="var(--error-colour)">
            <ul>
              <li>Lack of branding and weak identity</li>
              <li>Generic app content, lots of features but none done well.</li>
            </ul>
          </ItemGroup>
          <ItemGroup title="Family Wall" color="var(--error-colour)">
            <ul>
              <li>Weak accessibility features</li>
              <li>Little to no support for text-to-speech capabilities</li>
              <li>Most Expensive</li>
            </ul>
          </ItemGroup>
          <ItemGroup title="TimeTree" color="var(--error-colour)">
            <ul >
              <li>Weak Accessibility for individuals with smaller screens</li>
              <li>Cluttered content. Not very well organized</li>
            </ul>
          </ItemGroup>

          <h5>Conclusion</h5>
          <p>
            We identified that none of the competitors were fully accessible especially for visually impaired users.
            Furthermore, none focused simply on a shared calendar feature. Thus, it wasn't done well and had gaps.
          </p>
          <p>
            There are opportunities to provide better accessibility for visually impaired users.
            We will focus on the shared calendar to keep the app focused and clutter-free.
          </p>
        </div>
      </div>
      
      <h3>Initial Design</h3>
      <div>
        <Tooltip tooltip="User Flow Diagram">
          <img src={userFlow} alt="User Flow Diagram" />
        </Tooltip>

        <h4>Storyboards</h4>
          <Tooltip tooltip="Big Picture Storyboard">
            <img src={bigPictureStoryboard} alt="Big Picture Storyboard" />
          </Tooltip>
          <Tooltip tooltip="Closeup Storyboard">
            <img src={closeupStoryboard} alt="Closeup Storyboard" />
          </Tooltip>
      
        <h4>Initial Low-fidelity Prototype</h4>
        <p>View initial wireframes on Figma: {' '}
          <a href='https://www.figma.com/design/yAYpTQbfDoxIlTJxV8V1l7/Family-Scheduler?node-id=2-3&t=0gLyMCUwuwQqbgrx-1'>Wireframes</a>
        </p>
        <Tooltip tooltip="Low-fidelity Prototype">
          <img src={lofiPrototype} alt="Low-fidelity Prototype" />
        </Tooltip>
      </div>

      <h3>User Research</h3>
      <div>

      </div>

      <h3>Iterated Designs</h3>
      <div>
        
      </div>
    </div>
  );
}
    
  export default FamilySchedulerPage;