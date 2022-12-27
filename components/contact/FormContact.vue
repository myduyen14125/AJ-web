<template>
  <div>
   <form class="form-wrapper mx-auto" action="#" method="POST">
    <div class="d-flex">
      <div class="col-lg-6">
        <div class="form-group">
          <label for="name">
            Name 
            <span class="text-danger __label">*</span>
          </label>
          <input type="text" class="form-control" name="name" placeholder="Enter your name" required/>
        </div>
        <div class="form-group mt-4">
          <label for="phone">
            Phone 
            <span class="text-danger __label">*</span>
          </label>
          <input type="text" class="form-control" name="phone" placeholder="Enter your phone" required/>
        </div>
        <div class="form-group mt-4">
          <label for="message">
            Message 
            <span class="text-danger __label">*</span>
          </label>
          <textarea class="form-control" name="message" rows="5" placeholder="Enter your message" required></textarea>
        </div> 
        <!-- Button submit -->
        <div class="form-group mt-4">
          <button type="submit" class="btn-custom btn-blue" @click="submitForm">Submit form</button>
        </div>
      </div>

      <!-- Col right -->
      <div class="col-lg-6">
        <div class="form-group">
          <label for="email">
            Email 
            <span class="text-danger __label">*</span>
          </label>
          <input type="email" class="form-control" name="email" placeholder="Enter your email" required/>
        </div>
        <!-- Select role -->
        <div class="form-group mt-4">
          <label for="role">Subject 
            <span class="text-danger __label">*</span></label>
          <v-select
            class="style-chooser"
            placeholder="Choose Subject"
            :options="options"
          />
            
        </div>
      </div>
    </div>
    </form>
  </div>
</template>
<script>

export default {
  name: 'FormContact',
  props: {
    submit: {
      type: Function,
      default: () => {},
    },
  },
  setup() {
    const options = [
      'Feature web app',
      'Support query',
      'Something hehe',
      'Yuu Haki',
      'Haruto Sake'
    ];
    const data = {
      name: '',
      email: '',
      phone: '',
      message: '',
      role: '',
    };
    
    return {
      options, data
    };
  },
};
</script>
<style lang="scss" scoped>
.form-group {
  label {
    font-size: 14px;
  }
  input {
    width: 292px;
  }
}

</style>