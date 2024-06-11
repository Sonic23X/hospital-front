const firebascTodo = {
    
    methods:{
        retrieveTodos() {
          this.$store.dispatch('firebase_todo/retrieveTodos');
        },
        taskcomplete(id,status) {
          this.$store.dispatch('firebase_todo/taskcomplete', id);
          this.retrieveTodos();
  
          if(status !== 'complete')
            this.$toast.show(' tasks marked as complete.', { theme: 'outline',position: 'top-right', type: 'success', duration: 2000 });
          else
            this.$toast.show(' tasks marked as incomplete.', { theme: 'outline',position: 'top-right', type: 'error', duration: 2000 });
        },
        alltaskcomplete() {
          this.$store.dispatch('firebase_todo/alltaskcomplete',this.markallread);
          this.markallread =! this.markallread;
          if(this.markallread)
            this.$toast.show('All tasks marked as Incomplete.',{ theme:'outline',position: 'top-right', type : 'error',duration:2000 });
          else
            this.$toast.show('All tasks marked as complete.',{ theme:'outline',position: 'top-right', type : 'success',duration:2000 });
        },
        tododelete(id) {
          this.$store.dispatch('firebase_todo/tododelete', id);
          this.retrieveTodos();
          this.$toast.show('Task has been deleted.',{ theme:'outline',position: 'top-right', type : 'success',duration:2000 });
        },
        addnewtask() {
          if(this.task !== '') {
            this.$store.dispatch('firebase_todo/addtodo', this.task);
            this.task = '';
            this.addtask = false;
            
            this.$toast.show('Task list is updated.',{ theme:'outline',position: 'top-right', type : 'success',duration:2000 });
            this.retrieveTodos();
          }
  
        }
      }
 }
   
   export default firebascTodo