import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from '@fullcalendar/timegrid'
import './WeekView.css'
interface Props {}
export default function WeekView (props: Props) {
    return (
        <div className="fc-time-grid fc-slats">
            <FullCalendar
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
            
            />
        </div>
    )
};

