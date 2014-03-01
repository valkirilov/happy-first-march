var musicTheme = null;
var musicShow = null;

var SONG_MAIN = "sounds/main-song.mp3";
var SONG_SHOW = "sounds/show-song.mp3";
var SONG_SHOW_LENGTH = 92; // 1 min 32 secs

var she = null;
var he = null;
var songText = null;
var final = null;

var BACKGROUND_CHANGE_DURATION = 1000;
var ELEMENT_STEP_DURATION = 3000;

function init() {
    // Load and play the song
    musicTheme = new Audio();
    musicShow = new Audio();
    
    musicTheme.setAttribute('loop', 'loop');
    musicTheme.setAttribute('preload', 'auto');
    musicTheme.setAttribute('src', SONG_MAIN);
    musicTheme.load();
    musicTheme.play();
    
    //musicShow.setAttribute('loop', 'loop');
    //musicShow.setAttribute('preload', 'auto');
    musicShow.setAttribute('src', SONG_SHOW);
    musicShow.load();
    
    // make some other initializations for the show
    $('#show-on').hide();
    
    she = $('#she');
    he = $('#he');
    songText = $('#song-text');
    final = $('#final');
    
    she.hide();
    he.hide();
    final.hide();
}

function start() {
    console.log('Start');
    
    musicTheme.pause();
    musicShow.play();
    
    $('#show-off').fadeOut();
    $('#show-on').fadeIn();
    
    // Start moving the text
    var textHeight = parseInt(songText[0].scrollHeight) - 250;
    songText.animate({scrollTop: textHeight+"px"}, SONG_SHOW_LENGTH*1000);
    
    step1();
}

function backgroundToWhite() {
    $('body').css('background-color', '#bdc3c7'); // to white
};
function backgroundToRed() {
    $('body').css('background-color', '#e74c3c'); // to red
};

function moveElementToX(element, position) {
    element.css('transform',            'translateX('+position+'px)');
    element.css('-webkit-transform',    'translateX('+position+'px)');
    element.css('-moz-transform',       'translateX('+position+'px)');
};
function rotateElementToDeg(element, degrees) {
    element.css('transform',            'rotate('+degrees+'deg)');
    element.css('-webkit-transform',    'rotate('+degrees+'deg)');
    element.css('-moz-transform',       'rotate('+degrees+'deg)');
};
function applyMoreToElement(element, properties) {
    var newStyles = "";
    for(var i in properties) {
        var newProperty = i + "(" + properties[i] + ") ";
        newStyles += newProperty;
    }      

    element.css('transform',            newStyles);
    element.css('-webkit-transform',    newStyles);
    element.css('-moz-transform',       newStyles);
};

// Step 1
// Change the colours of the background
function step1() {
    console.log('Step 1: Change the colors of the background');
    
    setTimeout(backgroundToRed,     BACKGROUND_CHANGE_DURATION*1);  // 1000-2000:  1000
    setTimeout(backgroundToWhite,   BACKGROUND_CHANGE_DURATION*2);  // 2000-3000:  1000
    setTimeout(backgroundToRed,     BACKGROUND_CHANGE_DURATION*3);  // 3000-4000:  1000
    setTimeout(backgroundToWhite,   BACKGROUND_CHANGE_DURATION*4);  // 4000-5000: 1000
    
    setTimeout(step2, BACKGROUND_CHANGE_DURATION*4);
};

// Step 2
// She is entering from the right
function step2() {
    console.log('Step 2: Enter she from the right');
    
    she.fadeIn();
    setTimeout(function() { moveElementToX(she, 600); }, ELEMENT_STEP_DURATION*0) // Push her to the left
    setTimeout(function() { applyMoreToElement(she, { translateX: "800px", rotate: "-13deg" }); }, ELEMENT_STEP_DURATION*1) // Push her to the right a little
    setTimeout(function() { applyMoreToElement(she, { translateX: "550px", rotate: "13deg" }); }, ELEMENT_STEP_DURATION*2) // Push her to the left again
    
    // Move during the song
    setTimeout(function() { she.addClass('shake'); document.getElementById('she').style.marginLeft = '480px'; }, ELEMENT_STEP_DURATION*3);
    
    setTimeout(step3, 26000);
};

// Step 3
// Song between the text
function step3() {
    console.log('Step 3: Change again the colours');
    
    setTimeout(backgroundToRed,     BACKGROUND_CHANGE_DURATION*1);  // 1000-2000:  1000
    setTimeout(backgroundToWhite,   BACKGROUND_CHANGE_DURATION*2);  // 2000-3000:  1000
    setTimeout(backgroundToRed,     BACKGROUND_CHANGE_DURATION*3);  // 3000-4000:  1000
    setTimeout(backgroundToWhite,   BACKGROUND_CHANGE_DURATION*4);  // 4000-5000: 1000
    
    setTimeout(step4, BACKGROUND_CHANGE_DURATION*4);
};

// Step 4
// Enter him from the left
function step4() {
    console.log('Step 4: Enter he from the left');
    
    he.fadeIn();
    setTimeout(function() { moveElementToX(he, -200); }, ELEMENT_STEP_DURATION*0) // Push her to the left
    setTimeout(function() { applyMoreToElement(he, { translateX: "-300px", rotate: "-13deg" }); }, ELEMENT_STEP_DURATION*1) // Push her to the right a little
    setTimeout(function() { applyMoreToElement(he, { translateX: "-100px", rotate: "13deg" }); }, ELEMENT_STEP_DURATION*2) // Push her to the left again
    
    // Move during the song
    setTimeout(function() { he.addClass('shake'); document.getElementById('he').style.marginLeft = '-130px'; }, ELEMENT_STEP_DURATION*3);
    
    setTimeout(step5, 24000);
};

// Step 5
// They arew going closer to each other
function step5() {
    console.log('Step 5: They are going closer');
    
    she.removeClass('shake');
    he.removeClass('shake');
    
    // Move them closer
    setTimeout(function() { applyMoreToElement(she, { translateX: "-150px", rotate: "-6deg" }); }, ELEMENT_STEP_DURATION*0)
    setTimeout(function() { applyMoreToElement(he, { translateX: "150px", rotate: "6deg" }); }, ELEMENT_STEP_DURATION*0)
    
    // The move back again
    setTimeout(function() { applyMoreToElement(she, { translateX: "0px", rotate: "0deg" }); }, ELEMENT_STEP_DURATION*1)
    setTimeout(function() { applyMoreToElement(he, { translateX: "0px", rotate: "0deg" }); }, ELEMENT_STEP_DURATION*1)
    
    // And start shaking them again
    setTimeout(function() { she.addClass('shake'); document.getElementById('she').style.marginLeft = '480px'; }, ELEMENT_STEP_DURATION*2);
    setTimeout(function() { he.addClass('shake'); document.getElementById('he').style.marginLeft = '-130px'; }, ELEMENT_STEP_DURATION*2);
    
    setTimeout(step6, 3000);
}

// Step 6
// Song between the text
function step6() {
    console.log('Step 6: Change again the colours');
    
    setTimeout(backgroundToRed,     BACKGROUND_CHANGE_DURATION*1);  // 1000-2000:  1000
    setTimeout(backgroundToWhite,   BACKGROUND_CHANGE_DURATION*2);  // 2000-3000:  1000
    setTimeout(backgroundToRed,     BACKGROUND_CHANGE_DURATION*3);  // 3000-4000:  1000
    setTimeout(backgroundToWhite,   BACKGROUND_CHANGE_DURATION*4);  // 4000-5000: 1000
    
    setTimeout(step7, 24000);
};

// Step 7
// Changing colors an hiding the text
function step7() {
    console.log('Step 7: Prepare the final');
        
    final.fadeIn('slow');
    
    she.removeClass('shake');
    he.removeClass('shake');
    she.fadeOut();
    
    setTimeout(step8, 3000);
};

// Step 8
// Change colors and go closer
function step8() {
    console.log('Step 8: Make the final');
    
    songText.hide();
    applyMoreToElement(final, { translateY: "60px" }); 
    
    // And the make them together
    setTimeout(function() { applyMoreToElement(he, { translateX: "160px", rotate: "420deg" }); }, ELEMENT_STEP_DURATION*0) // Push him to the right a little

    setTimeout(function() { applyMoreToElement(he, { translateX: "320px", rotate: "0deg" }); }, ELEMENT_STEP_DURATION*1) // Push him to the right a little
};
