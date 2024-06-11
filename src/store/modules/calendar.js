
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') 

export const INITIAL_EVENTS= [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  },
  { 
    id: createEventId(),
      title: "event 1",
       date: "2022-09-01"
  },
{
    id: createEventId(),
     title: "BirthDay",
      date: "2022-09-16"
},
{ 
  id: createEventId(),
  title: "All-day event", 
  date: "2022-09-04" 
    },
{
    id: createEventId(),
   title: "event", 
   date: "2022-09-20"
   },
{
    id: createEventId(),
  title:"event 2",
   date:"2022-10-07"
  },
{
    id: createEventId(),
    title:"all-day event", 
    date:"2022-10-27"
  },
{
    id: createEventId(),
  title:"event",
  date:"2022-12-10"
        },
{
    id: createEventId(),
    title:"event2",
    date:"2022-12-12"
  },
{
    id: createEventId(),
    title:"event",
    date:"2022-11-1",
    start:"T12:00:00"},
  {
      id: createEventId(),
      title:"event",
      date:"2022-11-18",},
   {
       id: createEventId(),
      title:"event",
      date:"2022-11-06",}
]

export function createEventId() {
  return String(eventGuid++)
}
