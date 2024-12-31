// Función para formatear la fecha y hora
function formatDate(startStr, endStr) {
  // Crear objetos Date
  let startDate = new Date(startStr);
  let endDate = new Date(endStr);
  
  // Opciones para formatear la fecha
  let dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  let timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };

  // Obtener partes formateadas de la fecha y hora
  let formattedStartDate = new Intl.DateTimeFormat('en-US', dateOptions).format(startDate);
  let formattedEndDate = new Intl.DateTimeFormat('en-US', dateOptions).format(endDate);
  let formattedStartTime = new Intl.DateTimeFormat('en-US', timeOptions).format(startDate);
  let formattedEndTime = new Intl.DateTimeFormat('en-US', timeOptions).format(endDate);

  // Comprobar si las fechas son del mismo día
  if (formattedStartDate === formattedEndDate) {
    // Comprobar si las horas son las mismas
    if (formattedStartTime === formattedEndTime) {
      return `${formattedStartDate}`;
    } else {
      return `${formattedStartDate} ⋅ ${formattedStartTime} – ${formattedEndTime}`;
    }
  } else {
    // Comprobar si las horas son las mismas
    if (formattedStartTime === formattedEndTime) {
      return `${formattedStartDate} – ${formattedEndDate}`;
    } else {
      return `${formattedStartDate} ⋅ ${formattedStartTime} – ${formattedEndDate} ⋅ ${formattedEndTime}`;
    }
  }
}

export default function CustomEventModal({calendarEvent}) {
  const colorName = calendarEvent.calendarId ?? 'primary'
  return (
    <div style={{padding: '1rem', borderRadius: '1rem'}}>
      <h2>Evento</h2>
      <ul>
        <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="currentColor" style={{color: `var(--sx-color-${colorName}-container)`, filter: `brightness(1.7)`}}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3z" /></svg>
          {calendarEvent.title}
        </li>
        <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12l3 2" /><path d="M12 7v5" /></svg>
          <small>{formatDate(calendarEvent.start, calendarEvent.end)}</small>
        </li>
        <hr style={{opacity: '0.1', margin: '0.5rem 0'}} />
        <li style={{marginTop: '0.5rem'}}>
          <small>{calendarEvent.description}</small>
        </li>
      </ul>
    </div>
  )
}
