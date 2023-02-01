<script setup>
import AgendaItem from "./components/AgendaItem.vue";

const agendaItems = [
  {
    title: "Introduction and background to Greener Greenhill group for new members.",
    discussion: "Explanation of the three steering groups within the overall group. Description of previous activities such as the oral care Terracycle collection scheme, now the blister pack recycling scheme.",
    conclusions: "	How can we share the load? Does anyone go to Rotherham anyway and could sometimes drop off the recycling? Or can we take turns on the trips? What is the end product of the blister pack recycling? How long does it last? Can we get a sample to use as a visual aid? Can it be recycled again at end of life?",
    actions: [{
      action: "Post on Facebook to recruit some volunteers",
      person: "Poppy via Lindy"
    },
      {
        action: "Research the blister pack recycling to find answers to the questions above.",
        person: "Brian Jones"
      }
    ]
  },
  {
    title: "Kerbside recycling in Sheffield",
    discussion: "	Why does our kerbside recycling differ to different areas? How can that be changed? Why are we able to recycle so few things compared to other areas? What happens to our waste after it has been collected? Recycling survey open currently",
    conclusions: "	We need more information from Veolia. We also want some information to use for the future exhibition ‘what happens to our waste?’. Potentially could we have a representative come and give a talk?",
    actions: [
      {
        action: "Conduct research into Veolia and their practices to get the answers to the above.",
        person: "Poppy and Brian"
      },
      {
        action: "Once we have the above info start creating the exhibition",
        person: "Jean and Graham"
      },
      {
        action: "Promote the link to the Sheffield Recycling Survey on Facebook",
        person: "Poppy via Lindy"
      }
    ]
  },
  {
    title: "Coffee Bag recycling",
    discussion: "Morrisons are going to start recycling coffee bags. Taylors of Harrogate is the partner but any brand of flexible plastic coffee packaging will be accepted.",
    conclusions: "When is this starting? Not date shown on Terracycle website. How can we publicise this? Should we set up additional, even-more-local, collections?",
    actions: [
      {
        action: "Talk to Mick Smith to get more info and learn about his plans for another collection point",
        person: "Graham"
      },
    ]
  },
  {
    title: "Kids Party Pack Loan",
    discussion: "Following the example of others we could create a party kit (i.e. 30 plates, bowls, platters, jugs etc) that gets loaned out for kids events to save waste from using disposable items. Most local one to us was Hillsborough but recently a school in Meersbrook has just set this up.",
    conclusions: "Let’s research how the local school has set this up, costs, time needed, and see if it’s something we want to pursue.",
    actions: [
      {
        action: "Talk to local school for details and bring to next meeting",
        person: "Poppy"
      },
    ]
  }

]


</script>

<template>
  <div class="container mx-auto py-5 px-8 md:px-3">
    <div class="flex justify-between items-center">
      <div>
        <span class="text-3xl font-bold text-green-700">Greener Greenhill</span>
        <span class="mx-2 text-2xl">-</span>
        <span class="text-lg"> Waste and Recycling Steering Group</span>
      </div>
      <div class="text-right">
        <div>31 Jan 2023</div>
        <div>19.30</div>
        <div>58 Old Park Rd</div>
      </div>
    </div>
    <hr class="border-1 border-black my-2" />
    <div class="flex">
      <div class="w-6/12 flex">
        <strong class="w-6/12">Facilitator:</strong>
        <span>Graham Marsden</span>
      </div>
      <div class="w-6/12 flex">
        <strong class="w-6/12">Note taker:</strong>
        <span>Poppy Smith</span>
      </div>
    </div>
    <hr class="border-1 border-black my-2" />
    <div class="flex">
      <strong class="w-4/12">Attendees:</strong>
      <span>Graham Marsden, Jean Compton, Brian Adams, Neil Hick, Brian Jones, Susan Williams, Poppy Smith</span>
    </div>
    <div class="text-center italic text-xl font-bold my-2">Minutes</div>
    <hr class="border-1 border-black my-2" />

    <div v-for="agendaItem in agendaItems">
      <AgendaItem :agenda-item="agendaItem" />
      <hr class="border-1 border-black my-8" />

    </div>

  </div>
</template>

<style scoped lang="scss">


/** {
  border: 1px solid green;
}*/
</style>
