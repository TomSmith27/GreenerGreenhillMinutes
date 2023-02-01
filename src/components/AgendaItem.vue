<template>
  <table class="spacey">
    <thead>
    <tr>
      <th class="w-3/12"></th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td class="align-text-top"><strong> Agenda Item: </strong></td>
      <td><strong class="">{{ agendaItem.title }}</strong></td>
    </tr>
    <tr>
      <td class="align-text-top"><strong>Discussion: </strong></td>
      <td>{{ agendaItem.discussion }}</td>
    </tr>
    <tr>
      <td class="align-text-top"><strong>Conclusions: </strong></td>
      <td> {{ agendaItem.conclusions }}</td>
    </tr>
    </tbody>
  </table>

  <table class="w-full">
    <thead>
    <tr class="text-left">
      <th class="w-6/12">Action Items</th>
      <th class="w-6/12">Person Responsible</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="action in agendaItem.actions">
      <td class="flex">
        <div class="flex items-center mr-2">
          <CheckCircleIcon class="h-6 w-6" />
        </div>
        {{ action.action }}
      </td>
      <td>{{ action.person }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>

defineProps({
  agendaItem: {
    type: Object,
    required: true
  }

})


import { CheckCircleIcon } from "@heroicons/vue/24/outline"

</script>