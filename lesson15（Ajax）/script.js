console.log('---Ajax-----------------------------------');

// fetch基本的な構文
/*
fetch(リクエスト先のURL, [オプション設定] )
.then((response) => response.json(){
    処理
})
.then((data) => {
    処理
});
*/



// ダミーデータを送信するためのURL
const url = 'https://jsonplaceholder.typicode.com/posts';
const button = document.getElementById('ajax-btn');
const result_area = document.getElementById('result_area');
const dummyData = { name: '侍太郎', age: 30 };

// ボタンのクリック時にイベント処理を実行する
button.addEventListener('click', () => {

    // ダミーサーバーにAjaxリクエストを送信する
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dummyData) // JSON形式に変換
    })
    // サーバーからAjaxレスポンスを受け取ったときの処理
    .then((response) => {
        if (!response.ok) {
            throw new Error('ネットワークが不安定です。');
        }
        return response.json(); // JSON形式のデータに変換
    })
    .then((data) => {
        // サーバーから受け取ったダミーデータを見やすい形にして表示
        result_area.innerText = 'サーバーからのレスポンス：\n' + JSON.stringify(data);
    })
    .catch((error) => {
        // エラーハンドリング
        console.error('エラーが発生しました:', error.message);
    });
});


// サンプルプログラム
const apiUrl = 'https://api.freelance-se.work/station/apiScript.php';
const pref = document.getElementById('pref');
const selectBoxLine = document.getElementById('line');
const selectBoxStation = document.getElementById('station');
const test_area = document.getElementById('test_area');

// 都道府県プルダウンを変更したら発火
pref.addEventListener('change', () => {

    let data = {'pref':pref.value,'type':1};

    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data) // JSON形式に変換
    })
    // サーバーからAjaxレスポンスを受け取ったときの処理
    .then((response) => {
        if (!response.ok) {
            throw new Error('ネットワークが不安定です。');
        }
        return response.json(); // JSON形式のデータに変換
    })
    .then((data) => {
        // セレクトボックスの子要素を全て削除
        while (selectBoxLine.firstChild) {
            selectBoxLine.removeChild(selectBoxLine.firstChild);
        }
        data.forEach(line => {
            const option = document.createElement('option');
            option.value = line.line_cd; // セレクトボックスの値にline_cdを設定
            option.textContent = line.line_name; // セレクトボックスの表示名にline_nameを設定
            selectBoxLine.appendChild(option);
        });
        // サーバーから受け取ったダミーデータを見やすい形にして表示
        test_area.innerText = 'サーバーからのレスポンス：\n' + JSON.stringify(data);
    })
    .catch((error) => {
        // エラーハンドリング
        console.error('エラーが発生しました:', error.message);
    });
});

// 沿線プルダウンを変更したら発火
selectBoxLine.addEventListener('change', () => {

    let data = {'line':selectBoxLine.value,'type':2};

    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data) // JSON形式に変換
    })
    // サーバーからAjaxレスポンスを受け取ったときの処理
    .then((response) => {
        if (!response.ok) {
            throw new Error('ネットワークが不安定です。');
        }
        return response.json(); // JSON形式のデータに変換
    })
    .then((data) => {
        // セレクトボックスの子要素を全て削除
        while (selectBoxStation.firstChild) {
            selectBoxStation.removeChild(selectBoxStation.firstChild);
        }
        data.forEach(station => {
            const option = document.createElement('option');
            option.value = station.station_cd; // セレクトボックスの値にstation_cdを設定
            option.textContent = station.station_name; // セレクトボックスの表示名にstation_nameを設定
            selectBoxStation.appendChild(option);
        });
        // サーバーから受け取ったダミーデータを見やすい形にして表示
        test_area.innerText = 'サーバーからのレスポンス：\n' + JSON.stringify(data);
    })
    .catch((error) => {
        // エラーハンドリング
        console.error('エラーが発生しました:', error.message);
    });
});