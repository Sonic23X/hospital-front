<template>
    <div class="col-md-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Custom checkbox</h5>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-12">
                        <h5 class="mb-0">Custom checkbox</h5>
                      </div>
                      <div class="col">
                        <div class="mb-3 m-t-15">
                          <div class="form-check checkbox mb-0">
                            <input class="form-check-input" id="checkbox1" type="checkbox">
                            <label class="form-check-label" for="checkbox1">Default</label>
                          </div>
                          <div class="form-check checkbox mb-0">
                            <input class="form-check-input" id="checkbox2" type="checkbox" disabled="">
                            <label class="form-check-label" for="checkbox2">Disabled</label>
                          </div>
                          <div class="form-check checkbox mb-0">
                            <input class="form-check-input" id="checkbox3" type="checkbox" checked="">
                            <label class="form-check-label" for="checkbox3">Checked</label>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <h5 class="mb-0">Checkbox states</h5>
                      </div>
                      <div class="col">
                        <div class="mb-3 m-t-15">
                          <div class="form-check checkbox checkbox-primary mb-0">
                            <input class="form-check-input" id="checkbox-primary-1" type="checkbox">
                            <label class="form-check-label" for="checkbox-primary-1">Success state</label>
                          </div>
                          <div class="form-check checkbox checkbox-secondary mb-0">
                            <input class="form-check-input" id="checkbox-dark" type="checkbox" disabled="">
                            <label class="form-check-label" for="checkbox-dark">Brand state</label>
                          </div>
                          <div class="form-check checkbox checkbox-success mb-0">
                            <input class="form-check-input" id="checkbox-primary" type="checkbox">
                            <label class="form-check-label" for="checkbox-primary">primary state</label>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <h5 class="mb-0">Inline checkbox</h5>
                      </div>
                      <div class="col">
                        <div class="m-t-15 m-checkbox-inline">
                          <div class="form-check form-check-inline checkbox checkbox-dark mb-0">
                            <input class="form-check-input" id="inline-1" type="checkbox">
                            <label class="form-check-label" for="inline-1">Option<span class="digits"> 1</span></label>
                          </div>
                          <div class="form-check form-check-inline checkbox checkbox-dark mb-0">
                            <input class="form-check-input" id="inline-2" type="checkbox">
                            <label class="form-check-label" for="inline-2">Option<span class="digits"> 2</span></label>
                          </div>
                          <div class="form-check form-check-inline checkbox checkbox-dark mb-0">
                            <input class="form-check-input" id="inline-3" type="checkbox">
                            <label class="form-check-label" for="inline-3">Option<span class="digits"> 3</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>