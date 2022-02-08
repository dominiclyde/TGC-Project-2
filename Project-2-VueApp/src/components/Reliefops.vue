<template>
  <div class="mx-5">
    <h1>Post a Relief Operation</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Title Post:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="title"
          placeholder="Enter Title for Operation"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Location:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.location"
          placeholder="Enter Location"
          required
        ></b-form-input>
        <label for="example-datepicker">Input date:</label>
        <b-form-datepicker
          id="example-datepicker"
          v-model="form.date"
          class="mb-2"
          required
        >
        </b-form-datepicker>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="Type of Relief Operation:"
        label-for="input-3"
      >
        <b-form-select
          id="input-3"
          v-model="form.type"
          :options="type"
          required
        ></b-form-select>
      </b-form-group>
      <hr />

      <b-form-group
        id="input-group-4"
        label="Name of Individual/Organization:"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Contact No:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.contact"
          placeholder="Enter Contact Number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Type of Organization"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-radio-group
          v-model="form.type2"
          id="checkboxes-4"
          label="Type of Organization"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-radio value="Individual">Individual</b-form-radio>
          <b-form-radio value="Private">Private Organization</b-form-radio>
          <b-form-radio value="Government"
            >Government Organization</b-form-radio
          >
        </b-form-radio-group>
      </b-form-group>
      <hr />

      <b-form-group label="Description">
        <b-form-textarea
          id="textarea"
          label="Description"
          v-model="form.description"
          placeholder="Enter description..."
          required
          rows="4"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-form-checkbox
        id="checkbox-1"
        v-model="status1"
        name="checkbox-1"
        required
        value="accepted"
        unchecked-value="not_accepted"
      >
        I accept the terms and conditions.
      </b-form-checkbox>

      <b-form-checkbox
        id="checkbox-2"
        v-model="status2"
        name="checkbox-2"
        value="accepted"
        unchecked-value="not_accepted"
      >
        I would like to receive email updates.
      </b-form-checkbox>

      <br />

      <b-button v-on:click="addReliefop" type="submit" variant="primary"
        >Submit</b-button
      >
      <b-button type="reset" variant="danger" class="mx-2"
        >Reset</b-button
      > </b-form
    ><br />

    <!-- v-b-modal.modal-1 -->
    <b-modal id="modal-1" title="Emergency Alert has been posted.">
      <p class="my-4">
        Your Emergency Alert has been posted successfully on the wall.
      </p>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
         title: "",
        location: "",
        date: "",
        type: [],
        name: "",
        contact: "",
        type2: [],
        description: "",
      },
      type: [
        { text: "Select One", value: null },
        "Food Distribution",
        "Water Distribution",
        "Electricity Distribution",
        "Monetary Assistance",
        "Medical Assistance",
        "Other Operations",
      ],
      show: true,
    };
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    addReliefop:function (){
      this.$emit("add-reliefop", 
      this.form.title, 
      this.form.location,
      this.form.date,
      this.form.type,
      this.form.name,
      this.form.contact,
      this.form.type2,
      this.form.description,

      );
      this.$emit("new-reliefops-added")
    },


    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.title = "";
      this.form.location = "";
      this.form.date = "";
      this.form.type = [];
      this.form.name = "";
      this.form.contact = "";
      this.form.type2 = [];
      this.form.description = "";
      this.status1 = "";
      this.status2 = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>