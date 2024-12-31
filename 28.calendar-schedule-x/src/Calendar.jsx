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
import { createCalendarControlsPlugin } from '@schedule-x/calendar-controls'
import { createEventRecurrencePlugin } from '@schedule-x/event-recurrence'
import { createScrollControllerPlugin } from '@schedule-x/scroll-controller'
 
import '@schedule-x/theme-default/dist/index.css'
import { createCurrentTimePlugin } from '@schedule-x/current-time'

function Calendar() {
  const eventsService = useState(() => createEventsServicePlugin())[0]
  const calendarControls = useState(() => createCalendarControlsPlugin())[0]
  const scrollController = useState(() => createScrollControllerPlugin({initialScroll: '07:50'}))[0]

  const calendar = useCalendarApp({
    locale: 'es-ES',
    isDark: true,
    views: [
      createViewDay(), 
      createViewWeek(), 
      createViewMonthGrid(), 
      createViewMonthAgenda()],
    plugins: [
      eventsService, 
      calendarControls, 
      scrollController,
      createEventModalPlugin(), 
      createDragAndDropPlugin(), 
      createResizePlugin(),
      createEventRecurrencePlugin(),
      createCurrentTimePlugin()
    ],
    events: [
      {
        id: 123,
        title: 'Evento recurrente',
        description: 'Evento recurrente a partir del 31 de diciembre de 2025, de 2pm hasta las 3pm, fecuencia semanal, cada 2 semanas, los días lunes y miércoles, hasta el 19 de febrero de 2025.',
        start: '2024-12-31 14:00',
        end: '2024-12-31 15:00',
        rrule: 'FREQ=WEEKLY;INTERVAL=2;BYDAY=TU,FR;UNTIL=20250219T235959',
      }
    ]
  })
 
  useEffect(() => {
    eventsService.getAll()
    calendarControls.setView('week')

    setTimeout(() => {
      scrollController.scrollTo('13:00')
    }, 1000)
  }, [])

  // Agrega un evento
  calendar.eventsService.add({
    title: 'Event 1',
    description: 'This is a test event 1',
    start: '2025-11-30',
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