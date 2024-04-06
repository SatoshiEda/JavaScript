console.log('---非同期処理-----------------------------------');

console.log('---実行サンプル1------');
const execution01 = document.getElementById('execution01');
const progress01 = document.getElementById('progress01');

execution01.addEventListener('click', () => {
    let num01 = 0;

    // 進捗を更新する関数
    function updateProgress() {
        progress01.innerText = num01 + '%';
        num01++;
        if (num01 <= 100) {
            // 進捗が100%未満の場合は、再度setTimeout()を呼び出して次の更新を予約する
            setTimeout(updateProgress, 20); // 20ミリ秒ごとに更新
        } else {
            // 進捗が100%以上の場合は、処理完了と表示する
            progress01.innerText = '処理完了';
        }
    }

    // 最初の更新を予約する
    updateProgress();
});


console.log('---実行サンプル2------');
const execution02 = document.getElementById('execution02');
const progress02 = document.getElementById('progress02');

execution02.addEventListener('click', () => {
    let num02 = 0;

    // 進捗を更新する関数
    function updateProgress() {
        progress02.innerText = num02 + '%';
        num02++;
        if (num02 <= 100) {
            // 進捗が100%未満の場合は、再度setTimeout()を呼び出して次の更新を予約する
            setTimeout(updateProgress, 100); // 20ミリ秒ごとに更新
        } else {
            // 進捗が100%以上の場合は、処理完了と表示する
            progress02.innerText = '処理完了';
        }
    }

    // 最初の更新を予約する
    updateProgress();
});

console.log('---実行サンプル3------');
const execution03 = document.getElementById('execution03');
const progress03 = document.getElementById('progress03');
const progress03Bar = document.getElementById('progress03Bar');

execution03.addEventListener('click', () => {
    let num03 = 0;

    // 進捗を更新する関数
    function updateProgress() {
        progress03.innerText = num03 + '%';
        progress03Bar.style.width =  num03 + '%';
        num03++;
        if (num03 <= 100) {
            // 進捗が100%未満の場合は、再度setTimeout()を呼び出して次の更新を予約する
            setTimeout(updateProgress, 130); // 20ミリ秒ごとに更新
        } else {
            // 進捗が100%以上の場合は、処理完了と表示する
            progress03.innerText = '処理完了';
        }
    }

    // 最初の更新を予約する
    updateProgress();
});

console.log('---実行サンプル4------');
const execution04 = document.getElementById('execution04');
const progress04 = document.getElementById('progress04');
const progress04Bar = document.getElementById('progress04Bar');

execution04.addEventListener('click', () => {
    let num04 = 0;

    // 進捗を更新する関数
    function updateProgress() {
        progress04.innerText = num04 + '%';
        progress04Bar.style.width =  num04 + '%';
        num04++;
        if (num04 <= 100) {
            // 進捗が100%未満の場合は、再度setTimeout()を呼び出して次の更新を予約する
            setTimeout(updateProgress, 30); // 20ミリ秒ごとに更新
        } else {
            // 進捗が100%以上の場合は、処理完了と表示する
            progress04.innerText = '処理完了';
        }
    }

    // 最初の更新を予約する
    updateProgress();
});

