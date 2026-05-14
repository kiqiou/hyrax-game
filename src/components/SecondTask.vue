<template>
  <div class="calendar-app">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import type { MyEvent } from '../types/events.js'; 

const events = ref<MyEvent[]>([
  { 
    id: '1', 
    title: 'Встреча с клиентом', 
    start: new Date().toISOString(),
    color: '#3788d8' 
  },
  { 
    id: '2', 
    title: 'Колл по проекту', 
    start: '2026-03-30T14:30:00', 
    end: '2026-04-01T16:00:00',
    color: '#ff9f89' 
  }
])

const calendarOptions = ref({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: 'timeGridWeek',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  locale: 'ru', 
  editable: true,
  selectable: true, 
  events: events.value, 
  
  select: (info: any) => {
    const title = prompt('Введите название события:')
    if (title) {
      const newEvent: MyEvent = {
        id: String(Date.now()),
        title,
        start: info.startStr,
        end: info.endStr,
        color: '#4caf50'
      }
      events.value.push(newEvent)
    }
  },

  eventClick: (info: any) => {
    alert(`Событие: ${info.event.title}\nНачало: ${info.event.start.toLocaleString()}`)
  }
})
</script>

<style scoped>
.calendar-app {
  font-family: Arial, sans-serif;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
}

:deep(.fc-timegrid-slot) {
  height: 50px !important; 
}
</style>
