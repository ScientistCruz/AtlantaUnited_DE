// Incomplete!
const schedule = [
  { "date": "Feb 24", "opponent": "Columbus Crew", "time": "2:00 PM" },
  { "date": "Mar 9", "opponent": "New England Revolution", "time": "7:30 PM" },
  { "date": "Mar 17", "opponent": "Orlando City SC", "time": "7:00 PM" },
  { "date": "Mar 23", "opponent": "Toronto FC", "time": "7:30 PM" },
  { "date": "Mar 31", "opponent": "Chicago Fire FC", "time": "3:30 PM" },
  { "date": "Apr 6", "opponent": "New York City FC", "time": "7:30 PM" },
  { "date": "Apr 14", "opponent": "Philadelphia Union", "time": "2:30 PM" },
  { "date": "Apr 20", "opponent": "FC Cincinnati", "time": "7:30 PM" },
  { "date": "Apr 27", "opponent": "Chicago Fire FC", "time": "8:30 PM" },
  { "date": "May 4", "opponent": "Minnesota United FC", "time": "7:30 PM" },
  { "date": "May 11", "opponent": "D.C. United", "time": "7:30 PM" },
  { "date": "May 18", "opponent": "Nashville SC", "time": "8:30 PM" },
  { "date": "May 25", "opponent": "Inter Miami CF", "time": "7:30 PM" },
  { "date": "Jun 2", "opponent": "Charlotte FC", "time": "7:30 PM" },
  { "date": "Jun 8", "opponent": "New York Red Bulls", "time": "7:30 PM" },
  { "date": "Jun 15", "opponent": "Columbus Crew", "time": "7:30 PM" },
  { "date": "Jun 22", "opponent": "Philadelphia Union", "time": "7:30 PM" },
  { "date": "Jun 29", "opponent": "Toronto FC", "time": "7:30 PM" },
  { "date": "Jul 6", "opponent": "Orlando City SC", "time": "7:30 PM" },
  { "date": "Jul 13", "opponent": "FC Cincinnati", "time": "7:30 PM" },
  { "date": "Jul 20", "opponent": "New York City FC", "time": "7:30 PM" },
  { "date": "Jul 27", "opponent": "D.C. United", "time": "7:30 PM" },
  { "date": "Aug 3", "opponent": "New England Revolution", "time": "7:30 PM" },
  { "date": "Aug 10", "opponent": "Chicago Fire FC", "time": "7:30 PM" },
  { "date": "Aug 17", "opponent": "Nashville SC", "time": "7:30 PM" },
  { "date": "Aug 24", "opponent": "Inter Miami CF", "time": "7:30 PM" },
  { "date": "Aug 31", "opponent": "Charlotte FC", "time": "7:30 PM" },
  { "date": "Sep 7", "opponent": "New York Red Bulls", "time": "7:30 PM" },
  { "date": "Sep 14", "opponent": "Columbus Crew", "time": "7:30 PM" },
  { "date": "Sep 21", "opponent": "Philadelphia Union", "time": "7:30 PM" },
  { "date": "Sep 28", "opponent": "Toronto FC", "time": "7:30 PM" },
  { "date": "Oct 2", "opponent": "CF Montréal", "time": "7:30 PM" },
  { "date": "Oct 5", "opponent": "New York Red Bulls", "time": "7:30 PM" },
  { "date": "Oct 19", "opponent": "Orlando City SC", "time": "6:00 PM" },
  { "date": "Oct 22", "opponent": "CF Montréal", "time": "4:30 PM" },
  { "date": "Oct 25", "opponent": "Inter Miami CF", "time": "TBD" },
  { "date": "Nov 3", "opponent": "Inter Miami CF", "time": "TBD" },
  { "date": "Nov 9", "opponent": "Inter Miami CF", "time": "TBD" },
  { "date": "Nov 24", "opponent": "Orlando City SC", "time": "12:30 PM" }
]

const NewsTicker = () => (
  <div className="fixed bottom-0 left-0 w-full bg-atlantaRed text-atlantaGold py-2 text-center">
    <marquee> schedule </marquee>
  </div>
);

export default NewsTicker;
