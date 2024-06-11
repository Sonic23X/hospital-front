<template>
  <div class="customizer-header ">
    <i class="icon-close" @click="closecustomizer()"></i>
    <h5>Preview Settings</h5>
    <p class="mb-0">Try It Real Time <i class="fa fa-thumbs-o-up txt-primary"></i></p>
    <button type="button" class="btn btn-primary plus-popup mt-2" data-bs-toggle="modal" data-bs-target="#configModal">
      Configuration
    </button>
    <teleport to='body'>
      <div class="modal fade" id="configModal" tabindex="-1" aria-labelledby="configModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="configModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-header modal-copy-header">
              <h5 class="headerTitle mb-0">Customizer configuration</h5>
            </div>
            <div class="modal-body">
              <div class="config-popup">
                <p>
                  To replace our design with your desired theme. Please do
                  configuration as mention
                </p>
                <p>
                  <b>Path : src > data > layout.json</b>
                </p>
                <div>
                  <pre>
										<code>
										
											{{ layout }}
										</code>
									</pre>
                </div>
                <button class="btn btn-primary mt-2" @click="copyText()">
                  Copy Json
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" class="btn btn-primary">Ok</button>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      customizer: (state) => state.menu.customizer,
      data: (state) => JSON.stringify(state.layout.layout),
      layout: (state) => state.layout.layout,
    }),
  },
  methods: {
    closecustomizer() {
      this.$store.state.menu.customizer = '';
    },
    copyText() {

      this.$refs.textarea.select();
      document.execCommand('cut');
      this.textarea = '';
      alert('cut');

    },
  },
}
</script>
