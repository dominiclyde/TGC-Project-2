<template>
  <div class="mx-3" style="justify-content: center" >
    <!-- For Emergency -->

    <h1 style="text-align: center">All Emergencies</h1>
    <hr />

    <!-- <p>{{JSON.stringify(emergencies)}}</p> -->

    <div class="container mx">
      <div class="row">
        <div class="col">
          <b-card
            :title="emergency.label"
            img-src="https://www.clipartkey.com/mpngs/m/294-2947814_clip-art-e-uk-transp-red-emergency-logo.png"
            img-alt="Image"
            img-top
            tag="article"
            style="
              max-width: 25rem;
              min-width: 20rem;
              max-height: 100rem;
              min-height: 0rem;
              vertical-align: top;
              display: inline-block;
              margin: 10px;
            "
            class="mb-2 shadow p-3 mb-5 bg-white rounded col"
            border-variant="danger"
            v-for="emergency in emergencies"
            :key="emergency.label"
          >
            <b-card-text>
              <h2 style="text-transform: uppercase">{{ emergency.title }}</h2>
              <ul>
                <li>
                  Location: <u> {{ emergency.location }} </u>
                </li>
                <li>
                  Date: <u>{{ emergency.date }}</u>
                </li>
                <li>
                  Type of Emergency: <u>{{ emergency.type }}</u>
                </li>
                <li>
                  Name of Contact: <u>{{ emergency.name }}</u>
                </li>
                <li>
                  Contact no: <u>{{ emergency.contact }}</u>
                </li>
                <li>
                  Type of Contact: <u>{{ emergency.type2 }}</u>
                </li>
                <li>
                  Description:<u> {{ emergency.description }}</u>
                </li>
              </ul>
            </b-card-text>

            <b-button v-on:click="editForm" variant="primary">Edit</b-button>
            <b-button v-on:click="deleteForm" variant="danger" 
            class="mx-2" >Delete</b-button>
          </b-card>
        </div>
      </div>
    </div>
    <br />

    <!-- For Relief Operations -->

    <h1 style="text-align: center">All Relief Operations</h1>
    <hr />

    <div class="container" style="justify-content: center">
      <div class="row">
        <div class="col">
          <b-card
            :title="reliefop.label"
            img-src="https://images.squarespace-cdn.com/content/v1/6129699a2e254668a613fc2f/8d8d4707-3d8d-4cc5-87f1-a667c4ae56c6/Final+Rise+Relief+Logo-SS-02.png"
            img-alt="Image"
            img-top
            tag="article"
            style="
              max-width: 25rem;
              min-width: 20rem;
              max-height: 100rem;
              min-height: 0rem;
              vertical-align: top;
              display: inline-block;
              justify-content: center;
              margin: 10px;
            "
            class="mb-2 shadow p-3 mb-5 bg-white rounded col"
            border-variant="primary"
            v-for="reliefop in reliefops"
            :key="reliefop.label"
          >
            <b-card-text>
              <h2 style="text-transform: uppercase">{{ reliefop.title }}</h2>
              <ul>
                <li>
                  Location: <u> {{ reliefop.location }} </u>
                </li>
                <li>
                  Date: <u>{{ reliefop.date }}</u>
                </li>
                <li>
                  Type of Operation: <u>{{ reliefop.type }}</u>
                </li>
                <li>
                  Name of Contact: <u>{{ reliefop.name }}</u>
                </li>
                <li>
                  Contact no: <u>{{ reliefop.contact }}</u>
                </li>
                <li>
                  Type of Contact: <u>{{ reliefop.type2 }}</u>
                </li>
                <li>
                  Description:<u> {{ reliefop.description }}</u>
                </li>
              </ul>
            </b-card-text>

            <b-button href="#" variant="primary">Edit</b-button>
            <b-button  variant="danger" class="mx-2"
              >Delete</b-button
            > </b-card
          ><br />
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>

export default {
  props: ["Emergency", "emergencies", "reliefops"],
};

// methods: {
//     editForm: function (emergency) {
//       let index = this.emergency.findIndex(emergency.title);
//       this.$set(this.emergency, title,
//       location,
//       date,
//       type,
//       name,
//       contact,
//       type2,
//       description);
//     },
//     deleteForm: function (emergency) {
//       let index = this.emergency.findIndex(emergency.title);
//       this.emergency.splice(title,
//       location,
//       date,
//       type,
//       name,
//       contact,
//       type2,
//       description);
//     },
//   },
// };

</script>