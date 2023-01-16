import mongoose from 'mongoose';
// import {Event} from '../seeds_for_eventapp/seeds';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: String, required: true },
  image: { type: String, required: true },
  isFeatured: { type: Boolean, required: true }
});

// const Event = mongoose.model("Event", eventSchema);

const nomModel = 'Event';
let Event : any;
try {
  Event = mongoose.model(nomModel);
} catch (error) {
  Event = mongoose.model(nomModel, eventSchema);
}


mongoose.connect('mongodb+srv://Yasser:MiUhVr5PljsHyIWI@cluster0.3alls8m.mongodb.net/events?retryWrites=true&w=majority');

export async function getAllEvents() {
    try {
        const events = await Event.find();
        return events;
    } catch (err) {
        console.log(err);
    }
}



// export async function getAllEvents(){
//     const response = await fetch('https://ievent-539dc-default-rtdb.europe-west1.firebasedatabase.app/events.json');
//     const data = await response.json();
//     const events = [];

//     for (const key in data) {
//         events.push({
//             id: key,
//             ...data[key]
//         })

    
//     }
//     return events;
// }

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    console.log(allEvents?.filter((event: any) => event.isFeatured));
    return allEvents?.filter((event: any) => event.isFeatured);
  }

  export async function getEventById(id: string) {
    const allEvents = await getAllEvents();
    console.log(allEvents?.find((event: any) => event.id === id));
    return allEvents?.find((event: any) => event.id === id);
  }

  export async function getFilteredEvents(dateFilter: { year: number; month: number; }) {
    const { year, month } = dateFilter;
    const allEvents = await getAllEvents();
    let filteredEvents = allEvents?.filter((event: { date: string | number | Date; }) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }