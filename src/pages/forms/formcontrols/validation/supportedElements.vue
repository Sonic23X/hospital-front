<template>
    <div class="card">
                  <div class="card-header pb-0">
                    <h5>Supported elements</h5><span>Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.</span><span>While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.</span>
                  </div>
                  <div class="card-body">
                    <form class="was-validated">
                      <div class="mb-3">
                        <label class="form-label" for="validationTextarea">Textarea</label>
                        <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required=""></textarea>
                        <div class="invalid-feedback">Please enter a message in the textarea.</div>
                      </div>
                      <div class="form-check mb-3">
                        <input class="form-check-input" id="validationFormCheck1" type="checkbox" required="">
                        <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
                        <div class="invalid-feedback">Example invalid feedback text</div>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" id="validationFormCheck2" type="radio" name="radio-stacked" required="">
                        <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
                      </div>
                      <div class="form-check mb-3">
                        <input class="form-check-input" id="validationFormCheck3" type="radio" name="radio-stacked" required="">
                        <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
                        <div class="invalid-feedback">More example invalid feedback text</div>
                      </div>
                      <div class="mb-3">
                        <select class="form-select" required="" aria-label="select example">
                          <option value="">Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div class="invalid-feedback">Example invalid select feedback</div>
                      </div>
                      <div>
                        <input class="form-control" type="file" aria-label="file example" required="">
                        <div class="invalid-feedback">Example invalid form file feedback</div>
                      </div>
                    </form>
                  </div>
                </div>
</template>