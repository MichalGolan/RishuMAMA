import FullCalendar, { CalendarApi } from "@fullcalendar/react"
import { EventApi, DateSelectArg, EventClickArg, EventContentArg, formatDate, EventInput} from "@fullcalendar/core"
import timeGridPlugin from '@fullcalendar/timegrid'

import './WeekView.css'
import { INITIAL_EVENTS, createEventId } from "./EventsUtils"
import { LegacyRef, useEffect, useState } from "react"
import {DayOfWeek, fixLectureTimeToWeekViewDate, Lecture} from "../../data/api/lectures"
import React from "react"
import '@fullcalendar/react/dist/vdom'
import {useGetActiveCoursesLecturesQuery} from "../../data/queries/useGetActiveCoursesLectures";
import {CourseLight} from "../../data/api/courses";

import eventClasses from './event.module.css';

interface Props {
    activeCourses: Array<CourseLight>;
    courseIdToTitle: Function;
}

let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export default function WeekView (props: Props) {
    const calendarRef:LegacyRef<FullCalendar> = React.createRef();
    const {data: lectures, refetch: refetchLectures} = useGetActiveCoursesLecturesQuery(props.activeCourses.map(course => course.id));
    const [events, setEvents] = useState<EventInput[]>([]);
    const [activeLectures, setActiveLectures] = useState<Array<Lecture>>([]);

    useEffect(() => {
        refetchLectures();
    }, [props.activeCourses])

    useEffect(() => {
      const filteredLectures: Lecture[] = [];
      lectures?.forEach((lecture) => {
        if (!checkCollidingLectures(lecture) && !checkParallelLectureChosen(lecture)) {
          filteredLectures.push(lecture);
        }
      })
      const filteredEvents = getEvents(filteredLectures? filteredLectures : [])
      setEvents(filteredEvents);
    }, [lectures, activeLectures])

    // check if Lecture colliding with lecture that was chosen ; true:collide
    function checkCollidingLectures(lecture: Lecture) : boolean {
      let colliding: boolean = false;
      activeLectures.forEach((activeLec) => {
        if (lecture.id !== activeLec.id && checkCollision(lecture, activeLec)) {
          colliding = true
          return;
        }
      })
      return colliding;
    }

    function checkCollision(lecture: Lecture, activeLec:Lecture) : boolean {
        if(lecture.day !== activeLec.day) return false;
        function isHour1LessThanHour2(hour1: string, hour2: string){
            const [h1, m1] = hour1.split(':').map(Number);
            const [h2, m2] = hour2.split(':').map(Number);

            if(h1 < h2){
                return true;
            } else if(h1 > h2){
                return false;
            } else {
                return m1 < m2;
            }
        }

        return isHour1LessThanHour2(lecture.startTime, activeLec.endTime) &&
            isHour1LessThanHour2(activeLec.startTime, lecture.endTime)
    }
    
    // check if Lecture is from a course that other lecture of it was chosen
    function checkParallelLectureChosen(lecture: Lecture) : boolean {
      let parallel: boolean = false;
      activeLectures?.forEach((activeLec) => {
        if (lecture.id !== activeLec.id &&  lecture.courseId === activeLec.courseId ) {
          parallel = true;
        }
      })
      return parallel;    
    }
    
    function getEvents (myLectures: Lecture[]) : EventInput[] {
        return myLectures.map(lecture => {
            return {
                id: lecture.id.toString(),
                title: props.courseIdToTitle(lecture.courseId),
                start: fixLectureTimeToWeekViewDate(lecture.startTime, lecture.day),
                end: fixLectureTimeToWeekViewDate(lecture.endTime, lecture.day),
                extendedProps: {
                    lecturer: lecture.lecutrer,
                    color: '#6082B6'
                }
            }
        });
    }

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
        const isActive = (activeLectures
            .find(lecture => lecture.id.toString() === eventContent.event.id))
        let eventClass = `${eventClasses.event} ${isActive ? eventClasses.active : ''}`

        const thisLecture =
            lectures?.find(lecture => lecture.id.toString() === eventContent.event.id);

        if(thisLecture) {
            // if the event is NOT active AND it collides with another event, give it a red border
            let colliding: boolean = false;
            lectures?.forEach((lecture) => {
                if (thisLecture.id !== lecture.id && checkCollision(thisLecture, lecture)) {
                    colliding = true
                    return;
                }
            })

        if(!isActive && colliding)
            eventClass += ' colliding';
        }

        if(isActive){
            eventContent.backgroundColor = eventContent.event.extendedProps.color;
            eventContent.textColor = '#fff';
        }

        else {
            eventContent.backgroundColor = '#F5F5F5';
            eventContent.textColor = 'black';
        }

        return (
          <div className={eventClass}>
            <p>{eventContent.event.title}</p>
            <p style={{direction: 'ltr'}}>{eventContent.timeText}</p>
            <p>{eventContent.event.extendedProps.lecturer}</p>
          </div>
        )
    }

    
    const handleEventClick = (clickInfo: EventClickArg) => {
      if (confirm(`Are you sure you want to modify this Lecture '${clickInfo.event.title}'`)) {
        const selectedLecture = lectures?.find((lecture) => lecture.id.toString() === clickInfo.event.id);
        if(selectedLecture){
          
          if (activeLectures.includes(selectedLecture)) {
            setActiveLectures(activeLectures.filter(lecture => lecture.id !== selectedLecture.id));
          }
          else {
            setActiveLectures([...activeLectures, selectedLecture])
          }
        }
        // clickInfo.event.remove()
      }
    }

    return (
        <div className="fc-time-grid fc-slats">
            <FullCalendar
                // ref={calendarRef}
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
                //eventColor={'red'}
                //eventBorderColor={'blue'}
                //eventBackgroundColor={'gray'}
                slotLabelFormat={{hour:'2-digit', minute:'2-digit'}}
                height= 'auto'
                slotDuration='00:30:00'
                slotLabelInterval={{hour: 1}}
                allDaySlot={false}
                slotEventOverlap={false}
                contentHeight={100}
                // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                // select={handleDateSelect}
                eventContent={renderEventContent} // custom render function
                eventClick={handleEventClick}
                // eventsSet={handleEvents}
                events={events}
            />
        </div>
    )
};



