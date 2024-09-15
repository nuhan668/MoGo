// nav Animation
$(window).scroll(function(){

  var scrolling = $(this).scrollTop();
  if(scrolling > 200){
    $('.navbar').addClass('navbg');
  }else{
    $('.navbar').removeClass('navbg');
  }

});

// counterup
$('.counter').counterUp({
  delay: 10,
  time: 1000
});


// slick-slider


$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    },
    {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
  ]
});


// 
{/* <div class="row">
      <div class="col-lg-4">
        <div class="team-item">
          <img src="images/team.1.jpg" alt="" class="img-fluid w-100">
          <div class="team-overlay">
          <div class="team-icon">
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest-p"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
          </div>
        </div>
        <div class="team-name text-center">
          <h5>matthew dix</h5>
          <p>Graphic Design</p>
        </div>
      </div>
      
<div class="col-lg-4">
        <div class="team-item">
          <img src="images/team.2.jpg" alt="" class="img-fluid w-100">
          <div class="team-overlay">
          <div class="team-icon">
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest-p"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
          </div>
        </div>
        <div class="team-name text-center">
          <h5>Christopher Campbell</h5>
          <p>Branding/UX design</p>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="team-item">
          <img src="images/team.3.jpg" alt="" class="img-fluid w-100">
          <div class="team-overlay">
          <div class="team-icon">
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest-p"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
          </div>
        </div>
        <div class="team-name text-center">
          <h5>Michael Fertig </h5>
          <p>Developer</p>
        </div>
        <div class="col-lg-4">
          <div class="team-item">
            <img src="images/team.2.jpg" alt="" class="img-fluid w-100">
            <div class="team-overlay">
            <div class="team-icon">
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-pinterest-p"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
            </div>
          </div>
          <div class="team-name text-center">
            <h5>Christopher Campbell</h5>
            <p>Branding/UX design</p>
          </div>
        </div>
      </div>
    </div> --> */}