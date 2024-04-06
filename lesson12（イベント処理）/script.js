console.log('---イベント処理-----------------------------------');

console.log('---clickイベント------');
const btn = document.getElementById('click_event');

btn.addEventListener('click', () => {
    alert('クリックされました！');
});


console.log('---要素追加イベント------');

const addBtn = document.getElementById('add_list');
const parentList = document.getElementById('list');

// HTML要素がクリックされたときにイベント処理を実行する
let num = 4;
addBtn.addEventListener('click', () => {
    // li要素を新しく作成する
    const childList = document.createElement('li');

    // 作成したli要素にテキストを追加する
    childList.innerHTML = '追加リスト' + num + '<button class="remove_btn">×</button>';

    // 作成したli要素をul要素の子要素として末尾に追加する
    parentList.appendChild(childList);
    num++;

    console.log('---要素削除イベント------');
    // 追加した要素に対してイベントリスナーを追加する
    const removeBtn = childList.querySelector('.remove_btn');
    removeBtn.addEventListener('click', (event) => {
        // クリックされたボタンの親要素である li を削除する
        event.target.parentElement.remove();
    });
});


console.log('---マウスオーバーイベント------');
const hover_area = document.getElementById('hover');
let flg = true;
hover_area.addEventListener('mouseover', () => {
    if(flg) {
        alert('マウスオーバーされました！（1回目のみ出力制御）');
        flg = false;
    }
});


console.log('---文字数カウントイベント------');
// textareaというidを持つHTML要素を取得し、定数に代入する
const textarea = document.getElementById('textarea');

// HTML要素内でキーが押下（押下されたキーが戻ったタイミング）されたときにイベント処理を実行する
textarea.addEventListener('keyup', () => {
    // テキストボックスに入力された文字列を取得する
    const text = document.forms.textForm.textBox.value;
    // 取得した文字列の文字数を出力する
    document.getElementById('count').innerText = '文字数：' + text.length + '文字';
});



console.log('---表示非表示イベント------');
// ボタン
const openCloseBtn = document.getElementById('openCloseBtn');
// エリア
const openCloseArea = document.getElementById('openCloseArea');
openCloseBtn.addEventListener('click', () => {
    // displayがnoneの場合
    if(openCloseArea.style.display === 'none' ){
        openCloseArea.style.display = 'block';
        // ボタンの文字列を変更する
        openCloseBtn.innerText = '非表示にする';
    }
    // displayがnone以外の場合
    else{
        openCloseArea.style.display = 'none';
        // ボタンの文字列を変更する
        openCloseBtn.innerText = '表示する';
    }
});