// 显示指定页面，隐藏其他页面
function showPage(page) {
    // 隐藏所有 div
    document.querySelectorAll('div').forEach(div => {
        div.style.display = 'none';
    });
    // 显示指定的 div
    document.querySelector(`#${page}`).style.display = 'block';
}

// 页面加载完成后绑定按钮点击事件
document.addEventListener('DOMContentLoaded', function () {
    // 选择所有按钮
    document.querySelectorAll('button').forEach(button => {
        // 按钮点击时切换页面
        button.onclick = function () {
            showPage(this.dataset.page);
        }
    });
    // 初始显示 page1
    showPage('page1');
});