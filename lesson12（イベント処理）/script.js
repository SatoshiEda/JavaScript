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

hover_area.addEventListener('mouseover', () => {
    alert('マウスオーバーされました！');
});