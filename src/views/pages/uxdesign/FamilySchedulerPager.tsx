import './FamilySchedulerPage.css';
import PageProps from '@/models/PageProps';


function FamilySchedulerPage({pageProps} : {pageProps: PageProps}) {

    pageProps.setTitle("Family Scheduler");

    return (
      <div>
        <h1>Google UI/UX Portfolio Project 1</h1>

        <p>
            Design Prompt: "Design a Family Schedule-management app or website to enable parents to manage 
            both their and their children's schedules."
        </p>
      </div>
    );
  }
    
  export default FamilySchedulerPage;