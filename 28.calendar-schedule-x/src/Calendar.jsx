import { useEffect, useState } from 'react'
import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import { createViewDay, createViewMonthAgenda, createViewMonthGrid, createViewWeek,} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createResizePlugin } from '@schedule-x/resize'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import { createCalendarControlsPlugin } from '@schedule-x/calendar-controls'
import { createEventRecurrencePlugin } from '@schedule-x/event-recurrence'
import { createScrollControllerPlugin } from '@schedule-x/scroll-controller'
import { createCurrentTimePlugin } from '@schedule-x/current-time'
 
import '@schedule-x/theme-default/dist/index.css'
import './calendar.css'

function Calendar({ darkMode }) {
  const eventsService = useState(() => createEventsServicePlugin())[0]
  const calendarControls = useState(() => createCalendarControlsPlugin())[0]
  const scrollController = useState(() => createScrollControllerPlugin({initialScroll: '07:50'}))[0]

  const calendar = useCalendarApp({
    // Configuración del calendario
    locale: 'es-ES',
    isDark: darkMode,

    // Modos de visualización
    views: [
      createViewDay(), 
      createViewWeek(), 
      createViewMonthGrid(), 
      createViewMonthAgenda()
    ],

    // Funcionalidades
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

    // Eventos predefinidos
    events: [
      {
        id: 123,
        title: 'Evento recurrente',
        description: 'Evento recurrente a partir del 31 de diciembre de 2025, de 2pm hasta las 3pm, fecuencia semanal, cada 2 semanas, los días lunes y miércoles, hasta el 19 de febrero de 2025.',
        start: '2024-12-31 14:00',
        end: '2024-12-31 15:00',
        rrule: 'FREQ=WEEKLY;INTERVAL=2;BYDAY=TU,FR;UNTIL=20250219T235959'
      }
    ],

    // Estilos de los calendarios
    calendars: {
      proyects: {
        colorName: 'Proyectos',
        lightColors: {
          main: '#1c7df9',
          container: '#d2e7ff',
          onContainer: '#002859',
        },
        darkColors: {
          main: '#c0dfff',
          onContainer: '#dee6ff',
          container: '#426aa2',
        },
      },
    },
  })
 
  useEffect(() => {
    eventsService.getAll()
    calendarControls.setView('week')

    setTimeout(() => {
      scrollController.scrollTo('13:00')
    }, 1000)
  }, [])

  useEffect(() => {
    const sxWrapper = document.querySelector('#calendar .sx__calendar-wrapper') ?? null
    if (sxWrapper) sxWrapper.classList.toggle('is-dark', darkMode)
  }, [darkMode])

  useEffect(() => {
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

    calendar.eventsService.add({
      title: 'Event 3',
      description: 'This is a test event 3',
      start: '2024-12-31 06:00',
      end: '2024-12-31 10:00',
      calendarId: 'proyects',
      id: 3
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
  },[])
 
  return (
    <div id='calendar'>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  )
}
 
export default Calendar