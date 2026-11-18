/**
 * Utilities to generate Google Calendar links and download .ics files
 * for wedding events.
 */

// Convert ISO date string to UTC format YYYYMMDDTHHmmssZ
function formatUTC(isoString) {
  const date = new Date(isoString);
  const pad = (n) => String(n).padStart(2, '0');
  return (
    date.getUTCFullYear() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    'T' +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    'Z'
  );
}

/**
 * Generate a direct Google Calendar add event link
 */
export function getGoogleCalendarUrl(event, coupleName = "हृदयांश राहुल संग हृदयांशी शिल्पा") {
  const start = formatUTC(event.startISO);
  const end = formatUTC(event.endISO);
  const title = encodeURIComponent(`${event.title} - ${coupleName} विवाह`);
  const details = encodeURIComponent(
    `${event.poeticLine}\n\nतारीख: ${event.dateDevanagari}\nसमय: ${event.timeDevanagari}\nस्थान: ${event.venueText}`
  );
  const location = encodeURIComponent(event.venueText);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
}

/**
 * Generate and download an .ics file for Apple Calendar, Outlook, etc.
 */
export function downloadIcsFile(event, coupleName = "हृदयांश राहुल संग हृदयांशी शिल्पा") {
  const start = formatUTC(event.startISO);
  const end = formatUTC(event.endISO);
  const summary = `${event.title} - ${coupleName} विवाह`;
  const description = `${event.poeticLine} | तारीख: ${event.dateDevanagari} समय: ${event.timeDevanagari}`;
  const location = event.venueText;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Rahul and Shilpa Vivah//Indore Wedding//IN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${event.id}-${Date.now()}@rahulshilpa-vivah.in`,
    `DTSTAMP:${formatUTC(new Date().toISOString())}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `${event.id}-rahul-shilpa-vivah.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(link.href);
}
