jQuery(document).ready(function () {

    $('form').on('submit', function (event){
        event.preventDefault();

        var btnsub = $(this).find("[type=submit]");

        $(btnsub).attr('disabled', true);
        // разблокировка
        setTimeout(function() {
            $(btnsub).attr('disabled', false);
        }, 5000);
    });

    //Вытягивание ключей utm меток
    function getParameterByName(name) {
        var name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        var results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    // Give the URL parameters variable names
    var source = getParameterByName('utm_source');
    if (source != "") {
        $.cookie('cookie_source', source, { expires: 365, path: '/' });
    }
    var csource = $.cookie('cookie_source');
    $("input[name='utmSource']").val(csource);



    var medium = getParameterByName('utm_medium');
    if (medium != "") {
        $.cookie('cookie_medium', medium, { expires: 365, path: '/' });
    }
    var cmedium = $.cookie('cookie_medium');
    $("input[name='utmMedium']").val(cmedium);




    var content = getParameterByName('utm_content');
    if (content != "") {
        $.cookie('cookie_content', content, { expires: 365, path: '/' });
    }
    var ccontent = $.cookie('cookie_content');
    $("input[name='utmContent']").val(ccontent);



    var term = getParameterByName('utm_term');
    if (term != "") {
        $.cookie('cookie_term', term, { expires: 365, path: '/' });
    }
    var cterm = $.cookie('cookie_term');
    $("input[name='utmTerm']").val(cterm);



    var campaign = getParameterByName('utm_campaign');
    if (campaign != "") {
        $.cookie('cookie_campaign', campaign, { expires: 365, path: '/' });
    }
    var ccampaign = $.cookie('cookie_campaign');
    $("input[name='utmCampaign']").val(ccampaign);

    var gclid = getParameterByName('gclid');
    if (gclid != "") {
        $.cookie('gclid', gclid, { expires: 365, path: '/' });
    }
    var cgclid = $.cookie('gclid');
    $("input[name='gclid']").val(cgclid);
    $('form').append("<input type='hidden' name='gclid' value='" + cgclid + "'>")
});

$(document).ready(function () {

    $(".regular").slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $("#form-modal").submit(function () {
        $.ajax({
            type: "POST",
            url: "send.php",
            data: $(this).serialize()
        }).done(function () {
            $('#form-modal-thx').html('<div class="thx-title">Спасибо!</div><div class="thx-text">В ближайшее время наш оператор<br> свяжется с Вами!</div> <a data-remodal-action="close" class="btn-red thx-close">Подтвердить</a>');
        });
        return false;
    });
    $("#form-modal-feedback").submit(function () {
        $.ajax({
            type: "POST",
            url: "send.php",
            data: $(this).serialize()
        }).done(function () {
            $('#form-modal-feedback-thx').html('<div class="thx-title">Спасибо!</div><div class="thx-text">В ближайшее время наш оператор<br> свяжется с Вами!</div> <a data-remodal-action="close" class="btn-red thx-close">Подтвердить</a>');

        });
        return false;
    });
    $("#you-know").submit(function () {
        $.ajax({
            type: "POST",
            url: "send-you-know.php",
            data: $(this).serialize()
        }).done(function () {
            $('#you-know').html('<div class="thx-title">Спасибо!</div><div class="thx-text">В ближайшее время наш оператор<br> свяжется с Вами!</div>');

        });
        return false;
    });
    $("#action20").submit(function () {
        $.ajax({
            type: "POST",
            url: "send.php",
            data: $(this).serialize()
        }).done(function () {
            $('#action20').html('<div class="thx-title" style="color:#fff">Спасибо!</div><div class="thx-text" style="color:#fff">В ближайшее время наш оператор<br> свяжется с Вами!</div>');

        });
        return false;
    });
    $("#question").submit(function () {
        $.ajax({
            type: "POST",
            url: "send.php",
            data: $(this).serialize()
        }).done(function () {
            $('#question').html('<div class="thx-title">Спасибо!</div><div class="thx-text" >В ближайшее время наш оператор<br> свяжется с Вами!</div>');
        });
        return false;
    });

    $('input[name="tel-form"]').mask("+375 (99) 999-99-99");
});


var wow = new WOW(
    {
        offset: 20,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
        mobile: false,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
        live: false,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
        //scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
    }
);

wow.init();

var regHidden = $('header').attr('data-reg');
var townHidden = $('header').attr('data-town');
var brHidden = $('header').attr('data-brands');

$('.reg-hidden').attr('value', regHidden);
$('.city-hidden').attr('value', townHidden);
$('.brands-hidden').attr('value', brHidden);




$('.you-know-option option').each(function (index) {
    $('select.wpcf7-form-control.wpcf7-select').append($(this));
});


var mylist = $('select.wpcf7-form-control.wpcf7-select');
var listitems = mylist.children('option').get();
listitems.sort(function (a, b) {
    return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
})
$.each(listitems, function (idx, itm) { mylist.append(itm); });


$(document).mouseup(function (e) {
    var div = $(".modal_conteiner");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.modal_thx_1.active').removeClass('active');
    }
});

jQuery(window).scroll(function () {
    var $sections = $('section');
    $sections.each(function (i, el) {
        var top = $(el).offset().top - 100;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
            $('a.active').removeClass('active');
            $('a[href="#' + id + '"]').addClass('active');
        }
    })
    if ($(window).scrollTop() + $(window).height() == $(document).outerHeight()) {
        $('a[href="#contacts"]').addClass('active');
    }
});




$("nav").on("click", "a", function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();

    // получем идентификатор блока из атрибута href
    var id = $(this).attr('href'),

        // находим высоту, на которой расположен блок
        top = $(id).offset().top -61;

    // анимируем переход к блоку, время: 800 мс
    $('body,html').animate({ scrollTop: top }, 800);
});

$(document).ready(function () {
    $("body").on("click", ".cmn-toggle-switch__htx", function (event) {
        $('.cmn-toggle-switch__htx').toggleClass('active');
    });

    $("body").on("click", ".modal-call", function () {
        var thisAttr = $(this).attr('data-value');
        $('.remodal .hidden-value').attr('value', thisAttr);
    });

    $("body").on("click", ".cmn-toggle-switch", function (event) {
        $('.mobile-menu').toggleClass('active');
        $('body').toggleClass('overf');
    });

    $("body").on("click", "nav.active ul li a", function (event) {
        $('.mobile-menu').toggleClass('active');
        $('.cmn-toggle-switch__htx').toggleClass('active');
        $('body').removeClass('overf');
    });
});

if ($('.tabs__caption').hasClass('active')) {
    $("body").on("click", ".tabs__caption li", function (event) {
        $(this).parent().removeClass('active');
        $('.tabs__caption li').css('display', 'none');
    });
};


$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $("header.stiky").addClass('active')
    } else {
        $("header.stiky").removeClass('active')
    }
});

var day = 19; // До какого числа длится акция
var changeMonth = 1; // На сколько месяцев сдвигать окончание акции

var today = new Date();
var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));

var dayTomorrow = tomorrow.getDate(); 

var monthTomorrow = tomorrow.getMonth() + 1;
var yearTomorrow = tomorrow.getFullYear(); 

if (Number(monthTomorrow) < 10) {
    monthTomorrow = '0' + monthTomorrow;
}
if (Number(dayTomorrow) < 10) {
    dayTomorrow = '0' + dayTomorrow;
}
var htmlDate = 'до ' + dayTomorrow + '.' + monthTomorrow + '.' + yearTomorrow;
$('#date').html(htmlDate);


var objDate = new Date().toLocaleString("rus", { month: "long" });

var rusMonth = objDate;

var newDate = changeEndWorldMonth(rusMonth);

function changeEndWorldMonth(newDate) {
    if (newDate == "февраль")
        newDate = 'февраля';
    else if (newDate == "январь")
        newDate = 'января';
    else if (newDate == "март")
        newDate = 'марта';
    else if (newDate == "апрель")
        newDate = 'апреля';
    else if (newDate == "май")
        newDate = 'мая';
    else if (newDate == "июнь")
        newDate = 'июня';
    else if (newDate == "июль")
        newDate = 'июля';
    else if (newDate == "август")
        newDate = 'августа';
    else if (newDate == "сентябрь")
        newDate = 'сентября';
    else if (newDate == "октябрь")
        newDate = 'октября';
    else if (newDate == "ноябрь")
        newDate = 'ноября';
    else
        newDate = 'декабря';

    return newDate;
}

// document.querySelector('.sale-block__descr span').innerHTML = 'до конца ' + newDate;


function showMessage() {
    var inst = $('[data-remodal-id=modal-message]').remodal();
    inst.open();
}


document.addEventListener('wpcf7mailsent', function (event) {
    setTimeout(showMessage, 500);
}, false);

var adressmap = $("input[name=city]").attr('value');
