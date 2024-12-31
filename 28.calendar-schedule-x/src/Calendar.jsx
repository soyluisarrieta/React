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
import CustomEventModal from './CustomEventModal'

function Calendar({ darkMode }) {
  const eventsService = useState(() => createEventsServicePlugin())[0]
  const calendarControls = useState(() => createCalendarControlsPlugin())[0]
  const scrollController = useState(() => createScrollControllerPlugin({initialScroll: '07:50'}))[0]

  const addEvent = (calendar, dateTime) => {
    const totalEvents = eventsService.getAll().length
    eventsService.add({
      id: totalEvents + 1,
      title: '(Sin título)',
      start: dateTime,
      end: dateTime,
    })
  }

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
      projects: {
        colorName: 'projects',
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

    // Eventos de fondo
    backgroundEvents: [
      {
        title: 'Out of office',
        start: '2025-01-03',
        end: '2025-01-03',
        style: {
          backgroundImage: 'repeating-linear-gradient(45deg, #ccc, #ccc 5px, transparent 5px, transparent 10px)',
          opacity: 0.5,
        },
      },
      {
        title: 'Out of office',
        start: '2025-01-02 00:00',
        end: '2025-01-02 02:00',
        style: {
          background: 'linear-gradient(45deg, #f91c45, #1c7df9)',
          opacity: 0.5,
        },
      },
      {
        title: 'Holiday',
        start: '2025-01-05',
        end: '2025-01-07',
        style: {
          backgroundImage: 'repeating-linear-gradient(45deg, #1cf9b0, #1cf9b0 5px, transparent 5px, transparent 10px)',
          opacity: 0.5,
        },
      }
    ],

    // Manejadores de eventos
    callbacks: {
      onRangeUpdate(range) {
        console.log('onRangeUpdate', range);
      },
   
      onEventUpdate(updatedEvent) {
        console.log('onEventUpdate', updatedEvent)
      },
   
      onBeforeEventUpdate(oldEvent, newEvent, $app) {
        console.log('onBeforeEventUpdate', {oldEvent, newEvent, $app});
        return true
      },
   
      onEventClick(calendarEvent) {
        const time = calendarEvent.start.split(' ')[1]
        time && scrollController.scrollTo(time)
        console.log('onEventClick', calendarEvent)
      },
   
      onDoubleClickEvent(calendarEvent) {
        console.log('onDoubleClickEvent', calendarEvent)
      },
   
      onClickDate(date) {
        console.log('onClickDate', date)
        addEvent(date, date)
      },
   
      onClickDateTime(dateTime) {
        console.log('onClickDateTime', dateTime)
        addEvent(dateTime, dateTime)
      },
   
      onClickAgendaDate(date) {
        console.log('onClickAgendaDate', date)
        addEvent(date, date)
      },
   
      onDoubleClickAgendaDate(date) {
        console.log('onDoubleClickAgendaDate', date) 
      },
   
      onDoubleClickDate(date) {
        console.log('onClickDate', date)
      },
   
      onDoubleClickDateTime(dateTime) {
        console.log('onDoubleClickDateTime', dateTime) 
      },
   
      onClickPlusEvents(date) { // NO SÉ PARA QUÉ SIRVE
        console.log('onClickPlusEvents', date) 
      },
   
      onSelectedDateUpdate(date) {
        console.log('onSelectedDateUpdate', date)
      },
   
      isCalendarSmall($app) {
        console.log('isCalendarSmall', $app);
        return $app.elements.calendarWrapper?.clientWidth < 500
      },
   
      beforeRender($app) {
        const range = $app.calendarState.range.value
        console.log('beforeRender', {start: range.start, end: range.end})
      },
   
      onRender($app) {
        console.log('onRender', $app)
      },
    },
  })
 
  useEffect(() => {
    eventsService.getAll()
    calendarControls.setView('week')
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
      calendarId: 'projects',
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
      <ScheduleXCalendar calendarApp={calendar} customComponents={{eventModal: CustomEventModal}} />
    </div>
  )
}
 
export default Calendar