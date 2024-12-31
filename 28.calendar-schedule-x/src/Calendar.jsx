import { useEffect, useState } from 'react'
import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createResizePlugin } from '@schedule-x/resize'
import { createEventModalPlugin } from '@schedule-x/event-modal'
 
 
import '@schedule-x/theme-default/dist/index.css'
function Calendar() {
  const eventsService = useState(() => createEventsServicePlugin())[0]
 
  const calendar = useCalendarApp({
    locale: 'es-ES',
    isDark: true,
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    plugins: [eventsService, createEventModalPlugin(), createDragAndDropPlugin(), createResizePlugin()]
  })
 
  useEffect(() => {
    eventsService.getAll()
  }, [])

  // Agrega un evento
  calendar.eventsService.add({
    title: 'Event 1',
    description: 'This is a test event 1',
    start: '2024-12-30',
    end: '2025-01-01',
    id: 1
  })

  calendar.eventsService.add({
    title: 'Event 2',
    description: 'This is a test event 2',
    start: '2025-01-02',
    end: '2025-01-03',
    id: 2
  })
   
  // Obtiene el evento por su id
  const date = calendar.eventsService.get(1) 
  console.log({date});
   
  // Obtiene todos los eventos
  const allDates = calendar.eventsService.getAll()
  console.log({allDates});
   
  // Actualiza un evento
  calendar.eventsService.update({
    title: 'Event updated',
    description: 'This is a test event updated',
    start: '2025-01-02',
    end: '2025-01-03',
    id: 1
  })
   
  // Elimina un evento
  calendar.eventsService.remove(2)
 
  return (
    <div id='calendar'>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  )
}
 
export default Calendar