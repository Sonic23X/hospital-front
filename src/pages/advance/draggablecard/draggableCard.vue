<template>
<Breadcrumbs main="Bonus Ui" title="Draggable Card"/>
    <div class="container-fluid">
              <draggable class="row" >
				<div class="col-sm-12 col-md-6 col-xl-6 " v-for="element in cards" :key="element" >   
					<div class="card" >
						<div class="card-header pb-0" v-html="element.title"></div>
						<div class="card-body">
							<p v-text="element.description"></p>
						</div>
					</div>
				</div> 
        </draggable>
    </div>
    
</template>
<script>
import { VueDraggableNext } from 'vue-draggable-next'
  export default {
    components:{
       draggable: VueDraggableNext,
    },
    data(){
      return {
        cards:[
          {
            title:'<h5>Basic Card</h5>',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
          },
          {
            title:'<h5>Flat Card</h5>',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
          },
          {
            title:'<h5>Without shadow Card</h5>',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
          },
          {
            title:'<h5><i class="icon-move mr-2"></i> Icon in Heading</h5>',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
          },
          {
            title:'<h5>Card sub Title</h5><span>Using the <a href="#">card</a> component, you can extend the default collapse behavior to create an accordion.</span>',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
          },
          {
            title:'<h5>Card sub Title</h5><span>Using the <a href="#">card</a> component, you can extend the default collapse behavior to create an accordion.</span>',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
          }
        ]
      };
    }
  };
</script>