<template>
  <div class="modal fade modal-bookmark" id="bookmarkModal" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Task</h5>
          <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
        </div>
        <div class="modal-body">
          <form class="form-bookmark needs-validation" id="bookmark-form" novalidate>
            <div class="form-row">
              <div class="form-group col-md-12 m-b-20">
                <label for="task-title">Task Title</label>
                <input class="form-control" id="task-title" type="text" required autocomplete="off">
              </div>
              <div class="form-group col-md-12 m-b-20">
                <label for="sub-task">Sub task</label>
                <input class="form-control" id="sub-task" type="text" required autocomplete="off">
              </div>
              <div class="form-group col-md-12 m-b-20">
                <div class="d-flex date-details">
                  <div class="d-inline-block">
                    <label class="d-block mb-0">
                      <input class="checkbox_animated" type="checkbox">Remind on
                    </label>
                  </div>
                  <div class="d-inline-block">
                    <input class="datepicker-here form-control digits" type="text" data-language="en" placeholder="Date">
                  </div>
                  <div class="d-inline-block">
                    <select class="form-control">
                      <option>7:00 am</option>
                      <option>7:30 am</option>
                      <option>8:00 am</option>
                      <option>8:30 am</option>
                      <option>9:00 am</option>
                      <option>9:30 am</option>
                      <option>10:00 am</option>
                      <option>10:30 am</option>
                      <option>11:00 am</option>
                      <option>11:30 am</option>
                      <option>12:00 pm</option>
                      <option>12:30 pm</option>
                      <option>1:00 pm</option>
                      <option>2:00 pm</option>
                      <option>3:00 pm</option>
                      <option>4:00 pm</option>
                      <option>5:00 pm</option>
                      <option>6:00 pm</option>
                    </select>
                  </div>
                  <div class="d-inline-block">
                    <label class="d-block mb-0">
                      <input class="checkbox_animated" type="checkbox">Notification
                    </label>
                  </div>
                  <div class="d-inline-block">
                    <label class="d-block mb-0">
                      <input class="checkbox_animated" type="checkbox">Mail
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-group col m-b-20">
                  <select class="js-example-basic-single">
                    <option value="task">My Task</option>
                  </select>
                </div>
                <div class="form-group col m-b-20">
                  <select class="js-example-disabled-results" id="bm-collection">
                    <option value="general">General</option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-12 my-0 m-b-20">
                <textarea class="form-control" required autocomplete="off">  </textarea>
              </div>
            </div>
            <input id="index_var" type="hidden" value="6">
            <button class="btn btn-secondary me-2" id="Bookmark" @click.prevent="_blank" type="submit">Save</button>
            <button class="btn btn-primary" type="button" data-bs-dismiss="modal">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>