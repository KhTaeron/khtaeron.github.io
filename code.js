$(document).ready(function(){

$('.gallery').hide();

$('.footer-info').on('click', function(){
}); 
$( '.onglet-info' ).on( 'click', function () {
    var oldclick = $( '.onglet' ).find( '.onglet-info.active' );
    if(oldclick.hasClass('dev')){ var src = './img/dev-icon-white.png'; oldclick.children().attr('src',src);}
	if(oldclick.hasClass('ux')){ var src = './img/ux-icon.png'; oldclick.children().attr('src',src);}
    if(oldclick.hasClass('autres')){ var src = './img/web-icon.png'; oldclick.children().attr('src',src);}
    oldclick.removeClass( 'active' );
    
	$( this ).addClass( 'active' );
    if($(this).hasClass('dev')){ var srcblue = './img/dev-blue.png' };
    if($(this).hasClass('ux')){ var srcblue = './img/ux-blue.png' };
    if($(this).hasClass('autres')){ var srcblue = './img/web-blue.png' };
    $(this).children().attr('src',srcblue);

    
});

$('.gallery').hide();
$('.gallery:first').show();

$('.onglet-info').on('click', function () {
  if ($(this).hasClass('dev')) {
    $('.gallery').hide();
    $('#devOnglet').show();
  }
  if ($(this).hasClass('ux')) {
    $('.gallery').hide();
    $('#uxOnglet').show();
  }
  if ($(this).hasClass('autres')) {
    $('.gallery').hide();
    $('#autresOnglet').show();
  }
});

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

$('.storyprofile').hide();
$('.profile-icon').on('click', function(){
    $('header').hide();
    $('footer').hide();
    $('body').addClass('storymode');
    $('.storyprofile').show();
    $('.profile-icon').css('background-image','none');
    $('.profile-icon').css('border-color','#3d4240');
});

$('.croix , .header-story span').on('click', closestory);

function closestory(){
  $('.storyentiere').hide();
  $('.storyprofile').hide();
  $('header').show();
  $('footer').show();
  $('body').removeClass('storymode');
  if ($(window).width() > 960) {
    $('header').hide();
  $('footer').hide();
}

};

$('.prev').on('click', function(){
  $('.storyentiere').hide();
  var thisstory = $(this).attr('title');
  $('#' + thisstory).prev().fadeIn();
});

$('.next').on('click', function(){
    $('.storyentiere').hide();
    var thisstory2 = $(this).attr('title');
    $('#' + thisstory2).next().fadeIn();
    if($('#' + thisstory2).next().hasClass('end')){
      closestory();
    }

  
});

//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".ajoutcomp, .ajout, .write").on("click", function() {
  $(".popup-ajoutcomp-overlay, .popup-ajoutcomp-content").addClass("opened");
});

$(".Paramètre, .menu").on("click", function() {
  $(".popup-parametre-overlay, .popup-parametre-content").addClass("opened");

});


// GESTION DES POSTS ET CAROUSSEL
$('.post').on("click", function() {

  
  var postimg = $(this).attr('id');
  $('#slider-img-1').attr('src','./img/' + postimg + '1.png');
  $('#slider-img-2').attr('src','./img/' + postimg + '2.png');
  $('#slider-img-3').attr('src','./img/' + postimg + '3.png');
  $('#slider-img-4').attr('src','./img/' + postimg + '4.png');
  
 
  $(".popup-post-overlay, .popup-post-content").addClass("opened");
  $(".popup-post-overlay").css('display','block');

        

function quitter(){
  $('.pop-uppost-overlay, .popup-post-content').removeClass("opened");
  $(".popup-post-overlay").css('display','none');
}
  $('.header-post').on("click", function() {quitter();
  });

  $('.slider-single').hide();
    $('#slider-1').show();
    $('#bullet-1').addClass('bullet-active');
    $('.prev-post').on('click', function(){
      $('.slider-single').hide();
      $('.bullet').removeClass('bullet-active');
      var postimgprev = $(this).attr('id');
      if(postimgprev<2){
        $('#slider-4').show();
        $('#bullet-4').addClass('bullet-active');
      }
      else{
        $('#slider-' + postimgprev).prev().show();
        $('#bullet-' + postimgprev).prev().addClass('bullet-active');
      }
      
    });

    $('.next-post').on('click', function(){
      $('.slider-single').hide();
      $('.bullet').removeClass('bullet-active');
      var nextimgpost = $(this).attr('id');
      if(nextimgpost>3){
        $('#slider-1').show();
        $('#bullet-1').addClass('bullet-active');
      }
      else{
        $('#slider-' + nextimgpost).next().show();
        $('#bullet-' + nextimgpost).next().addClass('bullet-active');
      }
    

  
    });  




  if($(this).is('#testformulaire')){  
    $('.description-post').html("Découvrez ce projet d'intégration réalisé dans le cadre d'un exercice personnel ! </br> <a href='https://github.com/KhTaeron/exerciceform'> Lien vers le GitHub </a></br></br>Afin de concevoir ce site, je me suis basée sur un webdesign fourni sur Figma.<br>J'ai rencontré quelques difficultés, notamment sur le positionnement. En effet, les positionnements ne sont pas parfaits et méritent d'être corrigés: j'aurais du utiliser les valeurs de viewport plutôt que le pourcentage afin d'optimiser la responsivité.");
  };

  if($(this).is('#portfolio')){ 
    $('.description-post').html('Découvrez dès maintenant mon premier portfolio et le parcours de création ! &#10024; </br> <a href="https://portfolioenolatellier.000webhostapp.com/">Lien vers le portfolio</a>');  
  };

  if($(this).is('#dashboard')){  
    $('.description-post').html('Découvrez le dashboard reprenant les données des indicateurs du COVID-19 dans le département du Nord. &#128202; </br> Le travail était orienté sur le traitement de données et non le design. Site non responsive ! </br></br> Travail réalisé en projet tutauré. </br> <a href="https://tellieno.tpweb.univ-rouen.fr/SAE303/vaccin.php"> Lien vers le site web uniquement université </a></br><a href="https://github.com/KhTaeron/sae303">Lien vers le GitHub</a></br><a href="./dashboardtest.html">Lien vers le code source</a>'); 
  };

  if($(this).is('#Neopolis')){
    $('.description-post').html("Découvrez ce projet et l'évènement de Neopolis à travers cette brève présentation.<br> Le site a été développé avec le CMS WordPress </br></br>Travail réalisé en projet tutauré.</br><a href='https://prezi.com/view/v1CxbtV4VWRifpXUnl8W/'>Lien vers la présentation du projet</a><br></br>Vous souhaitez voir un peu plus de cette interface ? Suivez les liens suivants !</br> &#128680; Attention, ce n'est que le code source donc les plugins ne sont pas fonctionnels &#128680;</br></br><a href='./neopolistest2.html'>Lien vers l'accueil</a></br><a href='./neopolistest.html'>Lien vers une page de présentation</a>"); 
  };

  if($(this).is('#UGW')){   
    $('.description-post').html("Découvrez ce site web représentant le projet fictif UGW.<br> Le site a été développé avec le CMS WordPress (premier essai).<br></br>Vous souhaitez voir un peu plus de cette interface ? Suivez les liens suivants ! &#128680; Attention, ce n'est que le code source donc les plugins ne sont pas fonctionnels ! &#128680;</br></br><a href='./img/ugwtest.html'>Lien vers l'accueil</a></br><a href='./ugwtest2.html'>Lien vers une page de présentation</a>");
  };
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".closeajoutcomp").on("click", function() {
  $(".popup-ajoutcomp-overlay, .popup-ajoutcomp-content, .popup-parametre-overlay, .popup-parametre-content, .popup-post-overlay, .popup-post-content").removeClass("opened");
  $(".popup-post-overlay").css('display','none');
});
});

i = 0;

$('.like').on("click", function() {
  if($('.like').hasClass('liked')){
    i = i - 1;
    $('.like').removeClass('liked');
    $(this).children().attr('src','./img/heart.png');
    

    if(i==0){
      $('.compteur-like').text('');
      
      
    }
  }


  else{
    i = i + 1;
    $('.like').addClass('liked');
    $(this).children().attr('src','./img/heart-red.png');
    $('.compteur-like').text('Aimé par ' + i + ' personne(s).');
    $('.compteur-like').css('display','block');

  } });





//CONTACT

$('#reponseoui').on("click", function() {
  $('.reponse1').hide();
  $('.messagereponse1').text('Oui');
  $('.messagereponse1,.message2,.reponse2').addClass('reponsevisible');
  $('.messagereponse1').css('margin-bottom','3vh');
  $('.spanmessage2').html('Super ! Ravie de vous rencontrer.&#128516;</br> Comment souhaitez-vous me contacter ?');
  $('#reponsemail').on("click", function() {
    $('.reponse2').hide();
    $('.messagereponse2').text('Mail');
    $('.messagereponse2,.message3').addClass('reponsevisible');
    $('.spanmessage3').html('Efficace ! &#128521;</br></br> Vous pouvez me contacter avec cette adresse : enolatellier.school@gmail.com </br></br> A très vite ! &#128516;');
  });
  $('#reponselinkedin').on("click", function() {
    $('.reponse2').hide();
    $('.messagereponse2').text('LinkedIn');
    if ($(window).width() <= 960) {
      $('.messagereponse2').css('padding','5vw')
    };
    
    $('.messagereponse2,.message3').addClass('reponsevisible');
    $('.spanmessage3').html("Original ! &#128521;</br></br> Vous pouvez me contactez sur ce compte: Enola Tellier</br>(J'ai la même tête qu'ici &#128513;)</br></br> A très vite ! &#128516;");
  });
  $('#reponsemobile').on("click", function() {
    $('.reponse2').hide();
    $('.messagereponse2').text('Téléphone');
    if ($(window).width() <= 960){
      $('.messagereponse2').css('padding','5vw')
    }
    
    $('.messagereponse2,.message3').addClass('reponsevisible');
    $('.spanmessage3').html("Très bien ! &#128521;</br></br> Vous pouvez me contactez avec ce numéro: 07 82 94 50 13</br>(N'hésitez pas à me laisser un message !)</br></br> A très vite ! &#128516;");
  });
  
});

$('#reponsenon').on("click", function() {
  $('.reponse1').hide();
  $('.messagereponse1').text('Non');
  $('.messagereponse1,.message2').addClass('reponsevisible');
  $('.message2').css('margin-bottom','10vh');
  $('.spanmessage2').html('Oh quel dommage... &#128532; A très vite !');
  
});