import { useEffect } from 'react';
import './FamilySchedulerPage.css';
import PageProps from '@/models/PageProps';
import { Quote, GoogleCertificateLink } from './Common';
import { Document, Page } from 'react-pdf';
import anushaPersona from '@/assets/caseStudy1/Anusha_persona.jpg';
import jacobPersona from '@/assets/caseStudy1/Jacob_persona.jpg';
import competitorAudit from '@/assets/caseStudy1/competitorAudit.pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// PDF viewer - https://github.com/wojtekmaj/react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

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

      <h3>Understanding the User</h3>
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
      <img src={anushaPersona} alt="Anusha" />
      <img src={jacobPersona} alt="Jacob" />

      <h4>User Journey Maps</h4>
      <p><b>Anusha - </b>Make a note of her recital in their shared calendar so her mother can properly prepare for the event.</p>
      <table className='withVerticalHeader'>
        <tr>
          <th>Action</th>
          <th>Open Calendar</th>
          <th>Note Down the Recital Date and Time</th>
          <th>Correct Event Details</th>
          <th>Check Calendar for Events</th>
          <th>Get Reminder</th>
        </tr>
        <tr>
          <td>Task List</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Feeling Adjective</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Improvement Opportunities</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
      <br/>

      <p><b>Jacob - </b>Plan a date around both his and his wife’s busy schedules.</p>


      <h4>Competitive Audit</h4>
      <Document file={competitorAudit}>
        <Page pageNumber={1} scale={1}/>
      </Document>
    </div>
  );
}
    
  export default FamilySchedulerPage;