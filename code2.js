$('.activeonglet').css({'font-weight':'bolder',"background-color":"#25262560","border-radius":"30px"});


$('.storyentiere').hide();
$('.story-une-img').on('click', function(){
    $('header').hide();
    $('footer').hide();
    $('body').addClass('storymode');
    var story = $(this).attr('title');
    console.log(story);
    $('.storyentiere').hide();
    $('#' + story).show();


});

$(".menu").on("click", function() {
    $(".popup-parametre-overlay, .popup-parametre-content").addClass("opened");
  
  });

  $(".croixparametre").on("click", function() {
    $(".popup-parametre-overlay, .popup-parametre-content").removeClass("opened");
  });

$('.croix').on('click', closestory);
function closestory(){
    $('.storyentiere').hide();
    $('.storyprofile').hide();
    $('header').show();
    $('footer').show();
    $('body').removeClass('storymode');
    if ($(window).width() > 960) {
      $('header').hide();
    $('footer').hide();
  }};

  $('.prev').on('click', function(){
    $('.storyentiere').hide();
    var thisstory = $(this).attr('title');
    $('#' + thisstory).prev().fadeIn();
    if($('#' + thisstory).prev().hasClass('start')){
      closestory();
    }
  });
  
  $('.next').on('click', function(){
      $('.storyentiere').hide();
      var thisstory2 = $(this).attr('title');
      $('#' + thisstory2).next().fadeIn();
      if($('#' + thisstory2).next().hasClass('end')){
        closestory();
      }
  
    
  });




if($('.post').hasClass('post-feed-testformulaire')){

    $('.slider-single-testformulaire').hide();
    $('#slider-1-testformulaire').show();
    $('.bullet-1-testformulaire').addClass('bullet-active');
    $('.prev-testformulaire').on('click', function(){
      $('.slider-single-testformulaire').hide();
      var postimgprev = $(this).attr('id');
      $('.bullet-' + postimgprev + '-testformulaire').removeClass('bullet-active');
      if(postimgprev<2){
        $('#slider-4-testformulaire').show();
        $('.bullet-4-testformulaire').addClass('bullet-active');
      }
      else{
        $('#slider-' + postimgprev + '-testformulaire').prev().show();
        $('.bullet-' + postimgprev +'-testformulaire').prev().addClass('bullet-active');
      }
      
    });

    $('.next-testformulaire').on('click', function(){
        
      $('.slider-single-testformulaire').hide();
      var nextimgpost = $(this).attr('id');
      $('.bullet-' + nextimgpost + '-testformulaire').removeClass('bullet-active');
      if(nextimgpost>3){
        
        $('#slider-1-testformulaire').show();
        $('#bullet-1').addClass('bullet-active');
      }
      else{
        $('#slider-' + nextimgpost + '-testformulaire').next().show();
        $('.bullet-' + nextimgpost + '-testformulaire').next().addClass('bullet-active');
      }
    

      
  
    });  
    i = 0;

    $('.like-testformulaire').on("click", function() {
      if($('.like-testformulaire').hasClass('liked')){
        i = i - 1;
        $('.like-testformulaire').removeClass('liked');
        $(this).children().attr('src','./img/heart.png');
        
    
        if(i==0){
          $('.compteur-like-testformulaire').text('');
          
          
        }
      }
    
    
      else{
        i = i + 1;
        $('.like-testformulaire').addClass('liked');
        $(this).children().attr('src','./img/heart-red.png');
        $('.compteur-like-testformulaire').text('Aimé par ' + i + ' personne(s).');
        $('.compteur-like-testformulaire').css({'display':'block','width':'100vw'});
    
      } });
    $('.test').html("Découvrez ce projet d'intégration réalisé dans le cadre d'un exercice personnel ! </br> <a href='https://github.com/KhTaeron/exerciceform'> Lien vers le GitHub </a></br></br>Afin de concevoir ce site, je me suis basée sur un webdesign fourni sur Figma.<br>J'ai rencontré quelques difficultés, notamment sur le positionnement. En effet, les positionnements ne sont pas parfaits et méritent d'être corrigés: j'aurais du utiliser les valeurs de viewport plutôt que le pourcentage afin d'optimiser la responsivité.");
};

if($('.post').hasClass('post-feed-ptf')){

    $('.slider-single-ptf').hide();
    $('#slider-1-ptf').show();
    $('.bullet-1-ptf').addClass('bullet-active');
    $('.prev-ptf').on('click', function(){
      $('.slider-single-ptf').hide();
      var postimgprev = $(this).attr('id');
      $('.bullet-' + postimgprev + '-ptf').removeClass('bullet-active');
      if(postimgprev<2){
        $('#slider-4-ptf').show();
        $('.bullet-4-ptf').addClass('bullet-active');
      }
      else{
        $('#slider-' + postimgprev + '-ptf').prev().show();
        $('.bullet-' + postimgprev + '-ptf').prev().addClass('bullet-active');
      }
      
    });

    $('.next-ptf').on('click', function(){
      $('.slider-single-ptf').hide();

      var nextimgpost = $(this).attr('id');
      $('.bullet-' + nextimgpost + '-ptf').removeClass('bullet-active');
      if(nextimgpost>3){
        $('#slider-1-ptf').show();
        $('.bullet-1-ptf').addClass('bullet-active');
      }
      else{
        $('#slider-' + nextimgpost + '-ptf').next().show();
        $('.bullet-' + nextimgpost + '-ptf').next().addClass('bullet-active');
      }
    

  
    });  
    $('.ptf').html('Découvrez dès maintenant mon premier portfolio et le parcours de création ! &#10024; </br> <a href="https://portfolioenolatellier.000webhostapp.com/">Lien vers le portfolio</a>');

    i = 0;

    $('.like-ptf').on("click", function() {
      if($('.like-ptf').hasClass('liked')){
        i = i - 1;
        $('.like-ptf').removeClass('liked');
        $(this).children().attr('src','./img/heart.png');
        
    
        if(i==0){
          $('.compteur-like-ptf').text('');
          
          
        }
      }
    
    
      else{
        i = i + 1;
        $('.like-ptf').addClass('liked');
        $(this).children().attr('src','./img/heart-red.png');
        $('.compteur-like-ptf').text('Aimé par ' + i + ' personne(s).');
        $('.compteur-like-ptf').css({'display':'block','width':'100vw'});
    
      } });
};

if($('.post').hasClass('post-feed-colonie')){

    $('.slider-single-colonie').hide();
    $('#slider-1-colonie').show();
    $('.bullet-1-colonie').addClass('bullet-active');
    $('.prev-colonie').on('click', function(){
      $('.slider-single-colonie').hide();
      var postimgprev = $(this).attr('id');
      $('.bullet-' + postimgprev + '-colonie').removeClass('bullet-active');
      if(postimgprev<2){
        $('#slider-4-colonie').show();
        $('.bullet-4-colonie').addClass('bullet-active');
      }
      else{
        $('#slider-' + postimgprev + '-colonie').prev().show();
        $('.bullet-' + postimgprev + '-colonie').prev().addClass('bullet-active');
      }
      
    });

    $('.next-colonie').on('click', function(){
      $('.slider-single-colonie').hide();

      var nextimgpost = $(this).attr('id');
      $('.bullet-' + nextimgpost + '-colonie').removeClass('bullet-active');
      if(nextimgpost>3){
        $('#slider-1-colonie').show();
        $('.bullet-1-colonie').addClass('bullet-active');
      }
      else{
        $('#slider-' + nextimgpost + '-colonie').next().show();
        $('.bullet-' + nextimgpost + '-colonie').next().addClass('bullet-active');
      }
    

  
    });  
    

    i = 0;

    $('.like-colonie').on("click", function() {
      if($('.like-colonie').hasClass('liked')){
        i = i - 1;
        $('.like-colonie').removeClass('liked');
        $(this).children().attr('src','./img/heart.png');
        
    
        if(i==0){
          $('.compteur-like-colonie').text('');
          
          
        }
      }
    
    
      else{
        i = i + 1;
        $('.like-colonie').addClass('liked');
        $(this).children().attr('src','./img/heart-red.png');
        $('.compteur-like-colonie').text('Aimé par ' + i + ' personne(s).');
        $('.compteur-like-colonie').css({'display':'block','width':'100vw'});
    
      } });

      $('.colonie').html("Découvrez le design du site La Colonie des Crapules, une association de protection animale ( Loi 1901 ). &#128049; </br> Je me suis occupée de la boutique, des pages de dons et de soutien. Je me suis également occupée de l'accueil ! &#128522; <a href='https://www.figma.com/file/7W0uJAmB2CJWGq8Qs1CGf7/Crapule?node-id=0%3A1&t=qjxeFxdFAsMk2HBF-1'> Lien vers le Figma</a>"); 
};


if($('.post').hasClass('post-feed-dsh')){

    $('.slider-single-dsh').hide();
    $('#slider-1-dsh').show();
    $('.bullet-1-dsh').addClass('bullet-active');
    $('.prev-dsh').on('click', function(){
      $('.slider-single-dsh').hide();
      var postimgprev = $(this).attr('id');
      $('.bullet-' + postimgprev + '-dsh').removeClass('bullet-active');
      if(postimgprev<2){
        $('#slider-4-dsh').show();
        $('.bullet-4-dsh').addClass('bullet-active');
      }
      else{
        $('#slider-' + postimgprev + '-dsh').prev().show();
        $('.bullet-' + postimgprev + '-dsh').prev().addClass('bullet-active');
      }
      
    });

    $('.next-dsh').on('click', function(){
      $('.slider-single-dsh').hide();

      var nextimgpost = $(this).attr('id');
      $('.bullet-' + nextimgpost + '-dsh').removeClass('bullet-active');
      if(nextimgpost>3){
        $('#slider-1-dsh').show();
        $('.bullet-1-dsh').addClass('bullet-active');
      }
      else{
        $('#slider-' + nextimgpost + '-dsh').next().show();
        $('.bullet-' + nextimgpost + '-dsh').next().addClass('bullet-active');
      }
    

  
    });  
   

    i = 0;

    $('.like-dsh').on("click", function() {
      if($('.like-dsh').hasClass('liked')){
        i = i - 1;
        $('.like-dsh').removeClass('liked');
        $(this).children().attr('src','./img/heart.png');
        
    
        if(i==0){
          $('.compteur-like-dsh').text('');
          
          
        }
      }
    
    
      else{
        i = i + 1;
        $('.like-dsh').addClass('liked');
        $(this).children().attr('src','./img/heart-red.png');
        $('.compteur-like-dsh').text('Aimé par ' + i + ' personne(s).');
        $('.compteur-like-dsh').css({'display':'block','width':'100vw'});
    
      } });

      $('.dsh').html('Découvrez le dashboard reprenant les données des indicateurs du COVID-19 dans le département du Nord. &#128202; </br> Le travail était orienté sur le traitement de données et non le design. Site non responsive ! </br></br> Travail réalisé en projet tutauré. </br> <a href="https://tellieno.tpweb.univ-rouen.fr/SAE303/vaccin.php"> Lien vers le site web uniquement université </a></br><a href="https://github.com/KhTaeron/sae303">Lien vers le GitHub</a></br><a href="./dashboardtest.html">Lien vers le code source</a>'); 
    };

    if($('.post').hasClass('post-feed-neo')){

        $('.slider-single-neo').hide();
        $('#slider-1-neo').show();
        $('.bullet-1-neo').addClass('bullet-active');
        $('.prev-neo').on('click', function(){
          $('.slider-single-neo').hide();
          var postimgprev = $(this).attr('id');
          $('.bullet-' + postimgprev + '-neo').removeClass('bullet-active');
          if(postimgprev<2){
            $('#slider-4-neo').show();
            $('.bullet-4-neo').addClass('bullet-active');
          }
          else{
            $('#slider-' + postimgprev + '-neo').prev().show();
            $('.bullet-' + postimgprev + '-neo').prev().addClass('bullet-active');
          }
          
        });
    
        $('.next-neo').on('click', function(){
          $('.slider-single-neo').hide();
    
          var nextimgpost = $(this).attr('id');
          $('.bullet-' + nextimgpost + '-neo').removeClass('bullet-active');
          if(nextimgpost>3){
            $('#slider-1-neo').show();
            $('.bullet-1-neo').addClass('bullet-active');
          }
          else{
            $('#slider-' + nextimgpost + '-neo').next().show();
            $('.bullet-' + nextimgpost + '-neo').next().addClass('bullet-active');
          }
        
    
      
        });  
       
    
        i = 0;
    
        $('.like-neo').on("click", function() {
          if($('.like-neo').hasClass('liked')){
            i = i - 1;
            $('.like-neo').removeClass('liked');
            $(this).children().attr('src','./img/heart.png');
            
        
            if(i==0){
              $('.compteur-like-neo').text('');
              
              
            }
          }
        
        
          else{
            i = i + 1;
            $('.like-neo').addClass('liked');
            $(this).children().attr('src','./img/heart-red.png');
            $('.compteur-like-neo').text('Aimé par ' + i + ' personne(s).');
            $('.compteur-like-neo').css({'display':'block','width':'100vw'});
        
          } });
    
          $('.neo').html("Découvrez ce projet et l'évènement de Neopolis à travers cette brève présentation.<br> Le site a été développé avec le CMS WordPress </br></br>Travail réalisé en projet tutauré.</br><a href='https://prezi.com/view/v1CxbtV4VWRifpXUnl8W/'>Lien vers la présentation du projet</a><br></br>Vous souhaitez voir un peu plus de cette interface ? Suivez les liens suivants !</br> &#128680; Attention, ce n'est que le code source donc les plugins ne sont pas fonctionnels &#128680;</br></br><a href='./neopolistest2.html'>Lien vers l'accueil</a></br><a href='./neopolistest.html'>Lien vers une page de présentation</a>"); 
        };




   


      if ($(window).width() <= 960){

        $(".notif").on("click", function() {
          $(".notifications-main").addClass("opened");
          $(".notif-cc").css('display','flex');
        });
        };
        
      if ($(window).width() > 960){

        $('.notif').on("click", function(){
        
          if($('.notif').hasClass('opened')){
            $('.notifications-main, .notif').removeClass('opened');
            $('.aside-content').removeClass('cliqué');
            $(".notif-cc").css('display','none');
            $(".img-heart").attr('src','./img/heart.png');
            $('.activeonglet').css('background-color','#25262560');
          }
        
          else{
            $('.notifications-main, .notif').addClass('opened');
            $('.aside-content').addClass('cliqué');
            $(".notif-cc").css('display','flex');
            $(".img-heart").attr('src','./img/heart-fill.png');
            $('.activeonglet').css('background-color','transparent');
          }
          
        
        });
        };