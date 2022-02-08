<template>
  <!-- header navbar -->
  <div id="nav" style="font-weight: 500" class="">
    <b-navbar
      type="light"
      style="
        background-color: aliceblue;
        justify-content: center;
        text-align: center;
      "
      class="shadow-sm p-3 mb-2"
    >
      <b-navbar-brand
        class="mx-2 my-1"
        href="#"
        style="color: black; font-weight: 900; font-size: 900"
      >
        <h5>
          <img
            src="https://malasakitbayanihan.org/application/files/thumbnails/small/7616/3757/3912/Malasakit_at_Bayanihan_Logo_High_Resolution.png"
            width="200px"
          />
          <br />
          <hr />
          PH Emergency & Relief Operation Drive
        </h5></b-navbar-brand
      ></b-navbar
    ><br />

    <!-- mid navbar -->
    <b-navbar
      type="light"
      variant="white"
      tabs
      align="center"
      style="size: 10; justify-content: center; position: sticky"
      class="shadow p-3 mb-5 bg-white rounded"
    >
      <b-button
        variant="outline-success"
        v-on:click="goHome"
        class="my-2 my-sm-2 mx-3"
        type="submit"
        >Bayanihan Wall</b-button
      >
      <b-button
        variant="outline-danger"
        v-on:click="goEmergency"
        class="my-2 my-sm-2 mx-3"
        type="submit"
        >Report an Emergency</b-button
      >
      <b-button
        variant="outline-primary"
        v-on:click="goReliefops"
        class="my-2 my-sm-2 mx-3"
        type="submit"
        >Post a Relief Operations</b-button
      >
    </b-navbar>

    <br />
    <!-- <div class="alert alert-success my-5 mx-2" v-if="status"> A new Emergency has been added.</div> -->

    <!-- main content -->
    <home
      v-if="page == 'home'"
      v-bind:emergencies="emergencies"
      v-bind:reliefops="reliefops"
    />

    <emergency
      v-if="page == 'emergency'"
      @add-emergency="addEmergency"
      v-on:new-emergency-added="emergencyAdded"
    />

    <reliefops
      v-if="page == 'reliefops'"
      @add-reliefop="addReliefop"
      v-on:new-reliefops-added="reliefAdded"
    />

    <!-- alert -->
    <div
      class="alert alert-danger alert-dismissable my-5 mx-3"
      v-if="status"
      style="height: 100px; text-align: center"
    >
      <h4>{{ status }}</h4>
    </div>
    <div
      class="alert alert-primary alert-dismissable my-5 mx-3"
      v-if="status2"
      style="height: 100px; text-align: center"
    >
      <h4>{{ status2 }}</h4>
    </div>

    <!-- footer navbar -->
    <b-navbar
      type="light"
      style="background-color: aliceblue; justify-content: center"
      class=" "
    >
      <b-navbar-brand class="" style="color: black"
        ><h6>
          <center>
            <b>Malasakit@Bayanihan</b> <br />
            PH Emergency & Relief Operation Drive
            <p>by Dominic Clyde Tampus @ 2022 <br /></p>
          </center></h6></b-navbar-brand
    ></b-navbar>
  </div>
</template>

<script>
import Home from "./components/Home";
import Emergency from "./components/Emergency";
import Reliefops from "./components/Reliefops";
// import func from '../vue-temp/vue-editor-bridge';
export default {
  name: "App",
  components: {
    Home,
    Emergency,
    Reliefops,
  },
  data: function () {
    return {
      page: "home",
      emergencies: [
        {
          title: "URGENT NEED FOR DRINKING WATER!!",
          location: "Barangay Poblacion Cebu City",
          date: "2022-01-19",
          type: "Loss of Services/Utilities",
          name: "Juan Dela Cruz",
          contact: "09123456789",
          type2: "Individual",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
          title: "NEED FOR HYGIENE KIT & CLOTHING!!",
          location: "Barangay Basak Mandaue City",
          date: "2022-01-10",
          type: "Loss of Services/Utilities",
          name: "City of Mandaue",
          contact: "09123456789",
          type2: "Government",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
          title: "NEED FOR HOSPITAL NURSES!!",
          location: "Cebu Provincial Hospital, Danao City",
          date: "2022-01-20",
          type: "Medical Assistance",
          name: "Cebu Province",
          contact: "09123456789",
          type2: "Government",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
          title: "NEED FOR VACCINATORS!!",
          location: "IV Hospital, Carcar City",
          date: "2022-01-20",
          type: "Medical Assistance",
          name: "IV Group",
          contact: "09123456789",
          type2: "Private",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
          title: "TREE BLOCKING THE ROAD!!",
          location: "NRA, Mandaue City",
          date: "2022-01-25",
          type: "Public Works",
          name: "Juan dela Cruz",
          contact: "09123456789",
          type2: "Private",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
      ],

      reliefops: [
        {
          title: "GROCERY PACKS FROM SAVEMORE!!",
          location: "Barangay Capitol Cebu City",
          date: "2022-01-05",
          type: "Food Distribution",
          name: "SM Cebu",
          contact: "09123456789",
          type2: "Private",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
          title: "FREE DRINKING WATER!!",
          location: "Carcar Gym, Carcar City",
          date: "2022-01-05",
          type: "Water Distribution",
          name: "SM Cebu",
          contact: "09123456789",
          type2: "Private",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
          title: "FREE CHARGING FOR ELECTRONICS!!",
          location: "Parkmall, Mandaue City",
          date: "2022-02-05",
          type: "Other Operations",
          name: "Parkmall ",
          contact: "09123456789",
          type2: "Private",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
          title: "MEDICAL CHECK-UP FOR SENIOR CITIZEN!!",
          location: "Cebu Doctors, Mandaue City",
          date: "2022-02-08",
          type: "Medical Assistance",
          name: "Cebu Doctors Group ",
          contact: "09123456789",
          type2: "Private",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
          title: "FREE BREAKFAST FOR FRONTLINERS!!",
          location: "Jolibee, Cebu City",
          date: "2022-02-10",
          type: "Medical Assistance",
          name: "Jolibee Group ",
          contact: "09123456789",
          type2: "Private",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
      ],
      status: "",
    };
  },
  methods: {
    goEmergency: function () {
      this.page = "emergency";
      this.status = "";
      this.status2 = "";
    },
    goReliefops: function () {
      this.page = "reliefops";
      this.status = "";
      this.status2 = "";
    },
    goHome: function () {
      this.page = "home";
      this.status = "";
      this.status2 = "";
    },
    emergencyAdded: function () {
      this.page = "home";
      this.status = "A New Emergency has been added.";
    },
    reliefAdded: function () {
      this.page = "home";
      this.status2 = "A New Relief Operation has been added.";
    },
    addEmergency(
      title,
      location,
      date,
      type,
      name,
      contact,
      type2,
      description
    ) {
      this.emergencies.push({
        title: title,
        location: location,
        date: date,
        type: type,
        name: name,
        contact: contact,
        type2: type2,
        description: description,
      });
    },

    addReliefop(
      title,
      location,
      date,
      type,
      name,
      contact,
      type2,
      description
    ) {
      this.reliefops.push({
        title: title,
        location: location,
        date: date,
        type: type,
        name: name,
        contact: contact,
        type2: type2,
        description: description,
      });
    },
  },
};
</script>

<style>
</style>
