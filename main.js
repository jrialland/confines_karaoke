function play(mp3) {
    let audio = document.createElement('audio');
    let source = document.createElement('source');
    source.setAttribute('src', mp3);
    source.setAttribute('type', 'audio/mpeg');
    audio.appendChild(source);
    document.body.appendChild(audio);
    audio.play();
}

function highlight(txt, duration) {
    if (txt == '') {
        return;
    }
    console.log(txt);
    let sub = document.getElementById('sub');
    sub.innerHTML = '';
    $(sub).stop().animate({ display: 'block' });
    sub.setAttribute('style', '');
    let steplen = duration / txt.length;
    for (let i = 1; i <= txt.length; i++) {
        window.setTimeout(() => {
            let s = "<span class='highlighted'>" + txt.substring(0, i) + "</span>" + txt.substring(i);

            sub.innerHTML = s;
            if (i == txt.length) {
                $(sub).fadeOut(1200, () => {
                    sub.innerHTML = '';
                });
            }
        }, steplen * i);
    }
}

let steps = [];

function verse(start, s) {
    if (s.length != 5) {
        console.error("array length !!");
    }
    steps.push([start + 0, () => highlight(s[0], 1000)]);
    steps.push([start + 2000, () => highlight(s[1], 3000)]);
    steps.push([start + 6000, () => highlight(s[2], 3000)]);
    steps.push([start + 10000, () => highlight(s[3], 3000)]);
    steps.push([start + 13320, () => highlight(s[4], 1500)]);
}
/*
let position = 16500;
verse(position,
    [
        "Destinée",
        "On était tous les 2 destinés",
        "A voir nos chemins se rencontrer",
        "A s'aimer sans demander pourquoi",
        "Toi et moi"
    ]
);

position += 16000;
verse(position,
    [
        "Destinée,",
        "Inutile de fuir ou de lutter",
        "C'est écrit dans notre Destinée",
        "Tu ne pourras pas y échapper",
        "C'est gravé"
    ]
);

position += 16000;
verse(position,
    [
        "L'avenir",
        "Malgré nous doit toujours devenir",
        "Tous nos désirs d'amour inespérés,",
        "imaginés, inavoués",
        ""
    ]
);

position += 16000;
verse(position,
    [
        "Dans la vie",
        "Aucun jour n'est pareil tu t'ennuies",
        "Tu attends le soleil impatiemment, ",
        "éperdument, passionnément",
        ""
    ]
);


position += 16000;
verse(position,
    [
        "Destinée,",
        "Depuis longtemps j'avais deviné",
        "Qu'à toi l'amour allait m'enchaîner",
        "Quand je rencontrerai quelque part,",
        "Ton regard"
    ]
);

position += 16000;
verse(position,
    [
        "Destinée,",
        "Où es tu toi qui m'est Destinée",
        "Si jamais vous vous reconnaissez",
        "Je voudrais vous entendre crier",
        "M'appeler"
    ]
);

position += 16000;
verse(position,
    [
        "L'avenir",
        "Malgré nous doit toujours devenir",
        "Tous nos désirs d'amour inespérés,",
        "imaginés, inavoués",
        ""
    ]
);

position += 16000;
verse(position,
    [
        "L'avenir",
        "Malgré nous doit toujours devenir",
        "Tous nos désirs d'amour inespérés,",
        "imaginés, inavoués",
        ""
    ]
);

position += 16000; //??? // pont

position += 16000;
verse(position,
    [
        "Destinée,",
        "Où es tu toi qui m'est Destinée",
        "Si jamais vous vous reconnaissez",
        "Je voudrais vous entendre crier",
        "M'appeler"
    ]
);

position += 16000;
verse(position,
    [
        "Destinée,",
        "Où es tu toi qui m'est Destinée",
        "Si jamais vous vous reconnaissez",
        "Je voudrais vous entendre crier",
        "M'appeler"
    ]
);
*/


let position = 16500;
verse(position,
    [
        "Confinés,",
        "On était tous les deux confinés",
        "Obligés de rester enfermés",
        "Passer le temps à compter nos doigts",
        "Toi et moi"
    ]
);

position += 16000;
verse(position,
    [
        "Confiné,",
        "Inutile de fuir ou d's'échapper",
        "A moins bien sur d'avoir imprimé",
        "Ce stupide laissez-passer",
        "C'est obligé"
    ]
);

position += 16000;
verse(position,
    [
        "Le Covid",
        "C'est un peu comme des vacances",
        "Ou plutôt comme le pire des dimanches",
        "désœuvrés, désenchantés",
        ""
    ]
);

position += 16000;
verse(position,
    [
        "C'est la vie",
        "Même si devant Netflix; tu t'ennuies",
        "Tu attends les téléchargements, ",
        "impatiemment, éperdument",
        ""
    ]
);


position += 16000;
verse(position,
    [
        "Confiné,",
        "Pourquoi tu te mets à tousser ?",
        "C'est rien j'ai oublié d' respirer",
        "A cause du manque d'activité",
        "Ça peut arriver"
    ]
);

position += 16000;
verse(position,
    [
        "Confiné,",
        "Ne reste pas dans ta carapace",
        "Vas faire un petit tour le matin",
        "Même confiné t'as besoin d'espace",
        "Comme un pangolin"
    ]
);

position += 16000;
verse(position,
    [
        "Edouard Philippe",
        "va peut-être nous libérer",
        "Et ensuite réparer l'économie",
        "comme il l'a dit, il a promis",
        ""
    ]
);

position += 16000;
verse(position,
    [
        "Car tu vois",
        "Même si toi et moi on meurt d'ennui,",
        "On fera partie des survivants",
        "certainement, probablement",
        ""
    ]
);

position += 16000; //??? // pont

position += 16000;
verse(position,
    [
        "Confiné !",
        "N'oublies pas la solidarité",
        "Avec le personnel hospitalier",
        "Qui va bien comme il faut galérer",
        "Overbookés"
    ]
);

position += 16000;
verse(position,
    [
        "Confiné !",
        "Quand ce truc sera terminé",
        "Il faudrait bien sûr fêter ça",
        "On ira au restaurant chinois,",
        "Toi et moi"
    ]
);

//-------------------------------------------------------------
function showtime(el) {
    $('.maintitle').fadeOut(5000);
    
    //start music
    play("assets/destinee_musique.mp3");
    
    // subtitles
    for (let step of steps) {
        window.setTimeout(step[1], step[0]);
    }
    
    //images cycler
    window.setInterval(() => {
        let active = $('#imageLayer .active');
        let next = $('#imageLayer .active').next().length >0 ? $('#imageLayer .active').next() : $('#imageLayer img:first');
        console.log('       (image:' + next.attr('src') +')');
        next.fadeIn(5000).addClass('active');
        active.fadeOut(5000, ()=>{
            active.removeClass('active');
        });
    }, 7000);
}

document.getElementById('playBtn').onclick = showtime;
document.getElementById('playBtn').focus();
