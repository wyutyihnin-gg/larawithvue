<style>
.widget-user-header {
  background-position: center center;
  background-size: cover !important;
  height: 250px !important;
}
</style>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-3">
        <div class="card card-widget widget-user">
          <!-- Add the bg color to the header using any of the bg-* classes -->
          <div
            class="widget-user-header text-white"
            style="background: url('./img/user-cover.jpg') center center"
          >
            <h3 class="widget-user-username text-right">Elizabeth Pierce</h3>
            <h5 class="widget-user-desc text-right">Web Designer</h5>
          </div>
          <div class="widget-user-image">
            <img class="img-circle" src="/img/profile.png" alt="User Avatar" />
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">3,200</h5>
                  <span class="description-text">SALES</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">13,000</h5>
                  <span class="description-text">FOLLOWERS</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4">
                <div class="description-block">
                  <h5 class="description-header">35</h5>
                  <span class="description-text">PRODUCTS</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
        </div>
        <!-- /.col -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header p-2">
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link" href="#activity" data-toggle="tab"
                    >Activity</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#settings" data-toggle="tab"
                    >Settings</a
                  >
                </li>
              </ul>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <div class="tab-content">
                <div class="tab-pane" id="activity"></div>

                <div class="tab-pane active" id="settings">
                  <form class="form-horizontal">
                    <div class="form-group row">
                      <label for="inputName" class="col-sm-2 col-form-label"
                        >Name</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="name"
                          v-model="form.name"
                          class="form-control"
                          id="inputName"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="inputEmail" class="col-sm-2 col-form-label"
                        >Email</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="email"
                          v-model="form.email"
                          class="form-control"
                          id="inputEmail"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="inputExperience"
                        class="col-sm-2 col-form-label"
                        >Experience</label
                      >
                      <div class="col-sm-10">
                        <textarea
                          class="form-control"
                          id="inputExperience"
                          placeholder="Experience"
                        ></textarea>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="inputSkills" class="col-sm-2 col-form-label"
                        >Profile</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="file"
                          class="form-control"
                          id="photo"
                          name="photo"
                          @change="onImageChange"
                          accept=".jpg, .jpeg, .png"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="inputPassport" class="col-sm-2 col-form-label"
                        >Passport (leave emply if anything not changing)</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          id="passport"
                          name="passport"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="offset-sm-2 col-sm-10">
                        <button
                          @click.prevent="updateInfo"
                          type="submit"
                          class="btn btn-danger"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <!-- /.tab-pane -->
              </div>
              <!-- /.tab-content -->
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        id: "",
        name: "",
        email: "",
        password: "",
        type: "",
        bio: "",
        photo: "",
      }),
    };
  },
  methods: {
    updatedInfo() {
      this.form
        .put("/api/user/")
        .then((res) => {
          Swal.fire("Updated!", "Information has been updated!", "success");
          this.$Progress.finish();
        })
        .catch(() => {
          this.$Progress.fail();
          console.log("Update user failed");
        });
    },
    onImageChange(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
        this.form.photo = reader.result;
      };
      reader.readAsDataURL(file);
    },
  },
  mounted() {
    console.log("Component mounted.");
  },
  created() {
    axios.get("api/profile").then(({ data }) => {
      this.form.fill(data);
    });
  },
};
</script>
