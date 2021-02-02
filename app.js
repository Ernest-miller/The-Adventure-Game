let gameBoard = document.getElementById('gameBoard');
let start = document.getElementById('start');
let help = document.getElementById('help');
let battleForecast = document.getElementById('battleForecast');
let healthBar = document.getElementById('healthBar');
let sectionBuilder = 3 * 1;

var enemyHealth = 1;
var lvl_1 = 0;
var lvl_2 = 0;
var lvl_3 = 0;
var lvl_4 = 0;
var lvl_5 = 0;
var lvl_6 = 0;
var lvl_7 = 0;
var lvl_8 = 0;
var lvl_9 = 0;
var lvl_10 = 0;


function hideBackgroundItems() {
    document.getElementById('mainBG').style.visibility = "hidden";
    document.getElementById('start').style.visibility = "hidden";
    document.getElementById('help').style.visibility = "hidden";
    document.getElementById('battleForecast').style.visibility = "visible";
    document.getElementById('healthBar').style.visibility = "visible";
};

function allLevels() {
    enemyHealth++;

    if (lvl_1 == 1) {  level_1();  };
    function level_1() {
        for (let i = 0; i < sectionBuilder; i++) {
            let level1_ = document.createElement('div');
            level1_.classList.add('level1_', `level1_${i}`);
            gameBoard.appendChild(level1_);
        };
        let level_img_1_ = document.createElement('div');
        level_img_1_.classList.add('level_img_1_', `level_img_1_${1}`);
        gameBoard.appendChild(level_img_1_);
    };

    if (lvl_2 == 1) {  level_2();  };
    function level_2() {
        for (let i = 0; i < sectionBuilder; i++) {
            let level2_ = document.createElement('div');
            level2_.classList.add('level2_', `level2_${i}`);
            gameBoard.appendChild(level2_);
        };
        let level2img_ = document.createElement('div');
        level2img_.classList.add('level2img_', `level2img_${1}`);
        gameBoard.appendChild(level2img_);
    };

    if (lvl_3 == 1) {  level_3();  };
    function level_3() {
        for (let i = 0; i < sectionBuilder; i++) {
            let level3_ = document.createElement('div');
            level3_.classList.add('level3_', `level3_${i}`);
            gameBoard.appendChild(level3_);

            let level_img_3_ = document.createElement('div');
        level_img_3_.classList.add('level_img_3_', `level_img_3_${1}`);
        gameBoard.appendChild(level_img_3_);
        };
    };

    if (lvl_4 == 1) {  level_4();  };
    function level_4() {
        for (let i = 0; i < sectionBuilder; i++) {
            let level4_ = document.createElement('div');
            level4_.classList.add('level4_', `level4_${i}`);
            gameBoard.appendChild(level4_);

            let level_img_4_ = document.createElement('div');
        level_img_4_.classList.add('level_img_4_', `level_img_4_${1}`);
        gameBoard.appendChild(level_img_4_);
        };
    };

    if (lvl_5 == 1) {  level_5();  };
    function level_5() {
        for (let i = 0; i < sectionBuilder; i++) {
            let level5_ = document.createElement('div');
            level5_.classList.add('level5_', `level5_${i}`);
            gameBoard.appendChild(level1_);

            let level_img_5_ = document.createElement('div');
        level_img_5_.classList.add('level_img_5_', `level_img_5_${1}`);
        gameBoard.appendChild(level_img_5_);
        };
    };

    if (lvl_6 == 1) {  level_6();  };
    function level_6() {
        for (let i = 0; i < sectionBuilder; i++) {
            let level6_ = document.createElement('div');
            level6_.classList.add('level6_', `level6_${i}`);
            gameBoard.appendChild(level6_);

            let level_img_6_ = document.createElement('div');
        level_img_6_.classList.add('level_img_6_', `level_img_6_${1}`);
        gameBoard.appendChild(level_img_6_);
        };
    };

    if (lvl_7 == 1) {  level_7();  };
    function level_7() {
        for (let i = 0; i < sectionBuilder; i++) {
            let level7_ = document.createElement('div');
            level7_.classList.add('level7_', `level7_${i}`);
            gameBoard.appendChild(level7_);

            let level_img_7_ = document.createElement('div');
        level_img_7_.classList.add('level_img_7_', `level_img_7_${1}`);
        gameBoard.appendChild(level_img_7_);
        };
    };

    if (lvl_8 == 1) {  level_8();  };
    function level_8() {
        for (let i = 0; i < sectionBuilder; i++) {
            let level8_ = document.createElement('div');
            level8_.classList.add('level8_', `level8_${i}`);
            gameBoard.appendChild(level8_);

            let level_img_8_ = document.createElement('div');
        level_img_8_.classList.add('level_img_8_', `level_img_8_${1}`);
        gameBoard.appendChild(level_img_8_);
        };
    };

    if (lvl_9 == 1) {  level_9();  };
    function level_9() {
        for (let i = 0; i < sectionBuilder; i++) {
            let level9_ = document.createElement('div');
            level9_.classList.add('level9_', `level9_${i}`);
            gameBoard.appendChild(level9_);

            let level_img_9_ = document.createElement('div');
        level_img_9_.classList.add('level_img_9_', `level_img_9_${1}`);
        gameBoard.appendChild(level_img_9_);
        };
    };

    if (lvl_10 == 1) {  level_10();  };
    function level_10() {
        for (let i = 0; i < sectionBuilder; i++) {
            let level10_ = document.createElement('div');
            level10_.classList.add('level10_', `level10_${i}`);
            gameBoard.appendChild(level10_);

            let level_img_10_ = document.createElement('div');
        level_img_10_.classList.add('level_img_10_', `level_img_10_${1}`);
        gameBoard.appendChild(level_img_10_);
        };
    };
};

function battleOptions() {

//// attack button
        let attackBtn = document.createElement('div');
        attackBtn.classList.add('attackBtn', `attackBtn${1}`);
        attackBtn.addEventListener('click', function () {
            attackBtn = true;
            if (attackBtn == true) {
                if (lvl_1 = 1 && attackBtn == true) {
                    console.log('attack');
                    enemyHealth--;
                    if (enemyHealth == 0 || enemyHealth <= 0) {
                        console.log(alert(enemyHealth, "The enemy has fallen. Onward!"));
                        lvl_2++;
                        allLevels();
                        let level2img_ = document.createElement('div');
                        level2img_.classList.add('level2img_', `level2img_${1}`);
                        gameBoard.appendChild(level2img_);
                    };

                    if (enemyHealth == 0 || enemyHealth <= 0) {
                        console.log(alert(enemyHealth, "The enemy has fallen. Onward!"));
                        lvl_3++;
                        allLevels();
                    };

                    if (enemyHealth == 0 || enemyHealth <= 0) {
                        console.log(alert(enemyHealth, "The enemy has fallen. Onward!"));
                        lvl_4++;
                        allLevels();
                    };

                    if (enemyHealth == 0 || enemyHealth <= 0) {
                        console.log(alert(enemyHealth, "The enemy has fallen. Onward!"));
                        lvl_5++;
                        allLevels();
                    };

                    if (enemyHealth == 0 || enemyHealth <= 0) {
                        console.log(alert(enemyHealth, "The enemy has fallen. Onward!"));
                        lvl_6++;
                        allLevels();
                    };

                    if (enemyHealth == 0 || enemyHealth <= 0) {
                        console.log(alert(enemyHealth, "The enemy has fallen. Onward!"));
                        lvl_7++;
                        allLevels();
                    };

                    if (enemyHealth == 0 || enemyHealth <= 0) {
                        console.log(alert(enemyHealth, "The enemy has fallen. Onward!"));
                        lvl_8++;
                        allLevels();
                    };

                    if (enemyHealth == 0 || enemyHealth <= 0) {
                        console.log(alert(enemyHealth, "The enemy has fallen. Onward!"));
                        lvl_9++;
                        allLevels();
                    };

                    if (enemyHealth == 0 || enemyHealth <= 0) {
                        console.log(alert(enemyHealth, "The Evil King has fallen. Jim: Tax-free here I come!"));
                        lvl_10++;
                        allLevels();
                    };
                };
            };
        });    battleForecast.appendChild(attackBtn);

//// shield button
    let shieldBtn = document.createElement('div');
    shieldBtn.classList.add('shieldBtn', `shieldBtn${1}`);
    shieldBtn.addEventListener('click', function () {
        shield = true;
        if (shield == true) {
            console.log(alert('shield'));
            enemyHealth--;
        };
    });
    battleForecast.appendChild(shieldBtn);

//// heal button
    let healBtn = document.createElement('div');
    healBtn.classList.add('healBtn', `healBtn${1}`);
    healBtn.addEventListener('click', function () {
        heal = true;
        if (heal == true) {
            console.log(alert('heal'));
            enemyHealth--;
        };
    });
    battleForecast.appendChild(healBtn);

};    battleOptions();

start.addEventListener ('click', function () {
    start = true;
    if (start == true) {
        lvl_1++;
        allLevels();
        if (alert("An enemy soldier approches. What is your action?")) {
            enemyHealth = 1;
            if (enemiesHealth == 0) {
                level_3++;
                allLevels();
                switch (enemyHealth) { case 0:  break; };
                if (enemiesHealth == 0) {
                    level_4++;
                    allLevels();
                    switch (enemyHealth) { case 0:  break; };
                    if (enemiesHealth == 0) {
                        level_5++;
                        allLevels();
                        switch (enemyHealth) { case 0:  break; };
                        if (enemiesHealth == 0) {
                            level_6++;
                            allLevels();
                            switch (enemyHealth) { case 0:  break; };
                            if (enemiesHealth == 0) {
                                level_7++;
                                allLevels();
                                switch (enemyHealth) { case 0:  break; };
                                if (enemiesHealth == 0) {
                                    level_8++;
                                    allLevels();
                                    switch (enemyHealth) { case 0:  break; };
                                    if (enemiesHealth == 0) {
                                        level_9++;
                                        allLevels();
                                        switch (enemyHealth) { case 0:  break; };
                                        if (enemiesHealth == 0) {
                                            level_10++;
                                            allLevels();
                                            switch (enemyHealth) { case 0:  break; };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
});




var img = new Image();
img.src = 'https://piskel-imgstore-b.appspot.com/img/6d060f4a-6513-11eb-8bac-a1fc7c40673e.gif';