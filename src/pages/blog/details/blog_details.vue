<template>
     <Breadcrumbs main="Blog" title="Blog Details" />
      <div class="container-fluid blog-page">
            <div class="row">
                   <div class="col-xxl-6 set-col-12 box-col-5 xl-40">
                <div class="card">
                  <div class="blog-box blog-shadow"><img class="img-fluid bg-img-cover" src="../../../assets/images/blog/blog.jpg" alt="">
                    <div class="blog-details">
                      <p>25 July 2023</p>
                      <h4>Accusamus et iusto odio dignissimos ducimus qui blanditiis.</h4>
                      <ul class="blog-social">
                        <li><i class="icofont icofont-user"></i>Mark Jecno</li>
                        <li><i class="icofont icofont-thumbs-up"></i>02 Hits</li>
                        <li><i class="icofont icofont-ui-chat"></i>598 Comments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <blogList/>
              <detailsView/>
            </div>
      </div>
</template>
<script>
import blogList from "./blogList.vue"
import detailsView from "./detailsView.vue"
export default {
      components:{
            blogList,
            detailsView
      }
}
</script>