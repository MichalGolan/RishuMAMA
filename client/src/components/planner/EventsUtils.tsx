import { EventInput } from '@fullcalendar/core'

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
    {
        id: createEventId(),
        title: 'Michal event',
        start: todayStr + 'T13:15:00',
        end:  todayStr + 'T15:00:00',
        extendedProps: {
            lecturer:"michal",
            
        }

      },
  {
    id: createEventId(),
    title: 'Michal event',
    start: todayStr + 'T12:15:00',
    end:  todayStr + 'T15:00:00',
    extendedProps: {lecturer:"omer"}

  }

]

export function createEventId() {
  return String(eventGuid++)
}