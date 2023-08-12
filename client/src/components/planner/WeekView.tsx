import FullCalendar, { CalendarApi } from "@fullcalendar/react"
import { EventApi, DateSelectArg, EventClickArg, EventContentArg, formatDate, EventInput} from "@fullcalendar/core"
import timeGridPlugin from '@fullcalendar/timegrid'

import './WeekView.css'
import { INITIAL_EVENTS, createEventId } from "./EventsUtils"
import { LegacyRef, useEffect, useState } from "react"
import { Lecture } from "../../data/api/lectures"
import React from "react"
import { Api } from "@mui/icons-material"
import '@fullcalendar/react/dist/vdom'
import { CourseLight } from "../../data/api/courses"

interface Props {
    courseShowUpdateData: CourseLight;
}

let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export default function WeekView (props: Props) {
    const calendarRef:LegacyRef<FullCalendar> = React.createRef();

    const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

    useEffect(() => {
        if (props.courseShowUpdateData.isChecked) {
          addEvents();
        } else {
          removeEvents(props.courseShowUpdateData.id);
        }
      }, [props.courseShowUpdateData]);

    const handleDateSelect = (selectInfo: DateSelectArg) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
    
        calendarApi.unselect() // clear date selection
    
        if (title) {
          calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
          })
        }
      }
      
      function renderEventContent(eventContent: EventContentArg) {
        return (
          <>
            <i>{eventContent.event.title}</i>
            <br></br>
            <b>{eventContent.timeText}</b>
            <br></br>
            <b>{eventContent.event.extendedProps.lecturer}</b>
          </>
        )
      }

      const handleEventClick = (clickInfo: EventClickArg) => {
        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
          clickInfo.event.remove()
        }
      }

      const handleEvents = (events: EventApi[]) => {
        setCurrentEvents(events);
      }
    
    const addEvents = ()  => {
        
        const calendarApi = calendarRef.current?.getApi();
        let newEvents: EventInput = { 
            id: createEventId(),
            title: 'dynamic event',
            start: todayStr + 'T08:15:00',
            end:  todayStr + 'T10:00:00',
            extendedProps: {
                lecturer:"michal",
            }};
        console.log(`from add events, id is ${newEvents.id}`);
        calendarApi?.addEvent(newEvents);
    }

    const removeEvents = (id: number) => {
        console.log(`id ${id}`)
        const calendarApi = calendarRef.current?.getApi();
        const event = calendarApi?.getEventById(id.toString());
        event?.remove();
        console.log(calendarApi?.getEvents());
        /*removeEvents.forEach(event => {
             event.remove();
        });*/
        
    }

    return (
        <div className="fc-time-grid fc-slats">
            <FullCalendar
                ref={calendarRef}
                plugins={[ timeGridPlugin ]}
                initialView="timeGridWeek"
                locale="he"
                firstDay={7}
                hiddenDays={[6]}
                headerToolbar={{
                    start: "",
                    center: "",
                    end: ""
                }}
                direction="rtl"
                dayHeaderFormat={{weekday:"short"}}
                slotMinTime={'08:00:00'}
                slotMaxTime={'21:00:00'}
                eventTimeFormat={{hour:'2-digit', minute:'2-digit', meridiem:false}}
                height= 'auto'
                slotLabelFormat={{hour:'2-digit', minute:'2-digit'}}
                slotDuration='00:30:00'
                slotLabelInterval={{hour: 1}}  
                allDaySlot={false}
                contentHeight={100}
                initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                select={handleDateSelect}
                eventContent={renderEventContent} // custom render function
                eventClick={handleEventClick}
                eventsSet={handleEvents}

            />
        </div>
    )
};

