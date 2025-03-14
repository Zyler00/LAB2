import express, { Request, Response} from 'express'
const app = express()
app.use(express.json()) 
const port = 3000

interface Event {
    id: number;
    category: string;
    title: string;
    description: string;
    location: string;
    date: string;
    time: string;
    petsAllowed: boolean;
    organizer: string;
}

const events: Event[] = [
    {
        id: 1,
        category: "Music",
        title: "Concert",
        description: "A live concert",
        location: "London",
        date: "2021-07-01",
        time: "19:00",
        petsAllowed: false,
        organizer: "Live Nation",
    },
    {
        id: 2,
        category: "Sports",
        title: "Marathon",
        description: "Annual city marathon",
        location: "New York",
        date: "2021-09-15",
        time: "07:00",
        petsAllowed: false,
        organizer: "NYC Sports",
    },
    {
        id: 3,
        category: "Tech",
        title: "Tech Conference",
        description: "A conference on emerging technologies",
        location: "San Francisco",
        date: "2021-11-20",
        time: "09:00",
        petsAllowed: false,
        organizer: "TechWorld Inc.",
    },
    {
        id: 4,
        category: "Food",
        title: "Food Festival",
        description: "A festival featuring food from around the world",
        location: "Paris",
        date: "2021-08-10",
        time: "12:00",
        petsAllowed: true,
        organizer: "Gourmet Events",
    },
    {
        id: 5,
        category: "Art",
        title: "Art Exhibition",
        description: "An exhibition showcasing modern art",
        location: "Berlin",
        date: "2021-10-05",
        time: "10:00",
        petsAllowed: true,
        organizer: "ArtSphere",
    },
    {
        id: 6,
        category: "Theatre",
        title: "Broadway Show",
        description: "A popular Broadway performance",
        location: "New York",
        date: "2021-12-01",
        time: "20:00",
        petsAllowed: false,
        organizer: "Broadway Productions",
    }
]
    

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})
app.get('/test', (req: Request, res: Response) => {
    const id = req.query.id;
    const output = `id: ${id}`;
    res.send(output);
})
app.get("/events", (req, res) => {
    if (req.query.category) {
        const category = req.query.category;
        const filteredEvents = events.filter((event) => event.category ===
        category);
        res.json(filteredEvents);
    } else {
        res.json(events);
    }
});
app.get("/events/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const event = events.find((event) => event.id === id);
    if (event) {
        res.json(event);
    } else {
        res.status(404).send("Event not found");
    }
});
app.post("/events", (req, res) => {
    const newEvent: Event = req.body;
    newEvent.id = events.length + 1;
    events.push(newEvent);
    res.json(newEvent);
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})